import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Bar = ({ getUserWord }) => {
  const [word, setWord] = useState("");

  const userTypedText = (event) => {
    setWord(event.target.value);
  };

  const userClickedButton = () => {
    getUserWord(word);
  };

  return (
    <div className="bar mt-3">
      <InputGroup className="mb-3">
        <FormControl
          style={{ color: "blue" }}
          placeholder="Proszę wpisać tytuł filmu lub nazwisko reżysera bądż aktorów"
          value={word}
          onChange={userTypedText}
        />

        <Button
          variant="outline-success"
          id="button-addon2"
          onClick={userClickedButton}
        >
          Szukaj
        </Button>
      </InputGroup>
    </div>
  );
};

export default Bar;
