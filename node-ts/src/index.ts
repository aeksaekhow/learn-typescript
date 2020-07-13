import express, {Request, Response, NextFunction} from 'express'
import {json} from 'body-parser'
import taskRouter from './routes/taskRouter'

const app = express()
app.use(json())

app.use('/tasks', taskRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

})

app.listen(3000);
