import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 0 0 3rem;
`;

// export const FlexDiv = styled.div`
//   display: flex;
//   flex-direction: ${(props) => props?.flexDirectionColumn && "column"};
//   align-items: ${(props) => props?.alignItems};
//   align-self: ${(props) => props?.alignSelf};
//   justify-content: ${(props) => props?.justifyContent};
//   margin: ${(props) => props?.margin};
//   padding: ${(props) => props?.padding};
//   width: ${(props) => props?.width};
//   img {
//     margin: ${(props) => props?.imgMargin};
//   }
// `;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirectionColumn && "column"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props?.justifyContent};
  margin: ${(props) => props?.margin};
  padding: ${(props) => props?.padding};
  width: ${(props) => props?.width};
  img {
    margin: ${(props) => props?.imgMargin};
  }
`;