import express from 'express'

const app = express()

app.get('', (req, res, next) => {
  res.json({ messgae : "value" })
})

app.listen(80, () => {
  console.log('listening...')
})
