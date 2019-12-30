const express = require('express')
const app = express()
const bodyParser = require ("body-parser")

app.use(express.static('.'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static('../uploads'))
const multer = require('multer');
var stroage = multer.diskStorage({
    destination:  function(req,file,cb) {
        cb(null,'../uploads')
    },
    filename: function (reg,file,cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null,file.fieldname + '-' +Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }

});
let upload = multer({storage: stroage})
app.post('/upload',upload.single('file'),function(req,res,next){
    var file=req.file;
    console.log("original file name is " + file.originalname);
    console.log("file name is" + file.fieldname);
    res.json('/' + file.filename);
})



app.post('/forBuilder',function(req,res){
    Console.log(req.body)
    res.send(req.body)
})

app.listen(8080,()=> console.log('node express 服务器已启动，监听窗口：8080'))


const openDefaultBrowser = function(url){
    var exec = require('child_process').exec;
    switch (process.platform) {
        case "darwin":
            exec('open'+url);
            break;
        case "win32":
            exec('start'+ url);
            break;
        default:
            exec('xdg-open',[url]);         
    }
}
openDefaultBrowser('http://localhost:8080')