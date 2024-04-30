// src/App.js
import React, { useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowClick = (params) => {
    setSelectedRowData(params.row);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Material-UI Table</h1>
      <DataTable onRowClick={handleRowClick} />
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        rowData={selectedRowData}
      />
    </div>
  );
};

export default App;
