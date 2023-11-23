import { Box, styled, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import artistas from "./artists.json";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./muiTheme";

interface ArtistsRowProps {
  onImageClick: (name: string) => void;
}

const ArtistsRow: FunctionComponent<ArtistsRowProps> = ({ onImageClick }) => {
  const [seleccionarArtista, setSeleccionarArtista] = useState<string>("");
   artistas.sort((a, b) => a.name.localeCompare(b.name));
  const navigate = useNavigate();

  useEffect(() => {
    if (artistas.length > 0) {
      setSeleccionarArtista(artistas[0].name);
    }
  }, []);

  const alternarMostrarInfo = (name: string) => {
    setSeleccionarArtista(name);
    onImageClick(name);
    navigate(`/artist/${name}`);
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 0, marginTop: "-4rem" }}>
          <StyledUlContainer >
            <StyledUl>
            {artistas.slice(0, 20).map((artista, index) => (
              <StyledLi key={index}>
                <Img
                  width={200}
                  height={200}
                  src={artista.photo_url}
                  alt={artista.name}
                  onClick={() => alternarMostrarInfo(artista.name)}
                />
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "14px",
                  }}
                >
                  {artista.name}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}
                >
                  {artista.genre.join(", ")}
                </Typography>
              </StyledLi>
            ))}
            </StyledUl>
          </StyledUlContainer>
      </Box>
    </ThemeProvider>
  );
};

export default ArtistsRow;

const StyledUlContainer = styled("div")({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: "5rem"
});

const StyledUl = styled("ul")({
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap', 
  padding: 0,
  margin: 0,
  listStyle: 'none',
  gap: '20px', 
  width: "100%",
});

const StyledLi = styled("li")({
  backgroundColor: "#222432",
  width: "200px",
  height: "auto",
  borderRadius: "10px",
});

const Img = styled("img")({
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  backgroundColor: "black",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
});

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
    opacity: "0.5",
  },
}));

// const Img = styled("div")(() => ({
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundColor: "#1a191f",
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   zIndex: "-9999",
// }));

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
