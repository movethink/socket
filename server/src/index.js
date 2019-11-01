import ws from "ws"
const socketServer = ws.Server

const webSocket = new socketServer({
    port: 9000
})

webSocket.on("connection",(ws)=>{
    console.log("[SERVER] connection")
    ws.on("message",(message)=>{
        console.log(`[SERVER] Received: ${message}`)
        ws.send(`ECHO: ${message}`,(err)=>{
            if(err){
                console.log(`[SERVER] error ${err}`)
            }
        })
    })
})

console.log("socket has start")