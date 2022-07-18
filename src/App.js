import React, { Component, Suspense } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { BottomRight, Logo, TextRight, Title } from './styles.js'
import { faSignIn } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./Header/index.js";
const Website = React.lazy(() => import("./index.js"));

document.title = "Sei de Cor"


function App() {
  return (
    
    <div>
      <Website></Website>
    </div>

  );
}

export default App;
