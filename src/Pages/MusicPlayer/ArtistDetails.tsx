import { Box, styled, Button, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import ArtistInfo from "./artist-info";
import MusicTable from "./music-table";
import ArtistsRow from "./artist-slider";
import backgroundImage from "../../assets/Music/487124.jpg";
import Recommended from "./recommended";
import ResponsiveAppBar from "./ResponsiveAppBar";
import NavBarDetails from "./NavBarDetails";
import artistas from "./artists.json"

interface ArtistsDetailsProps {
  handleSelectSong: (song: string, url: string, index: number) => void;
}

const ArtistsDetails: FunctionComponent<ArtistsDetailsProps> = ({handleSelectSong}) => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [seleccionarArtista, setSeleccionarArtista] = useState<string>("");
  const [seleccionarCancion, setSeleccionarCancion] = useState<string | null>(null);
  const [showReproductor, setShowReproductor] = useState(false);

  const alternarMostrarTabla = () => {
    setMostrarTabla((prevMostrarTabla) => !prevMostrarTabla);
  };

  const handleImageClick = (name: string) => {
    setSeleccionarArtista(name);
  };

  useEffect(() => {
    if (artistas.length > 0) {
      setSeleccionarArtista(artistas[0].name);
    }
  }, []);



  return (
    <Container>
      <Img />
      <Box sx={{padding: 20, marginTop: "0rem"}} >
      <ResponsiveAppBar
        mostrarTabla={mostrarTabla}
        alternarMostrarTabla={alternarMostrarTabla}
      />
      <ArtistInfo seleccionar={seleccionarArtista}/>
      <NavBarDetails  seleccionar={seleccionarArtista} />
      <MusicTable seleccionar={seleccionarArtista} handleSelectSong={handleSelectSong}/>
      <ArtistsRow onImageClick={handleImageClick} />
      </Box>
    </Container>
  );
};

export default ArtistsDetails;

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
