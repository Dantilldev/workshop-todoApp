const TodoItem = ({item, setItems}) => {
  // console.log('TodoItem: ', item, setItems);

  //toggla "done" status
  function handleDone(id) {
    setItems((currentItems) => {
      return currentItems.map((currentItem) =>
        currentItem.id === id
          ? {...currentItem, done: !currentItem.done}
          : currentItem
      );
    });
  }

  // tar bort en task
  function handleDelete(id) {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <div className={`flex flex-row items-center justify-between mb-2 `}>
      <div>
        <li className={`mr-1 ${item.done ? 'line-through' : ''}`}>
          {item.title}
        </li>
      </div>
      <div className=" flex gap-2">
        <button
          onClick={() => handleDone(item.id)}
          className="bg-yellow-400 p-1 rounded"
        >
          {item.done ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="bg-red-400 p-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
