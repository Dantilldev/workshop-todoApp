import TodoItem from './TodoItem';

export const TodoList = ({items, setItems}) => {
  return (
    <ul className={items.length > 0 ? 'bg-slate-400 p-2 rounded-lg ' : ''}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} setItems={setItems} />
      ))}
    </ul>
  );
};
