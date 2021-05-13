import create from "zustand";
import { uid } from "react-uid";

export const useTodoStore = create((set) => ({
  
  todos: [ {
    id: 1,
    text: "take out the trash",
    isCompleted: false
  },
  {
    id: 2,
    text: "Dinner with wife",
    isCompleted: true
  },
  {
    id: 3,
    text: "Meeting with Boss",
    isCompleted: false
  }],

  addTodo: (todoText: any) =>
    set((state: any) => ({
      todos: [...state.todos,
        {
          text: todoText,
          id: uid(`${todoText}-${state.todos.length}`),
          isCompleted: false
        }
      //  setState({ filtered: [...this.state.filtered, newTodo] });
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


