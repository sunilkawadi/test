const  express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get ("/", function(req, res){
    res.send("welcome to my channel:)");
});

app.get ("/about", function(req, res){
    res.send("welcome to my  sunil kawadi:)");
});

app.get ("/contact", function(req, res){
    res.send("if you have any quries contact me on this email id .)");
});


app.get ("/calculator", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/calculator", function(req, res){
    console.log(req.body);

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1+n2;

    res.send("the sum of the two number is :"+sum);
});



app.listen(3000,function(req, res) {
    console.log("server is running port no.3000");
});