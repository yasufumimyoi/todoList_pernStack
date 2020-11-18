import React, { FC } from "react";

const Item: FC = (data) => {
  return (
    <div>
      <p>Hello from Item</p>
      <p>{data.children}</p>
    </div>
  );
};

export { Item };
