import useTodoStore from "../store/todoStore";

function TodoStats() {
    const todos = useTodoStore((state) => state.todos);

    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const remaining = total - completed;

    return (
        <div>
            <p>전체: {total}</p>
            <p>완료: {completed}</p>
            <p>남음: {remaining}</p>
        </div>
    );
}

export default TodoStats;