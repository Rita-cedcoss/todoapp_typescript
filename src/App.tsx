import React from 'react';
import './App.css';
import Todoapp from './TodoApp/Todoapp';
import Todolist from './TodoApp/Todolist';
function App() {
  return (

    <div className='container-fluid p-4'>
    <Todoapp/>
    <Todolist/>
    </div>
  );
}

export default App;
