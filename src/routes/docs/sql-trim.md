---
title: SQL - trim columns
tag: postGRESQL
category: codes
date: "2023-01-01"
---


```sql
UPDATE "brhat-openlibrary" SET slug = REPLACE(LOWER(TRIM("Text")), ' ', '');
```

