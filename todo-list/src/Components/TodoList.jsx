import React, { useState } from 'react';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim() === '') return;
        const newTaskObj = {
            id: Date.now(),
            text: newTask.trim(),
            completed: false
        };
        setTasks(prevTasks => [...prevTasks, newTaskObj]);
        setNewTask('');
    };

    const toggleTask = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>📝 My Todo List</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Add new task..."
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                marginLeft: '10px'
                            }}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
