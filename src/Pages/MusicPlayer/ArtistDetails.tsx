import { Box, styled } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import ArtistInfo from "./artist-info";
import MusicTable from "./music-table";
import ArtistsRow from "./artist-slider";
import ResponsiveAppBar from "./ResponsiveAppBar";
import NavBarDetails from "./NavBarDetails";
import artistas from "./artists.json";
import albums from "./albums.json";
import Album from "./Albums";
import AlbumsTable from "./AlbumsTable";

interface ArtistsDetailsProps {
  handleSelectSong: (song: string, url: string, index: number) => void;
}

const ArtistsDetails: FunctionComponent<ArtistsDetailsProps> = ({
  handleSelectSong,
}) => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [seleccionarArtista, setSeleccionarArtista] = useState<string>("");
  const [seleccionarCancion, setSeleccionarCancion] = useState<string | null>(
    null
  );
  const [showReproductor, setShowReproductor] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<string>("");
  const [showAlbumSongs, setShowAlbumSongs] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [showMusicTable, setShowMusicTable] = useState(true);

  const toggleAlbumSongs = (albumName: string) => {
    setShowAlbumSongs((prevShowAlbumSongs) => !prevShowAlbumSongs);
    setSelectedAlbum(showAlbumSongs ? null : albumName);
  };


  const alternarMostrarTabla = () => {
    setMostrarTabla((prevMostrarTabla) => !prevMostrarTabla);
  };

  const handleImageClick = (name: string) => {
    setSelectedArtist(name);
  };

  useEffect(() => {
    if (artistas.length > 0) {
      setSeleccionarArtista(artistas[0].name);
    }
  }, []);

  const handleShowOverview = () => {
    setShowAlbumSongs(false); // Oculta el Album cuando se muestra Overview
    setShowMusicTable(true); // Muestra MusicTable cuando se muestra Overview
    setSelectedAlbum(null); // Reinicia el álbum seleccionado cuando se muestra Overview
  };

  

  return (
    <Container>
      <Img />
      <Box sx={{ padding: 20, marginTop: "0rem" }}>
        <ResponsiveAppBar
          mostrarTabla={mostrarTabla}
          alternarMostrarTabla={alternarMostrarTabla}
        />
        {selectedArtist && (
          <>
            <ArtistInfo seleccionar={selectedArtist} />
            <NavBarDetails
              seleccionar={selectedArtist}
              handleSelectSong={handleSelectSong}
              toggleAlbumSongs={toggleAlbumSongs}
              handleShowOverview={handleShowOverview} // Pasa la función aquí
            />
            {!showAlbumSongs && showMusicTable && (
              <MusicTable
                seleccionar={selectedArtist}
                handleSelectSong={handleSelectSong}
              />
            )}

            {/* {showAlbumSongs && selectedAlbum && (
              <Album
                selectedAlbum={selectedAlbum}
                toggleAlbumSongs={toggleAlbumSongs}
              />
            )} */}

   
              {/* <AlbumsTable selectedAlbum={selectedAlbum}/> */}
       
          </>
        )}
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
  width: "100%",
  height: "100%",
  zIndex: "-9999",
}));
