import { FunctionComponent } from "react";
import styled from "styled-components";
import home from "../../../assets/Space/technology/background-technology-desktop.jpg";
import font from "../../../assets/fonts/TT-Backwards-Sans.otf";
import font2 from "../../../assets/fonts/KINDGARG.ttf";
import technology from "../../../assets/Space/technology/image-launch-vehicle-portrait.jpg";
import NavBar from "../NavBar";
import Numbers from "./Numbers";

interface TechnologyProps {}

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

const Technology: FunctionComponent<TechnologyProps> = () => {
  return (
    <CustomFont>
      <div>
        <Img src={home} alt="" />
        <NavBar /> 
        <H2>03 LANZAMIENTO ESPACIAL 101</H2>
        <P1>LA TERMINOLOGÍA...</P1>
        <Title>LANZAMIENTO DE COHETE</Title>
        <WrapperP>
          <P>
            Un vehículo de lanzamiento o cohete portador es un vehículo
            propulsado por cohete que se utiliza para transportar una carga útil
            desde la superficie de la Tierra al espacio, generalmente a la
            órbita terrestre o más allá. Nuestro cohete portador WEB-X es el más
            potente en funcionamiento. Con una altura de 150 metros, ¡Es una
            vista impresionante en la plataforma de lanzamiento!
          </P>
          <Img2 src={technology} alt="" />
        </WrapperP>
        <Numbers />
      </div>
    </CustomFont>
  );
};

export default Technology;



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
