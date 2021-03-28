/** @format */
import { constants } from "./constants";
export const createTodoAction = (todo) => ({
  type: constants.CREATETODO,
  payload: todo,
});
export const loadTodosAction = (todo) => ({
  type: constants.LOADTODOS,
  payload: todo,
});
export const updateTodoAction = (todo) => ({
  type: constants.UPDATETODO,
  payload: todo,
});
export const deleteTodoAction = (todo) => ({
  type: constants.DELETETODO,
  payload: todo,
});
