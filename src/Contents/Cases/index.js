import React from "react";
import * as S from "../../styles";
import * as LS from "./styles";
import { Container, Row, Col } from "reactstrap";
import Config from "../../config";
const { innerWidth: width, innerHeight: height } = window;

function Cases() {
    return (
        <>
            <Row style={{ marginTop: "5rem" }}>

                <Col md={12}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        marginTop: width < 600 ? '1.5rem' : 0

                    }}>
                    <S.Title style={{ textAlign: "center", alignSelf: "center" }}>
                        {Config.Clientes.Text}
                    </S.Title>
                    <LS.ClientContainer>
                    {Config.Clientes.clientes.map((data) => {
                        return <Cliente data={data} />;
                    })}
                    </LS.ClientContainer>
                </Col>
                <Col md={1}/>
            </Row>
        </>
    );

};

const Cliente = ({ data }) => {
    return (
        <LS.Cliente>
            <a href={data.site} target="blank">
                <LS.Logo>
                    <LS.Image src={data.logo}/>
                </LS.Logo>
            </a>
            <LS.Nome>{data.nome}</LS.Nome>
      </LS.Cliente>  
    );
}
export default Cases