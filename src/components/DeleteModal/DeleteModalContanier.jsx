/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/index";
import DeleteModal from "./DeleteModal";
import { useDispatch } from "react-redux";
import { deleteTodoAction, loadTodosAction } from "../../store/actions";

const DeleteModalContanier = ({
  todo,
  setIsOpenDeleteModal,
  deleteModalIsOpen,
}) => {
  const dispatch = useDispatch();
  const [isDelete, setisDelete] = useState(false);
  useEffect(() => {
    if (isDelete) {
      (async () => {
        // In my opinion, I should have received the deleted Todo number in the delete api resonse, so
        // that we could compare it with our data and remove the deleted Todo from the data.
        // I did not find that information in the Response.
        // I do FETCH to get the right data and render it on the front

        const result = await axios.delete(`${API_URL}/todos/${todo._id}`);
        //dispatch(deleteTodoAction(result.data));
        const res = await axios.get(`${API_URL}/todos/`);
        dispatch(loadTodosAction(res.data));
        setisDelete(false);
      })();
    }
  }, [isDelete, dispatch, todo._id]);

  return (
    <DeleteModal
      setIsOpenDeleteModal={setIsOpenDeleteModal}
      deleteModalIsOpen={deleteModalIsOpen}
      setisDelete={setisDelete}
    />
  );
};
export default DeleteModalContanier;
