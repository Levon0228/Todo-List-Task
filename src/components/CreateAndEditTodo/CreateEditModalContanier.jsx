/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/index";
import CreateEditModal from "./CreateEditModal";

import { useDispatch } from "react-redux";
import { createTodoAction, updateTodoAction } from "../../store/actions";

// A MODAL component has been created to create and update.
// useState Hook (setIsSend, setSendData) determine which MODAL will be shows

const CreateEditModalContanier = ({
  todo,
  isEdit,
  setIsEdit,
  modalIsOpen,
  setIsOpen,
}) => {
  const dispatch = useDispatch();
  const [isSend, setIsSend] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [sendData, setSendData] = useState({});
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    if (isSend) {
      (async () => {
        const result = await axios.post(`${API_URL}/todos`, sendData);
        dispatch(createTodoAction(result.data));
        setIsSend(false);
      })();
    }
    if (isUpdate) {
      (async () => {
        const update = await axios.patch(
          `${API_URL}/todos/${todo._id}`,
          updatedData
        );
        dispatch(updateTodoAction(update.data));
        setIsUpdate(false);
        setUpdatedData({});
      })();
    }
  }, [isSend, isUpdate, dispatch, sendData, todo._id, updatedData]);

  return (
    <CreateEditModal
      setSendData={setSendData}
      setIsSend={setIsSend}
      isSend={isSend}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      todo={todo}
      setIsUpdate={setIsUpdate}
      setUpdatedData={setUpdatedData}
      updatedData={updatedData}
    />
  );
};
export default CreateEditModalContanier;
