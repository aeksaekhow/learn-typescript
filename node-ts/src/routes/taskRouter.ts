import {Router} from 'express'
import TaskController from '../controllers/TaskController'

const taskRouter = Router()

taskRouter.post('/', TaskController.createHandler)

taskRouter.get('/', TaskController.getHandler)

taskRouter.patch('/:id', TaskController.updateHandler)

taskRouter.delete('/:id', TaskController.deleteHandler)

export default taskRouter