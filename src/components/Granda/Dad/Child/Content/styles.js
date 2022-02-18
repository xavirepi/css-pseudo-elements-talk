import styled from "styled-components";
import { FlexDiv } from "../../../../../theme/CommonStyles";

export const Content3MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: center;
  align-items: center;
`;

export const Content3ContainerOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 35px;
  }
  p {
    width: 85%;
  }
`;

export const Content3ContainerTwo = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    width: 45%;
  }
`;

export const LogoContainer = styled.div`
  width: 7rem;
  height: 7rem;
`;

export const ContainerImage2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    width: 90%;
    text-align: justify;
  }
`;

export const PContainer2 = styled(FlexDiv)`
  justify-content: space-around;
  p {
    width: 45%;
    text-align: justify;
  }
`;

export const PContainer2Link = styled(FlexDiv)`
  span {
    color: purple
  }
`;
