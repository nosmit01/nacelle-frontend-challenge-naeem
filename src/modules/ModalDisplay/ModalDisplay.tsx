import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        data-testid="modal-open-button"
        label="Open Modal"
        onClick={handleOpenModal}
      />

      <Modal
        data-testid="modal"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Happy little modal"
      >
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
