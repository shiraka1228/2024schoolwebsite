//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/1018/AgencyProject"));

var DB = require("nedb-promises"); 
var Profolio = DB.create(__dirname+"/profolio.db");  
Profolio.insert({modal: "#portfolioModal1", imgSrc:"roundicons.png", heading:"Round Icons", text:"Graphic Design"})

server.get("/services",(req,res)=>{
//desk db
var Services=[
    
];
res.send(Services);

});

//Profolio.insert([
//    { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
//    { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
//    { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" },
//    { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
//    { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
//    { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" }   
       //])

server.get("/profolio", (req,res)=>{       
    //DB        
    Profolio.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
    
});

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})