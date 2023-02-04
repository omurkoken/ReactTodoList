import React from 'react'


        //  parametreler Todolist.jsden geldi. aşağıya text yazdık ki yazılan içerik listeye eklensin
function Todo({text,todo,setTodos,todos}) {
    
    // Tıklandıktan sonra silme fonksiyonu, aşağıdaki buttona onClick olunca görmesi için eklendi.
    const deleteHandler = () => {
            setTodos(todos.filter((e) => e.id !== todo.id))
        } 
        const isCompleted = () =>
		setTodos(
			todos.map((item) => {
				return item.id === todo.id
					? { ...item, completed: !item.completed }
					: item;
			})
		);
        
       return (
        <>
        <li className={todo.completed ? "completed" : ''}>
            <div className="view">
                <input className="toggle"  type="checkbox" 
                onChange={isCompleted} />
                <label>{text}</label>
                <button onClick={deleteHandler} className="destroy"></button>
            </div>
        </li>
      </>
    ) 
    } 

export default Todo;
