import { Route, Routes, useLocation } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import { StayUpdated } from "./Pages/StayUpdate";
import Space from "./Pages/Space";
import Destination from "./Pages/Space/Destino/Destination";
import Moon from "./Pages/Space/Destino/Moon";
import Europa from "./Pages/Space/Destino/Europa";
import Titan from "./Pages/Space/Destino/Titan";
import Tripulacion from "./Pages/Space/Tripulacion/Tripulacion";
import Commander from "./Pages/Space/Tripulacion/commander";
import Pilot from "./Pages/Space/Tripulacion/Pilot";
import Specialist from "./Pages/Space/Tripulacion/Specialist";
import Technology from "./Pages/Space/Technology";
import Capsule from "./Pages/Space/Technology/Capsule";
import Spaceport from "./Pages/Space/Technology/Spaceport";
import Checkout from "./Pages/CreditCardCheckout";
import MusicPlayer from "./Pages/MusicPlayer";
import { useEffect, useState } from "react";
import Reproductor from "./Pages/MusicPlayer/Reproductor";
import ReproductorArtists from "./Pages/MusicPlayer/ReproductorArtists";
import ArtistsDetails from "./Pages/MusicPlayer/ArtistDetails";
import RockNacional from "./Pages/MusicPlayer/RockNacional";
import PagRockNacional from "./Pages/MusicPlayer/PagRockNacional";
import ReproductorRock from "./Pages/MusicPlayer/ReproductorRock";
import PagFavoritos from "./Pages/MusicPlayer/pagFavoritos";
import ReproductorFavoritos from "./Pages/MusicPlayer/ReproductorFavoritos";
import rocknacional from "./Pages/MusicPlayer/Rocknacional.json"
import recommended from "./Pages/MusicPlayer/recommended.json"
import artistas from "./Pages/MusicPlayer/artists.json"
import PagSearch from "./Pages/MusicPlayer/pagSearch";
import Books from "./Pages/Librería/books";
import Details from "./Pages/Librería/details";
import Autores from "./Pages/Librería/autores";
import Libros from "./Pages/Librería/libros";






const App: React.FC = () => {
  const [seleccionarCancion, setSeleccionarCancion] = useState<string | null>(null);
  const [showReproductor, setShowReproductor] = useState(false);
  const [selectedSong, setSelectedSong] = useState<string>("");
  const [favoritos, setFavoritos] = useState<string[]>(() => {
    const storedFavoritos = localStorage.getItem("favoritos");
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });
 
  const [showReproductorArtists, setShowReproductorArtists] = useState(false);
  const [showReproductorRock, setShowReproductorRock] = useState(false)
  const [showReproductorRecommended, setShowReproductorRecommended] = useState(false)
  const [mostrarReproductor, setMostrarReproductor] = useState(false);
  const [mostrarReproductorFavoritos, setMostrarReproductorFavoritos] =
    useState(false);
  

  const handleSelectSong = (song: string, url: string) => {
    setSeleccionarCancion(song);
    setSelectedSong(song);
    setShowReproductor(true);
    setShowReproductorRock(true);
    setShowReproductorArtists(true);
    setShowReproductorRecommended(true);
    setMostrarReproductorFavoritos(true);
  };

  const handleSelect = (song: string) => {
    setSeleccionarCancion(song);
    setSelectedSong(song);
    setMostrarReproductorFavoritos(true); // Mostrar el reproductor de favoritos
  };
  
  const handleCloseReproductor = () => {
    setShowReproductor(false);
    setShowReproductorArtists(false);
    setShowReproductorRock(false);
    setShowReproductorRecommended(false);
    setMostrarReproductorFavoritos(false)
  };

  const location = useLocation();

  const allSongs = [
    ...rocknacional[0].songs,
    ...recommended[0].songs,
    ...artistas.flatMap((artista) => artista.songs),
  ];

  // Filtrar las canciones favoritas de todas las canciones disponibles
  const cancionesFavoritas = allSongs.filter((song) =>
    favoritos.includes(song.songName)
  );

 
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage  />} />
        <Route path="/stay-updated" element={<StayUpdated />} />
        <Route path="/space" element={<Space />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/marte" element={<Destination />} />
        <Route path="/destination/moon" element={<Moon />} />
        <Route path="/destination/europa" element={<Europa />} />
        <Route path="/destination/titan" element={<Titan />} />
        <Route path="/tripulacion" element={<Tripulacion />} />
        <Route path="/tripulacion/engineer" element={<Tripulacion />} />
        <Route path="/tripulacion/commander" element={<Commander />} />
        <Route path="/tripulacion/pilot" element={<Pilot />} />
        <Route path="/tripulacion/specialist" element={<Specialist />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/vehicle" element={<Technology />} />
        <Route path="/technology/capsule" element={<Capsule />} />
        <Route path="/technology/spaceport" element={<Spaceport />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/music' element={<MusicPlayer handleSelectSong={handleSelectSong} />} />
        <Route path='/artist/:artistName' element={<ArtistsDetails handleSelectSong={handleSelectSong} />} />
        <Route path="/rocknacional" element={<PagRockNacional handleSelectSong={handleSelectSong}/>}/>
        <Route path="/favoritos" element={<PagFavoritos handleSelect={handleSelect} />} />
        <Route path="/search" element={<PagSearch handleSelect={handleSelect} handleSelectSong={handleSelectSong} />} />
        <Route path="/books" element={<Libros/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/autores" element={<Autores/>} />
      </Routes>
      {(location.pathname === '/music' || location.pathname.startsWith('/artist/') || location.pathname.startsWith('/rocknacional') || location.pathname.startsWith('/favoritos') || location.pathname.startsWith('/search') )  && seleccionarCancion && showReproductor && cancionesFavoritas && (
        <div>
          
            <Reproductor seleccionar={seleccionarCancion} onClose={handleCloseReproductor}/> 
          
          
            <ReproductorArtists seleccionar={seleccionarCancion} onClose={handleCloseReproductor} />   
          
          
            <ReproductorRock seleccionar={seleccionarCancion} onClose={handleCloseReproductor}/>     
         
         
     
     
        </div>
      )}

{(location.pathname === '/music' || location.pathname.startsWith('/artist/') || location.pathname.startsWith('/rocknacional') || location.pathname.startsWith('/favoritos')  || location.pathname.startsWith('/search')) && mostrarReproductorFavoritos && seleccionarCancion && (
  <div>
        <ReproductorFavoritos
          cancionesFavoritas={cancionesFavoritas}
          seleccionarCancion={seleccionarCancion}
          onClose={handleCloseReproductor}
        />
</div>
        
      )}
      
      
      
    </div>
  );
}

export default App;