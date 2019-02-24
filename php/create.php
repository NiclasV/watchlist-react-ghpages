<?php
require('db.php');

$watchlist = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($watchlist), True);

$title = $array['listname'];
$userid = $array['userID'];
$listdescription = $array['listdescription'];

$listcreate = mysqli_query($connect, "INSERT INTO watchlists (`title`, `userid`, `description`) 
	VALUES ('$title', '$userid', '$listdescription')");