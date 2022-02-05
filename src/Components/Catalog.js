import React from "react";
import FilmCard from "./FilmCard";

const Catalog = ({ movies }) => {
  return (
    <div className="catalog mt-3">
      <h4 className="text-success">Polecane filmy</h4>
      <div className="catalog-container">
        {movies.map((m, index) => (
          <FilmCard key={index} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
