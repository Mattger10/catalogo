import { Box, Button, Typography, styled } from "@mui/material";
import { FunctionComponent, useState } from "react";
import artistas from "./artists.json";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SyncIcon from "@mui/icons-material/Sync";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./muiTheme";

interface ArtistInfoProps {
  seleccionar: string;
}

const ArtistInfo: FunctionComponent<ArtistInfoProps> = ({ seleccionar }) => {
  const seleccionarArtista = artistas.find(
    (artista) => artista.name === seleccionar
  );

  return (
    <ThemeProvider theme={theme}>
      <Row sx={{ "@media (max-width: 390px)": {
              width: "100%"
            },}}>
        {seleccionarArtista?.background_image ? (
          <ImgBg src={seleccionarArtista?.background_image} alt="" />
        ) : (
          ""
        )}
        {/* <FavoriteBorderIcon
          sx={{
            position: "absolute",
            marginTop: "0.5rem",
            marginLeft: "0.5rem",
            color: "#CDD2D9",
            cursor: "pointer",
          }}
        /> BORDE DE FAVORITOS INUTILIZABLE*/} 
        

        <Img src={seleccionarArtista?.photo_url} alt="" />
        <Typography
          color="aliceblue"
          sx={{
            position: "absolute",
            fontSize: 46,
            marginLeft: "15rem",
            marginTop: "-15rem",
            "@media (max-width: 390px)": {
              marginTop: "0rem",
              marginLeft: "32rem",
              fontSize: 36,
            },
          }}
        >
          {seleccionarArtista?.name}
        </Typography>
        <Typography
          color="#545864"
          sx={{
            position: "absolute",
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: "15rem",
            marginTop: "-11rem",
            "@media (max-width: 390px)": {
              marginTop: "3rem",
              marginLeft: "32rem",
              fontSize: 16,
            },
          }}
        >
          {seleccionarArtista?.genre?.map((genero) => genero).join(", ")}
        </Typography>
        <Typography
          color="aliceblue"
          sx={{
            position: "absolute",
            fontSize: 16,
            marginLeft: "15rem",
            marginTop: "-9rem",
            "@media (max-width: 390px)": {
              marginTop: "5rem",
              marginLeft: "32rem",
              fontSize: 22,
            },
          }}
        >
          {seleccionarArtista?.bio}
        </Typography>

        {/* <Button
        sx={{
          position: "absolute",
          border: "2px solid #ed215e",
          backgroundColor: "#ed215e",
          color: "white",
          padding: "4px 30px 4px 30px",
          marginLeft: "12.5rem",
          marginTop: "12rem",
          borderRadius: "30px",

          ":hover": {
            backgroundColor: "#ed215e",
            boxShadow: "1px 1px 10px 2px #ed215e",
          },
        }}
      >
        {" "}
        <SyncIcon
          fontSize="small"
          sx={{ marginRight: "10px", marginLeft: "-0.5rem" }}
        />
        MIX
      </Button> */}

        {/* <ShareOutlinedIcon sx={{position: "absolute", marginLeft: "18rem", marginTop: "12.2rem", color: "#ed215e", fontSize: 30, cursor: "pointer" }}/> */}
      </Row>
    </ThemeProvider>
  );
};

export default ArtistInfo;

const Row = styled(Box)(() => ({
  position: "relative",
  marginTop: "-5rem",
  marginBottom: "4rem",
  width: "90%",
}));

const Img = styled("img")(() => ({
  width: "220px",
  height: "230px",
  borderRadius: "5px",
  "@media (max-width: 390px)": {
    width: "230px",
    height: "230px",
    borderRadius: "5px",
    marginLeft: "50rem",
  },
}));

const ImgBg = styled("img")(() => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "auto",
  zIndex: "-9999",
  filter: "blur(2px)",
  opacity: 0.1,
}));
