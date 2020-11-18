import React, { FC, useEffect } from "react";

import { Form } from "./Form";
import { ItemList } from "./ItemList";

const App: FC = () => {
  useEffect(() => {
    console.log("Fetch Data");
  }, []);

  return (
    <div>
      <h2>Experimental coding</h2>
      <Form />
      <ItemList />
    </div>
  );
};

export { App };
