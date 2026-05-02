import { useState } from "react";

type User = {
  username: string;
  email: string;
};

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

const App = () => {
  // 🧮 Counter
  const [count, setCount] = useState<number>(0);

  // 📇 User State (initial null)
  const [user, setUser] = useState<User | null>(null);

  // 🧾 Todo List
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      task: `Task ${todos.length + 1}`,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* 🧮 Counter */}
      <section>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>➕ Increment</button>
        <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      </section>

      <hr />

      {/* 📇 User State */}
      <section>
        <h2>User</h2>

        {user ? (
          <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>No user logged in</p>
        )}

        <button
          onClick={() =>
            setUser({
              username: "Mohamed",
              email: "mohamed@example.com",
            })
          }
        >
          Login
        </button>

        <button onClick={() => setUser(null)}>Logout</button>
      </section>

      <hr />

      {/* 🧾 Todo List */}
      <section>
        <h2>Todo List</h2>
        <button onClick={addTodo}>Add Todo</button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.task} - {todo.done ? "✅ Done" : "❌ Not Done"}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
