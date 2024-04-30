import React from "react";
import { Modal as MuiModal, Box, Typography } from "@mui/material";

const ImageModal = ({ open, imageUrl, onClose }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: "80vw",
          height: "80vh",
          maxWidth: 400,
          maxHeight: 450,
        }}
      >
        <img
          src={imageUrl}
          alt="Large Book Cover"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
    </MuiModal>
  );
};

export default ImageModal;
