import { FunctionComponent, useState } from "react";
import { Box, styled, InputAdornment, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: FunctionComponent<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Box sx={{ padding: 10, marginTop: "0rem", marginLeft: "64rem", marginBottom: "-1rem" }}>
      <Input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          
          backgroundColor: "#2e3b43",
          color: "#fff",
          padding: "10px 55px 10px 15px",
          border: "none",
          borderRadius: "2px",
          fontSize: "15px",
          marginTop: "-3rem",
          marginLeft: "-15rem",
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#fff" }} />
          </InputAdornment>
        }
      />
      <FavoriteBorderIcon
        sx={{
         position: "absolute",
          backgroundColor: "transparent",
          color: "#506374",
          padding: "10px 15px",
          border: "1px solid #506374",
          borderRadius: "2px",
          fontSize: "26px",
          marginLeft: "1rem",
          marginTop: "-1rem"
        }}
      />
      <GridViewIcon
        sx={{
        position: "absolute",
          backgroundColor: "transparent",
          color: "#506374",
          padding: "10px 15px",
          border: "1px solid #506374",
          borderRadius: "2px",
          fontSize: "26px",
          marginLeft: "5rem",
          marginTop: "-1rem"
        }}
      />
      <TableRowsIcon
        sx={{
          position: "absolute",
          backgroundColor: "transparent",
          color: "#506374",
          padding: "10px 15px",
          border: "1px solid #506374",
          borderRadius: "2px",
          fontSize: "26px",
          marginLeft: "9rem",
          marginTop: "-1rem"
        }}
      />
    </Box>
  );
};

export default Search;




