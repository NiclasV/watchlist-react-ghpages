<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$data = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($data), True);

$imdbid = $array['imdbid'];
$watchlistid = $array['watchlistid'];

$id = mysqli_query($connect, "SELECT id FROM movies WHERE imdbid = '$imdbid'");

while($row = mysqli_fetch_assoc($id)){

 $movieid = $row['id'];
    
    mysqli_query($connect, "DELETE FROM watchlist_movies WHERE movieId = '$movieid' AND watchlistId = '$watchlistid'");

}

mysqli_close($connect);