import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { authData } from "../redux/slices/auth";

export default function AddBook() {
  const auth = useSelector(authData);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      title: data.get("title"),
      description: data.get("description"),
      isbn: data.get("isbn"),
      author: data.get("author"),
      publication_year: data.get("publication_year"),
    };
    const url = `${API_BASE_URL}books/add`;

    const config = {
      headers: {
        Authorization: `Token ${auth?.token}`,
        "Content-Type": "application/json",
      },
    };

    console.log("this is the value of auth token", auth);

    // axios
    //   .post(url, userData, config)
    //   .then((response) => {
    //     console.log("Response", response.data);
    //     alert(`Created Book:- ${response.data.title}`);
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add a Book
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="title"
                name="title"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="author"
                label="author"
                name="author"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="publication_year"
                label="publication year"
                type="number"
                min="1000"
                max="3000"
                defaultValue={2023}
                step="1"
                id="year"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="isbn"
                label="ISBN"
                name="isbn"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
