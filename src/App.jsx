import { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [table, setTable] = useState(true);
  const [todo, setTodo] = useState([]);

  const getData = async (e) => {
    e.preventDefault();
    if (id < 1) {
      setId("");
      setError(true);
      setTable(true);
      return;
    }
    const respnse = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await respnse.json();
    setTodo(data);
    setTable(false);
    setError(false);
    setId("");
  };

  return (
    <section className="App">
      <form onSubmit={getData}>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Get Data</button>
        <div>
          {error && <p>Please enter a valid number (eg. 1 , 2 , 3 , ....)</p>}
        </div>
        <div>
          {!table && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>UserID</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.userId}</td>
                    <td>
                      {todo.completed ? (
                        <p className="completed">Completed</p>
                      ) : (
                        <p className="incompleted">Incompleted</p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

export default App;
