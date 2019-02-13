<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

//$userID = $_GET['userID'];
$userID = "10155936284020936";

$watchlists = mysqli_query($connect, "SELECT * FROM watchlists WHERE userid= '$userID'");

while($row = mysqli_fetch_assoc($watchlists)){
    
    $row['movies'] = json_decode($row['movies'], true);
    $output[]=$row;

}

print(json_encode($output, JSON_PRETTY_PRINT));

mysqli_close($connect);

?>