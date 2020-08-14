-- SHOW FIELDS FROM directors_uuid;
-- CREATE TABLE movies_uuid (
--    movie_id BINARY(16) DEFAULT (uuid_to_bin(uuid())) not null PRIMARY KEY,
--    title VARCHAR(120),
--    year_released INTEGER,
--    director_id BINARY(16),
--    FOREIGN KEY (director_id) REFERENCES directors_uuid(director_id)
-- );

-- CREATE TABLE movies_uuid (
--    movie_id BINARY(16) DEFAULT (uuid_to_bin(uuid())) not null PRIMARY KEY,
--    title VARCHAR(120),
--    year_released INTEGER,
--    director_id BINARY(16),
--    FOREIGN KEY (director_id) REFERENCES directors_uuid(director_id)
-- );

-- CREATE TABLE directors_uuid (
--    director_id VARCHAR(36) PRIMARY KEY,
--    first_name VARCHAR(40),
--    last_name VARCHAR(40),
--    country VARCHAR(80)
-- );

-- DROP TABLE directors_uuid; 

CREATE TABLE movies_uuid (
   movie_id VARCHAR(36) PRIMARY KEY PRIMARY KEY,
   title VARCHAR(120),
   year_released INTEGER,
   director_id VARCHAR(36),
   FOREIGN KEY (director_id) REFERENCES directors_uuid(director_id)
);

