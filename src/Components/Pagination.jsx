import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function PaginationRounded({ handlePagination, totalPages }) {
  const paginationStyle = {
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "transparent",
    },
  };
  return (
    <Stack spacing={2} sx={{ marginBottom: 5 }}>
      <Pagination
        sx={paginationStyle}
        count={totalPages}
        variant="outlined"
        shape="rounded"
        onChange={handlePagination}
      />
    </Stack>
  );
}
