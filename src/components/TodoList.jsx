/** @format */
import React, { useState } from "react";

import CreateEditModalContanier from "./CreateAndEditTodo/CreateEditModalContanier";
import DeleteModalContanier from "./DeleteModal/DeleteModalContanier";
import Todo from "./Todo";
import styles from "./Todos.module.css";

const TodoList = ({ todos }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [todo, setTodo] = useState([]);
  const [deleteModalIsOpen, setIsOpenDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const openModal = () => setIsOpen(true);
  const openDeleteModal = () => setIsOpenDeleteModal(true);
  return (
    <div className={styles.todosContanier}>
      <CreateEditModalContanier
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        todo={todo}
      />
      <DeleteModalContanier
        setIsOpenDeleteModal={setIsOpenDeleteModal}
        deleteModalIsOpen={deleteModalIsOpen}
        todo={todo}
      />
      <div>
        <h1> Todo List</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>
                {" "}
                <button onClick={openModal} className={styles.Btn}>
                  Create
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <Todo
                todo={todo}
                setIsEdit={setIsEdit}
                openDeleteModal={openDeleteModal}
                openModal={openModal}
                setTodo={setTodo}
                key={todo._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
