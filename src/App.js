import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  AddBook,
  Navbar,
  Books,
  RegisterUser,
  LoginUser,
  LogoutUser,
} from "./Components";
import { useSelector } from "react-redux";
import { authData } from "./redux/slices/auth";

const App = () => {
  const auth = useSelector(authData);
  console.log("this is the value of auth in app", auth);
  return (
    <BrowserRouter>
      <Box sx={{ background: "#fff" }}>
        <Navbar />
        <Routes>
          <Route exact path="/books/add" element={<AddBook />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/logout" element={<LogoutUser />} />
          <Route path="/books" exact element={<Books />} />
          <Route path="*" element={<Navigate to="/books" />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
