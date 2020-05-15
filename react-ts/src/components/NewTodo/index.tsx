import React, {useRef} from 'react'
import Task from '../../models/Task'
import './styles.module.css'

interface Props {
    onAddTask(task: Task): void
}

const NewTodo: React.FC<Props> = props => {

    const taskTextInputRef = useRef<HTMLInputElement>(null)

    const onTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const text = taskTextInputRef.current!.value
        props.onAddTask({
            id: Math.random().toString(),
            text
        })
    }

    return (
        <form onSubmit={onTaskSubmit}>
            <div>
                <label htmlFor="task-text">Text</label>
                <input type="text" id="task-text" ref={taskTextInputRef}/>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default NewTodo