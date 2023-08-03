import { Box, styled } from "@mui/material";
import { FunctionComponent, useState } from "react"
import ResponsiveAppBar from "./ResponsiveAppBar";
import RockNacional from "./RockNacional";

interface PagRockNacionalProps {
  handleSelectSong: (song: string, url: string, index: number) => void;
}

const PagRockNacional: FunctionComponent<PagRockNacionalProps> = ({handleSelectSong}) => { 

    const [mostrarTabla, setMostrarTabla] = useState(true);


    const alternarMostrarTabla = () => {
      setMostrarTabla((prevShowTable) => !prevShowTable);
    };


  

    return ( 
        <Container>
            <Img />
            <ResponsiveAppBar mostrarTabla={mostrarTabla} alternarMostrarTabla={alternarMostrarTabla} />
            <Box sx={{padding: 5}} >
            <RockNacional mostrarTabla={true} handleSelectSong={handleSelectSong}  />
            </Box>
        </Container>
    )
}

export default PagRockNacional;

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
