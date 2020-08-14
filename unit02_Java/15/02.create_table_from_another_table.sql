
-- create table from another table
CREATE TABLE johnson_vow_renewal
AS SELECT guest_id, last_name, first_name, attending, diet
   FROM johnson_wedding
   WHERE attending = 1;