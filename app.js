const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send("Homepage")
})

const Port = process.env.PORT || 1000

app.listen(Port, () => {
    console.log(`Server running on port: ${Port}`)
})