// const express=require('express');
// const http=require('http');
// const socket=require("socket.io");
// const app=express()
// const server=http.createServer(app);
// const io=socket(server);
// const port=process.env.port || 3000;
const io=require('socket.io')(3000,{
    cors:{
        origin:["https://chat-application-taupe-gamma.vercel.app"]
    }
    
})


io.on('connection',socket=>
    {
        console.log(socket.id)
        socket.on("mymessage",(name,message)=>
            {
                socket.broadcast.emit("received_message",name,message)
            }
        )
        socket.on("enter room",(name)=>
        {
            socket.broadcast.emit("entered room",name)
        })
    }
)
// const port=process.env.port || 3000;
// server.listen(port,()=>
//     {
//         console.log("server is running")
//     }
// )