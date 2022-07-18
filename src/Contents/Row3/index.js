import Config from "../../config";
import React from "react";
import * as S from "../../styles";
import * as LS from "./styles";
import Phone from "./Phone"
import { Container, Row, Col } from "reactstrap";
const { innerWidth: width, innerHeight: height } = window;

function Row3() {
    return (
        <>
            <Row>
                <S.DefaultMargin>
                    <Col md={12}>
                        <S.Title>{Config.Row3.Title}</S.Title>
                        <S.Text>{Config.Row3.Text}</S.Text>
                    </Col>
                </S.DefaultMargin>
            </Row>
            <Col md={12}>
                <Phone />
            </Col>
        </>
    );
}
export default Row3;