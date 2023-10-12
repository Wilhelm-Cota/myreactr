import { useState } from 'react';
import AddTaskForm from './components/AddTask.js';
import UpdateForm from './components/UpdateTask.js';
import ToDo from './components/ToDoTamplete.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('Improvement needed!');
  const [newTitle, setTitle] = useState('Move');
  const [newDateCreated, setDateCreated] = useState(Date.now());
  const [newDeadline, setDeadline] = useState(Date.now());
  const [updateData, setUpdateData] = useState({
    id: null,
    title: '',
    dateCreated: '',
    deadline: '',
    status: false,
  });

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        dateCreated: newDateCreated,
        deadline: newDeadline,
        status: false,
      };
      setToDo([...toDo, newEntry]);
      setNewTask('');
      setDeadline(Date.now());
      setDateCreated(Date.now());
      setTitle('');
    }
  }

  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id);
    setToDo(newTasks);
  }

  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  }

  const cancelUpdate = () => {
    setUpdateData({
      id: null,
      title: '',
      dateCreated: '',
      deadline: '',
      status: false,
    });
  }

  const changeTask = (e, field) => {
    let newValue = e.target.value;
    let newEntry = {
      ...updateData,
      [field]: newValue,
    };
    setUpdateData(newEntry);
  }

  const updateTask = () => {
    if (updateData.id !== null) {
      let updatedObject = toDo.map(task =>
        task.id === updateData.id ? updateData : task
      );
      setToDo(updatedObject);
      setUpdateData({
        id: null,
        title: '',
        dateCreated: '',
        deadline: '',
        status: false,
      });
    }
  }

  return (
    <div className="container App">
      <br /><br />
      <h2>Remember To Do Paulus Wilhelm</h2>
      <br /><br />
      

      {updateData.id !== null ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}

          newTitle={newTitle}
          setTitle={setTitle}

          newDateCreated ={newDateCreated}
          setDateCreated={setDateCreated}

          newDeadline = {newDeadline}
          setDeadline={setDeadline}
          addTask={addTask}

          
        />
      )}

      
      {toDo && toDo.length ? '' : 'There are currently no tasks...'}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
      <h1>
        Beginning with React 
      </h1>
    </div>
  );
}

export default App;
