import { useState } from "react";
import "./App.css";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const[editid,editmode]=useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (editid) {
      const edittodo=todos.find((i)=>i.id===editid);
      console.log(edittodo);
      const updated=todos.map((e)=>e.id===edittodo.id?(e={id:e.id,todo}):{id:e.id,todo:e.todo})
       settodos(updated)
       editmode(0)
       settodo("")
       return
    }
      

        if (todo !== "") {
      
      settodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      settodo("");
    }
  };
  const handleEdit=(id)=>{
      const edited=todos.find((y)=>y.id===id);
      settodo(edited.todo)
      editmode(edited.id)
  }

  const handledelete = (id) => {
    console.log(id);
    
      const dletetodo = todos.filter((to) => to.id !== id);

      settodos([...dletetodo]);
    
  };
  
  return (
    
    <div className="main">
      <div className="container">
        <h1>Todo List <br/>in React</h1>
        <form className="formbox" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => settodo(e.target.value)} />
          <button type="submit">{editid ?"Save":"Go"}</button>
        </form>
        <ul className="alltodo">
        {
          
          todos.map((t) => (
          
            <li className="singletodo" key={t.id}>
             
              <span className="todotext">{t.todo}</span>
              <button onClick={()=>handleEdit(t.id)}>edit</button>
              <button onClick={() => handledelete(t.id)}>delete</button>
            </li>
          ))
        }
          
        </ul>
      </div>
    </div>
  );
}

export default App;
