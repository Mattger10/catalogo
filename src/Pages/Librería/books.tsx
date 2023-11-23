import { FunctionComponent, useState } from "react";
import ResponsiveAppBar from "./NavBar";
import { Box, styled, InputAdornment, Typography } from "@mui/material";
import Search from "./Search";
import Libros from "./libros";
import Details from "./details";

interface booksProps {}

const Books: FunctionComponent<booksProps> = () => {
  return (
    <Container>
      <Img />
      <ResponsiveAppBar />
      <Libros />
    </Container>
  );
};

export default Books;

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Img = styled("div")(() => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "#22252a",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: "-9999",
}));
