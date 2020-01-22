import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

//FC = Function Component
// This tells ts that we want a function to return jsx
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text }]);
  };

  const todoDeleteHandler = (id: string)=>{
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <div className="App">
      {/* Componenet to add todos */}
      <NewTodo onAddTodo={todoAddHandler} />
      {/* Componenet to display todos */}
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
