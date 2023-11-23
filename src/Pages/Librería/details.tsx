import React from "react";
import { useParams } from "react-router-dom";
import librosData from "./libros.json";
import { Box, styled, Typography } from "@mui/material";
import Search from "./Search";
import ResponsiveAppBar from "./NavBar";

interface DetailsProps {}

const Details: React.FC<DetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const libroId = parseInt(id!, 10);
  const libro = librosData.find((l) => l.id === libroId);

  if (!libro) {
    return <div>No se encontró información para este libro.</div>;
  }

  return (
    <Container>
      
      <ResponsiveAppBar />
        <Fondo />
      <Box sx={{ padding: 10, marginTop: "-2rem", marginLeft: "-55rem" }}>
        <Img src={libro.imagen} alt={libro.título} />
        </Box>
        <Box sx={{ padding: 10, marginTop: "-34rem", marginLeft: "20rem" }}>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            left: "0rem",
            maxWidth: "100rem",
          }}
        >
          <li
            style={{
              marginRight: "75px",
              marginBottom: "20px",
              maxWidth: "50rem",
            }}
          >
            <Typography sx={{fontSize: "30px", color: "#fff"}}>{libro.título}</Typography>
            <br />
            <Typography sx={{fontSize: "20px", color: "#fff"}}>Autor: {libro.autor}</Typography>
            
            <Typography sx={{fontSize: "20px", color: "#fff"}}>Publicación: {libro.publicación}</Typography>
           
            <Typography sx={{fontSize: "20px", color: "#fff"}}>Género: {libro.género}</Typography>
            <br />
            <Typography sx={{fontSize: "20px", color: "#fff"}}>Sinopsis: {libro.sinopsis}</Typography>
          </li>
        </ul>
        </Box>
    </Container>
  );
};

export default Details;

const Fondo = styled("div")(() => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "#22252a",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: "-9999",
}));

const Container = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }));

  const Img = styled("img")(() => ( {
    width: "auto",
    height: "350px",
    borderRadius: "3px",
    transition: "transform 0.3s", // Agregar una transición suave
    "&:hover": {
      transform: "scale(1.1)", // Escalar la imagen al 110% en hover
      cursor: "pointer", // Cambiar el cursor en hover
    },
  }))
