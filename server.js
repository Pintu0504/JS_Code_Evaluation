const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use('/', express.static(__dirname + '/public'))

function decodeData(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q] 
        data = Buffer.from(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval', decodeData, (req, res)=>{
    let ans = eval(req.query.code);
    res.send(`The output is \n` + ans)
})

app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})

