import React, { FC, useState } from "react";
import { FormEvent, ChangeEvent } from "react";

const Form: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter thing to do"
          value={inputValue}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export { Form };
