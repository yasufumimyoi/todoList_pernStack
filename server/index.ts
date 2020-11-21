import express from "express";
import cors from "cors";
import { pool } from "./database";

import { Response, Request } from "express";

const app = express();

app.use(cors());
app.use(express.json());

//post todo

app.post("/todo", async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "insert into todo (description) values($1) returning *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all todo

app.get("/todo", async (req: Request, res: Response) => {
  try {
    const allTodo = await pool.query("select * from todo");
    res.json(allTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get a todo

app.get("/todo/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("select * from todo where todo_id = $1", [
      id,
    ]);

    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update a todo

app.put("/todo/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "update todo set description = $1 where todo_id = $2",
      [description, id]
    );

    res.json(updateTodo);
  } catch (error) {
    console.error(error.message);
  }
});

//delete a todo

app.delete("/todo/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("delete from todo where todo_id = $1", [
      id,
    ]);
    res.json("Deleted");
  } catch (error) {
    console.error(error.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Sever has started!!!");
});
