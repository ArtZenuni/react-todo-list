import React, { useState, ChangeEvent, FormEvent } from "react";
import "./ToDoList.css";

// Define the structure of a Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // Update newTodo state when input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  // Add a new todo item to the list
  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTodo.trim()) {
      const newTask: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  // Toggle the completion status of a todo item
  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove a todo item from the list
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="content">
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo} className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="task-item">
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <div className="button">
              <button
                className="btn btn-primary"
                onClick={() => handleToggleComplete(todo.id)}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
