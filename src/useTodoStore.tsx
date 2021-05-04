import create from "zustand";
import { uid } from "react-uid";

export const useTodoStore = create((set) => ({
  
  todos: [],

  addTodo: (todoText: any) =>
    set((state: any) => ({
      todos: [...state.todos,
        {
          text: todoText,
          id: uid(`${todoText}-${state.todos.length}`),
          isCompleted: false
        }
      ]
    })),

  deleteTodo: (todoId: any) =>
    set((state:any) => ({
      todos: state.todos.filter((todo: { id: any; }) => todo.id !== todoId)
    })),

  completeTodo: (todoId: any,isDone:boolean) =>
    set((state:any) => ({
      todos: state.todos.map((todo: { id: any; }) => {
        if (todo.id === todoId) {
          
          return {
            ...todo,
            isCompleted: !isDone
          };
        }
        return todo;
      })
    }))

}));
