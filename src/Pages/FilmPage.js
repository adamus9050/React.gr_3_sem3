import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { movieAddress } from "../api";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";

const FilmPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const url = `${movieAddress}${movieId}`;
    axios
      .get(url)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  console.log(movie);

  return (
    <Container>
      <Header title="Super extra katalog filmowy" />
      {movie ? (
        <div className="mt-3" style={{ paddingBottom: 50 }}>
          <h2 style={{ color: "blue" }}>{movie.title}</h2>
          <h6 style={{ color: "green", marginTop: -5 }}>{movie.original}</h6>
          <h5>Reżyseria: {movie.director}</h5>
          <h5>Scanariusz: {movie.screenplay}</h5>
          <h5>Gatunek {movie.origin}</h5>
          <h5>Kraj {movie.production}</h5>
          <h5>Rok: {movie.year}</h5>
          <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
            Zobacz zwiastun na YouTube
          </a>
          <br />
          <Link to="/">Powrót do katalogu</Link>
          <hr />
          <h4>Obsada</h4>
          <ul>
            {movie.actors.map((actor, index) => (
              <li key={index}>{actor.name}</li>
            ))}
          </ul>
          <hr />
          <h4>Streszczenie filmu</h4>
          <p style={{ textAlign: "justify" }}>{movie.description}</p>
          <hr />
          <h4>Zdjęcia z filmu</h4>
          {movie.images.map((poster, index) => (
            <img
              className="movie-poster"
              src={poster}
              alt="MoviePoster"
              key={index}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default FilmPage;

// actors: Array(9)
// 0: {name: 'Michael Douglas'}
// 1: {name: 'Sharon Stone'}
// 2: {name: 'George Dzundza'}
// 3: {name: 'Jeanne Tripplehorn'}
// 4: {name: 'Denis Arndt'}
// 5: {name: 'Leilani Sarelle'}
// 6: {name: 'Bruce A. Young'}
// 7: {name: 'Chelcie Ross'}
// 8: {name: 'Dorothy Malone'}
// length: 9
// [[Prototype]]: Array(0)
// description: "Właściciel klubu nocnego w San Francisco zostaje brutalnie zamordowany. Śledztwo prowadzi detektyw Curran, oskarżany przez wydział wewnętrzny o skłonność do alkoholu. Główną podejrzaną jest piękna pisarka Catherine Tramell, która do perfekcji opanowała sztukę manipulacji ludzkimi emocjami. Zafascynowany jej urodą Curran daje się wciągnąć w zmysłową grę. W trakcie śledztwa zaczyna tracić zawodową czujność, co może okazać się śmiertelnie niebezpieczne."
// director: "Paul Verhoeven"
// hasOriginalTitle: true
// id: 45
// images: Array(4)
// 0: "https://dorotkaphotos.blob.core.windows.net/moviephotos/045_01.jpg"
// 1: "https://dorotkaphotos.blob.core.windows.net/moviephotos/045_02.jpg"
// 2: "https://dorotkaphotos.blob.core.windows.net/moviephotos/045_03.jpg"
// 3: "https://dorotkaphotos.blob.core.windows.net/moviephotos/045_04.jpg"
// length: 4
// [[Prototype]]: Array(0)
// origin: "thriller"
// original: "Basic Instinct"
// poster: "https://dorotkaphotos.blob.core.windows.net/moviephotos/045.jpg"
// preferredMovies: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// production: "Francja / USA"
// screenplay: "Joe Eszterhas"
// title: "Nagi instynkt"
// trailer: "https://www.youtube.com/watch?v=EhRhuJOJkGg"
// year: 1992
