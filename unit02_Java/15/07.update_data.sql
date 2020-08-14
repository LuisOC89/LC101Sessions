
-- update data
SELECT last_name, first_name
UPDATE johnson_vow_renewal
SET diet="vegetarian"
WHERE guest_id=185;

-- or
UPDATE johnson_vow_renewal
SET diet="vegetarian", first_name="Elizabeth"
WHERE guest_id=185;