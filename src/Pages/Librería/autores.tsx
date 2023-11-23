import { FunctionComponent, useState } from "react";
import autores from "./autores.json";
import { Box, styled, Typography } from "@mui/material";
import Search from "./Search";
import ResponsiveAppBar from "./NavBar";
import { Link } from "react-router-dom";
import librosData from "./libros.json";

interface Autor {
  nombre: string;
  biografía: string;
  foto: string;
}

const Autores: React.FC = () => {
  const autoresOrdenados = [...autores].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredAutores, setFilteredAutores] = useState([...autores]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filtered = autoresOrdenados.filter((autor) =>
      autor.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAutores(filtered);
  };

  return (
    <div>
      <ResponsiveAppBar />
      <Fondo />
      <Box sx={{ padding: 10, marginTop: "-5rem", marginLeft: "18rem" }}>
      <Search onSearch={handleSearch} />
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            left: "0rem",
          }}
        >
          {filteredAutores.map((autor: Autor, index: number) => (
            <li
              key={index}
              style={{
                marginRight: "75px",
                marginBottom: "20px",
                maxWidth: "10rem",
              }}
            >
              <ImageContainer>
                <Link
                  to={`/details/${autor.nombre}`}
                  style={{ textDecoration: "none" }}
                >
                  <Img src={autor.foto} alt={autor.foto} />
                </Link>
              </ImageContainer>
              <Typography sx={{ color: "#fffffd", fontSize: "15px" }}>
                {autor.nombre}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default Autores;

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

const Img = styled("img")({
  width: "auto",
  height: "17.5rem",
  borderRadius: "3px",
  transition: "transform 0.3s", // Agregar una transición suave
  "&:hover": {
    transform: "scale(1.1)", // Escalar la imagen al 110% en hover
    cursor: "pointer", // Cambiar el cursor en hover
  },
});
const ImageContainer = styled("div")({
  backgroundColor: "#29363e",
  padding: "10px",
  borderRadius: "3px",
  overflow: "hidden",
  marginBottom: "10px",
  width: "10rem",
  height: "14rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
