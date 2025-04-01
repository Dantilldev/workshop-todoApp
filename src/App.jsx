import {useEffect, useState} from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(() => {
    const savedTodos = localStorage.getItem("items");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // console.log(text);
  // console.log(items);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleText() {
    if (text.trim() === "") {
      return "";
    }

    setItems([...items, {id: crypto.randomUUID(), title: text, done: false}]);
    setText("");
  }

  // Enter funktion som läggs till i onKeyDown
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleText();
    }
  }

  // Funktion för att uppdatera en todo
  function handleUpdate(id, newTitle) {
    const updatedItems = items.map((item) =>
      item.id === id ? {...item, title: newTitle} : item
    );
    setItems(updatedItems);
  }

  // Funktion för att ta bort alla items
  function handleDeleteAll() {
    setItems([]);
  }

  return (
    <div className="rounded-lg w-full min-h-screen p-6 flex flex-col items-center">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 p-2 w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter your task here..."
          className="rounded-lg w-full sm:w-60 p-2"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className="rounded-lg bg-green-400 p-2 w-full sm:w-auto"
          onClick={handleText}
        >
          + Add
        </button>
        <button
          className="rounded-lg bg-red-400 p-2 w-full sm:w-auto"
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
      </div>

      <div className="w-full max-w-lg mt-4">
        <TodoList
          items={items}
          setItems={setItems}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}

export default App;
