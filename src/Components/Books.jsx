import React, { useEffect, useState } from "react";
import PaginationRounded from "./Pagination";
import { Container, Box } from "@mui/material";
import BookCard from "./BookCard";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import Loader from "./UI/Loading";

const Books = () => {
  const [responseObj, setResponseObj] = useState({
    books: [],
    pages: 1,
    isLoading: true,
  });
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?page=${page}`);
    setResponseObj((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const url = `${API_BASE_URL}books/?page=${page}`;

    console.log("hitting url", url);

    axios
      .get(url)
      .then((response) => {
        const { books, pages, page } = response.data;
        setResponseObj((prevState) => ({
          ...prevState,
          books,
          pages,
        }));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setResponseObj((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      });
  }, [page]);

  // Handle Pagination
  const handlePagination = (event, value) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!responseObj.isLoading ? (
          <>
            <BookCard booksList={responseObj?.books} />
            <PaginationRounded
              handlePagination={handlePagination}
              totalPages={responseObj?.pages}
            />
          </>
        ) : (
          <Loader />
        )}
      </Box>
    </Container>
  );
};

export default Books;
