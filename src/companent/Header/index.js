import React from 'react'

// App.jsde oluşturulan  state'i headere gönderiyoruz;
// setinputText inputa yazılacak olan ve değişecek olan bilgidir.
// inputTexti sonrasında inputun value ={} kısmına yazıyoruz ki değerleri alabilelim.
function Header({ inputText, setinputText, todos, setTodos }) {
 
  // inputa yazılan değeri almak için;
  const getValue = (e) => {
    setinputText(e.target.value)
  }

  // !! inputun içine yazıldığında submit etmesini engellemek için; ardından bunu aşağıya ekle.  
   const submitTodoHandler = (e) => {
    e.preventDefault()
      setTodos([...todos,
       {text: inputText,
        completed: false,
        id: Math.random()}
      ])
      setinputText(""); // yazdıktan sonra kutunun içi boş olsun.
  }

  return (
    
    // başlık kısmını ve inputu burada oluşturup App.jsye import ettik.
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submitTodoHandler}>
        <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus
        onChange={getValue} // onChange yaptık çünkü değişen bilgiyi alacağız.
        value={inputText} // value ekliyoruz ve inputa yazdığımız her şeyi alabiliyoruz.
        />
      </form>
    </header>
 
  )
}
export default Header;
