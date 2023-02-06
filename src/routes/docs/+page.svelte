<script>
// @ts-nocheck

export const allDocumentation = async () => {
  const allDocuments = import.meta.glob('/src/routes/docs/*.md')
  const iterableDocFiles = Object.entries(allDocuments)
  
  const allDocs = await Promise.all(
    iterableDocFiles.map(async ([path, resolver]) => {
      // @ts-ignore
      const { metadata } = await resolver()
      const docPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: docPath,
      }
    })
  )
  return allDocs
}
</script>

<p>
<b><span class="green">General Programs:</span></b><br><br>

Our website is built completely in Sveltekit, which is a framework for building web applications. Sveltekit allows us to easily create reusable components and manage the state of our application. Once the website is built, it is deployed on Vercel, which is a platform for hosting web applications.<br><br>

The code for our website is written in HTML and CSS, which are the standard languages for creating the structure and layout of a website. Additionally, we use TypeScript for all of our JavaScript code. TypeScript is a superset of JavaScript that adds optional type annotations, making it easier to catch errors before they happen.<br><br>

We use two plugins on our website: Swiper and AOS. Swiper is a library for creating responsive and touch-friendly sliders and carousels, and AOS is a library for adding animations to elements as they scroll into view.<br><br>

Most of the data for our website is stored in Supabase, which is a real-time database service. We fetch the data from Supabase and render it on the pages of our website, allowing us to display dynamic content to our users.<br><br>

Thank you for reading our documentation. We hope it helps you understand our website better.
</p>



<style>
p { text-transform: capitalize; color: white; line-height: 1.6em;}
</style>


