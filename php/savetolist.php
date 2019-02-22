<?php
require('db.php');

$movies = json_decode(file_get_contents('php://input'));
$array = json_encode($movies, True);

$watchlistid = $_GET['listID'];
$imdbid = $_GET['imdbID'];

//$watchlistid = "497";
//$imdbid = "tt0234215";

//echo $imdbid;

echo $watchlistid;

$movieid = mysqli_query($connect, "SELECT id FROM movies WHERE imdbid = '$imdbid'");


while($row = mysqli_fetch_assoc($movieid)){

 $movieid = $row['id'];
    echo $movieid;
    mysqli_query($connect, "INSERT INTO watchlist_movies (movieId, watchlistId)
    VALUES ('$movieid', '$watchlistid' )");

}