/** @format */

import React from "react";
import styles from "./DeleteModal.module.css";
import Modal from "react-modal";

const DeleteModal = ({
  setIsOpenDeleteModal,
  setisDelete,
  deleteModalIsOpen,
}) => {
  Modal.setAppElement(document.getElementById("deleteModalContanier"));
  const closeModal = () => {
    setIsOpenDeleteModal(false);
  };

  const deleteTodo = () => {
    setisDelete(true);
    closeModal();
  };

  return (
    <div id="deleteModalContanier">
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}>
        <h3>Delete Popup</h3>
        <div className={styles.text}>
          Are you sure you want to delete the Todo
        </div>
        <div className={styles.buttonsContanier}>
          <button
            onClick={deleteTodo}
            id="delete"
            className={`${styles.Btn} ${styles.deleteBtn} ${styles.deleteBtn}`}>
            Delete
          </button>
          <button onClick={closeModal} className={styles.Btn}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
