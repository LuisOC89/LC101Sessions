
-- read data
SELECT last_name, first_name
FROM li_wedding
WHERE (attending = 1) AND (diet = "vegetarian");

-- or
SELECT *
FROM li_wedding;