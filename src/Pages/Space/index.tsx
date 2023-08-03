import { FunctionComponent } from "react";
import styled from "styled-components";
import home from "../../assets/Space/home/background-home-desktop.jpg";
import font from "../../assets/fonts/TT-Backwards-Sans.otf";
import font2 from "../../assets/fonts/KINDGARG.ttf"
import { Link } from "react-router-dom";
import NavBar from "./NavBar";


interface SpaceProps {}

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

const Space: FunctionComponent<SpaceProps> = () => {

  return (
    <CustomFont>
    <div>
      <Img src={home} alt="" />
      
      
      <NavBar />
      <H2>ENTONCES, QUIERES VIAJAR AL</H2>
      <H1>ESPACIO</H1>
      <WrapperP>
      <P>
      Seamos sinceros; si quieres ir al espacio, también podrías ir genuinamente al espacio exterior y no flotar en el borde. ¡Pues siéntate y relájate porque te daremos una experiencia verdaderamente fuera de este mundo!
        </P>
      </WrapperP>
      </div>
      <Link to="/destination/moon">
      <H2Explore>EXPLORAR</H2Explore>
      <Circulo/>
      </Link>
    </CustomFont>
  );
};

export default Space;






const Img = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -9999;
`;


const H2 = styled.h2 `
color: white;
font-size: 30px;
margin-top: 21.6rem;
margin-left: 14.5rem;
font-weight: 300;
letter-spacing: 0.5rem;
`

const H1 = styled.h1 `
color: white;
font-size: 180px;
margin-top: -1rem;
margin-left: 14rem;
font-weight: 300;
letter-spacing: 0.5rem;
font-family: "KGRedHandsOutline", sans-serif;
`

const P = styled.p `
color: white;
font-weight: 100;
text-align: justify;
font-size: 18px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
`

const WrapperP = styled.div `
max-width: 36rem;
margin-top: -7rem;
margin-left: 15rem;
`

const Circulo = styled.div `
position: absolute;
margin-top: -21rem;
margin-left: 85rem;
width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 50%; 
  z-index: -999;
`

const H2Explore = styled.h1 `
position: absolute;
color: black;
font-size: 36px;
margin-top: -13rem;
margin-left: 88.4rem;
font-family: "KGRedHandsOutline";
font-weight: 300;
`

