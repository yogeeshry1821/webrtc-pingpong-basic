console.log('hi')
import { sortAndDeduplicateDiagnostics } from 'typescript';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection',function(socket){
    /* setInterval(()=>{
        socket.send('lol'+Math.random());
    },500) */
    socket.on('message',(e)=>{
        if(e.toString()==="ping"){
            socket.send("pong")
        }
        console.log(e.toString());
    })
    socket.send('hi');
})