import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import connectDatabase from './config/connectDatabase.js'

import productRoutes from './routes/productRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/products', productRoutes)
app.use('*', (req, res) => {
  res.send('Page not found')
})

const start = async () => {
  try {
    await connectDatabase(process.env.DATABASE_URL)
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}
start()