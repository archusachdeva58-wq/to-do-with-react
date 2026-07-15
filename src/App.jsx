import React from 'react';
import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")
  const[task,setTasks]=useState([])
  const[edit,setEditIndex]=useState("")
  const[showNew,setShowNew]=useState(false)
  let[show,setShow]=useState(true)
  const[state,newState]=useState("all")
  const[indexes,setIndexes]=useState([])
  let display=[]
  let news
  let newv=[]
  let displayIndexes=[]
  const styles = {
   parent:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'5px',
    padding:'10px'
   },
   main:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    border:'2px solid black',
    borderRadius:'8px',
    width:'90%',
    padding:'10px',
    margin:'5px',
    gap:'10px'
   },
   btn:{
    width:'100px',
    padding:'10px',
    borderRadius:'8px',
    border:'none',
    backgroundColor:'black',
    color:'white',
    cursor:'pointer',
   },
   input:{
    padding:'10px',
    borderRadius:'8px',
    border:'none',
    backgroundColor:'rgba(0,0,0,0.2)',
   },
   card:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    border:'2px solid rgba(0,0,0,0.3)',
    borderRadius:'8px',
    width:'90%',
    padding:'3px',
    margin:'10px',
   },
   main1:{
     display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'90%',
    margin:'5px',
   },
   head:{
    margin:'10px'
   },
   butt:{
    display:'flex',
    gap:'5px',
   }
  };
  function add(){
    if(input.trim()!==""){
      if(edit===""){
      setTasks([...task,input]);
      setInput("");
      }
      else{
       for(let i=0;i<task.length;i++){
        if(i===edit){
          task[i]=input;
        }
       }
       setInput("");
       setEditIndex("");
       setShow(true);
       setShowNew(false);
      }
  }
  else{
    alert("Please enter a valid task");
    setInput("");   
  }}
  function newl(currentIndex){
      if(indexes.includes(currentIndex)){
      newv= indexes.filter((index)=>(index!==currentIndex))
      setIndexes(newv);
      }
      else{
        setIndexes([...indexes,currentIndex]);
      }
  }
  if(state==='pending'){
     displayIndexes = task
    .map((item,index)=>index)
    .filter(index=>!indexes.includes(index))

  display = displayIndexes.map(index=>task[index])
  }
  else if(state==='completed'){
   displayIndexes = task.map((item,index)=>index).filter(index=>indexes.includes(index))
    display = displayIndexes.map(index=>task[index])
  }
  else{
     displayIndexes = task.map((item,index)=>index)
  display = task;
    }
  
  
  return (
    <div style={styles.parent}>
     <h1 style={styles.head}>My To-Do List</h1>
     <h2 style={styles.head}>Stay organized, get things done ✨</h2>
     <div style={styles.main}>
      <input type='text' placeholder='What needs to be done?' style={styles.input}   value={input}
  onChange={(e) => setInput(e.target.value)}/>
    {show &&  <button style={styles.btn} onClick={add}>+Add</button>}
    {showNew && <button style={styles.btn} onClick={add}>Save</button>}
    </div>
    <div style={styles.main1}>
     <button style={styles.btn} onClick={()=>newState("all")}>All</button>
     <button style={styles.btn} onClick={()=>newState("pending")}>Pending</button>
     <button style={styles.btn} onClick={()=>newState("completed")}>Completed</button>
    </div>
    {display.map((item,index) =>(
    <div style={styles.card} key={index}>
    <div style={styles.butt}>
    <input type='checkbox' id='c1' checked={indexes.includes(displayIndexes[index])}
    onChange={()=>newl(displayIndexes[index])}/>
    <p style={{
  textDecoration: indexes.includes(displayIndexes[index]) ? "line-through" : "none"
}}>
  {item}
</p>
     </div>
     <div style={styles.butt}>
     <button style={styles.btn} onClick={()=>{setInput(item),setEditIndex(index),setShow(false),setShowNew(true)}
     }>Edit</button>
     <button style={styles.btn} onClick={()=>{
          news=task.filter((item,currentIndex)=>currentIndex!=index)
    setTasks(news);
     }}>Delete</button>
     </div>
     </div>
  ))}
    </div>
  )
}

export default App
