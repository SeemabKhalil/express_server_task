var express = require("express");
var app = express();
const bootstrap = require("express-bootstrap-service");
app.use(bootstrap.serve);
var router = express.Router();
var path = __dirname + '/views/';
router.post('/',(req,res,next) =>{
  console.log("---Start---");
  console.log("Request Params:" + JSON.stringify(req.params));
  console.log("Request app:" + req.app);
  console.log("Request baseUrl:" + req.baseUrl);
  console.log("Request body:" + req.body);
  console.log("Request cookies:" + req.cookies);
  console.log("Request hostname:" + req.hostname);
  console.log("Request ip:" + req.ip);
  console.log("Request ips:" + req.ips);
  console.log("Request method:" + req.method);
  console.log("Request .protocol:" + req.protocol);
  console.log("Request query:" + JSON.stringify(req.query));
  console.log("Request route:" + JSON.stringify(req.route));
  console.log("---END---");
  next();
});

app.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/app",router);

app.listen(3000,()=>{
  console.log("3000  Port is ready to Run");
});
