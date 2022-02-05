import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilmCard = ({ movie }) => {
  return (
    <Card className="film-card">
      <Card.Img
        variant="top"
        src={movie.poster}
        alt="image"
        className="film-img"
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", color: "darkgreen" }}>
          {movie.title}
        </Card.Title>
        <Card.Title style={{ fontSize: 14, color: "gray" }}>
          Reżyser: {movie.short}
        </Card.Title>
        <Card.Text style={{ marginTop: 15 }}>{movie.description}</Card.Text>
        <Link to={`/movie/${movie.id}`}>
          <Button variant="success" style={{ marginTop: 20 }}>
            Zobacz szczegóły
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;

// movie

// title
// director
// description
// actors
// imageurl
