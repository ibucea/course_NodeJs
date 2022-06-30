import express from 'express'
import bp, { json } from 'body-parser'
import morgan from 'morgan'

const app = express()

app.use(bp.urlencoded({extended: true}))
app.use(bp.json())
app.use(morgan('dev'))

const db = []

app.post('/todo', async (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text
    }

    db.push(newTodo)
    res.status(201).json(newTodo)
})

app.get('/todo', (req, res) => {
    res.json(db)
})

app.get('/todo/:id', (req, res) => {
    const todo = db.find( t => {
        return t.id === +req.params.id
    })
    // res.writeHead({'content-type': 'application/json'})
    // res.end(json)
    res.json({data: totdo})
})

app.listen(8000, ()=> {
    console.log('Server on http://localhost:8000')
})