import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Typography, Button, styled} from '@mui/material';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import recommendedData from "./recommended.json"
import SearchIcon from '@mui/icons-material/Search';
import artistas from "./artists.json";


interface NavBarDetailsProps{ 
  seleccionar: string; 
}

const NavBarDetails: React.FunctionComponent<NavBarDetailsProps> = ({seleccionar}) =>  {
  const seleccionarArtista = artistas.find((artista) => artista.name === seleccionar)
  
    if(seleccionarArtista) {
  return (
    <AppBar position="static" sx={{position: "absolute", top: "21rem", left: "14rem", backgroundColor: "transparent", height: "7vh", width: "78vw", 
    borderBottom: "2px solid rgba(254, 254, 254, 0.214)", boxShadow: "none"}}>
      <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', width: "90rem" } }}>
            {recommendedData.map((artist) => {
              return artist ? (
          <Ul>
         <StyledButton >OVERVIEW</StyledButton>
          <StyledButton> BIOGRAPHY </StyledButton>
          {/* <StyledButton > SIMILAR ARTISTS </StyledButton>
          <StyledButton > PLAYLISTS </StyledButton>
          <StyledButton > COMMENTS </StyledButton>
          <StyledButton > CONCERTS </StyledButton> */}
          </Ul>
            ) : null;
        })}
          </Box>
      </Container>
    </AppBar>
      ) 
    } else {return null}
    }

export default NavBarDetails;

const Ul = styled("ul")(() => ({
  listStyleType: "none",
  display: "flex",
  marginTop: "1rem",
  marginLeft: "-4rem"
}));

const StyledButton = styled(Button)(() => ({
border: "none",
backgroundColor: "none",
height: "3rem",
  color: "#6e717a",
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "0.2rem",
  cursor: "pointer",
  padding: "0px 20px 0px 20px ",
  width: "250px",
  "&:hover": {
    borderBottom: "3px solid #ed215e",
    backgroundColor: "transparent",
    borderRadius: "0px",
    color: "#fff",
  },

  "&:selectedButton": {
    borderBottom: "3px solid #fff"
  }
}))


