import TodoItem from "./TodoItem";

export default function TodoList({items, setItems, handleUpdate}) {
  return (
    <ul className={items.length > 0 ? "bg-slate-400 p-2 rounded-lg" : ""}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          setItems={setItems}
          handleUpdate={handleUpdate} // Skicka handleUpdate som prop
        />
      ))}
    </ul>
  );
}
