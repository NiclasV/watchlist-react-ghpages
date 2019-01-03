<?php
require('db.php');

$movie = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($movie), True);

$imdbid = $array['imdbid'];
$title = $array['title'];
$newTitle = filter_var($title, FILTER_SANITIZE_STRING);
$year = $array['year'];
$rated = $array['rated'];
$released = $array['released'];
$runtime = $array['runtime'];
$genre = $array['genre'];
$director = $array['director'];
$newDirector = filter_var($director, FILTER_SANITIZE_STRING);
$writer = $array['writer'];
$newWriter= filter_var($writer, FILTER_SANITIZE_STRING);
$actors = $array['actors'];
$newActors = filter_var($actors, FILTER_SANITIZE_STRING);
$plot = $array['plot'];
$newPlot = filter_var($plot, FILTER_SANITIZE_STRING);
$language = $array['language'];
$country = $array['country'];
$awards = $array['awards'];
$poster = $array['poster'];
$ratings = $array['ratings'];
$metascore = $array['metascore'];
$imdbrating = $array['imdbrating'];
$imdbvotes = $array['imdbvotes'];
$type = $array['type'];
$boxoffice = $array['boxoffice'];
$newBoxoffice = filter_var($boxoffice, FILTER_SANITIZE_STRING);
$dvd = $array['dvd'];
$production = $array['production'];
$website = $array['website'];
$trailer = $array['trailer'];

$movieadd = mysqli_query($connect, "INSERT INTO movies (`imdbid`, `title`, `year`, `rated`, `released`, `runtime`, `genre`, `director`, `writer`, `actors`, `plot`, `language`, `country`, `awards`, `poster`, `ratings`, `metascore`, `imdbrating`, `imdbvotes`, `type`, `dvd`, `boxoffice`, `production`, `website`, `trailer`) 
	VALUES ('$imdbid', '$newTitle', '$year', '$rated', '$released', '$runtime', '$genre', '$newDirector', '$newWriter', '$newActors', '$newPlot', '$language', '$country', '$awards', '$poster', '$ratings', '$metascore', '$imdbrating', '$imdbvotes', '$type', '$dvd', '$newBoxoffice', '$production', '$website', '$trailer')");