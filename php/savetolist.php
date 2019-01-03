<?php
require('db.php');

$movies = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($movies), True);

$listID = $_GET['listID'];
$test = "testaaaar";

$moviesadd = mysqli_query($connect, "UPDATE watchlists SET movies='$array' WHERE id = '$listID'");