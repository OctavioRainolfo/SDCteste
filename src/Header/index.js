import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSignIn } from "@fortawesome/pro-light-svg-icons";
import { Container, Row, Col } from "reactstrap";
import * as S from "../styles";



function Header() {
    return (
      <Row>
        <Col  >
          <S.Logo></S.Logo>
        </Col>
        <Col style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
          <S.BottomRight>
            <S.TextRight>
              <FontAwesomeIcon icon={faSignIn} /> Entrar{" "}
            </S.TextRight>
          </S.BottomRight>
        </Col>
      </Row>
    )
  }
  export default Header;