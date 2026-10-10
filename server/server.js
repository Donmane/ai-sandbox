require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
app.post('/ask', async (req, res) => {
    console.log(req.body);
    const prompt = req.body.prompt
    res.json({answer: "You asked:" + prompt})
    
})

app.listen(3000, () => {
    console.log("Reading");
    
})  