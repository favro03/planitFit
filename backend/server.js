import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
// import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))


app.use(express.json())
// app.use('/api/users', userRoutes)








app.use(notFound)
app.use(errorHandler)