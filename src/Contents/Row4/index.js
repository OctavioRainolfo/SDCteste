import Config from "../../config";
import React from "react";
import * as S from "../../styles";
import { Container, Row, Col } from "reactstrap";
const { innerWidth: width, innerHeight: height } = window;


function Row4() {
    return (
        <>
            <Row style={{marginTop: '5rem'}}>
            <Col md={1}></Col>
                
            <Col md={6}>
                <img src={Config.Row4.Image} class="img-fluid" alt="Gráfico Microlearning"/>
                </Col>
                
                <Col
          md={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            flexDirection: "column",
            marginTop: width < 600 ? '1.5rem' : 0
          }}
        >
                    <S.SubTitleLeft>
                        {Config.Row4.Title}
                    </S.SubTitleLeft>
                    <S.TextLeft>
                        {Config.Row4.Text}
                        </S.TextLeft>
                </Col>
            </Row>
        </>
    );
};
export default Row4;