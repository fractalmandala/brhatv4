import { resolve } from 'path';
import glob from 'glob';
import { mdsvex } from 'mdsvex';

export async function get({ query }) {
  const searchQuery = query.get('query');

  const docsPaths = glob.sync('src/routes/docs/**/*.md');
  const rtaPaths = glob.sync('src/routes/rta/**/*.md');
  const mandalaPaths = glob.sync('src/routes/mandala/**/*.md');
  const allPaths = [...docsPaths, ...rtaPaths, ...mandalaPaths];

  const results = await Promise.all(
    allPaths.map(async (filePath) => {
      const { default: Component, metadata } = await mdsvex({})(filePath);
      const { load } = await import(`../../${filePath}`);
      const content = await load();

      const url = `/docs${filePath.replace('src/routes/docs', '').replace('.md', '')}`;
      const title = metadata.title;

      return { url, title, content };
    })
  );

  const filteredResults = results.filter((result) => {
    const regex = new RegExp(searchQuery, 'i');
    return regex.test(result.title) || regex.test(result.content);
  });

  return {
    body: JSON.stringify(filteredResults),
    headers: {
      'content-type': 'application/json'
    }
  };
}
