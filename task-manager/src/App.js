//import logo from './logo.svg';
import Header from './components/header/Header.js'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState, useEffect} from 'react';
import Tasks from './components/tasks/Tasks.js';
import AddTask from './components/addtask/AddTask.js';
import Footer from './components/footer/Footer.js';

import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/about/About.js';


function App() {
  const [tasks, setTask] = useState([])

const [showAddTask, setshowAddTask] = useState(false)

useEffect(() => {
  const getData = async () =>{
    const fetchedTasks = await fetchTasks()

    console.log(fetchedTasks);
    setTask(fetchedTasks)
  }

  getData()
}, [])

const fetchTasks = async () => {
  const res = await fetch('http://localhost:8000/tasks')
  const data = await res.json();
  return data
}
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:8000/tasks/${id}`)
  const data = await res.json();
  return data
}

const addTask = async (task) =>{
  
  const res = await fetch(`http://localhost:8000/tasks`, {
    method : 'POST',
    headers : {
      'Content-type':'application/json'
    },
    body : JSON.stringify(task)
  })
  const data = await res.json()
  setTask([...tasks, data])
  
  // const id = Math.floor(Math.random()*1000)+1
  // task.id = id
  // console.log('task ',task)
  // setTask([...tasks,task])
}
const deleteTask = async (id) =>{

  await fetch(`http://localhost:8000/tasks/${id}`, {
    method : 'DELETE',
  })

  console.log('Delete ',id)
  setTask(tasks.filter((task)=> task.id !== id))
}
const toggleReminder = async (id) =>{

  const fetchedTask = await fetchTask(id);
  const updatedTask = {...fetchedTask, reminder :!fetchedTask.reminder}

  const res = await  fetch(`http://localhost:8000/tasks/${id}`, {
    method : 'PUT',
    headers : {
      'Content-type':'application/json'
    },
    body : JSON.stringify(updatedTask)

  })
  const data = await res.json()
  console.log('toggleReminder data ',data)
  setTask(tasks.map((task)=> 
    task.id === id ? {...task, reminder :data.reminder} : task
  ))

}
  return (
    <Router>
    <div className="container">
      <Header onclickAddTask={()=> setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
      { showAddTask && <AddTask onAdd= {addTask} />}
      

      <Route path="/" exact render={(props)=>(
        <>
          { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} /> : 'No Task to show'}
          <Footer/>
        </>
      )} />
      <Route path="/about" component={About}/>
    </div>
    </Router>
  );
}

export default App;
