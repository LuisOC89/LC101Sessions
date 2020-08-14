
-- INNER JOIN
-- ==========
SELECT last_name, first_name
FROM johnson_vow_renewal
INNER JOIN johnson_wedding ON johnson_vow_renewal.guest_id = johnson_wedding.guest_id;

-- This query will give us a result set of the first and last names of the guests from the johnson_vow_renewal table that are also in the johnson_wedding table.


-- LEFT OUTER JOIN
-- ===============
SELECT last_name, first_name
FROM johnson_wedding
LEFT JOIN johnson_vow_renewal ON johnson_wedding.guest_id = johnson_vow_renewal.guest_id;

-- If we use a left outer join to combine johnson_wedding and johnson_vow_renewal in a query, the result set includes all of the guests invited to the wedding and any guests who were also invited to the vow renewal.


-- RIGHT OUTER JOIN
-- ================
SELECT last_name, first_name
FROM johnson_wedding
RIGHT JOIN johnson_vow_renewal ON johnson_wedding.guest_id = johnson_vow_renewal.guest_id;

-- If we use a right inner join to combine johnson_wedding and johnson_vow_renewal in a query, the result set includes all of the guests that were invited to the vow renewal and any guests who were also invited to the wedding.


-- FULL OUTER JOIN
-- ===============
SELECT *
FROM mary_events
FULL OUTER JOIN leah_events ON mary_events.month = leah_events.month
WHERE mary_events.month = 08;

-- Now that another event planner has joined Mary’s company, to get all of the events run by the company in August, we can use a full outer join to combine mary_events and leah_events.


-- UNION
-- =====
-- If you do want to try out a full outer join, the syntax to simulate it looks some like this:

SELECT * FROM table_a LEFT JOIN table_b ON table_a.column_name_1 = table_b.column_name_1
UNION
SELECT * FROM table_a RIGHT JOIN table_b ON table_a.column_name_1 = table_b.column_name_2;

-- UNION is used to bring together the result sets of 2 SELECT queries. 

