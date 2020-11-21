import React, { FC, useState, useContext } from "react";
import { FormEvent, ChangeEvent } from "react";
import { TodoContext } from "./App";

const Form: FC = () => {
  const [description, setDescription] = useState("");
  const { todo, setTodo } = useContext(TodoContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const body = { description };
      console.log(body);
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      setTodo([...todo, jsonData]);
      setDescription("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter thing to do"
          value={description}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export { Form };
