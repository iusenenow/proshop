import express from 'express'
import { config } from 'dotenv'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFount } from './middleware/errorMiddleware.js';

config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

app.use(notFount)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))