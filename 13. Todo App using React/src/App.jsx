import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'

function App() {
  const [singleTodo, setSingleTodo] = useState({ title: '', description: '' })
  const [alltodo, setAlltodo] = useState([]);

  function saveTodoInLocalStorage(todo) {
    localStorage.setItem('todos', JSON.stringify(todo));
  }

  function getTodoInLocalStorage() {
    let data = JSON.parse(localStorage.getItem('todos')) || []
    setAlltodo(data)
  }

  useEffect(() => {
    getTodoInLocalStorage();
  }, [])

  return (
    <div>
      <div>
        <input type="text" placeholder='title...' onChange={(e) => { setSingleTodo({ ...singleTodo, title: e.target.value }) }} />
        <br /><br />
        <input type="text" placeholder='Description...' onChange={(e) => { setSingleTodo({ ...singleTodo, description: e.target.value }) }} />
        <br /><br />
        <button
          onClick={() => {
            if (singleTodo.title === '' && singleTodo.description === '') {
              toast.error('Enter title and description.');
              return
            } else {
              toast.success('Task added successfully.')
              setAlltodo([...alltodo, singleTodo]);
              saveTodoInLocalStorage([...alltodo, singleTodo])
            }
          }}
        >Add Todo</button>
      </div>
      <div>
        {
          alltodo.map((todo, i) => (
            <div key={i}>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              <button onClick={() => {
                alltodo.splice(i, 1);
                saveTodoInLocalStorage(alltodo);
                getTodoInLocalStorage()
              }}>Delete</button>
            </div>
          ))
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default App