import React from "react";
import { useTodoStore } from "./useTodoStore";
import './index.css';

export default function TodoList() {

    const [todoValue, setTodoValue] = React.useState("");
    const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore(
        (state: any) => state
    );

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (todoValue) {
            addTodo(todoValue);
        }
        setTodoValue("");
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="relative" autoComplete="off">
                <label htmlFor="new-todo" className="font-Helvetica black">New Todo: </label>
                <div className="flex mt-2">
                    <input className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                        placeholder="Enter Task Here"
                        type="text"
                        id="new-todo"
                        name="newTodo"
                        value={todoValue} required
                        onChange={(e) => setTodoValue(e.target.value)} />
                    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-2" type="submit">Add</button>
                </div>
            </form>

            <nav className="p-4">
                <ul className="space-x-2">
                    {todos.map((todo: { id: React.Key | null | undefined; isCompleted: any; text: any }) => {
                        return (
                            <div key={todo.id} className="py-1 text-sm">
                                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-1 py-1 my-1">
                                    <input className="pointer mt-2 form-checkbox h-5 w-5 text-gray-600"
                                        type="checkbox"
                                        checked={
                                            !todo.isCompleted
                                                ? (todo.isCompleted = true)
                                                : (todo.isCompleted = false)
                                        }
                                        onChange={() => completeTodo(todo.id, todo.isCompleted)}
                                    />

                                    <div className="flex-grow font-medium px-2 flex place-content-center text-xl">
                                        <div className="font-bold" style={{ textDecoration: todo.isCompleted ? "line-through" : "unset" }}>
                                            {" "} {todo.text}{" "}
                                        </div>
                                    </div>
                                    <div className="text-sm font-normal text-gray-500 tracking-wide">
                                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteTodo(todo.id)}>  X </button>
                                    </div>

                                </div>


                            </div>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}