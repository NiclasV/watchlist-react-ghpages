<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$watchlistid = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($watchlistid), True);

$id = $array['id'];

$deleterelations = mysqli_query($connect, "DELETE FROM watchlist_movies WHERE watchlistId = '$id'");

$delete = mysqli_query($connect, "DELETE FROM watchlists WHERE id = '$id'");
mysqli_close($connect);
    
?>