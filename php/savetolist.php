<?php
require('db.php');

$movies = json_decode(file_get_contents('php://input'));
$array = json_encode($movies, True);

$listID = $_GET['listID'];


$moviesadd = mysqli_query($connect, "UPDATE watchlists SET movies='$array' WHERE id = '$listID'");