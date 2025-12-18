import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';


function Cards() {
  
  const [todos, setTodos] = useState([
  { id: 1, list: "Buy groceries", time: "09:30" },
  { id: 2, list: "Finish homework", time: "11:00" },
  { id: 3, list: "Clean the house", time: "14:00" },
  { id: 4, list: "Workout", time: "16:00" },
  { id: 5, list: "Call David", time: "19:00" },
  ]);

  const [newList, setNewList] = useState('');
  const [newTime, setNewTime] = useState('');

  // Edit state
  const [editingId, setEditingId] = useState(null);
  const [editList, setEditList] = useState('');
  const [editTime, setEditTime] = useState('');

  const addTodo = () => {
    const trimmed = newList.trim();
    if (!trimmed) return;
    const newTodo = { id: uuidv4(), list: trimmed, time: newTime };
    setTodos(prev => [newTodo, ...prev]);
    setNewList('');
    setNewTime('');
  }
  
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

   const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditList(todo.list);
    setEditTime(todo.time);
  }

  const cancelEdit = () => {
    setEditingId(null);
    setEditList('');
    setEditTime('');
  }

  const saveEdit = (id) => {
    const trimmed = editList.trim();
    if (!trimmed) return;
    setTodos(prev => prev.map(t => t.id === id ? { ...t, list: trimmed, time: editTime } : t));
    cancelEdit();
  }

    return (
      <>
      <div className='input-list'>
         <h2>Todays List</h2>

        <div className='add-todo'>
          <input
            className='underline-input'
            value={newList}
            placeholder='What to do?'
            onChange={e => setNewList(e.target.value)}
          />
            <input
            className='underline-input'
            value={newTime}
            placeholder='Time (e.g. 09:30 AM)'
            onChange={e => setNewTime(e.target.value)}
          />
          <button className='add-btn' onClick={addTodo}><FontAwesomeIcon icon={faCirclePlus} /></button>
          </div>
      </div>

      <div className='card-container'>
        { todos.map ((todo) =>{
        return <div key={todo.id} className="todo-card">
          {editingId === todo.id ? (
            <>
              <div className='todo-list'>
                <input
                  className='underline-input'
                  value={editList}
                  onChange={e => setEditList(e.target.value)}
                />
              </div>
              <div>
                <input
                  className='underline-input'
                  value={editTime}
                  onChange={e => setEditTime(e.target.value)}
                />
              </div>
              <div>
                <button className="edit" onClick={() => saveEdit(todo.id)}><FontAwesomeIcon icon={faFloppyDisk} /></button>
                <button className="delete" onClick={cancelEdit}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
            </>
          ) : (
            <>
              <div className='todo-list'>
                  <p>{ todo.list }</p>
              </div>
              <div>
                <p>{ todo.time }</p>
              </div>
               <div>
                <button className="edit" onClick={() => startEdit(todo)}><FontAwesomeIcon icon={faPenToSquare} /></button>
               <button className="delete" onClick={() => deleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
               </button>
               </div>
            </>
          )}
        </div>
      })}
    </div>
      </>
  )
}



export default Cards