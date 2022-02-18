import React from "react";
import { Title, FlexDiv } from "../../../../../theme/CommonStyles";
import {
  Content3ContainerOne,
  Content3ContainerTwo,
  Content3MainContainer,
  LogoContainer,
  PContainer,
  PSubcontainer,
  ImagePContainer,
} from "./styles";

export const Content1 = ({ logo }) => {
  return (
    <header className="App-header">
      <Title>Content 1</Title>
      <FlexDiv alignItems="center" width="50%">
        <LogoContainer>
          <img src={logo} className="App-logo" alt="logo" />
        </LogoContainer>
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
      <FlexDiv>
        <FlexDiv>
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
        <FlexDiv></FlexDiv>
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
      <a className="App-link" href="/">
        I'm just linking to nowhere
      </a>
    </header>
  );
};

export const Content2 = ({ logo }) => {
  return (
    <header className="App-header">
      <Title>Content 2</Title>
      <ImagePContainer>
      <LogoContainer>
        <img src={logo} className="App-logo" alt="logo" />
      </LogoContainer>
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
      </ImagePContainer>
      <PSubcontainer>
        <PContainer>
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
        </PContainer>
        <a className="App-link" href="/">
          I'm just linking to nowhere
        </a>
      </PSubcontainer>
    </header>
  );
};

export const Content3 = ({ logo }) => {
  return (
    <header className="App-header">
      <Content3MainContainer>
        <h1>Content 3</h1>
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
          <LogoContainer>
            <img src={logo} className="App-logo" alt="logo" />
          </LogoContainer>
        </Content3ContainerTwo>
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
        <a className="App-link" href="/">
          I'm just linking to nowhere
        </a>
      </Content3MainContainer>
    </header>
  );
};
