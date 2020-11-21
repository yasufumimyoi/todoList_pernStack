import React, { FC, useContext } from "react";
import { Item } from "./Item";
import { TodoContext } from "./App";
import { Props } from "../types/types";

const ItemList: FC = () => {
  const { todo, setTodo } = useContext(TodoContext);

  const handleRemove = async (id: number) => {
    try {
      await fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE",
      });
      console.log();
      setTodo(todo.filter((t: any) => t.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {todo.map((data: Props) => {
        return (
          <Item
            key={data.todo_id}
            todo_id={data.todo_id}
            description={data.description}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
};

export { ItemList };
