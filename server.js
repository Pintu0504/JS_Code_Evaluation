const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'))

function decodeData(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q] 
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }

    next()
}

app.get('/eval', decryptData, decodeData, (req, res)=>{
    let ans = eval(req.query.code);
    res.send("answer is "+ans)
})

app.listen(3333, ()=>{
    console.log('Server started on http://localhost:3333')
})

