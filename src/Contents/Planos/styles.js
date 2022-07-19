import styled from "styled-components";
import config from "../../config";

export const Container = styled.div`
  background: url(${config.Row1.Background});
  background-repeat: no-repeat;
  padding: 5rem;
  margin-top: 15rem;
`;
export const Plano = styled.div`
  margin-top: -2rem;
  width: 272px;
  height: 550px;

  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const PlanoPrice = styled.div`
  padding: 1rem;
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlanoTop = styled.div`
  background: ${(props) => props.color};
  padding: 0.5rem;
  text-align: right;
  font-size: 0.8rem;
  font-weight: lighter;
  color: ${(props) => props.fontColor};
`;


export const PlanoHeader = styled.div`
  background: ${(props) => props.color};
  padding: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: lighter;
  color: ${(props) => props.fontColor};
  border-bottom: 1px solid #e9e9e9;

`;

export const PlanoFeature = styled.div`
  padding: 1rem 1rem 0 1rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 0.8rem;
`;
export const PlanoFeatures = styled.div`
  flex: 1;
`;
export const PriceText = styled.div`
  color: #575757;
  font-size: 1.2rem;
  text-align: center;
  font-weight: lighter;
`;
export const PriceTextSmall = styled(PriceText)`
  font-size: 0.8rem;
`;
export const Btn = styled.div`
    background-color: ${(props) => props.backgroundColor};
    color: #fff;
    border-radius: 4px;
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        opacity: 0.9;
      }
`  ;

export const Background = styled.div``;

export const HireContainer = styled.div`
  padding: 0.5rem;
`;