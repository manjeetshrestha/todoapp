import Heading from "./components/Heading.js";
import Form from "./components/Form.js";
function App() {
  return (
    <div className="App">
      <div class="todo-body">
        <Heading title="To-Do List" />
        <Form />
      </div>
    </div>
  );
}

export default App;
