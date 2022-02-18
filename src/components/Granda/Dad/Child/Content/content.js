import React from "react";
import { FlexDiv, Title } from "../../../../../theme/CommonStyles";
import {
  ContainerImage2,
  Content3ContainerOne,
  Content3ContainerTwo,
  Content3MainContainer,
  LogoContainer,
  PContainer2,
  PContainer2Link,
} from "./styles";

export const Content1 = ({ logo }) => {
  return (
    <header className="App-header">
      <Title>Content 1</Title>
      <FlexDiv alignItems="center" imgMargin="1rem" justifyContent="space-around">
        <LogoContainer>
          <img src={logo} className="App-logo" alt="logo" />
        </LogoContainer>
        <FlexDiv width="85%">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
            faucibus nunc. Proin nunc dolor, fermentum quis arcu nec, commodo
            egestas ex. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Cras ultricies urna neque, nec blandit
            purus fermentum ac. Duis volutpat eleifend pulvinar. Pellentesque
            fermentum, orci nec sollicitudin aliquet, orci ante egestas tellus, et
            suscipit tortor tortor at metus. In vulputate nisl et erat elementum, at
            porta velit volutpat. Integer purus dui, scelerisque eu ligula sed,
            tincidunt commodo nisi. Fusce purus risus, fermentum in aliquam ut,
            vulputate in mi.
          </p>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv flexDirectionColumn alignItems="center">
        <FlexDiv>
          <FlexDiv padding="0 1rem 0 0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
              amet faucibus nunc. Proin nunc dolor, fermentum quis arcu nec,
              commodo egestas ex. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Cras ultricies urna
              neque, nec blandit purus fermentum ac. Duis volutpat eleifend
              pulvinar. Pellentesque fermentum, orci nec sollicitudin aliquet,
              orci ante egestas tellus, et suscipit tortor tortor at metus. In
              vulputate nisl et erat elementum, at porta velit volutpat. Integer
              purus dui, scelerisque eu ligula sed, tincidunt commodo nisi. Fusce
              purus risus, fermentum in aliquam ut, vulputate in mi.
            </p>
          </FlexDiv>
          <FlexDiv padding="0 1rem 0 0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
              amet faucibus nunc. Proin nunc dolor, fermentum quis arcu nec,
              commodo egestas ex. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Cras ultricies urna
              neque, nec blandit purus fermentum ac. Duis volutpat eleifend
              pulvinar. Pellentesque fermentum, orci nec sollicitudin aliquet,
              orci ante egestas tellus, et suscipit tortor tortor at metus. In
              vulputate nisl et erat elementum, at porta velit volutpat. Integer
              purus dui, scelerisque eu ligula sed, tincidunt commodo nisi. Fusce
              purus risus, fermentum in aliquam ut, vulputate in mi.
            </p>
          </FlexDiv>
        </FlexDiv>
        <a className="App-link" href="/">
          I'm just linking to nowhere
        </a>
      </FlexDiv>
    </header>
  );
};

export const Content2 = ({ logo }) => {
  return (
    <header className="App-header">
      <Title>Content 2</Title>
      <ContainerImage2>
        <LogoContainer>
          <img src={logo} className="App-logo" alt="logo" />
        </LogoContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
          amet faucibus nunc. Proin nunc dolor, fermentum quis arcu nec, commodo
          egestas ex. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Cras ultricies urna neque, nec blandit
          purus fermentum ac. Duis volutpat eleifend pulvinar. Pellentesque
          fermentum, orci nec sollicitudin aliquet, orci ante egestas tellus, et
          suscipit tortor tortor at metus. In vulputate nisl et erat elementum,
          at porta velit volutpat. Integer purus dui, scelerisque eu ligula sed,
          tincidunt commodo nisi. Fusce purus risus, fermentum in aliquam ut,
          vulputate in mi.
        </p>
      </ContainerImage2>
      <PContainer2Link flexDirectionColumn alignItems="center">
        <PContainer2>
          <p className="boss_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet faucibus nunc. Proin nunc dolor, fermentum quis arcu nec,
            commodo egestas ex. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras ultricies urna
            neque, nec blandit purus fermentum ac. Duis volutpat eleifend
            pulvinar. Pellentesque fermentum, orci nec sollicitudin aliquet,
            orci ante egestas tellus, et suscipit tortor tortor at metus. In
            vulputate nisl et erat elementum, at porta velit volutpat. Integer
            purus dui, scelerisque eu ligula sed, tincidunt commodo nisi. Fusce
            purus risus, fermentum in aliquam ut, vulputate in mi.
          </p>
          <p>
            <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing
            elit. Mauris sit amet faucibus nunc. Proin nunc dolor, fermentum
            quis arcu nec, commodo egestas ex. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Cras ultricies
            urna neque, nec blandit purus fermentum ac. Duis volutpat eleifend
            pulvinar. Pellentesque fermentum, orci nec sollicitudin aliquet,
            orci ante egestas tellus, et suscipit tortor tortor at metus. In
            vulputate nisl et erat elementum, at porta velit volutpat. Integer
            purus dui, scelerisque eu ligula sed, tincidunt commodo nisi. Fusce
            purus risus, fermentum in aliquam ut, vulputate in mi.
          </p>
        </PContainer2>
        <a className="App-link" href="/">
          I'm just linking to nowhere
        </a>
      </PContainer2Link>
    </header>
  );
};

export const Content3 = ({ logo }) => {
  return (
    <header className="App-header">
      <Content3MainContainer>
        <Title>Content 3</Title>
        <Content3ContainerOne>
          <LogoContainer>
            <img src={logo} className="App-logo" alt="logo" />
          </LogoContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet faucibus nunc. Proin nunc dolor, fermentum quis arcu nec,
            commodo egestas ex. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras ultricies urna
            neque, nec blandit purus fermentum ac. Duis volutpat eleifend
            pulvinar. Pellentesque fermentum, orci nec sollicitudin aliquet,
            orci ante egestas tellus, et suscipit tortor tortor at metus. In
            vulputate nisl et erat elementum, at porta velit volutpat. Integer
            purus dui, scelerisque eu ligula sed, tincidunt commodo nisi. Fusce
            purus risus, fermentum in aliquam ut, vulputate in mi.
          </p>
        </Content3ContainerOne>

        <Content3ContainerTwo>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet faucibus nunc. Proin nunc dolor, fermentum quis arcu nec,
            commodo egestas ex. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras ultricies urna
            neque, nec blandit purus fermentum ac. Duis volutpat eleifend
            pulvinar. Pellentesque fermentum, orci nec sollicitudin aliquet,
            orci ante egestas tellus, et suscipit tortor tortor at metus. In
            vulputate nisl et erat elementum, at porta velit volutpat. Integer
            purus dui, scelerisque eu ligula sed, tincidunt commodo nisi. Fusce
            purus risus, fermentum in aliquam ut, vulputate in mi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet faucibus nunc. Proin nunc dolor, fermentum quis arcu nec,
            commodo egestas ex. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras ultricies urna
            neque, nec blandit purus fermentum ac. Duis volutpat eleifend
            pulvinar. Pellentesque fermentum, orci nec sollicitudin aliquet,
            orci ante egestas tellus, et suscipit tortor tortor at metus. In
            vulputate nisl et erat elementum, at porta velit volutpat. Integer
            purus dui, scelerisque eu ligula sed, tincidunt commodo nisi. Fusce
            purus risus, fermentum in aliquam ut, vulputate in mi.
          </p>
        </Content3ContainerTwo>
        <a className="App-link" href="/">
          I'm just linking to nowhere
        </a>
      </Content3MainContainer>
    </header>
  );
};
