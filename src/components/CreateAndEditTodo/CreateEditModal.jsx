/** @format */

import React, { useRef } from "react";
import styles from "./CreateEditModal.module.css";
import Modal from "react-modal";
import { colors } from "./colors";

const CreateEditModal = ({
  isEdit,
  todo,
  setIsOpen,
  setIsEdit,
  setUpdatedData,
  setSendData,
  setIsUpdate,
  setIsSend,
  modalIsOpen,
  updatedData,
}) => {
  Modal.setAppElement(document.getElementById("modalContanier"));
  const newTodoBody = useRef(null);
  const newTodoTitle = useRef(null);
  const color = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
    setIsEdit(false);
  };

  const changeHandler = (e) => {
    //This is not the best solution, but I did not have time to find a better solution

    const elems = document.getElementsByClassName("validate");
    const button = document.getElementById("create");
    const { target } = e;
    const { name, value } = target;
    console.log(e.target.value);
    for (const elem of elems) {
      if (!!elem.value) {
        button.classList.remove(`${styles.disabled}`);
      } else {
        button.classList.add(`${styles.disabled}`);
        return;
      }
    }
    setUpdatedData({ ...updatedData, ...{ [name]: value } });
  };

  const createTodo = () => {
    console.log(color, color.current.value);
    setSendData({
      description: newTodoBody.current.value,
      title: newTodoTitle.current.value,
      color: color.current.value,
    });
    isEdit ? setIsUpdate(true) : setIsSend(true);
    closeModal();
  };

  return (
    <div id="modalContanier">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}>
        {isEdit ? <h3>Edit Todo</h3> : <h3>Create New Todo</h3>}

        <input
          type="text"
          id="newTodoTitle"
          ref={newTodoTitle}
          className={`${styles.todoTitle} validate`}
          placeholder="Todo Title"
          onChange={changeHandler}
          defaultValue={isEdit ? todo.title : null}
          name="title"
        />
        <textarea
          rows="5"
          cols="33"
          id="newTodoBody"
          name="description"
          ref={newTodoBody}
          className={`${styles.todoBody} validate`}
          placeholder="Todo Description"
          defaultValue={isEdit ? todo.description : null}
          onChange={changeHandler}></textarea>
        <select
          ref={color}
          onChange={changeHandler}
          className={`${styles.todoColor} validate`}
          defaultValue={isEdit ? todo.color : null}
          name="color">
          {colors.map((color, index) => (
            <option key={index}>{color}</option>
          ))}
        </select>
        <div className={styles.buttonsContanier}>
          <button
            onClick={createTodo}
            id="create"
            className={`${styles.Btn} ${styles.createBtn} ${styles.disabled} `}>
            Done
          </button>
          <button onClick={closeModal} className={styles.Btn}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateEditModal;
