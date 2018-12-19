<?php
require('db.php');

$watchlist = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($watchlist), True);

$title = $array['listname'];
$userid = $array['userID'];
$movies = $array['movies'];
$listdescription = $array['listdescription'];

$statementPerson = mysqli_query($connect, "INSERT INTO watchlists (`title`, `movies`, `userid`, `description`) 
	VALUES ('$title', '$movies', '$userid', '$listdescription')");