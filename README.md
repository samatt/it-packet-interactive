
##Packet Interactive

Plan is to use node-pcap to parse packets and then display 
based on [this prototype](https://kaganjd.github.io/packet-sketches/v2/) by [Jen](https://github.com/kaganjd)

##Development

1. Clone this repo
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server. This also runs nodemon so the server automatically updates with any changes you make.

###Things to keep in mind

1. [Common Pcap problems](https://github.com/mranney/node_pcap#some-common-problems)


###Ongoing Notes

 - [Ethernet packet description](https://wiki.wireshark.org/Ethernet)
 
```
  Some examples of values in the type/length field:
	0 - 1500 length field (IEEE 802.3 and/or 802.2)
	0x0800 IP(v4), Internet Protocol version 4
	0x0806 ARP, Address Resolution Protocol
	0x8137 IPX, Internet Packet eXchange (Novell)
	0x86dd IPv6, Internet Protocol version 6
	
```
- [IPv4 Spec](https://en.wikipedia.org/wiki/IPv4#Packet_structure)