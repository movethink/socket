import net from "net"

const onRequest = (client)=>{
    console.log("socket connect!")
}

net.createServer(onRequest).listen(9000)

console.log("socket has start")