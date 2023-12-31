import { Box, styled, Button, Typography } from "@mui/material";
import { FunctionComponent, useState, useEffect } from "react"
import ArtistInfo from "./artist-info";
import ResponsiveAppBar from "./ResponsiveAppBar";
import MusicTable from "./music-table";
import Recommended from "./recommended";
import ArtistsRow from "./artist-slider";
import Reproductor from "./Reproductor";
import RockNacional from "./RockNacional";

interface MusicPlayerProps {
  handleSelectSong: (song: string, url: string, index: number) => void;
}

const MusicPlayer: FunctionComponent<MusicPlayerProps> = ({handleSelectSong}) => { 

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [seleccionarArtista, setSeleccionarArtista] = useState<string> ("");
  
    

    const alternarMostrarTabla = () => {
      setMostrarTabla((prevShowTable) => !prevShowTable);
    };

    const handleImageClick = (name: string) => {
        setSeleccionarArtista(name);
      };

  

    return ( 
        <Container>
            <Img />
            <ResponsiveAppBar mostrarTabla={mostrarTabla} alternarMostrarTabla={alternarMostrarTabla} />
            <Box sx={{padding: 5}} >
            <Recommended mostrarTabla={true} handleSelectSong={handleSelectSong} />
            {/* <ArtistsRow onImageClick={handleImageClick} /> */}
            </Box>
        </Container>
    )
}

export default MusicPlayer;

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
    zIndex: "-9999"
}));
