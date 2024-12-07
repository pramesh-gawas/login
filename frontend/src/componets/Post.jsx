import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { CreatePost } from "./api";

export const Post = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(data);
  };

  return (
    <form onSubmit={handlesubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          width: 500,
          height: 200,
          border: 3,
          borderRadius: 1,
          bgcolor: "#ffff",
          gap: 1,
        }}
      >
        <label htmlFor="">title</label>
        <input type="text" />
        <label htmlFor="">topic</label>
        <input type="text" />
        <label htmlFor="">like</label>
        <input type="Number" />
        <Button variant="contained" type="submit">
          submit
        </Button>
      </Box>
    </form>
  );
};
