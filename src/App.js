import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  AddBook,
  Navbar,
  Books,
  RegisterUser,
  LoginUser,
  LogoutUser,
} from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#fff" }}>
        <Navbar />
        <Routes>
          <Route path="/books" exact element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/logout" element={<LogoutUser />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
