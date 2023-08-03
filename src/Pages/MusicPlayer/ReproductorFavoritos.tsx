import React, { useState, useRef, useEffect } from "react";
import { CancionFavorita } from "./Favoritos";
import { Box, styled, Typography } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlinedIcon from "@mui/icons-material/PauseCircleOutlined";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Slider from "@mui/material/Slider";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface ReproductorFavoritosProps {
  cancionesFavoritas: CancionFavorita[]; // Define el tipo de 'cancionesFavoritas'
  seleccionarCancion: string; // Agrega esta prop para obtener la canción seleccionada
  onClose: () => void;
}

const ReproductorFavoritos: React.FC<ReproductorFavoritosProps> = ({
  cancionesFavoritas, seleccionarCancion, onClose
}) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Estado para controlar el volumen
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const sliderTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progress = duration ? (currentTime / duration) * 100 : 0;
  const [sliderValue, setSliderValue] = useState(0);
  const [isShuffleMode, setIsShuffleMode] = useState(false);
  const [isRepeatMode, setIsRepeatMode] = useState(false);
  const [autoPlayNext, setAutoPlayNext] = useState(false);
  const [currentRandomIndex, setCurrentRandomIndex] = useState(-1);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isReproductorVisible, setIsReproductorVisible] = useState(true);
  

  const findSelectedSongIndex = (songName: string): number => {
    return cancionesFavoritas.findIndex((song) => song.song_url === songName);
  };

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
      } else {
        audioRef.current.play();
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
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % cancionesFavoritas.length);
      setAutoPlayNext(true);
    }
  };

  const playPreviousSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + cancionesFavoritas.length) % cancionesFavoritas.length
    );
    setAutoPlayNext(true);
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
      }
    }
  }, [currentSongIndex, isPlaying]);
  

  

  const playSelectedSong = (songName: string) => {
    const selectedSongIndex = findSelectedSongIndex(songName);
    setCurrentSongIndex(selectedSongIndex);
    setAutoPlayNext(true);
  };

  useEffect(() => {
    if (seleccionarCancion) {
      playSelectedSong(seleccionarCancion);
    }
  }, [seleccionarCancion]);


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
    const randomIndex = Math.floor(Math.random() * cancionesFavoritas.length);
    setCurrentRandomIndex(randomIndex);
    setCurrentSongIndex(randomIndex);
    setAutoPlayNext(true);
  };


  if (cancionesFavoritas[currentSongIndex] && isReproductorVisible) {

  return (
    <Container>
      <div>
        <IconsContainer>
          <IconWrapper>
            <Img src={cancionesFavoritas[currentSongIndex].icon} alt="" />
            <Typography
              sx={{
                color: "#ccc",
                position: "fixed",
                marginLeft: "1vw",
                marginTop: "-3.7vw",
                fontSize: "1.2vw",
              }}
            >
              {cancionesFavoritas[currentSongIndex].artists_evolved.join(", ")}
            </Typography>
            <Typography
              sx={{
                color: "#ccc",
                position: "fixed",
                marginLeft: "1vw",
                marginTop: "-2vw",
                fontSize: "1vw",
              }}
            >
              {cancionesFavoritas[currentSongIndex].songName}
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
                    audioRef.current.volume = 1; // Establecer el volumen a 1 (activar el sonido)
                    setVolume(100); // Actualizar el estado del volumen
                  }
                }}
                onMouseEnter={handleVolumeIconMouseEnter} // Manejar el evento onMouseEnter para mostrar el Slider
                onMouseLeave={handleVolumeIconMouseLeave} // Manejar el evento onMouseLeave para ocultar el Slider después de 5 segundos
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
                    audioRef.current.volume = 0; // Establecer el volumen a 0 (silenciar)
                    setVolume(0); // Actualizar el estado del volumen
                  }
                }}
                onMouseEnter={handleVolumeIconMouseEnter} // Manejar el evento onMouseEnter para mostrar el Slider
                onMouseLeave={handleVolumeIconMouseLeave} // Manejar el evento onMouseLeave para ocultar el Slider después de 5 segundos
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
                  zIndex: 99999,
                }}
              />
            )}
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

            {/* <PlaylistAddIcon sx={{ position: "fixed", marginLeft: "96vw", marginTop: "-2rem", color: "#ccc", fontSize: 28, cursor: "pointer" }} /> */}
          </IconWrapper>
        </IconsContainer>
      </div>
      {cancionesFavoritas[currentSongIndex] && (
        <ProgressBarContainer
          ref={progressBarRef}
          onClick={handleProgressBarClick}
        >
          <ProgressBar progress={progress} />
        </ProgressBarContainer>
      )}
      <audio
        ref={audioRef}
        src={cancionesFavoritas[currentSongIndex].song_url || ""}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
      />

      {/* ... (código previo) */}
    </Container>
  );
} else {
  return null;
}
};

export default ReproductorFavoritos;

const Container = styled(Box)(() => ({
position: "fixed",
width: "100vw",
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
}));

const ProgressBarContainer = styled(Box)(() => ({
position: "relative",
width: "100%",
height: 4,
backgroundColor: "#333",
marginTop: "-5rem",
cursor: "pointer",
zIndex: -999,
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
