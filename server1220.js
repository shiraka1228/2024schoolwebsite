var express = require("express");
var server = express();

// 设置静态文件目录
server.use(express.static(__dirname + "/web2024"));
var DB = require("nedb-promises");
var profoartDB = DB.create(__dirname+"/profoart.db");
var cameraDB = DB.create(__dirname+"/camera.db");

//profoartDB.insert([
//   { imgUrl: "img2/cr3.PNG", ins: "作品1", h5: "BIRTHDAY", text: "彩虹社同人作品" },
//   { imgUrl: "img2/fp06.png", ins: "作品2", h5: "少女レイ", text: "彩虹社同人作品" },
//   { imgUrl: "img2/cr2.png", ins: "作品3", h5: "404!", text: "刀劍亂舞同人作品" },
//   { imgUrl: "img2/pf05.png", ins: "作品4", h5: "CHRISTMAS", text: "刀劍亂舞同人作品" },
//])

//cameraDB.insert([
//   { imgUrl: "img2/pto2.jpg", ins: "作品1", },
//   { imgUrl: "img2/pto3.jpg", ins: "作品2",  },
//   { imgUrl: "img2/pto4.jpg", ins: "作品3", },
//   { imgUrl: "img2/pto1.jpg", ins: "作品4", },
//])


//server.get("/art3", (req, res)=>{
//    //DB find
//    var art2=[
//        { imgUrl: "img2/cr3.PNG", ins: "作品1", h5: "BIRTHDAY", text: "彩虹社同人作品" },
//        { imgUrl: "img2/fp06.png", ins: "作品2", h5: "少女レイ", text: "彩虹社同人作品" },
//        { imgUrl: "img2/cr2.png", ins: "作品3", h5: "404!", text: "刀劍亂舞同人作品" },
//        { imgUrl: "img2/pf05.png", ins: "作品4", h5: "CHRISTMAS", text: "刀劍亂舞同人作品" },
//    ];
//    res.send(art2);
//});

server.get("/art3", (req,res)=>{
    //DB
    profoartDB.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})

server.get("/cm1", (req,res)=>{
    //DB
    cameraDB.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})






//server.post("/art3", (req,res)=>{
//    profoartDB.insert(req.body);
//    res.redirect("/art2");
//})

// 启动服务器监听 80 端口
server.listen(80, () => {
    console.log("Server is running at port 80.");
});
