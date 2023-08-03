import { Box, styled } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import artistas from "./artists.json";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./muiTheme"

interface ArtistsRowProps {
  onImageClick: (name: string) => void;
}
  

const ArtistsRow: FunctionComponent<ArtistsRowProps> = ({onImageClick}) => {
  const [seleccionarArtista, setSeleccionarArtista] = useState<string>("");
  const [seleccionarArtista2, setSeleccionarArtista2] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (artistas.length > 0) {
      setSeleccionarArtista(artistas[0].name);
    }
  }, []);

 
  const alternarMostrarInfo = (name: string) => { 
  setSeleccionarArtista(name);
  onImageClick(name);
  navigate(`/artist/${name}`)
  };

  const handleMouseEnter = (name: string) => {
    setSeleccionarArtista(name);
  };

  const handleMouseLeave = () => {
    setSeleccionarArtista("");
  };

  const handleMouseEnter2 = (name: string) => {
    setSeleccionarArtista2(name);
  };

  const handleMouseLeave2 = () => {
    setSeleccionarArtista2("");
  };

  return (
    <ThemeProvider theme={theme}>
    <Row>
      {artistas.slice(0, 20).map((artista, index) => (
        <ImageContainer key={artista.name}>
          <Image
            width={220}
            height={220}
            src={artista.photo_url}
            alt={artista.name}
            onClick={() => alternarMostrarInfo(artista.name)}
            onMouseEnter={() => {
              handleMouseEnter(artista.name);
              handleMouseEnter2(artista.name);
            }}
            onMouseLeave={() => {
              handleMouseLeave();
              handleMouseLeave2();
            }}
          />
          {seleccionarArtista === artista.name && (
            <HoverText className="show">{artista.name}</HoverText>
          )}
          {seleccionarArtista2 === artista.name && (
            <HoverText2 className="show">{artista.genre?.join(", ")}</HoverText2>
          )}
        </ImageContainer>
      ))}
    </Row>
    </ThemeProvider>
  );
};

export default ArtistsRow;

const Row = styled(Box)(() => ({
  marginTop: "3rem",
  display: "grid", // Cambiamos el display a "grid"
  gridTemplateColumns: "repeat(6, 1fr)", // Especificamos que queremos 6 columnas de igual ancho
  gap: "30px",
}));

const Image = styled("img")(() => ({
  display: "flex",
  marginTop: "2rem",
  "&:hover": {
    cursor: "pointer",
    opacity: "0.5"
  },
}));

const Img = styled("div")(() => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "#1a191f",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: "-9999",
}));

const HoverText = styled("div")(() => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "15rem",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "none",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "4px",
  fontSize: "28px",
  opacity: 0,
  transition: "opacity 0.3s",
  pointerEvents: "none",
  fontFamily: "font2",

  "&.show": {
    opacity: 1,
  },
}));

const HoverText2 = styled("div")(() => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "15rem",
  top: "90%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "none",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "4px",
  fontSize: "14px",
  opacity: 0,
  transition: "opacity 0.3s",
  pointerEvents: "none",
  fontFamily: "font2",
  "&.show": {
    opacity: 1,
  },
}));

const ImageContainer = styled("div")(() => ({
  position: "relative",
}));
