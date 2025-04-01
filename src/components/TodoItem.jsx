import {useState} from "react";

function TodoItem({item, setItems, handleUpdate}) {
  const [editMode, setEditMode] = useState(false); // Håller reda på om vi är i redigeringsläge
  const [newTitle, setNewTitle] = useState(item.title); // Håller den nya titeln

  // Toggla done status
  function handleDone(id) {
    setItems(function (currentItems) {
      return currentItems.map(function (currentItem) {
        return currentItem.id === id
          ? {...currentItem, done: !currentItem.done}
          : currentItem;
      });
    });
  }

  // Ta bort en task
  function handleDelete(id) {
    setItems(function (currentItems) {
      return currentItems.filter(function (item) {
        return item.id !== id;
      });
    });
  }

  // Funktion för att uppdatera titeln på en todo
  function handleUpdateClick() {
    handleUpdate(item.id, newTitle); // Uppdaterar todon
    setEditMode(false); // Stänger redigeringsläge
  }

  return (
    <div className={`flex flex-row items-center justify-between mb-2`}>
      <div>
        {editMode ? (
          // Om vi är i redigeringsläge, visa ett input-fält
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)} // Uppdatera den nya titeln
            className="rounded-lg p-2"
            autoFocus
          />
        ) : (
          <li className={`mr-1 ${item.done ? "line-through" : ""}`}>
            {item.title}
          </li>
        )}
      </div>
      <div className="flex gap-2">
        {editMode ? (
          // När vi är i editMode, visa en Save-knapp istället för Edit
          <button
            onClick={handleUpdateClick}
            className="bg-green-400 p-1 rounded"
          >
            Save
          </button>
        ) : (
          // Visa Edit-knappen om vi inte är i redigeringsläge
          <button
            onClick={() => setEditMode(true)} // Sätt editMode till true för att börja redigera
            className="bg-yellow-400 p-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => handleDone(item.id)} // Toggla done status
          className="bg-yellow-400 p-1 rounded"
        >
          {item.done ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => handleDelete(item.id)} // Ta bort todo
          className="bg-red-400 p-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
