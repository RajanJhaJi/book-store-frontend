import React, { useEffect, useState } from "react";
import PaginationRounded from "./Pagination";
import { Container, Box } from "@mui/material";
import BookCard from "./BookCard";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import Loader from "./UI/Loading";
import Search from "./UI/Search";
import { useSearchParams } from "react-router-dom";

const Books = () => {
  const [responseObj, setResponseObj] = useState({
    books: [],
    pages: 0,
    isLoading: true,
  });
  const [searchParams] = useSearchParams();
  const [queryParam, setQueryParam] = useState(
    searchParams ? searchParams.get("search") : ""
  );
  const [page, setPage] = useState(1);

  for (const entry of searchParams.entries()) {
    console.log(entry);
  }
  const navigate = useNavigate();

  useEffect(() => {
    const query = queryParam ? `&search=${queryParam}` : "";
    queryParam ? navigate(`?page=${page}${query}`) : navigate(`?page=${page}`);
    setResponseObj((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    console.log("this is the value of query", query);

    const url = `${API_BASE_URL}books/?page=${page}${query}`;

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
  }, [page, queryParam]);

  const handleSearch = (inputRef) => {
    setQueryParam(inputRef.current.value);
  };

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
            <Box
              sx={{
                marginBottom: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Search handleSearch={handleSearch} value={queryParam} />
            </Box>
            <BookCard booksList={responseObj?.books} />
            {responseObj?.pages > 1 ? (
              <PaginationRounded
                handlePagination={handlePagination}
                totalPages={responseObj?.pages}
              />
            ) : null}
          </>
        ) : (
          <Loader />
        )}
      </Box>
    </Container>
  );
};

export default Books;
