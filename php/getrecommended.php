<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$recommended = mysqli_query($connect, "SELECT * FROM movies WHERE recommended= '1'
order by year asc");

while($row = mysqli_fetch_assoc($recommended)){

    $output[]=$row;

}

print(json_encode($output, JSON_PRETTY_PRINT));

mysqli_close($connect);

?>