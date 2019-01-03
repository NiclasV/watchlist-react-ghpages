<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}


$watchlistid = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($watchlistid), True);

echo var_dump($array);
$id = $array['id'];

$DeleteBooking = mysqli_query($connect, "DELETE FROM watchlists WHERE id = '$id'");
mysqli_close($connect);
    
?>