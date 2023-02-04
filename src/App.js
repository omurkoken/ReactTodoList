import './App.css';
import { useState } from 'react';
import Header from './companent/Header';
import TodoList from './companent/Todo/Todolist'
// import Todo from './companent/Todo/Todo';
import Footer from './companent/Footer/index.js'
function App() {
  // !! Header klasörünün içindeki input değerini almak için state oluşturuyoruz;
  const [inputText, setinputText] = useState("")

  const [todos, setTodos] = useState([{
    completed: true,
    text: "Learn JavaScript",
    id: 1
  },
  {
    completed: false,
    text: "Learn React",
    id: 2
  },
  {
    completed: false,
    text: "Have a life!",
    id: 3
  }
]);
  
  const [status, setStatus] = useState("");
  
  return (
    <div className="App">
    <section className="todoapp">

      {/* Yukarıdaki değerleri header klasörüne gönderdik. */}
      <Header
        inputText={inputText}
        setinputText={setinputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        status={status}
       />
     <Footer
     todos={todos}
     status={status}
     setStatus={setStatus}
     setTodos={setTodos}/>
    </section>
    
    <footer className="info">
    <p>Click to edit a todo</p>
    <p>Created by <a href="https://www.linkedin.com/in/omur-koken-984826233/">Ömür KÖKEN</a></p>
    <p>Part of <a href="https://www.patika.dev/">PatikaDev</a></p>
  </footer>
  </div>

  );
}

export default App;
