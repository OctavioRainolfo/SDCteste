import styled from "styled-components";
import config from "../../config";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;
export const Title = styled.div`
  font-size: 2rem;
  color: #fff;
  font-weight: lighter;
`;
 
export const Btn = styled.div`
border: 2px solid #fff;
border-radius: 4px;
background-color: transparent;
color: #fff;
display: flex;
padding: 1rem 3rem;
justify-content: center;
align-items: center;
cursor: pointer;
font-size: 1rem;
:hover {
  opacity: 0.9;
  background-color: #fff;
  color: #bd3a73;
}
`;