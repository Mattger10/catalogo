import { Box, styled } from "@mui/material";
import { FunctionComponent, useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Favoritos from "./Favoritos";

interface PagFavoritosProps {
  handleSelect: (song: string) => void;
}

const PagFavoritos: FunctionComponent<PagFavoritosProps> = ({handleSelect}) => {
  const [mostrarTabla, setMostrarTabla] = useState(true);

  const alternarMostrarTabla = () => {
    setMostrarTabla((prevShowTable) => !prevShowTable);
  };

  return (
    <Container>
      <Img />
      <ResponsiveAppBar mostrarTabla={mostrarTabla} alternarMostrarTabla={alternarMostrarTabla} />
      <Box sx={{ padding: 5 }}>
        <Favoritos mostrarTabla={true} handleSelect={handleSelect} />
      </Box>
    </Container>
  );
};

export default PagFavoritos;

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Img = styled("div")(() => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "#151829",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: "-9999",
}));
