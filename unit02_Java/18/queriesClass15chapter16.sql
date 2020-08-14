-- CREATE TABLE book (
--    book_id INT AUTO_INCREMENT PRIMARY KEY,
--    author_id INT,
--    title VARCHAR(255),
--    isbn INT,
--    available BOOL,
--    genre_id INT
-- ); 


-- DROP TABLE book;

-- CREATE TABLE author (
--    author_id INT AUTO_INCREMENT PRIMARY KEY,
--    first_name VARCHAR(255),
--    last_name VARCHAR(255),
--    birthday DATE,
--    deathday DATE
-- );

-- CREATE TABLE patron (
--    patron_id INT AUTO_INCREMENT PRIMARY KEY,
--    first_name VARCHAR(255),
--    last_name VARCHAR(255),
--    loan_id INT
-- );

-- CREATE TABLE reference_books (
--    reference_id INT AUTO_INCREMENT PRIMARY KEY,
--    edition INT,
--    book_id INT,
--    FOREIGN KEY (book_id)
--       REFERENCES book(book_id)
--       ON UPDATE SET NULL
--       ON DELETE SET NULL
-- );

-- INSERT INTO reference_books(edition, book_id) VALUE (5,32);

-- CREATE TABLE genre (genre_id INT PRIMARY KEY, genres VARCHAR(100));

-- CREATE TABLE loan (
--    loan_id INT AUTO_INCREMENT PRIMARY KEY,
--    patron_id INT,
--    date_out DATE,
--    date_in DATE,
--    book_id INT,
--    FOREIGN KEY (book_id)
--       REFERENCES book(book_id)
--       ON UPDATE SET NULL
--       ON DELETE SET NULL
-- );

-- SELECT title, isbn 
-- FROM book
-- INNER JOIN genre
-- ON book.genre_id = genre.genre_id
-- AND genre.genres = "Mystery";

-- SELECT title, isbn
-- FROM book, genre
-- WHERE book.genre_id = genre.genre_id
-- AND genre.genres = "Mystery";

-- INSERT INTO author (first_name, last_name, birthday) 
-- values ("Robert", "Stevenson", "1850-11-13");

-- SELECT title, author.first_name, author.last_name
-- FROM author
-- INNER JOIN book
-- ON book.author_id = author.author_id
-- WHERE author.deathday Is Null;

-- SELECT title, available FROM book WHERE book_id = 2;

-- UPDATE book SET available = false WHERE title = "Romeo and Juliet" LIMIT 1; 

-- INSERT INTO loan (patron_id, date_out, book_id) 
-- values (
-- (SELECT patron_id FROM patron WHERE first_name = "Susan" AND last_name = "Traviss"),
-- CURDATE(),
-- (SELECT book_id FROM book WHERE title = "Romeo and Juliet")
-- );

-- DELETE FROM loan WHERE loan_id = 2;

-- UPDATE patron SET loan_id = (SELECT loan_id FROM loan WHERE book_id = (SELECT book_id FROM book WHERE title = "Romeo and Juliet")) WHERE first_name = "Susan" AND last_name = "Traviss" LIMIT 1;

-- UPDATE patron SET loan_id = last_insert_id() WHERE first_name = "Susan" AND last_name = "Traviss" LIMIT 1;

-- UPDATE book SET available = true WHERE title = "Romeo and Juliet" LIMIT 1; 

-- UPDATE loan SET date_in = CURDATE() WHERE 
-- (SELECT book_id FROM book WHERE title = "Romeo and Juliet") LIMIT 1;

-- UPDATE patron SET loan_id = null WHERE first_name = "Susan" AND last_name = "Traviss" LIMIT 1;

-- UPDATE book SET available = false WHERE title = "Romeo and Juliet" LIMIT 1; 

-- INSERT INTO loan (patron_id, date_out, book_id) 
-- values (
-- (SELECT patron_id FROM patron WHERE first_name = "Susan" AND last_name = "Traviss"),
-- CURDATE(),
-- (SELECT book_id FROM book WHERE title = "Romeo and Juliet")
-- );

-- UPDATE patron SET loan_id = null WHERE first_name = "Jennifer" AND last_name = "Slayny" LIMIT 1;

-- UPDATE patron SET loan_id = (SELECT loan_id FROM loan WHERE book_id = (SELECT book_id FROM book WHERE title = "Romeo and Juliet") AND date_in Is Null) WHERE first_name = "Susan" AND last_name = "Traviss" LIMIT 1;

-- patreon, loan, genre, book

-- SELECT patron.first_name, patron.last_name, loan.date_in, genre.genres
-- FROM patron
-- INNER JOIN loan
-- ON patron.patron_id = loan.patron_id 
-- INNER JOIN book
-- ON loan.book_id = book.book_id
-- INNER JOIN genre
-- ON book.genre_id = genre.genre_id
-- WHERE loan.date_in Is Null;

SELECT patron.first_name, patron.last_name, loan.date_in, genre.genres
FROM patron
INNER JOIN loan
ON patron.loan_id = loan.loan_id 
INNER JOIN book
ON loan.book_id = book.book_id
INNER JOIN genre
ON book.genre_id = genre.genre_id;












