import { create } from "zustand";

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
export const useTodoStore = create((set) => ({
    todos: savedTodos,
    filter: "all",

    addTodo: (text) =>
        set((state) => {
            const newTodos = [
                ...state.todos,
                { text, completed: false }
            ];

            localStorage.setItem("todos", JSON.stringify(newTodos));

            return { todos: newTodos };
        }),

    deleteTodo: (index) =>
        set((state) => {
            const newTodos = state.todos.filter((_, i) => i !== index);

            localStorage.setItem("todos", JSON.stringify(newTodos));

            return { todos: newTodos };
        }),

    toggleTodo: (index) =>
        set((state) => {
            const newTodos = state.todos.map((todo, i) =>
            i === index
                ? { ...todo, completed: !todo.completed }
                : todo
            );

            localStorage.setItem("todos", JSON.stringify(newTodos));

            return { todos: newTodos };
        }),

    clearTodos: () => {
        localStorage.removeItem("todos");
        set({ todos: [] });
    },

    
    setFilter: (filter) => set({ filter })
}));

export default useTodoStore;