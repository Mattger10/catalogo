import { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface NumbersProps {}

const Numbers: FunctionComponent<NumbersProps> = () => { 

    const [currentUrl, setCurrentUrl] = useState("");
    const location = useLocation();
  
    useEffect(() => {
      setCurrentUrl(location.pathname);
    }, [location.pathname]);
  

    return (
        <div>
        <Link to="/technology/vehicle"><Circulo className={currentUrl === "/technology/vehicle" ? "selectedButton" : ""}><Numero>1</Numero></Circulo>
        </Link>
        <Link to="/technology/capsule"><Circulo1 className={currentUrl === "/technology/capsule" ? "selectedButton" : ""}><Numero>2</Numero></Circulo1>
        </Link>
        <Link to="/technology/spaceport"><Circulo2 className={currentUrl === "/technology/spaceport" ? "selectedButton" : ""}><Numero>3</Numero></Circulo2>
        </Link>
        </div>
    )
}

export default Numbers;

const Numero = styled.p`
  position: absolute;
  margin-top: 1rem;
  margin-left: 1.9rem;
  font-size: 40px;
  color: white;
`;

const Circulo = styled.div`
  position: absolute;
  margin-top: 21rem;
  margin-left: 15rem;
  width: 80px;
  height: 80px;
  border: 1px solid white;
  border-radius: 50%;
  z-index: -999;
  cursor: pointer;

  &:hover {
    background-color: white;
    ${Numero} {
      color: black;
    }
  }

  &.selectedButton {
    background-color: #fff;
    ${Numero} {
        color: black;
      }
  }
`;
const Circulo1 = styled.div`
  position: absolute;
  margin-top: 30rem;
  margin-left: 15rem;
  width: 80px;
  height: 80px;
  border: 1px solid white;
  border-radius: 50%;
  z-index: -999;
  cursor: pointer;

  &:hover {
    background-color: white;
    ${Numero} {
      color: black;
    }
  }

  &.selectedButton {
    background-color: #fff;
    ${Numero} {
        color: black;
      }
  }
`;
const Circulo2 = styled.div`
  position: absolute;
  margin-top: 39rem;
  margin-left: 15rem;
  width: 80px;
  height: 80px;
  border: 1px solid white;
  border-radius: 50%;
  z-index: -999;
  cursor: pointer;

  &:hover {
    background-color: white;
    ${Numero} {
      color: black;
    }
  }

  &.selectedButton {
    background-color: #fff;
    ${Numero} {
        color: black;
      }
  }
`;

