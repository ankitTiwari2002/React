
import { useState } from 'react'

function App() {
  const [allTodo, setAllTodo]=useState([]);
  const [singletodo, setsingleTodo] = useState({title:'',desc:''})
  const handleButton=()=>{
    setAllTodo([...allTodo , singletodo]);
  }

  const deleteTodo=(i)=>{
    allTodo.splice(i,1)
    setAllTodo(allTodo);
  }

  return (
    <>
      <div>
        <input type="text" placeholder='Title' onChange={(e)=>{setsingleTodo((prevValue)=>({...prevValue, title: e.target.value,}))}} />
      <br />
      <br />
      <input type="text" placeholder='desc...' onChange={(e)=>{setsingleTodo((prevValue)=>({...prevValue, desc: e.target.value}))}} />
      <br />
      <br />
      <button onClick={handleButton}>submit</button>
      </div>
      <div>
        {
          allTodo.map((data, i)=>(
            <div key={i}>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
              <button onClick={()=>deleteTodo(i)}>delete</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
