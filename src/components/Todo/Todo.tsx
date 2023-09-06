import { useState, useEffect } from "react";
import List from "./_List";
import TodoForm from "./_Form";
import FormHero from "./_FormHero";
import ListHero from "./_ListHero";

interface TodoItemClient {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  createdDate: string;
  updatedDate: string;
  userId: string;
}

function isDateInTheFuture(dateString: string) {
  const inputDate = new Date(dateString);
  const dateNow = new Date();

  return inputDate > dateNow;
}

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TODOS") || "[]";
    return JSON.parse(localValue) as TodoItemClient[];
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  function handleCheckTodo(id: string, completed: boolean) {
    setTodos(() =>
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, completed, updatedDate: new Date().toDateString() }
          : todo;
      })
    );
  }

  function handleNewTodo(
    title: string,
    description: string,
    dueDate: string,
    userId: string
  ) {
    if (!isDateInTheFuture(dueDate)) {
      throw new Error("Due date must be in the future!");
    }

    setTodos(() => [
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        description,
        dueDate,
        userId,
        completed: false,
        createdDate: new Date().toDateString(),
        updatedDate: new Date().toDateString(),
      },
    ]);
  }

  function handleDeleteTodo(id: string) {
    setTodos(() => todos.filter((todo: { id: string }) => todo.id !== id));
  }

  return (
    <>
      <FormHero />
      <TodoForm onNewTodo={handleNewTodo} />
      <ListHero username="User" />
      <List
        todos={todos}
        onCheckChange={handleCheckTodo}
        onDeleteClick={handleDeleteTodo}
      />
    </>
  );
};

export default Todo;
