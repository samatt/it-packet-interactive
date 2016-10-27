const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const socketServer = require('http').Server(app);
const io = require('socket.io')(socketServer);
const PacketParser = require('./scripts/packet-parser')
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

const fs =require('fs')
const debugData = JSON.parse(fs.readFileSync(`${__dirname}/public/data/packet.json`))
let str = ""
for (i in debugData.tcp.data.data){
    str+=String.fromCharCode(debugData.tcp.data.data[i]);
}
// console.log(str);
debugData.tcp.data.data = str
socketServer.listen(7777);

let parser = new PacketParser()
parser.init()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('public'))

app.get('/start', function (req, res) {})

const server = app.listen(process.env.PORT || 3000, function () {
  const port = server.address().port
  console.log(`App now running on port: ${port}`)
})

allSockets = []
io.on('connection', function (socket) {
  allSockets.push(socket)
  if(debugData){
    socket.emit('data', debugData);
  }
  else{
   socket.emit('data', {'no' :'data'});
  }

});