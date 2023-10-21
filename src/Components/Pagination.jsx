import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function PaginationRounded({ handlePagination, totalPages }) {
  return (
    <Stack spacing={2} sx={{ marginBottom: 5 }}>
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        onChange={handlePagination}
      />
    </Stack>
  );
}
