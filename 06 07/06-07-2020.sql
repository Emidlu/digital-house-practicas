-- Desafio 1

-- 1) Gunn
SELECT last_name FROM actors;

-- 2) Parque
select title, awards FROM movies;

-- 3) 320
select * FROM movies WHERE title = 'Titanic';

-- 4) 4
SELECT * FROM series WHERE id IN (SELECT id FROM series WHERE series.title = 'Person of interest');

-- 5) 46
SELECT * FROM episodes WHERE number = 2;

-- Desafio 2
-- 1) Rey
SELECT * FROM movies where release_date > "1999-10-01 00:00:00" AND release_date < "2004-12-01 00:00:00";

-- 2) Hotel
SELECT * FROM movies where title LIKE '%a';

-- 3) 3
SELECT count(*) FROM actors WHERE actors.first_name = 'Jim';

-- 4) 13
SELECT SUM(movies.awards) FROM movies WHERE movies.title LIKE '%La Guerra De Las Galaxias%';

-- 5) de
SELECT * FROM actors INNER JOIN movies ON actors.favorite_movie_id = movies.id WHERE actors.last_name = 'Di Caprio';

-- Desafio 3
-- 1) Titanic
SELECT * FROM actors INNER JOIN movies ON actors.favorite_movie_id = movies.id WHERE actors.rating = 2.3 ORDER BY movies.id;

-- 2) Fantasia
SELECT * FROM series INNER JOIN genres ON genres.id = series.genre_id;

-- 3) Intensamente
SELECT * FROM movies inner join genres ON genres.id = movies.genre_id WHERE genres.name = 'Animacion';

-- 4) Jeff
SELECT * FROM actors INNER JOIN actor_movie ON actors.id = actor_movie.actor_id INNER JOIN movies ON actor_movie.movie_id = movies.id WHERE movies.title = 'Parque Jurasico';

-- 5) MI
SELECT * FROM movies INNER JOIN genres ON genres.id = movies.genre_id WHERE movies.rating between 1 AND 4;

-- Desafio 4
-- 1) Infantiles
SELECT genres.name, AVG(movies.length) FROM movies INNER JOIN genres ON genres.id = movies.genre_id group by genres.name;

-- 2) Emma
SELECT actors.first_name, COUNT(actor_movie.id) FROM actors INNER JOIN actor_movie ON actors.id = actor_movie.actor_id INNER JOIN movies ON actor_movie.movie_id = movies.id group by actors.id order by COUNT(actor_movie.id) DESC;

-- 3) 5
SELECT genres.name, COUNT(genres.name) FROM movies INNER JOIN genres ON genres.id = movies.genre_id group by genres.name ORDER BY COUNT(genres.name) DESC;

-- 4) 
