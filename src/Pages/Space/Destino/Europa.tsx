import { FunctionComponent } from "react";
import styled from "styled-components";
import home from "../../../assets/Space/destination/background-destination-desktop.jpg";
import font from "../../../assets/fonts/TT-Backwards-Sans.otf";
import font2 from "../../../assets/fonts/KINDGARG.ttf";
import europa from "../../../assets/Space/destination/image-europa.webp";
import NavBar from "../NavBar";
import NavBarPlanets from "./NavBarPlanets";

interface EuropaProps {}

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

const Europa: FunctionComponent<EuropaProps> = () => {
  return (
    <CustomFont>
      <div>
        <Img src={home} alt="" />
        <NavBar />
        <H2>01 ELIGE TU DESTINO</H2>
        <Img2 src={europa} alt="" />
        <NavBarPlanets />
        <H1>EUROPA</H1>
        <WrapperP>
          <P>
            La más pequeña de las cuatro lunas galileanas que orbitan alrededor
            de Júpiter, Europa es el sueño de los amantes del invierno. Con
            una superficie helada, es perfecto para un poco de patinaje sobre
            hielo, curling, hockey o simplemente relajarse en su cómoda cabaña
            invernal.
          </P>
          <P2>DISTANCIA APROX.</P2>
          <P3>TIEMPO DE VIAJE ESTIMADO.</P3>
          <Km>4,300 M de km</Km>
          <Months>3 AÑOS</Months>
        </WrapperP>
        <Linea2 />
      </div>
    </CustomFont>
  );
};

export default Europa;



const Linea2 = styled.div`
  position: fixed;
  top: 42rem;
  left: 70rem;
  background-color: #474955;
  width: 30rem;
  height: 1px; /* Agrega una altura para que la línea sea visible */
  z-index: 9999;
`;


const Img = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -9999;
`;


const H2 = styled.h2`
  position: absolute;
  color: white;
  font-size: 35px;
  margin-top: 12rem;
  margin-left: 15rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
`;


const Img2 = styled.img`
  position: absolute;
  margin-top: 20rem;
  margin-left: 23rem;
  width: 32rem;
`;

const H1 = styled.h1`
  position: absolute;
  color: white;
  font-size: 100px;
  margin-top: 20rem;
  margin-left: 70rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  font-family: "KGRedHandsOutline", sans-serif;
`;

const P = styled.p`
  color: white;
  font-weight: 100;
  text-align: justify;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const P2 = styled.p`
  margin-top: 6rem;
  color: white;
  font-weight: 100;
  text-align: justify;
  font-size: 12px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const P3 = styled.p`
  margin-top: -1.8rem;
  margin-left: 14rem;
  color: white;
  font-weight: 100;
  text-align: justify;
  font-size: 12px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const WrapperP = styled.div`
  position: absolute;
  max-width: 28rem;
  margin-top: 30rem;
  margin-left: 70rem;
`;

const Km = styled.h1`
  position: absolute;
  color: white;
  font-size: 26px;
  margin-top: 0rem;
  margin-left: 0rem;
  font-weight: 300;
  font-family: "KGRedHandsOutline", sans-serif;
`;

const Months = styled.h1`
  position: absolute;
  color: white;
  font-size: 26px;
  margin-top: 0rem;
  margin-left: 14rem;
  font-weight: 300;
  font-family: "KGRedHandsOutline", sans-serif;
`;
