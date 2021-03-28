/** @format */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import { loadTodosAction } from "../store/actions";
import { API_URL } from "../config/index";
import axios from "axios";

const TodoListContanier = () => {
  const todos = useSelector((state) => state.addTodoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const result = await axios.get(`${API_URL}/todos/`);
      dispatch(loadTodosAction(result.data));
    })();
  }, [dispatch]);

  return <TodoList todos={todos} />;
};

export default TodoListContanier;
