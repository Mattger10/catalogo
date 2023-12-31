import React, { useState, useRef, useEffect } from "react";
import { Box, styled, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import recomendado from "./recommended.json";
import RepeatIcon from "@mui/icons-material/Repeat";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlinedIcon from "@mui/icons-material/PauseCircleOutlined";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Slider from "@mui/material/Slider";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import artists from "./artists.json";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface ReproductorArtistsProps {
  seleccionar: string;
  onClose: () => void;
}

interface Song {
  name: string;
  number: string;
  duration: string;
  artists_evolved: string[];
  album: string;
  song_url: string;
  icon?: string;
}

const ReproductorArtists: FunctionComponent<ReproductorArtistsProps> = ({
  seleccionar,
  onClose,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [autoPlayNext, setAutoPlayNext] = useState(false);
  const songs = artists.flatMap((cancion) => cancion.songs);
  const findSelectedSongIndex = (songName: string): number => {
    return songs.findIndex((song) => song.songName === songName);
  };

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progress = duration ? (currentTime / duration) * 100 : 0;
  const [sliderValue, setSliderValue] = useState(0);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isRepeatMode, setIsRepeatMode] = useState(false);
  const [isShuffleMode, setIsShuffleMode] = useState(false);
  const [currentRandomIndex, setCurrentRandomIndex] = useState(-1);
  const [volume, setVolume] = useState(100);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const sliderTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentArtist, setCurrentArtist] = useState<string>("");
  const [currentSongData1, setCurrentSongData1] =
    useState<Partial<Song> | null>(null);
  const [isReproductorVisible, setIsReproductorVisible] = useState(true);
  const [isImageRotating, setIsImageRotating] = useState(false);

  useEffect(() => {
    if (seleccionar) {
      playSelectedSong(seleccionar);
      const selectedSongData = songs.find(
        (song) => song.songName === seleccionar
      );
      if (selectedSongData) {
        setCurrentArtist(selectedSongData.artists_evolved.join(", "));
      }
    }
  }, [seleccionar]);

  const handleVolumeIconMouseEnter = () => {
    setIsSliderVisible(true);
    if (sliderTimerRef.current) {
      clearTimeout(sliderTimerRef.current);
    }
  };

  const handleVolumeIconMouseLeave = () => {
    sliderTimerRef.current = setTimeout(() => {
      setIsSliderVisible(false);
    }, 5000);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      setCurrentTime(currentTime);
      setDuration(duration);
      const progressValue = (currentTime / duration) * 100;
      setSliderValue(progressValue);
      if (currentTime >= duration - 1) {
        playNextSong();
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsImageRotating(false); // Detener la rotación de la imagen
      } else {
        audioRef.current.play();
        setIsImageRotating(true); // Iniciar la rotación de la imagen
      }
      setIsPlaying((prevState) => !prevState);
    }
  };

  const playNextSong = () => {
    if (isShuffleMode) {
      playRandomSong();
    } else if (isRepeatMode) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      const currentSongData = songs[currentSongIndex];
      if (currentSongData) {
        let nextSongIndex = -1;
        for (
          let i = currentSongIndex + 1;
          i < currentSongIndex + songs.length;
          i++
        ) {
          const nextIndex = i % songs.length;
          const nextSong = songs[nextIndex];
          if (
            nextSong.artists_evolved.join(", ") ===
            currentSongData.artists_evolved.join(", ")
          ) {
            nextSongIndex = nextIndex;
            break;
          }
        }
        if (nextSongIndex !== -1) {
          setCurrentSongIndex(nextSongIndex);
          setAutoPlayNext(true);
        }
      }
    }
  };

  const playPreviousSong = () => {
    const currentSongData = songs[currentSongIndex];
    if (currentSongData) {
      let prevSongIndex = -1;
      for (
        let i = currentSongIndex - 1 + songs.length;
        i > currentSongIndex - songs.length;
        i--
      ) {
        const prevIndex = i % songs.length;
        const prevSong = songs[prevIndex];
        if (
          prevSong.artists_evolved.join(", ") ===
          currentSongData.artists_evolved.join(", ")
        ) {
          prevSongIndex = prevIndex;
          break;
        }
      }

      if (prevSongIndex !== -1) {
        setCurrentSongIndex(prevSongIndex);
        setAutoPlayNext(true);
      }
    }
  };

  const handleSongEnd = () => {
    playNextSong();
  };

  useEffect(() => {
    setIsPlaying(autoPlayNext);
  }, [autoPlayNext]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      if (isPlaying) {
        audioRef.current.play();
        setIsImageRotating(true);
      }
    }
  }, [currentSongIndex, isPlaying]);

  const playSelectedSong = (songName: string) => {
    const selectedSongIndex = findSelectedSongIndex(songName);
    setCurrentSongIndex(selectedSongIndex);
    setAutoPlayNext(true);
  };

  useEffect(() => {
    if (seleccionar) {
      playSelectedSong(seleccionar);
    }
  }, [seleccionar]);

  const handleSliderChange = (value: number) => {
    if (audioRef.current) {
      const { duration } = audioRef.current;
      const currentTime = (value * duration) / 100;
      setCurrentTime(currentTime);
      setSliderValue(value);
      audioRef.current.currentTime = currentTime;
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = progressBarRef.current;
      if (!progressBar) return;

      const rect = progressBar.getBoundingClientRect();
      const progressBarWidth = rect.width;
      const clickX = e.clientX - rect.left;
      const percentage = (clickX / progressBarWidth) * 100;
      const currentTime = (duration * percentage) / 100;

      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime);
      setSliderValue(percentage);
    }
  };

  const playRandomSong = () => {
    const currentArtistSongs = songs.filter(
      (song) => song.artists_evolved.join(", ") === currentArtist
    );
    if (currentArtistSongs.length > 0) {
      const randomIndex = Math.floor(Math.random() * currentArtistSongs.length);
      setCurrentSongData1(currentArtistSongs[randomIndex]);
      setCurrentSongIndex(songs.indexOf(currentArtistSongs[randomIndex]));
      setAutoPlayNext(true);
    }
  };

  const currentSongData = songs[currentSongIndex];

  if (currentSongData) {
    return (
      <Container>
        <div>
          <IconsContainer>
            <IconWrapper>
              <Typography
                sx={{
                  color: "#ccc",
                  position: "fixed",
                  marginLeft: "1vw",
                  marginTop: "-3.7vw",
                  fontSize: "1.2vw",
                }}
              >
                {currentSongData.songName}
              </Typography>
              <Typography
                sx={{
                  color: "#ccc",
                  position: "fixed",
                  marginLeft: "1vw",
                  marginTop: "-2vw",
                  fontSize: "0.9vw",
                }}
              >
                {currentSongData.artista}
              </Typography>
              <RepeatIcon
                onClick={() => setIsRepeatMode((prevMode) => !prevMode)}
                sx={{
                  color: isRepeatMode ? "#ed215e" : "#fff",
                  position: "fixed",
                  marginLeft: "39.4vw",
                  marginTop: "-2.3vw",
                  fontSize: "1.5vw",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#ed215e",
                  },
                }}
              />

              <SkipPreviousIcon
                onClick={playPreviousSong}
                sx={{
                  position: "fixed",
                  marginLeft: "42.5vw",
                  marginTop: "-2.5vw",
                  color: "#ccc",
                  fontSize: "2vw",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#ed215e",
                  },
                }}
              />
              {isPlaying ? (
                <PauseCircleOutlinedIcon
                  onClick={togglePlay}
                  sx={{
                    position: "fixed",
                    marginLeft: "45vw",
                    marginTop: "-3vw",
                    color: "#ccc",
                    fontSize: "3vw",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ed215e",
                    },
                  }}
                />
              ) : (
                <PlayCircleOutlineIcon
                  onClick={togglePlay}
                  sx={{
                    position: "fixed",
                    marginLeft: "45vw",
                    marginTop: "-3vw",
                    color: "#ccc",
                    fontSize: "3vw",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ed215e",
                    },
                  }}
                />
              )}

              <SkipNextIcon
                onClick={playNextSong}
                sx={{
                  position: "fixed",
                  marginLeft: "48.5vw",
                  marginTop: "-2.5vw",
                  color: "#ccc",
                  fontSize: "2vw",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#ed215e",
                  },
                }}
              />
              <ShuffleIcon
                onClick={() => {
                  if (isShuffleMode) {
                    setIsShuffleMode(false);
                    setCurrentRandomIndex(-1);
                  } else {
                    setIsShuffleMode(true);
                  }
                }}
                sx={{
                  color: isShuffleMode ? "#ed215e" : "#ccc",
                  position: "fixed",
                  marginLeft: "52vw",
                  marginTop: "-2.3vw",
                  fontSize: "1.5vw",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#ed215e",
                  },
                }}
              />

              {volume === 0 ? (
                <VolumeOffOutlinedIcon
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.volume = 1;
                      setVolume(100);
                    }
                  }}
                  onMouseEnter={handleVolumeIconMouseEnter}
                  onMouseLeave={handleVolumeIconMouseLeave}
                  sx={{
                    color: "#ccc",
                    position: "fixed",
                    marginLeft: "89vw",
                    marginTop: "-2.3vw",
                    fontSize: "1.5vw",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ed215e",
                    },
                  }}
                />
              ) : (
                <VolumeUpIcon
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.volume = 0;
                      setVolume(0);
                    }
                  }}
                  onMouseEnter={handleVolumeIconMouseEnter}
                  onMouseLeave={handleVolumeIconMouseLeave}
                  sx={{
                    color: "#ccc",
                    position: "fixed",
                    marginLeft: "89vw",
                    marginTop: "-2.3vw",
                    fontSize: "1.5vw",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ed215e",
                    },
                  }}
                />
              )}

              {isSliderVisible && (
                <Slider
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.volume = volume / 100;
                    }
                  }}
                  orientation="vertical"
                  value={volume}
                  onChange={(e, newValue) => setVolume(newValue as number)}
                  aria-labelledby="continuous-slider"
                  min={0}
                  max={100}
                  sx={{
                    position: "fixed",
                    marginLeft: "89vw",
                    marginTop: "-8.5vw",
                    fontSize: "1.5vw",
                    cursor: "pointer",
                    width: 5,
                    height: 100,
                    color: "#ed215e",
                    zIndex: 9999,
                  }}
                />
              )}
              <Img
                  src={currentSongData.icon}
                  alt=""
                  style={{
                    animation: isImageRotating
                      ? "rotation 5s linear infinite"
                      : "none",
                  }}
                />
              <CloseOutlinedIcon
                onClick={() => {
                  setIsReproductorVisible(false);
                  onClose();
                }}
                sx={{
                  position: "fixed",
                  marginLeft: "92vw",
                  marginTop: "-2.3vw",
                  fontSize: "1.5vw",
                  cursor: "pointer",
                  color: "#ccc",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#ed215e",
                  },
                }}
              />
            </IconWrapper>
          </IconsContainer>
        </div>
        {currentSongData && (
          <ProgressBarContainer
            ref={progressBarRef}
            onClick={handleProgressBarClick}
          >
            <ProgressBar progress={progress} />
          </ProgressBarContainer>
        )}
        <audio
          ref={audioRef}
          src={currentSongData?.song_url || ""}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleSongEnd}
        />
      </Container>
    );
  } else {
    return null;
  }
};

export default ReproductorArtists;

const Container = styled(Box)(() => ({
  position: "fixed",
  width: "100%",
  height: "10vh",
  left: 0,
  bottom: 0,
  backgroundColor: "#0b0c17",
}));

const Img = styled("img")(() => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "5vw",
  height: "10vh",
  borderRadius: "50%", // Agrega bordes redondeados para hacer la imagen circular
  animation: "rotation 5s linear infinite", // Aplica la animación de rotación
  zIndex: 1,
  "@keyframes rotation": {
    "0%": {
      transform: "rotate(0deg)", // Rotación inicial en 0 grados
    },
    "100%": {
      transform: "rotate(360deg)", // Rotación completa en 360 grados
    },
  },
}));

const ProgressBarContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: 4,
  backgroundColor: "#333",
  marginTop: "-5rem",
  cursor: "pointer",
  zIndex: -1000,
}));

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = styled(Box)<ProgressBarProps>(({ progress }) => ({
  position: "relative",
  width: "100%",
  height: 4,
  backgroundColor: "#333",
  marginTop: 76,
  cursor: "pointer", // Agregar estilo de cursor para indicar que es interactivo
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "#ed215e",
    width: `${progress}%`,
  },
  "&::after": {
    // Mover el círculo según el progreso de reproducción
    content: '""',
    position: "absolute",
    top: -3, // Ajustar la posición del círculo verticalmente
    right: `${100 - progress}%`, // Mover el círculo al final de la barra según el progreso
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
  "&:hover": {
    "&::after": {
      // Agregar un pseudo-elemento para mostrar el progreso en la posición del clic
      content: '""',
      position: "absolute",
      top: -3, // Ajustar la posición del círculo verticalmente
      right: `${100 - progress}%`, // Mover el círculo al final de la barra según el progreso
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "#fff",
    },
  },
}));

const IconsContainer = styled(Box)(() => ({
  position: "fixed",
  bottom: "1.5vh", // Cambia la ubicación vertical según tus necesidades
  left: "5vw", // Cambia la ubicación horizontal según tus necesidades
  display: "flex",
  alignItems: "center",
}));

const IconWrapper = styled("div")(() => ({
  marginRight: "1rem", // Cambia el espaciado entre los íconos según tus necesidades
}));
