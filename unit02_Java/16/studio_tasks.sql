
-- SELECT title FROM movies;
-- SELECT title FROM movies_uuid;

-- SELECT title, year_released FROM movies ORDER BY year_released DESC;

-- SELECT * FROM directors ORDER BY country ASC;

-- SELECT * FROM directors ORDER BY country, last_name;

-- INSERT INTO directors(first_name, last_name, country) values ("Rob", "Reiner", "USA");

-- INSERT INTO directors_uuid(director_id, first_name, last_name, country) values ("7a0be2cd-77b8-4b72-b0b1-f143c8e27882", "Rob", "Reiner", "USA");

-- SELECT last_name, director_id from directors WHERE first_name = "Rob";

-- INSERT INTO movies (title, year_released, director_id) values ("The Princess Bride", "1987", "11");

-- SELECT movies.title, movies.year_released, directors.last_name 
-- FROM movies INNER JOIN directors
-- ON movies.director_id = directors.director_id;

-- SELECT movies.title, movies.year_released, directors.last_name 
-- FROM movies, directors
-- WHERE movies.director_id = directors.director_id;

-- SELECT movies.title, directors.first_name, directors.last_name
-- FROM movies, directors
-- WHERE movies.director_id = directors.director_id
-- ORDER BY directors.last_name;

-- SELECT title, first_name, last_name
-- FROM movies, directors
-- WHERE title = "The Incredibles"
-- AND directors.director_id = 2;

-- SELECT title, first_name, last_name
-- FROM movies, directors
-- WHERE title = "The Incredibles"
-- AND directors.director_id = movies.director_id;

-- SELECT directors.last_name, directors.country 
-- FROM directors 
-- INNER JOIN movies
-- ON directors.director_id = movies.director_id
-- AND movies.title = "Roma";

-- DELETE FROM movies WHERE title = "Roma" LIMIT 1;

DELETE FROM directors WHERE first_name = "Rob" LIMIT 1;
