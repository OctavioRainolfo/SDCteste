import styled from "styled-components";
import config from "../../config";

export const PhoneContainer = styled.div`
background: url(${config.Phone.Background});
background-repeat: no-repeat;
background-position: center;
background-size: contain;
`;

export const PhoneColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const PhoneColumnRight = styled(PhoneColumnLeft)`
  align-items: flex-start;
`;