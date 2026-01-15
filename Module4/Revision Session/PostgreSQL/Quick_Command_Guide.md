
### **PostgreSQL CRUD Operations – Complete SQL Reference**

> These operations are performed **directly on tables using SQL**.
> One SQL statement can affect **one row or multiple rows**, depending on the condition used.

---

## **CREATE – Insert Data**

### 1. Insert a Single Row

```sql
INSERT INTO students (name, email, age)
VALUES ('Rahul', 'rahul@gmail.com', 22);
```

---

### 2. Insert Multiple Rows (Multi Insert)

```sql
INSERT INTO students (name, email, age)
VALUES
  ('Anita', 'anita@gmail.com', 21),
  ('Kiran', 'kiran@gmail.com', 23),
  ('Meena', 'meena@gmail.com', 20);
```

✔ Inserts many records in **one query**

---

### 3. Insert with Auto-Generated Primary Key

```sql
INSERT INTO students (name, email)
VALUES ('Suresh', 'suresh@gmail.com');
```

(`id` is generated automatically if defined as `SERIAL PRIMARY KEY`)

---

### 4. Insert Data Using Another Table

```sql
INSERT INTO alumni (name, email)
SELECT name, email FROM students WHERE age > 22;
```

---

## **READ – Retrieve Data**

### 5. Fetch All Rows

```sql
SELECT * FROM students;
```

---

### 6. Fetch Specific Columns

```sql
SELECT name, email FROM students;
```

---

### 7. Fetch with Condition

```sql
SELECT * FROM students WHERE age > 20;
```

---

### 8. Fetch a Single Record

```sql
SELECT * FROM students WHERE id = 1;
```

---

### 9. Fetch with Multiple Conditions

```sql
SELECT * FROM students
WHERE age > 20 AND name = 'Rahul';
```

---

### 10. Sort Results

```sql
SELECT * FROM students ORDER BY age DESC;
```

---

### 11. Limit Number of Rows

```sql
SELECT * FROM students LIMIT 5;
```

---

### 12. Pagination (Limit + Offset)

```sql
SELECT * FROM students LIMIT 5 OFFSET 5;
```

---

## **UPDATE – Edit Data**

### 13. Update a Single Row

```sql
UPDATE students
SET age = 23
WHERE id = 1;
```

---

### 14. Update Multiple Rows

```sql
UPDATE students
SET age = age + 1
WHERE age >= 21;
```

---

### 15. Update Multiple Columns

```sql
UPDATE students
SET name = 'Ravi',
    email = 'ravi@gmail.com'
WHERE id = 2;
```

---

### 16. Update All Rows (⚠️ Use Carefully)

```sql
UPDATE students SET age = 18;
```

❗ Without `WHERE`, **every row is updated**

---

## **DELETE – Remove Data**

### 17. Delete a Single Row

```sql
DELETE FROM students WHERE id = 1;
```

---

### 18. Delete Multiple Rows

```sql
DELETE FROM students WHERE age < 18;
```

---

### 19. Delete All Rows (Table Remains)

```sql
DELETE FROM students;
```

---

### 20. Truncate Table (Fast Delete)

```sql
TRUNCATE TABLE students;
```

✔ Faster than DELETE
❌ Usually cannot be rolled back

---

## **UPSERT – Insert or Update**

### 21. Insert If Not Exists, Else Update

```sql
INSERT INTO students (email, name, age)
VALUES ('rahul@gmail.com', 'Rahul', 22)
ON CONFLICT (email)
DO UPDATE SET age = EXCLUDED.age;
```

---

## **TRANSACTIONS – Safe Execution**

### 22. Using Transactions

```sql
BEGIN;

UPDATE students SET age = 25 WHERE id = 3;

ROLLBACK;  -- undo changes
-- OR
COMMIT;    -- save changes
```

---

## **Important Safety Rules (Must Remember)**

### ✔ Always Preview Before Update/Delete

```sql
SELECT * FROM students WHERE age < 18;
```

### ✔ `WHERE` decides **which rows are affected**

### ✔ No `WHERE` = affects **all rows**

### ✔ SQL works on **sets of rows**, not one by one

---

## **Final Student Takeaway**

* `INSERT` → add data
* `SELECT` → read data
* `UPDATE` → modify data
* `DELETE` → remove data
* `WHERE` controls scope
* One query can affect **one or many rows**
* Supabase SQL Editor is enough to practice all CRUD

