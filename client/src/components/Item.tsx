import React, { FC } from "react";
import { Props } from "../types/types";

const Item: FC<Props> = ({ todo_id, description, handleRemove }) => {
  return (
    <div key={todo_id}>
      <p>{todo_id}</p>
      <p>{description}</p>
      <button onClick={() => handleRemove(todo_id)}>Remove</button>
    </div>
  );
};

export { Item };
