//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/1018/AgencyProject"));

server.get("/services",(req,res)=>{
//desk db
var Services=[
    
];
res.send(Services);

});

server.get("/profolio", (req,res)=>{       
    //DB        
    
    
res.send("Profolio");  });

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})