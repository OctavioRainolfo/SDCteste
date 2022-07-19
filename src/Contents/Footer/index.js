import React from "react";
import * as S from "../../styles";
import * as LS from "./styles";
import { Container, Row, Col } from "reactstrap";
import Config from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophyAlt } from "@fortawesome/pro-light-svg-icons";
const { innerWidth: width, innerHeight: height } = window;

function Footer() {
    return (
        <>
            <Row style={{ margin: "5rem" }}>
                <Col>
                    <S.Title>Contato</S.Title>
                   <LS.text> {Config.Footer.Rua}</LS.text>
                   <LS.text>{Config.Footer.Endereco}</LS.text>
                </Col>
                <Col>
                    <LS.text>{Config.Footer.EmailCon}</LS.text>
                    <LS.text>{Config.Footer.EmailSup}</LS.text>
                    <LS.text>{Config.Footer.phone}</LS.text>
                </Col>
            </Row>
        </>

    );
};
export default Footer;