const express =require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PacketParser = require('./scripts/packet-parser')

let parser = new PacketParser()
parser.init()
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(cors())


app.use(express.static('public'));

app.get('/start', function(req, res){

})

const server = app.listen(process.env.PORT || 3000, function(){
  const port = server.address().port
  console.log(`App now running on port: ${port}`)
});