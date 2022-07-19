import React from "react";
import * as S from "../../styles";
import * as LS from "./styles";
import { Container, Row, Col } from "reactstrap";
import Config from "../../config";
import { faPlaneProp } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophyAlt } from "@fortawesome/pro-light-svg-icons";

function Planos() {
    return (
        <Container fluid={true} style={{ backgroundColor: "#f1f1f1", marginTop: "10rem" }}>
            <Container>
                <Row>
                    {Config.Planos.planos.map((plano) => {
                        const { mensal, usuario, minimo } = plano;
                        return (
                            <Col>
                                <LS.Plano style={plano.top ? { marginTop: "-4rem" } : {}}>
                                    {plano.top && (
                                        <LS.PlanoTop color={plano.topColor} fontColor={plano.fontColor}>
                                            Mais Vendido <FontAwesomeIcon icon={faTrophyAlt} color={"#FEB018"} />
                                        </LS.PlanoTop>
                                    )}
                                    <LS.PlanoHeader color={plano.color} fontColor={plano.fontColor}>
                                        {plano.icon && (
                                            <FontAwesomeIcon icon={plano.icon} style={{ marginRight: "0.5rem" }} />
                                        )}
                                        {plano.nome}
                                    </LS.PlanoHeader>
                                    <LS.PlanoFeatures>
                                        {plano.features.map((feature) => {
                                            return <LS.PlanoFeature>{feature}</LS.PlanoFeature>;
                                        }
                                        )}
                                    </LS.PlanoFeatures>
                                    <LS.PlanoPrice>
                                        {minimo > 0 && <LS.PriceTextSmall>Pacote mínimo de {minimo} usuários</LS.PriceTextSmall>}
                                        {mensal > 0 && <LS.PriceTextSmall>R${usuario} / mês</LS.PriceTextSmall>}
                                        <LS.PriceText>
                                            {mensal > 0 && "+"}R${usuario} por usuário
                                        </LS.PriceText>
                                    </LS.PlanoPrice>
                                    <LS.HireContainer>
                                    <a href={plano.link} target="blank">
                                        <LS.Btn backgroundColor={plano.btnColor}>
                                            CONTRATAR
                                        </LS.Btn>
                                        </a>
                                        </LS.HireContainer>

                                </LS.Plano>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Container>
    );
};
export default Planos;