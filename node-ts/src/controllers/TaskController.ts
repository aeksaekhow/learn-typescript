import {RequestHandler} from 'express'
import Task from '../models/Task'

namespace TaskController {

    const tasks: Task[] = []

    type RequestParam = {
        id: string
    }


    type RequestBody =  {
        text: string
    }

    export const createHandler: RequestHandler<any, Task, RequestBody, any> = (req, res, next) => {

        const text = req.body.text
        const task = new Task(Math.random().toString(), text)

        tasks.push(task)

        res.status(201).json(task)
    }

    export const getHandler: RequestHandler<any, Task[], RequestBody, any> = (req, res, next) => {
        res.json(tasks)
    }

    export const updateHandler: RequestHandler<RequestParam, Task, RequestBody, any> = (req, res, next) => {
        const id = req.params.id
        const task = tasks.find(task => task.id === id)
        if (!task) return res.status(404)

        const text = req.body.text
        task.text = text
        return res.status(200).json(task)
    }

    export const deleteHandler: RequestHandler<RequestParam, Task, any, any> = (req, res, next) => {
        const id = req.params.id
        const taskIndex = tasks.findIndex(task => task.id === id)
        if (taskIndex === -1) return res.status(404)

        const task = tasks[taskIndex]
        tasks.splice(taskIndex, 1)
        return res.status(200).json(task)
    }

}

export default  TaskController