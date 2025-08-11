const express =require("express");
const app = express();

let port = 3000;

app.listen(port , () => {
    console.log(`app is started`);
})

app.get("/apple",(req , res) => {
    let code = {
        name : "apple",
        color : "red"
    }
    res.send(code);
});

app.get("/search",(req,res) => {
    let {q} = req.query ;
    if(!q){
        res.send(`no search query found`)
    }
    res.send(`these is search of ${q}`);
});