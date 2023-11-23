import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';




function ResponsiveAppBar() {
 

  return (
    <AppBar  sx={{ backgroundColor: '#1e272e' , width: "20rem", height: "100%", left: 0}}>
      <Container maxWidth="xl">
       <Link to="/books"><h1>Libros</h1></Link>
       <Link to="/autores"><h1>Autores</h1></Link>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;