const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors({
    // origin:"http://localhost:3000",
    origin:"*",//most preferred
}))

app.get("/data",(req,res)=>{
    res.json({
        name:"Ankitha",
        profession:"Developer"
    })
})

app.listen(8001,()=>{
    console.log("running cors...");
});
