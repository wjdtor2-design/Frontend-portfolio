import useTodoStore from "../store/todoStore";

function TodoList() {
    
    const { todos, deleteTodo, toggleTodo, filter } = useTodoStore();
    const clearTodos = useTodoStore((state) => state.clearTodos);
    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "active") return !todo.completed;
        return true;
    });

    return (
        <div>
            <ul>
                {todos.length === 0 ? (
                    <p>할 일이 없습니다</p>
                ) : (
                    filteredTodos.map((todo, index) => (
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