import { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/Space/shared/logo.svg"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => { 

    const [currentUrl, setCurrentUrl] = useState("");
    const location = useLocation();
  
    useEffect(() => {
      setCurrentUrl(location.pathname);
    }, [location.pathname]);
  

    return (
        <div>
<Div>
<Linea/>
<Logo src={logo} alt="" />
<Link to="/"> <HomeOutlinedIcon sx={{position: "absolute", color: "#fff", marginLeft: "-51rem", marginTop: "1.1rem", fontSize: 58, "&:hover": {color: "#474955"}}} /> </Link>
        <Ul>
          <Link to="/space"><LI  className={currentUrl === "/space" ? "selectedButton" : ""}><b>00</b> INICIO</LI></Link>
          <Link to="/destination/moon"><LI  className={location.pathname.startsWith("/destination") ? "selectedButton" : ""}><b>01</b> DESTINO</LI></Link>
          <Link to="/tripulacion/engineer"><LI className={location.pathname.startsWith("/tripulacion") ? "selectedButton" : ""}><b>02</b> TRIPULACIÓN</LI></Link>
          <Link to="/technology/vehicle"><LI className={location.pathname.startsWith("/technology") ? "selectedButton" : ""}><b>03</b> TECNOLOGÍA</LI></Link>
        </Ul>
      </Div>
        </div>
    )
}

export default NavBar;

const Logo = styled.img `
position: fixed;
top: 1.5rem;
left: -46rem;
`

const Linea = styled.div `
position: fixed;
top: 3rem;
left: -42rem;
background-color: #474955;
width: 45rem;
height: 1px; 
z-index: 9999;
` 

const Div = styled.div`
position: fixed;
  top: 2.5rem;
  right: 0;
width: 65rem;
height: 6rem;
background-color: rgba(254, 254, 254, 0.066);
backdrop-filter: blur(8px);
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  margin-top: -0rem;
  margin-left: 6rem;
`;

const LI = styled.button`
border: none;
background: none;
height: 6rem;
  color: white;
  margin-right: 50px;
  font-size: 14px;
  font-family: "TT-Backwards-Sans";
  letter-spacing: 0.2rem;
  cursor: pointer;
  

  &:hover {
    border-bottom: 3px solid #fff;
    padding-bottom: 0px;
  }

  &.selectedButton {
    border-bottom: 3px solid #fff;
  }
`;






