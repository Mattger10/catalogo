import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Typography, Button, styled } from "@mui/material";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import recommendedData from "./recommended.json";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

interface AppBarProps {
  mostrarTabla: boolean;
  alternarMostrarTabla: () => void;
}

const ResponsiveAppBar: React.FunctionComponent<AppBarProps> = ({
  mostrarTabla,
  alternarMostrarTabla,
}) => {
  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#1d1e32",
        height: "4rem",
        width: "100%",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", width: "90rem" },
          }}
        >
          {recommendedData.map((artist, index) => {
            return artist ? (
              <Ul key={index}>
                <Link to="/">
                  {" "}
                  <HomeOutlinedIcon
                    sx={{
                      position: "absolute",
                      color: "#ccc",
                      marginLeft: "-10rem",
                      fontSize: 36,
                      "&:hover": { color: "#ed215e" },
                    }}
                  />{" "}
                </Link>
                <Link to="/artist/:artistName">
                  <StyledButton> ARTISTAS </StyledButton>
                </Link>
                <Link to="/music">
                  {" "}
                  <StyledButton>ÉXITOS</StyledButton>
                </Link>
                <Link to="/rocknacional">
                  <StyledButton> ROCK NACIONAL </StyledButton>
                </Link>
                <Link to="/favoritos">
                  <StyledButton> MIS FAVORITOS </StyledButton>
                </Link>
                <Link to="/search">
                  {" "}
                  <SearchIcon
                    sx={{
                      marginLeft: "37rem",
                      marginTop: "0.5rem",
                      color: "#6e717a",
                      transition: "color 0.3s",
                      "&:hover": {
                        color: "#ed215e",
                      },
                    }}
                  />{" "}
                </Link>
              </Ul>
            ) : null;
          })}
        </Box>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;

const Ul = styled("ul")(() => ({
  listStyleType: "none",
  display: "flex",
  marginTop: "1rem",
  marginLeft: "0rem",
}));

const StyledButton = styled(Button)(() => ({
  border: "none",
  backgroundColor: "none",
  height: "3rem",
  color: "#6e717a",
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "0.2rem",
  cursor: "pointer",
  padding: "0px 20px 0px 20px ",
  width: "190px",
  "&:hover": {
    borderBottom: "3px solid #ed215e",
    backgroundColor: "transparent",
    borderRadius: "0px",
    color: "#fff",
  },

  "&:selectedButton": {
    borderBottom: "3px solid #fff",
  },
}));
