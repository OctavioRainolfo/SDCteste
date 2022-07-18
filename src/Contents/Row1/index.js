import React from "react";
import * as S from "../../styles";
import * as LS from "./styles";
import { Container, Row, Col } from "reactstrap";
import Config from "../../config";

function Row1() {
    return (
        <Row>
            <Col>
                <LS.Container>
                    <LS.Background>
                        <S.Title>{Config.Row1.Title}</S.Title>
                        <S.Text style={{ marginTop: "2rem" }}>{ Config.Row1.Text}</S.Text>
                    </LS.Background>
                </LS.Container>
            </Col>
        </Row>
    );
}
export default Row1;

