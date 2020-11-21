import React, { FC, useEffect, useState } from "react";

import { Form } from "./Form";
import { ItemList } from "./ItemList";

export const TodoContext = React.createContext<any>(null);

const App: FC = () => {
  const [todo, setTodo] = useState([]);

  const getTodo = async () => {
    try {
      const response = await fetch("http://localhost:5000/todo");
      const jsonData = await response.json();
      setTodo(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  console.log(todo);

  useEffect(() => {
    console.log("Fetch Data");
    getTodo();
  }, []);

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      <h2>ToDo List with Postgresql</h2>
      <Form />
      <ItemList />
    </TodoContext.Provider>
  );
};

export { App };
