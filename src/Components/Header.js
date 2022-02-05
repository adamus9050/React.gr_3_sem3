import React from "react";

const Header = ({ title }) => {
  return (
    <div className="header text-center">
      <h1>{title}</h1>
      <p>Aplikacja grupy 3 z przedmiotu Wykorzystanie wzorców</p>
    </div>
  );
};

export default Header;
