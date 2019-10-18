import React from "react";
import {Link} from "react-router-dom";
import {Button,Container} from "./Styling";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Container>
          <Link to="/Characters"><Button>Characters</Button></Link>
          <Link to="/Episodes"><Button>Episodes</Button></Link>
          <Link to="/Locations"><Button>Locations</Button></Link>
        </Container>
      </header>
    </section>
  );
}
