import React, {useState} from 'react'
import './App.css'
import Task from './models/Task'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

interface Props {

}

const App:React.FC<Props> = (props) => {

    const [tasks, setTasks] = useState<Task[]>([
        {
            id: '1',
            text: 'Task 1'
        },
        {
            id: '2',
            text: 'Task 2'
        },
        {
            id: '3',
            text: 'Task 3'
        }
    ])

    const taskAddHandler = (newTask: Task) => {
        setTasks(prevTasks => {
            const newTasks = [
                ...prevTasks,
                newTask
            ]
            return newTasks
        })
    }

    const taskDeleteHandler = (taskToBeDeleted: Task) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskToBeDeleted.id))
    }

  return (
    <div className="App">
        <NewTodo onAddTask={taskAddHandler}></NewTodo>
        <TodoList tasks={tasks} onDeleteTask={taskDeleteHandler}></TodoList>
    </div>
  );
}

export default App;
