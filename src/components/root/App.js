import React from "react";
import { Container } from "reactstrap"
import DashBoard from "./DashBoard"
import Nav from "./../naviBar/NavBar"

function App() {
  return (
    <Container>
      <Nav />
      <DashBoard />
    </Container>
  );
}

export default App;
