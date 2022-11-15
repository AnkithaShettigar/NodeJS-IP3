const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.write("<h1>Hello</h1>");
    res.end()
})

app.listen(3000,()=>{
    console.log("Express js application");
})