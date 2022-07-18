import Config from "../../config";
import React from "react";
import * as S from "../../styles";
import * as LS from "./styles";
import { Container, Row, Col } from "reactstrap";
const { innerWidth: width, innerHeight: height } = window;


function Row2() {
    return (
        <><Row>
             <Col md={1} />
            <Col
                md={4}
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    flexDirection: "column",
                }}
            >

                <S.SubTitleRight>{Config.Row2.Title}</S.SubTitleRight>
                <S.TextRight>{Config.Row2.Text}</S.TextRight>

            </Col>
            <Col md={6} style={{ marginLeft: width > 600 ? -150 : 0 }}>
                <img src={Config.Row2.Image} class="img-fluid" alt="Retencaoimg" />
            </Col>
            <Col md={1} />

        </Row>
        </>
    );
}
export default Row2;