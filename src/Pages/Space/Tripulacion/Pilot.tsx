import { FunctionComponent } from "react";
import styled from "styled-components";
import home from "../../../assets/Space/crew/background-crew-desktop.jpg";
import font from "../../../assets/fonts/TT-Backwards-Sans.otf";
import font2 from "../../../assets/fonts/KINDGARG.ttf";

import crew from "../../../assets/Space/crew/image-victor-glover.webp";
import NavBar from "../NavBar";
import NavigateCrew from "./NavigateCrew";

interface PilotProps {}

const CustomFont = styled.div`
  @font-face {
    font-family: "TT-Backwards-Sans";
    src: url(${font}) format("truetype");
  }
  @font-face {
    font-family: "KGRedHandsOutline";
    src: url(${font2}) format("truetype");
  }
  h2 {
    font-family: "TT-Backwards-Sans", sans-serif;
  }
`;

const Pilot: FunctionComponent<PilotProps> = () => {
  return (
    <CustomFont>
      <div>
        <Img src={home} alt="" />
        
        <NavBar />
        <H2>02 CONOCE A LA TRIPULACIÓN</H2>
        <H1>PILOTO</H1>
        <Name>VICTOR GLOVER</Name>

        <WrapperP>
          <P>
            Piloto en el primer vuelo operativo del SpaceX Crew Dragon a la
            Estación Espacial Internacional. Glover es un comandante de la
            Marina de los EE. UU. donde él pilotea un F/A-18. Fue miembro de la
            tripulación de la Expedición 64, y sirvió como ingeniero de vuelo de
            sistemas de estación.
          </P>
          <Img2 src={crew} alt="" />
        </WrapperP>
        <NavigateCrew />
      </div>
    </CustomFont>
  );
};

export default Pilot;




const Img = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: -9999;
`;



const H2 = styled.h2`
  position: absolute;
  color: white;
  font-size: 35px;
  margin-top: 12rem;
  margin-left: 12rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
`;

const P = styled.p`
  color: white;
  font-weight: 100;
  text-align: justify;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const WrapperP = styled.div`
  position: absolute;
  max-width: 33rem;
  margin-top: 38rem;
  margin-left: 12rem;
`;

const H1 = styled.h1`
  position: absolute;
  color: #92969f;
  font-size: 35px;
  margin-top: 30rem;
  margin-left: 12rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  font-family: "KGRedHandsOutline", sans-serif;
`;

const Name = styled.h1`
  position: absolute;
  color: #fff;
  font-size: 55px;
  margin-top: 34rem;
  margin-left: 12rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  font-family: "KGRedHandsOutline", sans-serif;
`;

const Img2 = styled.img`
  position: fixed;
  margin-top: -30rem;
  margin-left: 50rem;
`;
