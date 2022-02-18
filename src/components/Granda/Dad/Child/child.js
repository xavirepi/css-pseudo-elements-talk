import soameeLogo from "../../../../assets/soamee_logo.png"
import { MainChildContainer, StyledDivOne, StyledDivThree, StyledDivTwo } from "./styles";
import { Content1, Content2, Content3 } from "./Content/content";

const Child = () => {
    return (
      <MainChildContainer>
        <StyledDivOne>
          <Content1 logo={soameeLogo} />
        </StyledDivOne>
        <StyledDivTwo>
          <Content2 logo={soameeLogo} />
        </StyledDivTwo>
        <StyledDivThree>
          <Content3 logo={soameeLogo} />
        </StyledDivThree>
      </MainChildContainer>
    );
};

export default Child;