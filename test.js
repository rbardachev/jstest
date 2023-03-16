let numberOfFilms = +prompt("How many movies have you watched already?", '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
let lastMovie = prompt("One of your last movies?", '');
let movieScore = +prompt("Rate this movie", '');

personalMovieDB.movies.name = lastMovie;
personalMovieDB.movies.score = movieScore;

console.log(`${personalMovieDB.movies.name}, ${personalMovieDB.movies.score}`)