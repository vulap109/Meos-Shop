import React from "react";
import { Button, Modal } from "react-bootstrap";

interface modalType {
  isOpen: boolean;
  handleClose: () => void;
  title?: string;
  message?: string;
  handleSuccess?: () => void;
  confirmation?: boolean;
}
const CustomModal = ({
  isOpen,
  handleClose,
  title = "Warnning",
  message = "Are you sure?",
  handleSuccess,
  confirmation = false,
}: modalType) => {
  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          {confirmation ? (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="danger" onClick={handleSuccess}>
                Đồng ý
              </Button>
            </>
          ) : (
            <Button variant="primary" onClick={handleClose}>
              Đồng ý
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
