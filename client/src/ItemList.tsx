import React, { FC } from "react";
import { Item } from "./Item";

type Data = {
  id: number;
  description: string;
};

const tempData = [
  { id: 1, description: "clean the room" },
  { id: 2, description: "writing code" },
  { id: 3, description: "Eat dinner" },
];

const ItemList: FC = () => {
  return (
    <div>
      {tempData.map((data: Data) => (
        <Item key={data.id} />
      ))}
    </div>
  );
};

export { ItemList };
