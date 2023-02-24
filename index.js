import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import connectDatabase from './config/connectDatabase.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use('/', (req, res) => {
  res.send('Hello shopify 1')
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