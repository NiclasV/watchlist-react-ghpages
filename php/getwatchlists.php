<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

//$userID = $_GET['userID'];
$userID = "10155936284020936";

$watchlists = mysqli_query($connect, "SELECT * FROM watchlists WHERE userid= '$userID'");

// $watchlists = mysqli_query($connect, "SELECT watchlists.title, watchlists.id, watchlists.description, movies.movietitle, movies.imdbid
// FROM watchlist_movies
// LEFT JOIN watchlists on watchlist_movies.watchlistId=watchlists.id
// INNER JOIN movies on watchlist_movies.movieId=movies.id");


while($row = mysqli_fetch_assoc($watchlists)){

    $watchlistid = $row['id'];

    $moviequery = mysqli_query($connect, "SELECT movies.movietitle, movies.imdbid, watchlists.id
    FROM watchlist_movies
    LEFT JOIN watchlists on watchlist_movies.watchlistId=watchlists.id
    INNER JOIN movies on watchlist_movies.movieId=movies.id
    WHERE watchlists.id = '$watchlistid';");

    $movies = array();
    
    while($collection = mysqli_fetch_assoc($moviequery)){    
        array_push($movies, $collection);
    } 

    $row['movies'] = array();

    foreach($movies as $mov ){
        array_push($row['movies'], $mov);
    }
    
    
    $output[]=$row;
    

}

//var_dump($output);
print(json_encode($output, JSON_PRETTY_PRINT));

mysqli_close($connect);

?>