---
title: Split Words, or Text to Columns
date: "2023-01-01"
tag: postgreSQL
category: codes
---

```
SELECT unnest(string_to_array(my_column, '[II]+|I')) as my_column
FROM my_table;
```


