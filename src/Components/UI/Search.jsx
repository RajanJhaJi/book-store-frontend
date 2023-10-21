import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { useRef } from "react";

export default function Search({ handleSearch, queryParam }) {
  const inputRef = useRef(queryParam);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputRef);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleSearch(inputRef);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: "2px 4px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "80vw",
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "40vw",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, justifyContent: "flex-end" }}
          placeholder="Search for books & authors"
          inputRef={inputRef}
          value={queryParam}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
}
