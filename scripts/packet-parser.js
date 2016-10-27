const pcap = require('pcap')
const fs = require('fs')



class PacketParser {
  constructor () {
    this._if = 'en0'
    this.tcp_tracker = new pcap.TCPTracker()
    // this.pcap = pcap.createSession(this._if, 'ip proto \\tcp')
    this.pcap = pcap.createSession(this._if, 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)')
    this.wroteOne = false
  }

  init () {
    this.pcap.on('packet', function (raw) {
      const packet = pcap.decode.packet(raw)
      // console.log(raw.buf.length)
      // console.log(raw.buf.slice(0, 6))
      // console.log(raw.buf.slice(6, 12))
      // console.log(raw.buf.slice(12, 14))
      // console.log(raw.buf.slice(14).length)
      const timestamp = packet.pcap_header.tv_sec
      const eth = packet.payload
      // eth.raw_bytes = raw.buf.slic
      const ip = eth.payload
      const tcp = ip.payload
      tcp.data = tcp.data.toString('utf-8')
      const full = {
        ts: timestamp,
        eth: eth,
        ip: ip,
        tcp: tcp
      }
      console.log(tcp.data)
      if (!this.wroteOne) {
        fs.writeFileSync('test.json', JSON.stringify(full))
        this.wroteOne = true
      }
      // console.log(full)
    })
  }

// getByteChunks (raw) {}
}

module.exports = PacketParser
