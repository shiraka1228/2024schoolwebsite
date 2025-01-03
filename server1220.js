var express = require("express");
var server = express();

// 设置静态文件目录
server.use(express.static(__dirname + "/web2024"));

ProfolioDB.insert([
    { imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
    { imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
    { imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" },
    { imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
    { imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
    { imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" }
])



// 模拟数据库返回的数据
//server.get("/art2", (req, res) => {
//    // 返回数据的格式是 JSON
//    var art2 = [
//        { picture: "img2/cr3.PNG", ins: "E-Commerce", h5: "BIRTHDAY", text: "Happy Birthday" },
//        { picture: "img2/cr4.PNG", ins: "Design", h5: "HOLIDAY", text: "Holiday Season" },
//    ];
//    res.json(art2); // 返回 JSON 格式的数据
//});

// 启动服务器监听 80 端口
server.listen(80, () => {
    console.log("Server is running at port 80.");
});
