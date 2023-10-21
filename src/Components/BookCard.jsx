import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

export default function BookCard({ booksList }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "85vw",
      }}
    >
      <Box
        sx={{
          marginBottom: 4,
          borderRadius: 2,
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr" },
          gap: 2,
          width: "100%",
        }}
      >
        {booksList.map((book) => (
          <Item
            key={book.id}
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingX: 2,
              alignItems: "flex-start",
              p: 1,
            }}
          >
            <Typography component="h1" variant="h6">
              {book.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                component="h3"
                variant="subtitle1"
                sx={{ paddingRight: 2 }}
              >
                By : {book.author}
              </Typography>
              <Typography
                component="h3"
                variant="subtitle1"
                sx={{ paddingRight: 2 }}
              >
                |
              </Typography>
              <Typography component="h3" variant="subtitle1">
                {book.publication_year}
              </Typography>
            </Box>
          </Item>
        ))}
      </Box>
    </Grid>
  );
}
