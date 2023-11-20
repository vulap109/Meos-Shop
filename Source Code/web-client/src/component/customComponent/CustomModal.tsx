import React from "react";
import { Button, Modal } from "react-bootstrap";
import questionIcon from "../..//assets/icons/question-mark.png";
import exclamationIcon from "../..//assets/icons/exclamation-mark.png";

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
        <Modal.Body>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center pb-3">
              <img
                src={confirmation ? questionIcon : exclamationIcon}
                alt="questionIcon"
                height={100}
                width={100}
              />
            </div>
            <h4>{message}</h4>
          </div>
        </Modal.Body>
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
