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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import recommendedData from "./recommended.json";

interface RecommendedProps {
  mostrarTabla: boolean;
  handleSelectSong: (song: string, url: string, index: number) => void;
}

const Recommended: React.FunctionComponent<RecommendedProps> = ({
  mostrarTabla,
  handleSelectSong,
}) => {
  const allSongs = recommendedData.find((songs) => songs.songs);
  const songs = allSongs ? allSongs.songs : [];
  const [seleccionarCancion, setSeleccionarCancion] = React.useState<
    string | null
  >(null);
  const [verTodasLasCanciones, setVerTodasLasCanciones] = React.useState(false);
  const [showReproductor, setShowReproductor] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  // Function to format artist names using Intl.ListFormat('es').format
  const formatArtists = (artists: string[]) => {
    const listFormat = new Intl.ListFormat("es", {
      style: "long",
      type: "conjunction",
    });
    return listFormat.format(artists);
  };

  const [favoritos, setFavoritos] = React.useState<string[]>(() => {
    // Recuperar el estado de favoritos del localStorage al cargar el componente
    const storedFavoritos = localStorage.getItem("favoritos");
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });

  const getShareUrl = (song: string) => {
    // Aquí debes obtener la URL de la canción según la lógica de tu aplicación.
    // Por ejemplo, si las canciones tienen una URL guardada en el objeto `song`, puedes hacer:
    const selectedSong = songs.find((item) => item.songName === song);
    return selectedSong ? selectedSong.song_url : "";
  };

  const handleShareOnWhatsApp = (song: string) => {
    const urlToShare = getShareUrl(song);
    if (urlToShare) {
      const textToShare = `Escucha esta canción: ${urlToShare}`;
      const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
        textToShare
      )}`;
      window.open(whatsappShareUrl, "_blank");
    }
  };

  const handleToggleFavorito = (songName: string) => {
    if (favoritos.includes(songName)) {
      setFavoritos((prevFavoritos) =>
        prevFavoritos.filter((song) => song !== songName)
      );
    } else {
      setFavoritos((prevFavoritos) => [...prevFavoritos, songName]);
    }
  };

  React.useEffect(() => {
    // Guardar el estado de favoritos en el localStorage al actualizarlo
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const handlePlayPause = (url: string, song: string, index: number) => {
    handleSelectSong(song, url, index);
    setShowReproductor(true);
  };

  if (allSongs) {
    return (
      <div>
        {mostrarTabla ? (
          <Container>
            <TableContainer
              component={Paper}
              sx={{
                backgroundColor: "transparent",
                padding: 2,
                marginTop: "5rem",
                marginBottom: "1rem",
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
                      sx={{
                        backgroundColor: "transparent",
                        color: "aliceblue",
                      }}
                    >
                      <Typography sx={{ marginLeft: "4rem" }}>#</Typography>
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
                      <Typography sx={{ marginLeft: "-6rem" }}>CANCIONES</Typography>
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
                      <Typography sx={{ marginLeft: "-5rem" }}>
                        ARTISTA
                      </Typography>
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
                      <Typography sx={{ marginLeft: "-12rem" }}>
                        ALBUM
                      </Typography>
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
                      DURACIÓN
                    </TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recommendedData[0].songs.map((song, index) => {
                    return verTodasLasCanciones || index < 10 ? (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            backgroundColor: "transparent",
                            color: "white",
                            width: "5rem",
                            position: "relative",
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
                            <ImgIcon
                              width={40}
                              height={40}
                              src={song.icon}
                              alt=""
                            />
                            <Typography sx={{ marginLeft: "3.5rem" }}>
                              {song.number}
                            </Typography>
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
                              onClick={() =>
                                handleToggleFavorito(song.songName)
                              }
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
                              onClick={() =>
                                handleToggleFavorito(song.songName)
                              }
                            />
                          )}

                          <PlayCircleOutlineIcon
                            sx={{
                              position: "absolute",
                              marginLeft: "7rem",
                              marginTop: "-0.9rem",
                              cursor: "pointer",
                              "&:hover": {
                                color: "#ed215e", // Cambiar el color a tu preferencia cuando el cursor esté sobre el ícono
                              },
                            }}
                            onClick={() =>
                              handlePlayPause(
                                song.song_url,
                                song.songName,
                                index
                              )
                            }
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
                            width: "32rem",
                          }}
                        >
                          <Typography sx={{ marginLeft: "10rem" }}>
                            {formatArtists(song.artists_evolved)}
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            backgroundColor: "transparent",
                            color: "aliceblue",
                          }}
                        >
                          <Typography sx={{ marginLeft: "-2rem" }}>
                            {song.album}
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            backgroundColor: "transparent",
                            color: "aliceblue",
                          }}
                        >
                          {song.duration}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            backgroundColor: "transparent",
                            color: "aliceblue",
                          }}
                        >
                        
                        </TableCell>
                      </TableRow>
                    ) : null;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <ContainerButton>
              <StyledButton
                onClick={() => setVerTodasLasCanciones(!verTodasLasCanciones)}
                sx={{ marginTop: "1rem" }}
              >
                {verTodasLasCanciones ? (
                  <Typography sx={{ letterSpacing: "0.2rem" }}>
                    Mostrar menos
                    <KeyboardArrowUpIcon
                      sx={{
                        position: "absolute",
                        marginLeft: "0.5rem",
                        marginTop: "-0.1rem",
                        fontSize: 25,
                      }}
                    />
                  </Typography>
                ) : (
                  <Typography sx={{ letterSpacing: "0.2rem" }}>
                    Mostrar más
                    <KeyboardArrowDownIcon
                      sx={{
                        position: "absolute",
                        marginLeft: "0.5rem",
                        marginTop: "-0.1rem",
                        fontSize: 25,
                      }}
                    />
                  </Typography>
                )}
              </StyledButton>
            </ContainerButton>
          </Container>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
};

export default Recommended;

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
  marginBottom: "5rem",
}));

const Container = styled("div")(() => ({}));
