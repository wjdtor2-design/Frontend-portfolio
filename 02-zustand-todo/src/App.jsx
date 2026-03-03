import { useState } from "react";

function App() {
  const [ input, setInput ] = useState("");
  const [ todos, setTodos ] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault(); // 기본 제출 막기

    if (input.trim() === "") return;

    const newTodo = {
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggle = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };  

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handleAdd}>
        <input 
          type="text"
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>

      <ul>
        {todos.length === 0 ? (
          <p>할 일이 없습니다</p>
        ) : (
          todos.map((todo, index) => (
            <li key={index}>
              <input 
                type="checkbox"
                checked= {todo.completed}
                onChange={() => handleToggle(index)}
            />

            <span
              style={{
                textDecoration: todo.completed 
                ? "line-through" 
                : "none"
              }}
            >
              {todo.text}
            </span>
            
            <button onClick={ () => handleDelete(index)}>
              삭제
            </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;