import useTodoStore from "../store/todoStore";

function TodoList() {
    
    const { todos, deleteTodo, toggleTodo } = useTodoStore();
    
    const clearTodos = useTodoStore((state) => state.clearTodos);

    return (
        <div>
            <ul>
                {todos.length === 0 ? (
                    <p>할 일이 없습니다</p>
                ) : (
                    todos.map((todo, index) => (
                        <li key={index}>
                            <input 
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(index)}
                            />

                            <span
                                style={{
                                    textDecoration: todo.completed
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {todo.text}
                            </span>

                            <button onClick={() => deleteTodo(index)}>
                                삭제
                            </button>
                            
                        </li>
                    ))
                )}
            </ul>

            <button onClick={clearTodos}>
            전체 삭제
            </button>

        </div>
    );
}

export default TodoList;