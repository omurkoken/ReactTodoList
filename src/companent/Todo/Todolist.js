import React from 'react'
import Todo from './Todo'
import { useState, useEffect} from 'react';
function Todolist({ todos, setTodos,status }) {
    const [filteredTodos, setFilteredTodos] = useState([]);
    
    useEffect(() => {
      getLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
    useEffect(() => {
        const filterHandler = () => {
    
          switch (status) {
            case "completed":
              setFilteredTodos(todos.filter((todo) => todo.completed === true));
              break;
            case "active":
              setFilteredTodos(todos.filter((todo) => todo.completed === false));
              break;
            default:
              setFilteredTodos(todos);
              break;
          }
        };filterHandler();
        saveLocalTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [todos, status]); 

        //  LOCAL STORAGE
const saveLocalTodos= () => 
{
  localStorage.setItem("todos", JSON.stringify(todos))
}

const getLocalTodos = () => {
  if (localStorage.getItem === null) {
    localStorage.setItem("todos", status).JSON.stringify([])
  }
  else {
    setTodos(JSON.parse(localStorage.getItem("todos",status)))
  }
}
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            {/* tıklandığında tamamlama ve tekrar tıklandığında tamamlamayı kaldırma */}
            <label htmlFor="toggle-all" onClick={() => {
                setTodos(
                    todos.map((item) => {
                        const isCompleted = todos.some((element) => {
                            return element.completed === false
                        })
                        return isCompleted === true
                            ? { ...item, completed: true }
                            : { ...item, completed: false }
                    })
                )
            }}>
                Mark all as complete
            </label>
            <ul className="todo-list">
            {filteredTodos.map((todo) => {
						return (
							<Todo
								status={status}
								key={todo.id}
								todo={todo}
								text={todo.text}
								todos={todos}
								setTodos={setTodos}
							/>
						);
					})}
            </ul>
        </section>
    )
}
export default Todolist
