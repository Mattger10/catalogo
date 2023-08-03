import { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CircleIcon from "@mui/icons-material/Circle";

interface NavigateCrewProps {}

const NavigateCrew: FunctionComponent<NavigateCrewProps> = () => { 

    const [currentUrl, setCurrentUrl] = useState("");
    const location = useLocation();
  
    useEffect(() => {
      setCurrentUrl(location.pathname);
    }, [location.pathname]);
  

    return (
        <div>
            <Ul2>
        <Link to="/tripulacion/commander"> <LI2 className={currentUrl === "/tripulacion/commander" ? "selectedButton" : ""}>
              <CircleIcon sx={{ width: "1rem" }} />
            </LI2>
          </Link>
          <Link to="/tripulacion/pilot">
            <LI2 className={currentUrl === "/tripulacion/pilot" ? "selectedButton" : ""}>
              <CircleIcon sx={{ width: "1rem" }} />
            </LI2>
          </Link>
          <Link to="/tripulacion/specialist">
          <LI2 className={currentUrl === "/tripulacion/specialist" ? "selectedButton" : ""}>
            <CircleIcon sx={{ width: "1rem" }} />
          </LI2>
          </Link>
          <Link to="/tripulacion/engineer">
            <LI2 className={currentUrl === "/tripulacion/engineer" ? "selectedButton" : ""}>
              <CircleIcon sx={{ width: "1rem" }} />
            </LI2>
          </Link>
        </Ul2>
        </div>
    )
}

export default NavigateCrew;


const Ul2 = styled.ul`
  position: absolute;
  list-style-type: none;
  display: flex;
  margin-top: 50rem;
  margin-left: 10rem;
`;

const LI2 = styled.li`
  border: none;
  background: none;
  height: 5rem;
  color: #92969f;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &.selectedButton {
    color: #fff;
  }
`;