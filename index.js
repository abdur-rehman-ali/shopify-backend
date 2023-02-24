import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use('/', (req, res) => {
  res.send('Hello shopify 1')
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})