const { log } = require('console');
const http=require('http');
const PORT=3000;
// using the createserver function we can actyally create a basic http using modulezs
// this function return a server object and takes a callbacks as an argument 
const server=http.createServer( function listener(request,response){
  // using req argument we will able to details of incoming http request;(objects)
  // response -. WILL be able to configure what response we need to send for an incoming http request.
  if(request.url=='/home'){
    // if we make a request on /home this if block will be explain
    console.log(request.method);
    // response.end("welcome to end");
    // response.end({msg:"Sucess"});
    // Json object

  }
  console.log("Request Received")
})
server.listen(PORT,function exec(){
   console.log(`server is set and port is ${PORT}`);
})

// loopback
