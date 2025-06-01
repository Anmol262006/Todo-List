import { useState, useRef,useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState(()=> {
    // Load from localStorage on first render
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []})
  const cyanGlow = { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }

   useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleSave() {
  if(text !== ''){
setTodos([...todos, { text, checked: false }])
      setText('')
  }
      else{
        alert('Sorry! No task is Written by You')
      }
}
  

 

function handleDelete(idx) {
  let newTodos = []
  for(let i = 0 ; i < todos.length ; i++) {
    if(i !== idx){
       newTodos.push(todos[i]) 
    }
  }
  setTodos(newTodos)
  
}

   function handleEdit(idx) {
 
  // const selectedTodo = todos[idx];

  
  // setText(selectedTodo.text);

  
  // const newTodos = [...todos];

 
  // newTodos.splice(idx, 1); 

 
  // setTodos(newTodos);

  const selectedtodo = todos[idx]
  setText(selectedtodo.text)
  const newTodos =[...todos]
  newTodos.splice(idx,1)
  setTodos(newTodos)

  
}



  function handleCheck(idx) {
    setTodos(
      todos.map((todo, i) =>
        i === idx ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }

  return (
    <>
      {/* ...header code... */}
     
<header className="flex fixed w-full bg-gray-800 text-white text-1xl font-bold py-2.5 hover:bg-gray-900 duration-300 hover:py-4.5 z-10">
  <nav className="flex flex-col sm:flex-row w-full justify-around items-center">
    <h1 className="hover:bg-green-600 w-full md:w-32 h-10 flex items-center justify-center rounded-3xl duration-300 mb-2 md:mb-0 text-lg md:text-xl" style={cyanGlow}>
      Our tasks
    </h1>
    <ul className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-10 items-center">
      <li className="w-full md:w-32 h-10">
        <a href="/home" className="hover:bg-green-600 w-full md:w-32 h-full flex items-center justify-center rounded-3xl duration-300" style={cyanGlow}>Home</a>
      </li>
      <li className="w-full md:w-32 h-10">
        <a href="/about" className="hover:bg-green-600 w-full md:w-32 h-full flex items-center justify-center rounded-3xl duration-300" style={cyanGlow}>About</a>
      </li>
      <li className="w-full md:w-32 h-10">
        <a href="/services" className="hover:bg-green-600 w-full md:w-32 h-full flex items-center justify-center rounded-3xl duration-300" style={cyanGlow}>Services</a>
      </li>
    </ul>
  </nav>
</header>

<main className="pt-24 sm:pt-28 px-2 md:px-10">
  <div className="bg-white-400 min-h-[60vh] md:h-[80vh] hover:bg-gray-300 hover:rounded-4xl duration-700 overflow-y-scroll rounded-xl shadow-lg">
    <div className="flex flex-col items-center">
      <div className="input flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 h-auto sm:h-12  rounded-2xl m-3 w-full sm:w-3/4">
        <input
          type="text"
          placeholder="Enter the Tasks"
          className="w-full sm:w-3/4 h-10 pl-4 outline-4 mt-28 outline-gray-600 rounded-4xl mx-2.5"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          onClick={handleSave}
          className="Save bg-violet-800 text-white font-bold mt-26 w-full sm:w-20 lg:mt-[-10] rounded-4xl h-10 hover:bg-violet-600"
        >
          Save
        </button>
      </div>
    </div>
    <div className='mt-27'>
      <ul className="flex flex-col gap-6 sm:gap-12 ">
        {todos.map((todo, idx) => (
          <li key={idx} className="flex flex-col sm:flex-row items-center bg-pink-100 w-full sm:w-3/4 mx-auto h-auto px-4 sm:px-7 py-2 rounded-3xl gap-4 sm:gap-8 justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleCheck(idx)}
              />
              <span className={todo.checked ? "line-through" : ""}>{todo.text}</span>
            </div>
            <div className="flex gap-3 sm:gap-5 mt-2 sm:mt-0">
              <button onClick={() => handleDelete(idx)} className="bg-violet-800 text-white font-bold w-16 rounded-4xl h-10 hover:bg-violet-600">Delete</button>
              <button onClick={() => handleEdit(idx)} className="bg-violet-800 text-white font-bold w-16 rounded-4xl h-10 hover:bg-violet-600">Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</main>


      <footer className='bg-gray-900 h-[40vh] hover:bg-gray-950 rounded-t-2xl mt-39.5 text-white text-1xl font-bold justify-center items-center' >
      <div className='flex justify-between items-center h-full'>
        Copyright &copy; by Anmol
        <div className=' flex-col'>
          <h1>Useful Links</h1>
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul></div>

<div>
  <h1>Newsletter</h1>
  <h2>Email : ak0052803@gmail.com</h2>
  <h3>Subscribe Now : Factibul</h3>
</div>

<div>
  <h1>Contact</h1>
  <address>Minerva Group of colleges , Indora</address>
</div>

      </div>
    </footer>
    </>
    
  )
}

export default App