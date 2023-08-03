import { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface NavBarPlanetsProps {}

const NavBarPlanets: FunctionComponent<NavBarPlanetsProps> = () => { 

    const [currentUrl, setCurrentUrl] = useState("");
    const location = useLocation();
  
    useEffect(() => {
      setCurrentUrl(location.pathname);
    }, [location.pathname]);
  

    return (
        <div>
<ContainerPlanets>
          <UL2>
            <Link to="/destination/moon"><LI2 className={currentUrl === "/destination/moon" ? "selectedButton" : ""}>LUNA</LI2></Link>
            <Link to="/destination/marte"><LI2 className={currentUrl === "/destination/marte" ? "selectedButton" : ""}>MARTE</LI2></Link>
            <Link to="/destination/europa"><LI2 className={currentUrl === "/destination/europa" ? "selectedButton" : ""}>EUROPA</LI2></Link>
            <Link to="/destination/titan"><LI2 className={currentUrl === "/destination/titan" ? "selectedButton" : ""}>TITAN</LI2></Link>
          </UL2>
        </ContainerPlanets>
        </div>
    )
}

export default NavBarPlanets;

const ContainerPlanets = styled.div``;

const UL2 = styled.ul`
  position: absolute;
  list-style-type: none;
  display: flex;
  margin-top: 15rem;
  margin-left: 68rem;
`;
const LI2 = styled.button`
  border: none;
  background: none;
  height: 3rem;
  color: white;
  margin-right: 30px;
  font-size: 14px;
  font-weight: 100;
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