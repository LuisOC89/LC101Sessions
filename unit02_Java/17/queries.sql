-- CREATE TABLE writing_supply (
--    supply_id INTEGER PRIMARY KEY AUTO_INCREMENT,
--    utensil_type ENUM ("Pencil", "Pen"),
--    num_drawers INTEGER
-- );

-- CREATE TABLE pencil_drawer (
--    drawer_id INTEGER PRIMARY KEY AUTO_INCREMENT,
--    pencil_type ENUM ("Wood", "Mechanical"),
--    quantity INTEGER,
--    refill BOOLEAN,
--    supply_id INTEGER,
--    FOREIGN KEY (supply_id) REFERENCES writing_supply(supply_id)
-- );

-- CREATE TABLE pen_drawer (
--    drawer_id INTEGER PRIMARY KEY AUTO_INCREMENT,
--    color ENUM ("Black", "Blue", "Red", "Green", "Purple"),
--    quantity INTEGER,
--    refill BOOLEAN,
--    supply_id INTEGER,
--    FOREIGN KEY (supply_id) REFERENCES writing_supply(supply_id)
-- );

-- SELECT * FROM writing_supply;

-- SELECT * FROM pencil_drawer;

-- SELECT * FROM pen_drawer;

-- Inner Join
-- 1.
-- SELECT *
-- FROM writing_supply
-- INNER JOIN pencil_drawer ON writing_supply.supply_id = pencil_drawer.supply_id; 
-- 2. 
-- SELECT writing_supply.supply_id, pencil_type, drawer_id, quantity
-- FROM writing_supply
-- INNER JOIN pencil_drawer ON writing_supply.supply_id = pencil_drawer.supply_id
-- WHERE refill = true AND pencil_type = "Mechanical";

-- Left/Right Join
-- We can use a LEFT or RIGHT join to retain all of the records from one table and pull in overlapping data from another.
-- 1.
-- SELECT writing_supply.supply_id, utensil_type, drawer_id, color
-- FROM writing_supply
-- LEFT JOIN pen_drawer ON writing_supply.supply_id = pen_drawer.supply_id;
-- The result set contains null values for any rows that involve pencils. 
-- The left join retains all of the data in writing_supply, but it can only 
-- combine that information with data from pen_drawer if the rows share supply_id values.

-- 2.
-- SELECT writing_supply.supply_id, utensil_type, drawer_id, color, quantity
-- FROM writing_supply
-- LEFT JOIN pen_drawer ON writing_supply.supply_id = pen_drawer.supply_id
-- WHERE refill = true;

-- Multiple Joins
-- The UNION keyword allows us to combine the results of separate SELECT commands. 
-- Run each of the following queries individually and examine the two result sets. 
-- Next, run the queries with UNION.
-- SELECT writing_supply.supply_id, utensil_type, drawer_id, quantity FROM writing_supply
-- LEFT JOIN pencil_drawer ON writing_supply.supply_id = pencil_drawer.supply_id
-- WHERE refill = true

-- UNION

-- SELECT writing_supply.supply_id, utensil_type, drawer_id, quantity FROM writing_supply
-- RIGHT JOIN pen_drawer ON writing_supply.supply_id = pen_drawer.supply_id
-- WHERE refill = true
-- ORDER BY supply_id;
-- Lines 1 - 3 merge data from pencil_drawer into writing_supply, so long as 
-- the rows have matching supply_id values and have refill set as true. 
-- Lines 7 - 10 merge data from writing_supply into pen_drawer with the same 
-- conditions. The UNION command combines the two result sets.


-- Subqueries

-- Consider the following situations:
-- 1. Retrieve the supply_id values for any writing_supply containers that hold pens.
-- 2. Using the supply_id values, retrieve the ID and color values for any drawers in 
-- the last container that hold 60 or more pens.

-- SELECT supply_id FROM writing_supply
-- WHERE utensil_type = "Pen";
-- /* First result set contains the supply_id values 1, 2, and 5. */
-- SELECT drawer_id, color FROM pen_drawer
-- WHERE quantity >= 60 AND supply_id = 5;
-- By using a subquery, we can combine the two SQL commands to accomplish the same result. 
-- Let’s begin by embedding one simple SQL command inside the WHERE clause of a second.

-- SELECT drawer_id, color FROM pen_drawer
-- WHERE supply_id IN (SELECT supply_id FROM writing_supply WHERE utensil_type = "Pen");


-- SELECT drawer_id, color FROM pen_drawer
-- WHERE supply_id IN (SELECT supply_id FROM writing_supply WHERE utensil_type = "Pen")
-- AND quantity >= 60;
-- Now the result set shows only the information for pen drawers with 60 or more items. 

-- The last pen container in writing_supply will have the largest value for supply_id. 
-- Fortunately, SQL has a defined function, MAX(column_name), that returns the largest value in the specified column.
-- SELECT drawer_id, color FROM pen_drawer
-- WHERE supply_id = (SELECT MAX(supply_id) FROM writing_supply WHERE utensil_type = "Pen")
-- AND quantity >= 60;





