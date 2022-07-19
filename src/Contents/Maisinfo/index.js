import React from "react";
import * as S from "../../styles";
import * as LS from "./styles";
import { Container, Row, Col } from "reactstrap";
import Config from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophyAlt } from "@fortawesome/pro-light-svg-icons";
const { innerWidth: width, innerHeight: height } = window;

function Maisinfo() {
    return (
        <Container fluid={true} style={{ backgroundColor: "#BD3A73", marginTop: "10rem" }}>
           
        <Row>
            <Col>
            <LS.Container >
                   <LS.Title> {Config.MaisInformacoes.title} </LS.Title>
                
                    <a href="https://api.whatsapp.com/send?phone=551321910948&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20contato%20de%20um%20consultor" target="blank">   
                    <LS.Btn>
                            {Config.MaisInformacoes.btnLabel}
                            {Config.MaisInformacoes.icon && (<FontAwesomeIcon icon={Config.MaisInformacoes.icon} style={{marginLeft: "0.5rem"}}/>)}
                    </LS.Btn>
                    </a>
            </LS.Container>
            </Col>
                </Row>
                
        </Container>
    );
}

export default Maisinfo;