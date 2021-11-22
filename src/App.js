import "./App.css";
import { DataProvider } from "./components/DataProvider";
import TodoDelete from "./components/TodoDelete";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <TodoInput />
        <TodoList />
        <TodoDelete />
      </div>
    </DataProvider>
  );
}

export default App;
