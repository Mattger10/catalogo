import { FunctionComponent } from "react";
import styled from "styled-components";
import home from "../../../assets/Space/crew/background-crew-desktop.jpg";
import font from "../../../assets/fonts/TT-Backwards-Sans.otf";
import font2 from "../../../assets/fonts/KINDGARG.ttf";

import crew from "../../../assets/Space/crew/image-mark-shuttleworth.webp";
import NavBar from "../NavBar";
import NavigateCrew from "./NavigateCrew";

interface SpecialistProps {}

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

const Specialist: FunctionComponent<SpecialistProps> = () => {
  return (
    <CustomFont>
      <div>
        <Img src={home} alt="" />
        
        <NavBar />
        <H2>02 CONOCE A LA TRIPULACIÓN</H2>
        <H1>ESPECIALISTA EN MISIONES</H1>
        <Name>MARK SHUTTLEWORTH</Name>

        <WrapperP>
          <P>
            Mark Richard Shuttleworth es el fundador y director ejecutivo de
            Canonical, la empresa detrás el sistema operativo Ubuntu basado en
            Linux. Shuttleworth se convirtió en el primer Sur africano para
            viajar al espacio como turista espacial.
          </P>
          <Img2 src={crew} alt="" />
        </WrapperP>
        <NavigateCrew />
      </div>
    </CustomFont>
  );
};

export default Specialist;




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
  margin-top: -28rem;
  margin-left: 55rem;
`;

