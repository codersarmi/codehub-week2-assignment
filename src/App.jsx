import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

  const fetchData = async () => {
    const respnse = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await respnse.json();
    setTodo(data);
  };

  return (
    <section className="App">
      <button onClick={fetchData}>Get Data</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>
                {e.completed ? (
                  <p className="completed">Completed</p>
                ) : (
                  <p className="incompleted">Incompleted</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
