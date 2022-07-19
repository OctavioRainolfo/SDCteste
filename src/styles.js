import styled from "styled-components";
import Config from './config'

export const Title = styled.h1`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 2rem;
color: #c14481;
white-space: pre-wrap;
`;
export const Body = styled.div`
  display: flex;
 
`;
export const Container = styled.div`
  
  background-repeat: no-repeat;
  padding: 5rem;
  margin-top: 3rem;
`;
export const Logo = styled.div`
width: 198px;
height: 50px;
    background: url(${Config.Header.Logo});
    margin-top: 115px;
`;

export const BottomRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    vertical-align: top;
    margin-top: 155px;
`;
export const Text = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9rem;
    color: #1d1d1d;
    white-space: pre-wrap;
`;
export const TextRight = styled(Text)`
    text-align: right;
`;
export const TextLeft = styled(Text)`
    text-align: Left;
`;
export const MarginTop = styled.div`
margin-top: 5px; 
`;

export const SubTitle = styled(Title)`
  font-size: 1.5rem;
`;

export const SubTitleRight = styled(SubTitle)`
    text-align: right;
`;
export const SubTitleLeft = styled(SubTitle)`
    text-align: Left;
`;
export const DefaultMargin = styled.div`
    margin: 5rem
`