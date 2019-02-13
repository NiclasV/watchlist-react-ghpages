<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

//$userID = $_GET['userID'];
$watchlistId = "498";

$watchlists = mysqli_query($connect, "SELECT * FROM rows WHERE ListId= '$watchlistId'");

$myArray = array();

while($row = mysqli_fetch_assoc($watchlists)){
    
    //$row['rows'] = json_decode($row['rows'], true);
   $output[]=$row;
   array_push(array $myArray [$row['MovieId']] ) //försöker samla alla movieid i en array

}

$movies = mysqli_query($connect, "SELECT * FROM rows WHERE ListId= '$watchlistId'");

print(json_encode($myArray, JSON_PRETTY_PRINT));

mysqli_close($connect);

?>