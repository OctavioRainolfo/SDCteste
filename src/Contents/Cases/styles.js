import styled from "styled-components";
import config from "../../config";

export const ClientContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
margin-top: 30px;
margin-bottom: 30px;
`;

export const Cliente = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  filter: grayscale();
  transition: 0.3s all;
  padding: 25px 30px;
  :hover{
    filter: none;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
`;
export const Nome = styled.div`
  margin-top: 20px;
  font-size: 15px;
  color: #c14481;
  font-weight: bold;
`;

export const Image = styled.img`
  max-width: 200px;
  max-height: 100px;
  object-fit: contain;
`;