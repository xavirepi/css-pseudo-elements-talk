import styled from "styled-components";

import { FlexDiv } from "../../../../../theme/CommonStyles";

export const Content3MainContainer = styled.div`
  ${'' /* h1 {
    text-align: center;
  } */}
`;

export const Content3ContainerOne = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Content3ContainerTwo = styled.div`
  display: flex;
`;

export const LogoContainer = styled(FlexDiv)`
  width: 7rem;
  height: 7rem;
`;

export const PContainer = styled.div`
  display: flex; 
  text-align: justify;
  p {
    width: 45%;
  }

  .boss_p {
    margin-right: 8rem;
  }

`;

export const PSubcontainer = styled(FlexDiv)`  
  a {
    align-self: center;
  }
`;

export const ImagePContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: justify;
  p {
    width: 75%;
  }
`;

