import { FunctionComponent, useState } from "react";
import librosData from "./libros.json";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "./Search";
import ResponsiveAppBar from "./NavBar";

interface Libro {
  id: number;
  título: string;
  autor: string;
  publicación: string;
  género: string;
  imagen: string;
}

const Libros: FunctionComponent = () => {
  const librosOrdenados = [...librosData].sort((a, b) => a.título.localeCompare(b.título));

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredLibros, setFilteredLibros] = useState<Libro[]>(librosOrdenados);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filtered = librosOrdenados.filter(
      (libro) => libro.título.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLibros(filtered);
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
          justifyContent:  "flex-start",
          left: "0rem",
        }}
      >
        {filteredLibros.map((libro: Libro, index: number) => (
          <li
            key={index}
            style={{
              marginRight: "75px",
              marginBottom: "20px",
              maxWidth: "10rem",
            }}
          >
            <ImageContainer>
              <Link to={`/details/${libro.id}`} style={{ textDecoration: "none" }}>
                <Img src={libro.imagen} alt="" />
              </Link>
            </ImageContainer>
            <Typography sx={{ color: "#fffffd", fontSize: "15px" }}>{libro.título}</Typography>
            <Typography sx={{ color: "#788c97", fontSize: "14px" }}>{libro.autor}</Typography>
          </li>
        ))}
      </ul>
    </Box>
    </div>
  );
};

export default Libros;

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

const Img = styled("img")({
  width: "9rem",
  height: "13rem",
  borderRadius: "3px",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },
});

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
