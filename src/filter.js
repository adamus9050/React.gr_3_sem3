export const movieFilter = (movies, word) => {
    let filteredMovies = [];

    movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(word.toLowerCase()) ||
        movie.director.toLowerCase().includes(word.toLowerCase()) || checkaActors(movie.actors, word)) {
            filteredMovies.push(movie);
        }
    });

    return filteredMovies;
}

const checkaActors = (actors, word) => {
    let result = false;
    actors.forEach(actor => {
        if (actor.toLowerCase().includes(word.toLowerCase())) {
            result = true;
        }
    });

    return result;
}