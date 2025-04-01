import TodoItem from "./TodoItem";

function TodoList({items, setItems, handleUpdate}) {
  return (
    <ul className={items.length > 0 ? "bg-slate-400 p-2 rounded-lg" : ""}>
      {items.map(function (item) {
        return (
          <TodoItem
            key={item.id}
            item={item}
            setItems={setItems}
            handleUpdate={handleUpdate} // Skicka handleUpdate till varje TodoItem
          />
        );
      })}
    </ul>
  );
}
export default TodoList;
