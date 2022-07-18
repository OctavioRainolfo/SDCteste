import Config from "../../../config";
import * as S from "../../../styles";
import * as LS from "../styles";
import React from "react";
import { Row, Col } from "reactstrap";
const { innerWidth: width, innerHeight: height } = window;

function Phone() {
    return (
        <>
            <LS.PhoneContainer>
                <Row>
                    <Col md={4} style={{ display: "flex" }}>
                        <LS.PhoneColumnLeft>
                            {Config.Phone.Column.Left.map((item) => {
                                return <ItemLeft item={item} />;
                            })}
                        </LS.PhoneColumnLeft>
                    </Col>
                    <Col md={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={Config.Phone.Image}  class="img-fluid" alt="Imagem Retenção" />
                    </Col>
                    <Col md={4} style={{ display: "flex" }}>
                        <LS.PhoneColumnRight>
                            {Config.Phone.Column.Right.map((item) => {
                                return <ItemRight item={item} />;
                            })}
                            <S.SubTitle style={{ fontSize: "1.2rem" }}>
                                {Config.Phone.EndColumnText}
                            </S.SubTitle>
                        </LS.PhoneColumnRight>
                    </Col>
                </Row>
            </LS.PhoneContainer>
        </>
    );
}

const ItemLeft = ({ item }) => {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <S.SubTitleRight>{item.Title}</S.SubTitleRight>
            <S.TextRight>{item.Text}</S.TextRight>
        </div>
    );
};
const ItemRight = ({ item }) => {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <S.SubTitleLeft>{item.Title}</S.SubTitleLeft>
            <S.TextLeft>{item.Text}</S.TextLeft>
        </div>
    );
};

export default Phone;