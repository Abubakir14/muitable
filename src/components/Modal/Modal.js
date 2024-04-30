// src/components/Modal.js
import React from "react";
import { Modal as MuiModal, Box, Typography } from "@mui/material";

const Modal = ({ open, onClose, rowData }) => {
  // Проверяем, что rowData существует перед обращением к его свойствам
  if (!rowData) return null;

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
          maxWidth: 400,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Row Data
        </Typography>
        <Typography variant="body2" component="p">
          ID: {rowData.id}
        </Typography>
        <Typography variant="body2" component="p">
          Description: {rowData.description}
        </Typography>
        <Typography variant="body2" component="p">
          Date: {rowData.date}
        </Typography>
        <Typography variant="body2" component="p">
          Number: {rowData.number}
        </Typography>
      </Box>
    </MuiModal>
  );
};

export default Modal;
