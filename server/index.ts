import express from 'express'

const app = express()

app.get('', (req, res, next) => {
  res.json({ messgae : "안녕하세요" })
})

app.listen(80, () => {
  console.log('listening...')
})
