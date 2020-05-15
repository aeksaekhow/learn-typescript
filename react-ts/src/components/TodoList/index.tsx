import React from "react";
import Task from "../../models/Task";
import './styles.module.css'

interface TodoListProps {
    tasks: Task[],
    onDeleteTask(task: Task): void
}

const TodoList: React.FC<TodoListProps> = (props) => {

    const jsxList = props.tasks.map(task =>
        <li id={task.id}>
            <span>{task.text}</span>
            <button type="button" onClick={props.onDeleteTask.bind(null, task)}>Delete</button>
        </li>)

    return (
        <div>{jsxList}</div>
    )
}

export default TodoList