import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [singleTodo, setSingleTodo] = useState({ title: "", description: "" });
  const [alltodo, setAlltodo] = useState([]);

  function saveTodoInLocalStorage(todo) {
    localStorage.setItem("todos", JSON.stringify(todo));
  }

  function getTodoInLocalStorage() {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    setAlltodo(data);
  }

  useEffect(() => {
    getTodoInLocalStorage();
  }, []);

  return (
    <div className="max-w-screen min-h-screen flex gap-10 pt-10 items-center flex-col">
      <div className="w-[100%] flex flex-col gap-8 justify-center items-center">
        <h1 className="text-[2em] font-bold">Todo App</h1>
        <input
          type="text"
          placeholder="enter title..."
          onChange={(e) => {
            setSingleTodo({ ...singleTodo, title: e.target.value });
          }}
          className="outline-none border px-4 py-1 rounded"
        />
        <input
          type="text"
          placeholder="enter description..."
          onChange={(e) => {
            setSingleTodo({ ...singleTodo, description: e.target.value });
          }}
          className="outline-none border px-4 py-1 rounded"
        />
        <button
          onClick={() => {
            if (!singleTodo.title || !singleTodo.description) {
              toast.error("Title or description something missing.", {
                style: { width: "300px", margin: "auto" },
              });
              return;
            } else {
              toast.success("Task added successfully.", {
                style: { width: "300px", margin: "auto" },
              });
              setAlltodo([...alltodo, singleTodo]);
              saveTodoInLocalStorage([...alltodo, singleTodo]);
            }
          }}
          className="w-[13rem] bg-[#181717] text-white py-1 rounded-2xl cursor-pointer hover:bg-[#181717dc]"
        >
          Add Todo
        </button>
      </div>
      <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex justify-center items-center flex-col gap-10">
        {alltodo.map((todo, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl w-full flex justify-between items-center p-3 md:px-10"
          >
            <div className="w-[70%]">
              <p className="font-bold text-[1.3em] capitalize">{todo.title}</p>
              <p className="opacity-85">{todo.description}</p>
            </div>
            <button
              onClick={() => {
                alltodo.splice(i, 1);
                saveTodoInLocalStorage(alltodo);
                getTodoInLocalStorage();
              }}
              className="bg-[#ff4747] w-[30%] md:w-auto text-white py-1 px-3 md:px-5 rounded-2xl cursor-pointer hover:bg-[#ff4747c8]"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
