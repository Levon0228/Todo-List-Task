/** @format */
import { constants } from "./constants";
import { initialData } from "./initialData";

export const addTodoReducer = (state = initialData, action) => {
  switch (action.type) {
    case constants.LOADTODOS:
      const loadedState = [...action.payload];
      return loadedState;
    case constants.CREATETODO:
      const newState = [...state, action.payload];
      return newState;
    case constants.UPDATETODO:
      const updatedState = [...state];
      const index = updatedState.findIndex(
        (el) => el._id === action.payload._id
      );
      updatedState[index] = action.payload;
      return updatedState;
    case constants.DELETETODO:
      const data = [...state, action.payload];
      const deletedIndex = data.findIndex(
        (el) => el._id === action.payload._id
      );
      data.splice(deletedIndex, 1);
      return data;
    default:
      return state;
  }
};
