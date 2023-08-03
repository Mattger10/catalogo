import { FunctionComponent } from "react";
import styled from "styled-components";
import home from "../../../assets/Space/technology/background-technology-desktop.jpg";
import font from "../../../assets/fonts/TT-Backwards-Sans.otf";
import font2 from "../../../assets/fonts/KINDGARG.ttf";

import technology from "../../../assets/Space/technology/image-spaceport-portrait.jpg";

import NavBar from "../NavBar";
import Numbers from "./Numbers";

interface SpaceportProps {}

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

const Spaceport: FunctionComponent<SpaceportProps> = () => {
  return (
    <CustomFont>
      <div>
        <Img src={home} alt="" />
       
        <NavBar />
        <H2>03 LANZAMIENTO ESPACIAL 101</H2>
        <P1>LA TERMINOLOGÍA...</P1>
        <Title>PUERTO ESPACIAL</Title>
        <WrapperP>
          <P>
          Un puerto espacial o cosmódromo es un sitio para lanzar (o recibir) naves espaciales,
  por analogía al puerto de mar para los barcos o al aeropuerto para las aeronaves. Basado en el
  famoso Cabo Cañaveral, nuestro puerto espacial está idealmente situado para aprovechar
  de la rotación de la Tierra para el lanzamiento.
          </P>
          <Img2 src={technology} alt="" />
        </WrapperP>
        <Numbers />
      </div>
    </CustomFont>
  );
};

export default Spaceport;




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
  font-size: 28px;
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
  max-width: 30rem;
  margin-top: 30rem;
  margin-left: 30rem;
`;

const Img2 = styled.img`
  position: fixed;
  width: 35rem;
  margin-top: -25rem;
  margin-left: 45rem;
`;

const P1 = styled.h2`
  position: absolute;
  margin-top: 22rem;
  margin-left: 30rem;
  color: white;
  font-weight: 100;
  text-align: justify;
  font-size: 14px;
  letter-spacing: 0.2rem;
`;

const Title = styled.h1`
  position: absolute;
  color: white;
  font-size: 38px;
  margin-top: 25rem;
  margin-left: 30rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  font-family: "KGRedHandsOutline";
`;
