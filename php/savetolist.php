<?php
require('db.php');

$data = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($data), True);

$watchlistid = $array['watchlistid'];
$imdbid = $array['imdbid'];

$movieid = mysqli_query($connect, "SELECT id FROM movies WHERE imdbid = '$imdbid'");

while($row = mysqli_fetch_assoc($movieid)){
    var_dump($row);

    $id = $row['id'];

    mysqli_query($connect, "INSERT INTO watchlist_movies (movieId, watchlistId)
    VALUES ('$id', '$watchlistid');");

}

mysqli_close($connect);