
import React from "react"
import TodoList from "./TodoList";
import './index.css';

function App() {
  return (

    <div className="min-h-screen bg-pink-200 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="flex h-7 sm:h-8 font-bold black" >Todo list App with Zustand</h1>
            </div>
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App