import { useState } from "react";
import useTodoStore from "./store/todoStore";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

function App() {
  const [ input, setInput ] = useState("");
  const { addTodo } = useTodoStore();

  const handleAdd = (e) => {
    e.preventDefault(); // 기본 제출 막기

    if (input.trim() === "") return;

    addTodo(input) //store 함수 사용
    setInput("");
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

      <TodoList/>

      <TodoStats/>
    </div>
  );
}

export default App;