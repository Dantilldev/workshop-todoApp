import {useEffect, useState} from 'react';
import {TodoList} from './components/TodoList';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState(() => {
    const savedTodos = localStorage.getItem('items');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // console.log(text);
  // console.log(items);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  function handleText() {
    if (text.trim() === '') {
      return '';
    }

    setItems([...items, {id: crypto.randomUUID(), title: text, done: false}]);
    setText('');
  }

  // Enter funktion som läggs till i onKeyDown
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleText();
    }
  }

  // Funktions  för att ta bort alla items
  function handleDeleteAll() {
    setItems([]);
  }

  return (
    <div className="rounded-lg w-fit h-full p-6  ">
      <div className="flex flex-row justify-center items-center gap-6  p-2  ">
        <input
          type="text"
          placeholder="Enter your task here..."
          className=" rounded-lg w-60 p-2"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button className="rounded-lg bg-green-400 p-2" onClick={handleText}>
          + Add
        </button>
        <button className="rounded-lg bg-red-400 p-2" onClick={handleDeleteAll}>
          Delete All
        </button>
      </div>

      <div>
        <TodoList items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
