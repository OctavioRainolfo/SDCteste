import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Row, Col } from "reactstrap";
import App from './App';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Banner";
import Row1 from "./Contents/Row1";
import Row2 from "./Contents/Row2";
import Row3 from "./Contents/Row3";
import Row4 from "./Contents/Row4";
import Cases from "./Contents/Cases";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Website() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        {/*  É sobre treinar bem */}
        <Row1 />
        {/*Curva de esquecimento */}
        <Row2 />
        {/*A sei de cor te ajuda! */}
        <Row3 />
        {/*Domando a curva */}
        <Row4 />
        {/*Conheça alguns de nossos clientes*/}
        <Cases/> 
      </Container>
    </>
  )
}
export default Website;