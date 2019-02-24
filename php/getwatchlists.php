<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$userID = $_GET['userID'];

$watchlists = mysqli_query($connect, "SELECT * FROM watchlists WHERE userid= '$userID'");

while($row = mysqli_fetch_assoc($watchlists)){

    $watchlistid = $row['id'];

    $moviequery = mysqli_query($connect, "SELECT watchlists.id, movies.movietitle, movies.imdbid, movies.poster, movies.year, movies.rated, movies.released, movies.runtime, movies.genre,
    movies.director, movies.writer, movies.actors, movies.plot, movies.language, movies.country, movies.metascore, movies.imdbrating, movies.imdbvotes, movies.type
    FROM watchlist_movies
    LEFT JOIN watchlists on watchlist_movies.watchlistId=watchlists.id
    INNER JOIN movies on watchlist_movies.movieId=movies.id
    WHERE watchlists.id = '$watchlistid';");

    $movies = array();
    
    while($collection = mysqli_fetch_assoc($moviequery)){    
        array_push($movies, $collection);
    } 

    $row['movies'] = array();
    
    foreach($movies as $movie){
        array_push($row['movies'], $movie);
    }
    $output[]=$row;

}

print(json_encode($output, JSON_PRETTY_PRINT));

mysqli_close($connect);

?>