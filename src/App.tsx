import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ToDoList from "./ToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
