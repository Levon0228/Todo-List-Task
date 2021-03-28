/** @format */
import { useRef } from "react";
import styles from "./Todos.module.css";

const Todo = ({ todo, openModal, setIsEdit, setTodo, openDeleteModal }) => {
  const openEditModal = (e) => {
    openModal();
    setIsEdit(true);
    setTodo(todo);
  };

  const OpenDeleteModal = () => {
    setTodo(todo);
    openDeleteModal();
  };
  const todoRow = useRef(null);

  return (
    <>
      <tr
        className="contanier"
        ref={todoRow}
        style={{ background: todo.color }}>
        <td className={styles.todo}>{todo.title}</td>
        <td>{todo.description}</td>
        <td>
          <button className={styles.Btn} name="edit" onClick={openEditModal}>
            Edit
          </button>
          <button
            className={styles.Btn}
            name="delete"
            onClick={OpenDeleteModal}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Todo;
