<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$userID = $_GET['userID'];


$watchlists = mysqli_query($connect, "SELECT * FROM watchlists WHERE userid= '$userID'");

while($row = mysqli_fetch_assoc($watchlists)){
    $output[]=$row;
}

print(json_encode($output, JSON_PRETTY_PRINT));



mysqli_close($connect);
?>