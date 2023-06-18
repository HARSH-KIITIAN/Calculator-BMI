const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/bmi", (req,res)=>{
    res.sendFile(__dirname+"/bmicalculator.html");
})

app.post("/", (req,res)=>{
    var sum = Number(req.body.num1) + Number(req.body.num2);
    res.send("Addition = "+sum);
})

app.post("/bmi", (req,res)=>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send("Your BMI = "+bmi);
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})