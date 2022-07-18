import React from "react";
import { Container, Row, Col } from "reactstrap";
import config from "../config";
import * as S from "../styles";

function Banner() {
    return (
        <Row>
            <Col>
            <S.MarginTop>
            <img src={config.Banner.Image} class="img-fluid" alt="Banner" />
            </S.MarginTop>
            </Col>
        </Row>
    )
}

export default Banner;