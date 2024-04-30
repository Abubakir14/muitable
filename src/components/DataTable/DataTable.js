import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ImageModal from "../ImageModal/ImageModal";
import { fetchBooks } from "../api/books";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Image",
    width: 120,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Book Cover"
        style={{ width: "50%", height: "100%" }}
        onClick={() => params.row.openImageModal()}
      />
    ),
  },
  { field: "title", headerName: "Title", width: 200 },
  { field: "authors", headerName: "Authors", width: 200 },
  { field: "publishedDate", headerName: "Published Date", width: 150 },
];

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooks("javascript");
      setRows(
        books.map((book, index) => ({
          id: index + 1,
          image:
            book.volumeInfo.imageLinks?.thumbnail ||
            "https://via.placeholder.com/150",
          title: book.volumeInfo.title || "Unknown Title",
          authors: book.volumeInfo.authors
            ? book.volumeInfo.authors.join(", ")
            : "Unknown Author",
          publishedDate: book.volumeInfo.publishedDate || "Unknown Date",
          openImageModal: () =>
            handleOpenImageModal(book.volumeInfo.imageLinks?.thumbnail),
        }))
      );
    };

    loadBooks();
  }, []);

  const handleOpenImageModal = (imageUrl) => {
    setSelectedRow(imageUrl);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setSelectedRow(null);
    setIsImageModalOpen(false);
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
    overrides: {
      MuiDataGrid: {
        root: {
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "black",
          },
          "& .MuiDataGrid-cell": {
            color: "black",
            backgroundColor: "white",
          },
        },
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#dc004e",
      },
    },
    overrides: {
      MuiDataGrid: {
        root: {
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#black",
          },
          "& .MuiDataGrid-cell": {
            color: "#black",
            backgroundColor: "#000000",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />

        <ImageModal
          open={isImageModalOpen}
          imageUrl={selectedRow}
          onClose={handleCloseImageModal}
        />
      </div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </ThemeProvider>
  );
};

export default DataTable;
