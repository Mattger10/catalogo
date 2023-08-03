import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, styled, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ShareIcon from "@mui/icons-material/Share";
import rocknacional from "./Rocknacional.json";
import recommended from "./recommended.json";
import artistas from "./artists.json";




export interface CancionFavorita {
  songName: string;
  song_url: string;
  icon?: string; // Haz que la propiedad 'icon' sea opcional
  artists_evolved: string[];
  album: string// Agrega aquí cualquier otra información que necesites para el reproductor
  number: string
  duration: string
}

interface FavoritosProps {
  mostrarTabla: boolean;
  handleSelect: (song: string) => void;
}

const Favoritos: React.FunctionComponent<FavoritosProps> = ({
  handleSelect, mostrarTabla 
}) => {
  
  const [selectedSong, setSelectedSong] = React.useState<string | null>(null);
  const [favoritos, setFavoritos] = React.useState<string[]>(() => {
    const storedFavoritos = localStorage.getItem("favoritos");
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const allSongs = [
    ...rocknacional[0].songs,
    ...recommended[0].songs,
    ...artistas.flatMap((artista) => artista.songs),
  ];

const cancionesFavoritas = allSongs.filter((song) =>
favoritos.includes(song.songName)
);

  const handleToggleFavorito = (songName: string) => {
    if (favoritos.includes(songName)) {
      setFavoritos((prevFavoritos) =>
        prevFavoritos.filter((song) => song !== songName)
      );
    } else {
      setFavoritos((prevFavoritos) => [...prevFavoritos, songName]);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  };

  React.useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const [mostrarReproductorFavoritos, setMostrarReproductorFavoritos] = React.useState(false);

  const handlePlayPause = (song: string) => { 
    handleSelect(song)
   setMostrarReproductorFavoritos(true);
  };

  const handleCloseReproductor = () => {
    setMostrarReproductorFavoritos(false);
  };

  if (cancionesFavoritas.length === 0) {
    return (
      <Typography
        sx={{
          color: "white",
          fontSize: "38px",
          marginTop: "20rem",
          fontFamily: "font2",
        }}
      >
        No hay favoritos seleccionados.
      </Typography>
    );
  } else { 

    return (
      <div>
        
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "transparent",
            padding: 2,
            marginTop: "5rem",
            borderBottom: "1px solid white",
            borderRadius: "0px",
            boxShadow: "none",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <Typography sx={{ color: "white", fontSize: "22px" }}>
                Top Tracks
              </Typography>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ backgroundColor: "transparent", color: "aliceblue" }}
                >
                  #
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "transparent",
                    color: "aliceblue",
                    fontSize: "14px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  <Typography sx={{ marginLeft: "-6rem" }}>SONG</Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "transparent",
                    color: "aliceblue",
                    fontSize: "14px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  <Typography sx={{ marginLeft: "-5rem" }}>ARTIST</Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "transparent",
                    color: "aliceblue",
                    fontSize: "14px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  ALBUM
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "transparent",
                    color: "aliceblue",
                    fontSize: "14px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  TIME
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "transparent",
                    color: "aliceblue",
                    fontSize: "14px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  OPTIONS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cancionesFavoritas.map((song, index) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      backgroundColor: "transparent",
                      color: "white",
                      width: "5rem",
                    }}
                  >
                    <Typography
                      sx={{
                        position: "absolute",
                        fontSize: 16,
                        marginTop: "-0.9rem",
                        marginLeft: "-1rem",
                      }}
                    >
                      {" "}
                      <ImgIcon width={40} height={40} src={song.icon} alt="" />
                      <Typography sx={{ marginLeft: "3.5rem" }}></Typography>
                    </Typography>
                    {favoritos.includes(song.songName) ? (
                      <FavoriteIcon
                        sx={{
                          position: "absolute",
                          marginTop: "-0.8rem",
                          marginLeft: "4.5rem",
                          color: "#ed215e",
                          cursor: "pointer",
                          fontSize: 20,
                        }}
                        onClick={() => handleToggleFavorito(song.songName)}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        sx={{
                          position: "absolute",
                          marginTop: "-0.8rem",
                          marginLeft: "4.5rem",
                          color: "#CDD2D9",
                          cursor: "pointer",
                          fontSize: 20,
                        }}
                        onClick={() => handleToggleFavorito(song.songName)}
                      />
                    )}
                    <PlayCircleOutlineIcon
                    
                      onClick={() =>
                        handlePlayPause(song.song_url)
                      }
                      sx={{
                        position: "absolute",
                        marginLeft: "7rem",
                        marginTop: "-0.9rem",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#ed215e",
                        },
                      }}
                    />
                    
                    <audio
                      ref={audioRef}
                      controls
                      style={{ display: "none" }}
                    ></audio>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      backgroundColor: "transparent",
                      color: "aliceblue",
                      width: "20rem",
                    }}
                  >
                    
                    <Typography sx={{ marginLeft: "5.5rem" }}>
                      {song.songName}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      backgroundColor: "transparent",
                      color: "aliceblue",
                      width: "29rem",
                    }}
                  >
                    <Typography sx={{ marginLeft: "10rem" }}>
                      {song.artists_evolved}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ backgroundColor: "transparent", color: "aliceblue" }}
                  >
                    {song.album}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ backgroundColor: "transparent", color: "aliceblue" }}
                  >
                    {song.duration}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ backgroundColor: "transparent", color: "aliceblue" }}
                  >
                    <ShareIcon />
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      



      </div>
    );
  }
};


export default Favoritos;

const ImgIcon = styled("img")(() => ({
  position: "absolute",
  marginTop: "-0.4rem",
}));

const StyledButton = styled(Button)(() => ({
  color: "#fff",
  ":hover": {
    backgroundColor: "transparent",
  },
}));

const ContainerButton = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));
