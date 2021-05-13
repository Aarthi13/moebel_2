import React from "react";
import { useTodoStore } from "./useTodoStore";

export default function SearchComponent() {

  const  { todos}   = useTodoStore(
    (state: any) => state
);

  const [searchTerm, setSearchTerm] = React.useState("");
  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  let todoElse =  todos.filter((todo: { text: string; }) =>
  todo.text.toLowerCase().includes(searchTerm.toLocaleLowerCase())
);

  const results = !searchTerm
    ? todos: todoElse ; 

  return (
    <div>
      <h2>Search Component</h2>
      <input
        type="text"
        placeholder="search the list.."
        value={searchTerm}
        onChange={(e) => search(e)}
      />
      <div>
        <ul className="searchTodos">
          {results
            .filter((todo: { isCompleted: boolean; }) => todo.isCompleted === false)
            .map((item: { id: React.Key | null | undefined; text: string  }) => (
              <li style={{ listStyleType: "none" }} key={item.id}>
                {" "}
                {item.text}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
