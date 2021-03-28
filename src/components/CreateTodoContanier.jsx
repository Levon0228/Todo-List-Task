/** @format */
import { useSelector } from "react-redux";
import Createtodo from "./CreateTodo";

const CreateTodoContanier = () => {
  const todos = useSelector((state) => state);

  return (
    <div>
      <Createtodo onOpenPopup={openPopup} />
    </div>
  );
};

export default CreateTodoContanier;
