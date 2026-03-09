import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: [],
    filter: "all",

    addTodo: (text) =>
        set((state) => ({
            todos: [
                ...state.todos,
                { text, completed: false}
            ]
        })),

    deleteTodo: (index) =>
        set((state) => ({
            todos: state.todos.filter((_, i) => i !== index)
        })),

    toggleTodo: (index) =>
        set((state) => ({
            todos: state.todos.map((todo, i) =>
            i === index
                ? { ...todo, completed: !todo.completed }
                : todo
            )
        })),
    clearTodos: () => 
        set({
            todos: []
        }),
    
    setFilter: (filter) => set({ filter })
}));

export default useTodoStore;