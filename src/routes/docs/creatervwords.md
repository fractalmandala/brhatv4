---
title: create words of rv table
tag: postgresql
category: codes
date: "2023-01-01"
---

```sql
create view "view-rvwords" as
SELECT regexp_split_to_table(replace(replace(replace(replace(padapatha, '|',''), '||',''), '.',''), '[0-9]',''), ' ') as rvword, primvalue, mandala, suktacorrected, rca from "db-rigveda" order by primvalue asc;
```
