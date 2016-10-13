
const pcap = require('pcap')
class PacketParser {
  constructor(){
    this._if = 'en0'
    this.tcp_tracker = new pcap.TCPTracker()
    this.pcap = pcap.createSession(this._if, "ip proto \\tcp")
  }

  init(){
    this.pcap.on('packet', function(raw){
      const packet = pcap.decode.packet(raw)
      console.log(packet)
    })
  }
}

module.exports = PacketParser