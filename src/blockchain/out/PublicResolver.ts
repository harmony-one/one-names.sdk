export const PublicResolver: any = {
  contractName: "PublicResolver",
  abi: [
    {
      constant: true,
      inputs: [
        {
          name: "interfaceID",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "pure",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "data",
          type: "bytes",
        },
      ],
      name: "setDNSRecords",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "key",
          type: "string",
        },
        {
          name: "value",
          type: "string",
        },
      ],
      name: "setText",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "interfaceID",
          type: "bytes4",
        },
      ],
      name: "interfaceImplementer",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "contentTypes",
          type: "uint256",
        },
      ],
      name: "ABI",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
        {
          name: "",
          type: "bytes",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "x",
          type: "bytes32",
        },
        {
          name: "y",
          type: "bytes32",
        },
      ],
      name: "setPubkey",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "hash",
          type: "bytes",
        },
      ],
      name: "setContenthash",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
      ],
      name: "addr",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "name",
          type: "bytes32",
        },
      ],
      name: "hasDNSRecords",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "key",
          type: "string",
        },
      ],
      name: "text",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "contentType",
          type: "uint256",
        },
        {
          name: "data",
          type: "bytes",
        },
      ],
      name: "setABI",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
      ],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "name",
          type: "string",
        },
      ],
      name: "setName",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "coinType",
          type: "uint256",
        },
        {
          name: "a",
          type: "bytes",
        },
      ],
      name: "setAddr",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "name",
          type: "bytes32",
        },
        {
          name: "resource",
          type: "uint16",
        },
      ],
      name: "dnsRecord",
      outputs: [
        {
          name: "",
          type: "bytes",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
      ],
      name: "clearDNSZone",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
      ],
      name: "contenthash",
      outputs: [
        {
          name: "",
          type: "bytes",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
      ],
      name: "pubkey",
      outputs: [
        {
          name: "x",
          type: "bytes32",
        },
        {
          name: "y",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "a",
          type: "address",
        },
      ],
      name: "setAddr",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "interfaceID",
          type: "bytes4",
        },
        {
          name: "implementer",
          type: "address",
        },
      ],
      name: "setInterface",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "coinType",
          type: "uint256",
        },
      ],
      name: "addr",
      outputs: [
        {
          name: "",
          type: "bytes",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "bytes32",
        },
        {
          name: "",
          type: "address",
        },
        {
          name: "",
          type: "address",
        },
      ],
      name: "authorisations",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "_ens",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "target",
          type: "address",
        },
        {
          indexed: false,
          name: "isAuthorised",
          type: "bool",
        },
      ],
      name: "AuthorisationChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: true,
          name: "indexedKey",
          type: "string",
        },
        {
          indexed: false,
          name: "key",
          type: "string",
        },
      ],
      name: "TextChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: false,
          name: "x",
          type: "bytes32",
        },
        {
          indexed: false,
          name: "y",
          type: "bytes32",
        },
      ],
      name: "PubkeyChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: false,
          name: "name",
          type: "string",
        },
      ],
      name: "NameChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: true,
          name: "interfaceID",
          type: "bytes4",
        },
        {
          indexed: false,
          name: "implementer",
          type: "address",
        },
      ],
      name: "InterfaceChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: false,
          name: "name",
          type: "bytes",
        },
        {
          indexed: false,
          name: "resource",
          type: "uint16",
        },
        {
          indexed: false,
          name: "record",
          type: "bytes",
        },
      ],
      name: "DNSRecordChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: false,
          name: "name",
          type: "bytes",
        },
        {
          indexed: false,
          name: "resource",
          type: "uint16",
        },
      ],
      name: "DNSRecordDeleted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
      ],
      name: "DNSZoneCleared",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: false,
          name: "hash",
          type: "bytes",
        },
      ],
      name: "ContenthashChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: false,
          name: "a",
          type: "address",
        },
      ],
      name: "AddrChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: false,
          name: "coinType",
          type: "uint256",
        },
        {
          indexed: false,
          name: "newAddress",
          type: "bytes",
        },
      ],
      name: "AddressChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "node",
          type: "bytes32",
        },
        {
          indexed: true,
          name: "contentType",
          type: "uint256",
        },
      ],
      name: "ABIChanged",
      type: "event",
    },
    {
      constant: false,
      inputs: [
        {
          name: "node",
          type: "bytes32",
        },
        {
          name: "target",
          type: "address",
        },
        {
          name: "isAuthorised",
          type: "bool",
        },
      ],
      name: "setAuthorisation",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  metadata:
    '{"compiler":{"version":"0.5.8+commit.23d335f2"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[{"name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"key","type":"string"},{"name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"x","type":"bytes32"},{"name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"target","type":"address"},{"name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"key","type":"string"}],"name":"text","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"contentType","type":"uint256"},{"name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"coinType","type":"uint256"},{"name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"name","type":"bytes32"},{"name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"name":"x","type":"bytes32"},{"name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"interfaceID","type":"bytes4"},{"name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"coinType","type":"uint256"}],"name":"addr","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"address"},{"name":"","type":"address"}],"name":"authorisations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"target","type":"address"},{"indexed":false,"name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"indexedKey","type":"string"},{"indexed":false,"name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"x","type":"bytes32"},{"indexed":false,"name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"interfaceID","type":"bytes4"},{"indexed":false,"name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"name","type":"bytes"},{"indexed":false,"name":"resource","type":"uint16"},{"indexed":false,"name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"name","type":"bytes"},{"indexed":false,"name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"coinType","type":"uint256"},{"indexed":false,"name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"}],"devdoc":{"methods":{"ABI(bytes32,uint256)":{"params":{"contentTypes":"A bitwise OR of the ABI formats accepted by the caller.","node":"The ENS node to query"},"return":"contentType The content type of the return valuedata The ABI data"},"addr(bytes32)":{"params":{"node":"The ENS node to query."},"return":"The associated address."},"clearDNSZone(bytes32)":{"params":{"node":"the namehash of the node for which to clear the zone"}},"contenthash(bytes32)":{"params":{"node":"The ENS node to query."},"return":"The associated contenthash."},"dnsRecord(bytes32,bytes32,uint16)":{"params":{"name":"the keccak-256 hash of the fully-qualified name for which to fetch the record","node":"the namehash of the node for which to fetch the record","resource":"the ID of the resource as per https://en.wikipedia.org/wiki/List_of_DNS_record_types"},"return":"the DNS record in wire format if present, otherwise empty"},"hasDNSRecords(bytes32,bytes32)":{"params":{"name":"the namehash of the node for which to check the records","node":"the namehash of the node for which to check the records"}},"interfaceImplementer(bytes32,bytes4)":{"params":{"interfaceID":"The EIP 168 interface ID to check for.","node":"The ENS node to query."},"return":"The address that implements this interface, or 0 if the interface is unsupported."},"name(bytes32)":{"params":{"node":"The ENS node to query."},"return":"The associated name."},"pubkey(bytes32)":{"params":{"node":"The ENS node to query"},"return":"x, y the X and Y coordinates of the curve point for the public key."},"setABI(bytes32,uint256,bytes)":{"params":{"contentType":"The content type of the ABI","data":"The ABI data.","node":"The node to update."}},"setAddr(bytes32,address)":{"params":{"a":"The address to set.","node":"The node to update."}},"setAuthorisation(bytes32,address,bool)":{"details":"Sets or clears an authorisation. Authorisations are specific to the caller. Any account can set an authorisation for any name, but the authorisation that is checked will be that of the current owner of a name. Thus, transferring a name effectively clears any existing authorisations, and new authorisations can be set in advance of an ownership transfer if desired.","params":{"isAuthorised":"True if the address should be authorised, or false if it should be deauthorised.","node":"The name to change the authorisation on.","target":"The address that is to be authorised or deauthorised."}},"setContenthash(bytes32,bytes)":{"params":{"hash":"The contenthash to set","node":"The node to update."}},"setDNSRecords(bytes32,bytes)":{"params":{"data":"the DNS wire format records to set","node":"the namehash of the node for which to set the records"}},"setInterface(bytes32,bytes4,address)":{"params":{"implementer":"The address of a contract that implements this interface for this node.","interfaceID":"The EIP 168 interface ID.","node":"The node to update."}},"setName(bytes32,string)":{"params":{"name":"The name to set.","node":"The node to update."}},"setPubkey(bytes32,bytes32,bytes32)":{"params":{"node":"The ENS node to query","x":"the X coordinate of the curve point for the public key.","y":"the Y coordinate of the curve point for the public key."}},"setText(bytes32,string,string)":{"params":{"key":"The key to set.","node":"The node to update.","value":"The text data value to set."}},"text(bytes32,string)":{"params":{"key":"The text data key to query.","node":"The ENS node to query."},"return":"The associated text data."}}},"userdoc":{"methods":{"ABI(bytes32,uint256)":{"notice":"Returns the ABI associated with an ENS node. Defined in EIP205."},"addr(bytes32)":{"notice":"Returns the address associated with an ENS node."},"clearDNSZone(bytes32)":{"notice":"Clear all information for a DNS zone."},"contenthash(bytes32)":{"notice":"Returns the contenthash associated with an ENS node."},"dnsRecord(bytes32,bytes32,uint16)":{"notice":"Obtain a DNS record."},"hasDNSRecords(bytes32,bytes32)":{"notice":"Check if a given node has records."},"interfaceImplementer(bytes32,bytes4)":{"notice":"Returns the address of a contract that implements the specified interface for this name. If an implementer has not been set for this interfaceID and name, the resolver will query the contract at `addr()`. If `addr()` is set, a contract exists at that address, and that contract implements EIP168 and returns `true` for the specified interfaceID, its address will be returned."},"name(bytes32)":{"notice":"Returns the name associated with an ENS node, for reverse records. Defined in EIP181."},"pubkey(bytes32)":{"notice":"Returns the SECP256k1 public key associated with an ENS node. Defined in EIP 619."},"setABI(bytes32,uint256,bytes)":{"notice":"Sets the ABI associated with an ENS node. Nodes may have one ABI of each content type. To remove an ABI, set it to the empty string."},"setAddr(bytes32,address)":{"notice":"Sets the address associated with an ENS node. May only be called by the owner of that node in the ENS registry."},"setContenthash(bytes32,bytes)":{"notice":"Sets the contenthash associated with an ENS node. May only be called by the owner of that node in the ENS registry."},"setDNSRecords(bytes32,bytes)":{"notice":"Set one or more DNS records.  Records are supplied in wire-format. Records with the same node/name/resource must be supplied one after the other to ensure the data is updated correctly. For example, if the data was supplied:    a.example.com IN A 1.2.3.4    a.example.com IN A 5.6.7.8    www.example.com IN CNAME a.example.com. then this would store the two A records for a.example.com correctly as a single RRSET, however if the data was supplied:    a.example.com IN A 1.2.3.4    www.example.com IN CNAME a.example.com.    a.example.com IN A 5.6.7.8 then this would store the first A record, the CNAME, then the second A record which would overwrite the first."},"setInterface(bytes32,bytes4,address)":{"notice":"Sets an interface associated with a name. Setting the address to 0 restores the default behaviour of querying the contract at `addr()` for interface support."},"setName(bytes32,string)":{"notice":"Sets the name associated with an ENS node, for reverse records. May only be called by the owner of that node in the ENS registry."},"setPubkey(bytes32,bytes32,bytes32)":{"notice":"Sets the SECP256k1 public key associated with an ENS node."},"setText(bytes32,string,string)":{"notice":"Sets the text data associated with an ENS node and key. May only be called by the owner of that node in the ENS registry."},"text(bytes32,string)":{"notice":"Returns the text data associated with an ENS node and key."}},"notice":"A simple resolver anyone can use; only allows the owner of a node to set its address."}},"settings":{"compilationTarget":{"/home/user/Dropbox/projects/resolvers/contracts/PublicResolver.sol":"PublicResolver"},"evmVersion":"petersburg","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"/home/user/Dropbox/projects/resolvers/contracts/PublicResolver.sol":{"keccak256":"0x2399e0dc5e179c91d671fcde213907a9b3959558360d495af3fc30679654924c","urls":["bzzr://68cd88208ac67dd6fc20976d8737e73a4a5fdcd80c7449be09eabb54aab107e5"]},"/home/user/Dropbox/projects/resolvers/contracts/ResolverBase.sol":{"keccak256":"0xfc7d550960829127576d6fc3080513d74ef18a6d7057d0d9262ce071890053e8","urls":["bzzr://81e5565403a67f558d12c787f53f40ff19a5da99c648f8a4f99f2caa449ca0e6"]},"/home/user/Dropbox/projects/resolvers/contracts/profiles/ABIResolver.sol":{"keccak256":"0x794514d39c469bab511822ca7a1a7a7838dca338499889896c7dac4303c30c1f","urls":["bzzr://9fdf58339517baeca57889519a4bb2f30a010f2f4262771e6f5de4374fc436b1"]},"/home/user/Dropbox/projects/resolvers/contracts/profiles/AddrResolver.sol":{"keccak256":"0xbe84f840b10f6ddc3d695d5905fe4034569c646bdf56b1367c16271aa92071c6","urls":["bzzr://c97941ee4075d43abe371cc52f3bfa018d7dc93c7cfbb72da565ecaa72996381"]},"/home/user/Dropbox/projects/resolvers/contracts/profiles/ContentHashResolver.sol":{"keccak256":"0xaa3d9b9baae36fbf831b8297832b54ffd1023b9ac508f2c5068b92ce0c30edfc","urls":["bzzr://c80ec35a145dd4b853e1e04b32763843313be216462a4993d28d5b489a6912f7"]},"/home/user/Dropbox/projects/resolvers/contracts/profiles/DNSResolver.sol":{"keccak256":"0x51534f5ebdcfda403b1a935f256e7f27d16b490e5b023b6e57877973daf9a4d4","urls":["bzzr://a81c189814102f6debd761795650d94694225b7486d490faf7d5fb6e0704ed28"]},"/home/user/Dropbox/projects/resolvers/contracts/profiles/InterfaceResolver.sol":{"keccak256":"0x6398dc59dd38501acd6a716173793e84aa1c454c3e21c190e10ddbe54dd8be41","urls":["bzzr://0d539232d308722b6a434ed5e9a22b0c4cb849c641b6d0739f2f83e566cb59f1"]},"/home/user/Dropbox/projects/resolvers/contracts/profiles/NameResolver.sol":{"keccak256":"0xcff06da8901397164ca9bea36361ac518fb62cd5283d2e2e835e006980ba4d16","urls":["bzzr://a4a8988916719c4976bb0caf1cff3bdee3c94ae693b57970f6b925124cff38ee"]},"/home/user/Dropbox/projects/resolvers/contracts/profiles/PubkeyResolver.sol":{"keccak256":"0xaa10a8a7e1579987b6781657153ae3f16806f240b3ffaa54ea1f303f7cb7a74a","urls":["bzzr://1caaa8668f536f654f4e6d68129ab5091e0ed5c72e0e70216b82d0bb9e7cd86f"]},"/home/user/Dropbox/projects/resolvers/contracts/profiles/TextResolver.sol":{"keccak256":"0x1feb20d9466c52f471c57344c1e3792e2c69b24ab9d7f7a4de6e49912abc75bb","urls":["bzzr://25ce3b4bf68f29d54e8916c0682b746a9e15f14bcccfc76136fc17ae2c902898"]},"@ensdomains/buffer/contracts/Buffer.sol":{"keccak256":"0x1264adbd06f6e05b04539bb225063a988b7fa90343d068de60cdde6cfb6fa92d","urls":["bzzr://8f1cb39e242b73bb7fac1f48bf0380ccccad14f06aae9cf4f87329cc78186122"]},"@ensdomains/dnssec-oracle/contracts/BytesUtils.sol":{"keccak256":"0x4014e689ef4a36cbf7103d88286abd2a7c560c2a7af99a561c33c61bc78be27a","urls":["bzzr://adf984996598f1e0d446eea1eda14ed2c49ab86a4ea1ae837cf4f9d99556b9c2"]},"@ensdomains/dnssec-oracle/contracts/RRUtils.sol":{"keccak256":"0x5135591043cf38413b19f93d16f189f0f8b50b01b78642fb764635d9790cc7ca","urls":["bzzr://7e3a0111306a7c5640e213da22bcfac1e42b813e8d4d99ef7ea33c09747049fc"]},"@ensdomains/ens/contracts/ENS.sol":{"keccak256":"0xe688db01c0b974f8ff8565557f7fe81aa1f209c1497ec1e74536241f4cc11f08","urls":["bzzr://04aa083550728a1da54d9acf874f4fca77cc3afef81c57f1ec19be78af05019a"]}},"version":1}',
  bytecode:
    "0x608060405234801561001057600080fd5b506040516020806134228339810180604052602081101561003057600080fd5b810190808051906020019092919050505080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050613390806100926000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063623195b0116100c3578063bc1c58d11161007c578063bc1c58d114610aad578063c869023314610b54578063d5fa2b0014610b9d578063e59d895d14610beb578063f1cb7e0614610c62578063f86bc87914610d135761014d565b8063623195b01461073a578063691f3431146107c7578063773722131461086e5780638b95dd71146108f1578063a8fa5682146109c0578063ad5780af14610a7f5761014d565b806329cd62ea1161011557806329cd62ea14610461578063304e6ade146104a35780633b3b57de146105265780633e9ce794146105945780634cbf6ba4146105ee57806359d1d43c1461063e5761014d565b806301ffc9a7146101525780630af179d7146101b757806310f13a8c1461023a578063124a319c146103125780632203ab56146103a9575b600080fd5b61019d6004803603602081101561016857600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610d99565b604051808215151515815260200191505060405180910390f35b610238600480360360408110156101cd57600080fd5b8101908080359060200190929190803590602001906401000000008111156101f457600080fd5b82018360208201111561020657600080fd5b8035906020019184600183028401116401000000008311171561022857600080fd5b9091929391929390505050610dfa565b005b6103106004803603606081101561025057600080fd5b81019080803590602001909291908035906020019064010000000081111561027757600080fd5b82018360208201111561028957600080fd5b803590602001918460018302840111640100000000831117156102ab57600080fd5b9091929391929390803590602001906401000000008111156102cc57600080fd5b8201836020820111156102de57600080fd5b8035906020019184600183028401116401000000008311171561030057600080fd5b9091929391929390505050611073565b005b6103676004803603604081101561032857600080fd5b810190808035906020019092919080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611159565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103df600480360360408110156103bf57600080fd5b810190808035906020019092919080359060200190929190505050611656565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561042557808201518184015260208101905061040a565b50505050905090810190601f1680156104525780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6104a16004803603606081101561047757600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506117a5565b005b610524600480360360408110156104b957600080fd5b8101908080359060200190929190803590602001906401000000008111156104e057600080fd5b8201836020820111156104f257600080fd5b8035906020019184600183028401116401000000008311171561051457600080fd5b909192939192939050505061183d565b005b6105526004803603602081101561053c57600080fd5b81019080803590602001909291905050506118dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105ec600480360360608110156105aa57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611914565b005b6106246004803603604081101561060457600080fd5b810190808035906020019092919080359060200190929190505050611a28565b604051808215151515815260200191505060405180910390f35b6106bf6004803603604081101561065457600080fd5b81019080803590602001909291908035906020019064010000000081111561067b57600080fd5b82018360208201111561068d57600080fd5b803590602001918460018302840111640100000000831117156106af57600080fd5b9091929391929390505050611a90565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106ff5780820151818401526020810190506106e4565b50505050905090810190601f16801561072c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107c56004803603606081101561075057600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561078157600080fd5b82018360208201111561079357600080fd5b803590602001918460018302840111640100000000831117156107b557600080fd5b9091929391929390505050611b6c565b005b6107f3600480360360208110156107dd57600080fd5b8101908080359060200190929190505050611bf9565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610833578082015181840152602081019050610818565b50505050905090810190601f1680156108605780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108ef6004803603604081101561088457600080fd5b8101908080359060200190929190803590602001906401000000008111156108ab57600080fd5b8201836020820111156108bd57600080fd5b803590602001918460018302840111640100000000831117156108df57600080fd5b9091929391929390505050611cae565b005b6109be6004803603606081101561090757600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561093857600080fd5b82018360208201111561094a57600080fd5b8035906020019184600183028401116401000000008311171561096c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611d4e565b005b610a04600480360360608110156109d657600080fd5b810190808035906020019092919080359060200190929190803561ffff169060200190929190505050611ebb565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a44578082015181840152602081019050610a29565b50505050905090810190601f168015610a715780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610aab60048036036020811015610a9557600080fd5b8101908080359060200190929190505050611fc0565b005b610ad960048036036020811015610ac357600080fd5b8101908080359060200190929190505050612027565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b19578082015181840152602081019050610afe565b50505050905090810190601f168015610b465780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610b8060048036036020811015610b6a57600080fd5b81019080803590602001909291905050506120dc565b604051808381526020018281526020019250505060405180910390f35b610be960048036036040811015610bb357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612116565b005b610c6060048036036060811015610c0157600080fd5b810190808035906020019092919080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612142565b005b610c9860048036036040811015610c7857600080fd5b810190808035906020019092919080359060200190929190505050612280565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cd8578082015181840152602081019050610cbd565b50505050905090810190601f168015610d055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610d7f60048036036060811015610d2957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612347565b604051808215151515815260200191505060405180910390f35b60006359d1d43c60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610df35750610df282612383565b5b9050919050565b82610e04816123e4565b610e0d57600080fd5b600080905060008090506060806000610e24613108565b610e7c60008a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061257090919063ffffffff16565b90505b610e888161259a565b6110005760008661ffff161415610f2f5780604001519550610ea9816125b0565b9350836040516020018082805190602001908083835b60208310610ee25780518252602082019150602081019050602083039250610ebf565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209150610f28816125e7565b9250610ff2565b6060610f3a826125b0565b9050816040015161ffff168761ffff16141580610f675750610f65818661261790919063ffffffff16565b155b15610ff057610fc98b86898d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508a8b88602001510360008b511461263e565b816040015196508160200151955080945084805190602001209250610fed826125e7565b93505b505b610ffb81612abf565b610e7f565b50600083511115611068576110678984878b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505088898e8e905003600089511461263e565b5b505050505050505050565b8461107d816123e4565b61108657600080fd5b8282600960008981526020019081526020016000208787604051808383808284378083019250505092505050908152602001604051809103902091906110cd929190613153565b5084846040518083838082843780830192505050925050506040518091039020867fd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a7550878760405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a3505050505050565b600080600660008581526020019081526020016000206000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461121e5780915050611650565b6000611229856118dd565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561126b57600092505050611650565b600060608273ffffffffffffffffffffffffffffffffffffffff166301ffc9a760e01b60405160240180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019150506040516020818303038152906040527f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061138c5780518252602082019150602081019050602083039250611369565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146113ec576040519150601f19603f3d011682016040523d82523d6000602084013e6113f1565b606091505b5091509150811580611404575060208151105b8061144b5750600060f81b81601f8151811061141c57fe5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561145d576000945050505050611650565b8273ffffffffffffffffffffffffffffffffffffffff168660405160240180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019150506040516020818303038152906040527f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106115735780518252602082019150602081019050602083039250611550565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146115d3576040519150601f19603f3d011682016040523d82523d6000602084013e6115d8565b606091505b5080925081935050508115806115ef575060208151105b806116365750600060f81b81601f8151811061160757fe5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15611648576000945050505050611650565b829450505050505b92915050565b60006060600080600086815260200190815260200160002090506000600190505b848111611782576000858216141580156116b757506000826000838152602001908152602001600020805460018160011615610100020316600290049050115b156117765780826000838152602001908152602001600020808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117645780601f1061173957610100808354040283529160200191611764565b820191906000526020600020905b81548152906001019060200180831161174757829003601f168201915b5050505050905093509350505061179e565b600181901b9050611677565b5060006040518060200160405280600081525081915092509250505b9250929050565b826117af816123e4565b6117b857600080fd5b604051806040016040528084815260200183815250600860008681526020019081526020016000206000820151816000015560208201518160010155905050837f1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e468484604051808381526020018281526020019250505060405180910390a250505050565b82611847816123e4565b61185057600080fd5b82826002600087815260200190815260200160002091906118729291906131d3565b50837fe379c1624ed7e714cc0937528a32359d69d5281337765313dba4e081b72d7578848460405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a250505050565b600060606118ec83603c612280565b905060008151141561190257600091505061190f565b61190b81612bd3565b9150505b919050565b80600b600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16847fe1c5610a6e0cbe10764ecd182adcef1ec338dc4e199c99c32ce98f38e12791df84604051808215151515815260200191505060405180910390a4505050565b60008060056000858152602001908152602001600020600060036000878152602001908152602001600020548152602001908152602001600020600084815260200190815260200160002060009054906101000a900461ffff1661ffff161415905092915050565b606060096000858152602001908152602001600020838360405180838380828437808301925050509250505090815260200160405180910390208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b5e5780601f10611b3357610100808354040283529160200191611b5e565b820191906000526020600020905b815481529060010190602001808311611b4157829003601f168201915b505050505090509392505050565b83611b76816123e4565b611b7f57600080fd5b600084600186031614611b9157600080fd5b828260008088815260200190815260200160002060008781526020019081526020016000209190611bc39291906131d3565b5083857faa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe360405160405180910390a35050505050565b6060600760008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ca25780601f10611c7757610100808354040283529160200191611ca2565b820191906000526020600020905b815481529060010190602001808311611c8557829003601f168201915b50505050509050919050565b82611cb8816123e4565b611cc157600080fd5b8282600760008781526020019081526020016000209190611ce3929190613153565b50837fb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f7848460405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a250505050565b82611d58816123e4565b611d6157600080fd5b837f65412581168e88a1e60c6459d7f44ae83ad0832e670826c05a4e2476b57af75284846040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611dcb578082015181840152602081019050611db0565b50505050905090810190601f168015611df85780820380516001836020036101000a031916815260200191505b50935050505060405180910390a2603c831415611e7c57837f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd2611e3a84612bd3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a25b816001600086815260200190815260200160002060008581526020019081526020016000209080519060200190611eb4929190613253565b5050505050565b606060046000858152602001908152602001600020600060036000878152602001908152602001600020548152602001908152602001600020600084815260200190815260200160002060008361ffff1661ffff1681526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fb25780601f10611f8757610100808354040283529160200191611fb2565b820191906000526020600020905b815481529060010190602001808311611f9557829003601f168201915b505050505090509392505050565b80611fca816123e4565b611fd357600080fd5b6003600083815260200190815260200160002060008154809291906001019190505550817fb757169b8492ca2f1c6619d9d76ce22803035c3b1d5f6930dffe7b127c1a198360405160405180910390a25050565b6060600260008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156120d05780601f106120a5576101008083540402835291602001916120d0565b820191906000526020600020905b8154815290600101906020018083116120b357829003601f168201915b50505050509050919050565b6000806008600084815260200190815260200160002060000154600860008581526020019081526020016000206001015491509150915091565b81612120816123e4565b61212957600080fd5b61213d83603c61213885612bf6565b611d4e565b505050565b8261214c816123e4565b61215557600080fd5b81600660008681526020019081526020016000206000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916847f7c69f06bea0bdef565b709e93a147836b0063ba2dd89f02d0b7e8d931e6a6daa84604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b60606001600084815260200190815260200160002060008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561233a5780601f1061230f5761010080835404028352916020019161233a565b820191906000526020600020905b81548152906001019060200180831161231d57829003601f168201915b5050505050905092915050565b600b602052826000526040600020602052816000526040600020602052806000526040600020600092509250509054906101000a900460ff1681565b600063c869023360e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806123dd57506123dc82612c41565b5b9050919050565b600080600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561245a57600080fd5b505afa15801561246e573d6000803e3d6000fd5b505050506040513d602081101561248457600080fd5b810190808051906020019092919050505090503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806125685750600b600084815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b915050919050565b612578613108565b828160000181905250818160c001818152505061259481612abf565b92915050565b6000816000015151826020015110159050919050565b60606125e082602001516125cc84600001518560200151612ca2565b8460000151612cfd9092919063ffffffff16565b9050919050565b60606126108260a001518360a001518460c00151038460000151612cfd9092919063ffffffff16565b9050919050565b60008151835114801561263657506126358360008460008751612d70565b5b905092915050565b6000600360008981526020019081526020016000205490506000878051906020012090506060612679868689612cfd9092919063ffffffff16565b90508315612861576000600460008c81526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060008a61ffff1661ffff1681526020019081526020016000208054600181600116156101000203166002900490501461275557600560008b815260200190815260200160002060008481526020019081526020016000206000838152602001908152602001600020600081819054906101000a900461ffff16809291906001900391906101000a81548161ffff021916908361ffff160217905550505b600460008b81526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060008961ffff1661ffff16815260200190815260200160002060006127af91906132d3565b897f03528ed0c2a3ebc993b12ce3c16bb382f9c7d88ef7d8a1bf290eaf35955a12078a8a60405180806020018361ffff1661ffff168152602001828103825284818151815260200191508051906020019080838360005b83811015612821578082015181840152602081019050612806565b50505050905090810190601f16801561284e5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a2612ab3565b6000600460008c81526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060008a61ffff1661ffff168152602001908152602001600020805460018160011615610100020316600290049050141561293557600560008b815260200190815260200160002060008481526020019081526020016000206000838152602001908152602001600020600081819054906101000a900461ffff168092919060010191906101000a81548161ffff021916908361ffff160217905550505b80600460008c81526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060008a61ffff1661ffff1681526020019081526020016000209080519060200190612997929190613253565b50897f52a608b3303a48862d07a73d82fa221318c0027fbbcfb1b2329bface3f19ff2b8a8a8460405180806020018461ffff1661ffff16815260200180602001838103835286818151815260200191508051906020019080838360005b83811015612a0f5780820151818401526020810190506129f4565b50505050905090810190601f168015612a3c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612a75578082015181840152602081019050612a5a565b50505050905090810190601f168015612aa25780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a25b50505050505050505050565b8060c00151816020018181525050806000015151816020015110612ae257612bd0565b6000612af682600001518360200151612ca2565b8260200151019050612b15818360000151612d9490919063ffffffff16565b826040019061ffff16908161ffff1681525050600281019050612b45818360000151612d9490919063ffffffff16565b826060019061ffff16908161ffff1681525050600281019050612b75818360000151612dba90919063ffffffff16565b826080019063ffffffff16908163ffffffff16815250506004810190506000612bab828460000151612d9490919063ffffffff16565b61ffff169050600282019150818360a00181815250508082018360c001818152505050505b50565b60006014825114612be357600080fd5b600c6101000a6020830151049050919050565b606060146040519080825280601f01601f191660200182016040528015612c2c5781602001600182028038833980820191505090505b509050600c6101000a82026020820152919050565b600063691f343160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612c9b5750612c9a82612de2565b5b9050919050565b6000808290505b600115612cf15783518110612cba57fe5b6000612ccf8286612e5490919063ffffffff16565b60ff16905060018101820191506000811415612ceb5750612cf1565b50612ca9565b82810391505092915050565b606083518284011115612d0f57600080fd5b6060826040519080825280601f01601f191660200182016040528015612d445781602001600182028038833980820191505090505b5090506000806020830191508560208801019050612d63828287612e78565b8293505050509392505050565b6000612d7d848484612ec1565b612d88878785612ec1565b14905095945050505050565b60008251600283011115612da757600080fd5b61ffff8260028501015116905092915050565b60008251600483011115612dcd57600080fd5b63ffffffff8260048501015116905092915050565b6000604051808061334160249139602401905060405180910390207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612e4d5750612e4c82612ee4565b5b9050919050565b6000828281518110612e6257fe5b602001015160f81c60f81b60f81c905092915050565b5b60208110612e9c5781518352602083019250602082019150602081039050612e79565b60006001826020036101000a0390508019835116818551168181178652505050505050565b600083518284011115612ed357600080fd5b818360208601012090509392505050565b600063a8fa568260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612f3e5750612f3d82612f45565b5b9050919050565b600063bc1c58d160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612f9f5750612f9e82612fa6565b5b9050919050565b6000633b3b57de60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061303f575063f1cb7e0660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061304f575061304e82613056565b5b9050919050565b6000632203ab5660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806130b057506130af826130b7565b5b9050919050565b60006301ffc9a760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6040518060e001604052806060815260200160008152602001600061ffff168152602001600061ffff168152602001600063ffffffff16815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061319457803560ff19168380011785556131c2565b828001600101855582156131c2579182015b828111156131c15782358255916020019190600101906131a6565b5b5090506131cf919061331b565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061321457803560ff1916838001178555613242565b82800160010185558215613242579182015b82811115613241578235825591602001919060010190613226565b5b50905061324f919061331b565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061329457805160ff19168380011785556132c2565b828001600101855582156132c2579182015b828111156132c15782518255916020019190600101906132a6565b5b5090506132cf919061331b565b5090565b50805460018160011615610100020316600290046000825580601f106132f95750613318565b601f016020900490600052602060002090810190613317919061331b565b5b50565b61333d91905b80821115613339576000816000905550600101613321565b5090565b9056fe696e74657266616365496d706c656d656e74657228627974657333322c62797465733429a165627a7a723058201451ccc13284df93e0a07692f76e93f019fe7a301e60231ebcc6cf9391bf17470029",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b506004361061014d5760003560e01c8063623195b0116100c3578063bc1c58d11161007c578063bc1c58d114610aad578063c869023314610b54578063d5fa2b0014610b9d578063e59d895d14610beb578063f1cb7e0614610c62578063f86bc87914610d135761014d565b8063623195b01461073a578063691f3431146107c7578063773722131461086e5780638b95dd71146108f1578063a8fa5682146109c0578063ad5780af14610a7f5761014d565b806329cd62ea1161011557806329cd62ea14610461578063304e6ade146104a35780633b3b57de146105265780633e9ce794146105945780634cbf6ba4146105ee57806359d1d43c1461063e5761014d565b806301ffc9a7146101525780630af179d7146101b757806310f13a8c1461023a578063124a319c146103125780632203ab56146103a9575b600080fd5b61019d6004803603602081101561016857600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610d99565b604051808215151515815260200191505060405180910390f35b610238600480360360408110156101cd57600080fd5b8101908080359060200190929190803590602001906401000000008111156101f457600080fd5b82018360208201111561020657600080fd5b8035906020019184600183028401116401000000008311171561022857600080fd5b9091929391929390505050610dfa565b005b6103106004803603606081101561025057600080fd5b81019080803590602001909291908035906020019064010000000081111561027757600080fd5b82018360208201111561028957600080fd5b803590602001918460018302840111640100000000831117156102ab57600080fd5b9091929391929390803590602001906401000000008111156102cc57600080fd5b8201836020820111156102de57600080fd5b8035906020019184600183028401116401000000008311171561030057600080fd5b9091929391929390505050611073565b005b6103676004803603604081101561032857600080fd5b810190808035906020019092919080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611159565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103df600480360360408110156103bf57600080fd5b810190808035906020019092919080359060200190929190505050611656565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561042557808201518184015260208101905061040a565b50505050905090810190601f1680156104525780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6104a16004803603606081101561047757600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506117a5565b005b610524600480360360408110156104b957600080fd5b8101908080359060200190929190803590602001906401000000008111156104e057600080fd5b8201836020820111156104f257600080fd5b8035906020019184600183028401116401000000008311171561051457600080fd5b909192939192939050505061183d565b005b6105526004803603602081101561053c57600080fd5b81019080803590602001909291905050506118dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105ec600480360360608110156105aa57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611914565b005b6106246004803603604081101561060457600080fd5b810190808035906020019092919080359060200190929190505050611a28565b604051808215151515815260200191505060405180910390f35b6106bf6004803603604081101561065457600080fd5b81019080803590602001909291908035906020019064010000000081111561067b57600080fd5b82018360208201111561068d57600080fd5b803590602001918460018302840111640100000000831117156106af57600080fd5b9091929391929390505050611a90565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106ff5780820151818401526020810190506106e4565b50505050905090810190601f16801561072c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107c56004803603606081101561075057600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561078157600080fd5b82018360208201111561079357600080fd5b803590602001918460018302840111640100000000831117156107b557600080fd5b9091929391929390505050611b6c565b005b6107f3600480360360208110156107dd57600080fd5b8101908080359060200190929190505050611bf9565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610833578082015181840152602081019050610818565b50505050905090810190601f1680156108605780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108ef6004803603604081101561088457600080fd5b8101908080359060200190929190803590602001906401000000008111156108ab57600080fd5b8201836020820111156108bd57600080fd5b803590602001918460018302840111640100000000831117156108df57600080fd5b9091929391929390505050611cae565b005b6109be6004803603606081101561090757600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561093857600080fd5b82018360208201111561094a57600080fd5b8035906020019184600183028401116401000000008311171561096c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611d4e565b005b610a04600480360360608110156109d657600080fd5b810190808035906020019092919080359060200190929190803561ffff169060200190929190505050611ebb565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a44578082015181840152602081019050610a29565b50505050905090810190601f168015610a715780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610aab60048036036020811015610a9557600080fd5b8101908080359060200190929190505050611fc0565b005b610ad960048036036020811015610ac357600080fd5b8101908080359060200190929190505050612027565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b19578082015181840152602081019050610afe565b50505050905090810190601f168015610b465780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610b8060048036036020811015610b6a57600080fd5b81019080803590602001909291905050506120dc565b604051808381526020018281526020019250505060405180910390f35b610be960048036036040811015610bb357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612116565b005b610c6060048036036060811015610c0157600080fd5b810190808035906020019092919080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612142565b005b610c9860048036036040811015610c7857600080fd5b810190808035906020019092919080359060200190929190505050612280565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cd8578082015181840152602081019050610cbd565b50505050905090810190601f168015610d055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610d7f60048036036060811015610d2957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612347565b604051808215151515815260200191505060405180910390f35b60006359d1d43c60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610df35750610df282612383565b5b9050919050565b82610e04816123e4565b610e0d57600080fd5b600080905060008090506060806000610e24613108565b610e7c60008a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061257090919063ffffffff16565b90505b610e888161259a565b6110005760008661ffff161415610f2f5780604001519550610ea9816125b0565b9350836040516020018082805190602001908083835b60208310610ee25780518252602082019150602081019050602083039250610ebf565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209150610f28816125e7565b9250610ff2565b6060610f3a826125b0565b9050816040015161ffff168761ffff16141580610f675750610f65818661261790919063ffffffff16565b155b15610ff057610fc98b86898d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508a8b88602001510360008b511461263e565b816040015196508160200151955080945084805190602001209250610fed826125e7565b93505b505b610ffb81612abf565b610e7f565b50600083511115611068576110678984878b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505088898e8e905003600089511461263e565b5b505050505050505050565b8461107d816123e4565b61108657600080fd5b8282600960008981526020019081526020016000208787604051808383808284378083019250505092505050908152602001604051809103902091906110cd929190613153565b5084846040518083838082843780830192505050925050506040518091039020867fd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a7550878760405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a3505050505050565b600080600660008581526020019081526020016000206000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461121e5780915050611650565b6000611229856118dd565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561126b57600092505050611650565b600060608273ffffffffffffffffffffffffffffffffffffffff166301ffc9a760e01b60405160240180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019150506040516020818303038152906040527f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061138c5780518252602082019150602081019050602083039250611369565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146113ec576040519150601f19603f3d011682016040523d82523d6000602084013e6113f1565b606091505b5091509150811580611404575060208151105b8061144b5750600060f81b81601f8151811061141c57fe5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561145d576000945050505050611650565b8273ffffffffffffffffffffffffffffffffffffffff168660405160240180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019150506040516020818303038152906040527f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106115735780518252602082019150602081019050602083039250611550565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146115d3576040519150601f19603f3d011682016040523d82523d6000602084013e6115d8565b606091505b5080925081935050508115806115ef575060208151105b806116365750600060f81b81601f8151811061160757fe5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15611648576000945050505050611650565b829450505050505b92915050565b60006060600080600086815260200190815260200160002090506000600190505b848111611782576000858216141580156116b757506000826000838152602001908152602001600020805460018160011615610100020316600290049050115b156117765780826000838152602001908152602001600020808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117645780601f1061173957610100808354040283529160200191611764565b820191906000526020600020905b81548152906001019060200180831161174757829003601f168201915b5050505050905093509350505061179e565b600181901b9050611677565b5060006040518060200160405280600081525081915092509250505b9250929050565b826117af816123e4565b6117b857600080fd5b604051806040016040528084815260200183815250600860008681526020019081526020016000206000820151816000015560208201518160010155905050837f1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e468484604051808381526020018281526020019250505060405180910390a250505050565b82611847816123e4565b61185057600080fd5b82826002600087815260200190815260200160002091906118729291906131d3565b50837fe379c1624ed7e714cc0937528a32359d69d5281337765313dba4e081b72d7578848460405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a250505050565b600060606118ec83603c612280565b905060008151141561190257600091505061190f565b61190b81612bd3565b9150505b919050565b80600b600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16847fe1c5610a6e0cbe10764ecd182adcef1ec338dc4e199c99c32ce98f38e12791df84604051808215151515815260200191505060405180910390a4505050565b60008060056000858152602001908152602001600020600060036000878152602001908152602001600020548152602001908152602001600020600084815260200190815260200160002060009054906101000a900461ffff1661ffff161415905092915050565b606060096000858152602001908152602001600020838360405180838380828437808301925050509250505090815260200160405180910390208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b5e5780601f10611b3357610100808354040283529160200191611b5e565b820191906000526020600020905b815481529060010190602001808311611b4157829003601f168201915b505050505090509392505050565b83611b76816123e4565b611b7f57600080fd5b600084600186031614611b9157600080fd5b828260008088815260200190815260200160002060008781526020019081526020016000209190611bc39291906131d3565b5083857faa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe360405160405180910390a35050505050565b6060600760008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ca25780601f10611c7757610100808354040283529160200191611ca2565b820191906000526020600020905b815481529060010190602001808311611c8557829003601f168201915b50505050509050919050565b82611cb8816123e4565b611cc157600080fd5b8282600760008781526020019081526020016000209190611ce3929190613153565b50837fb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f7848460405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a250505050565b82611d58816123e4565b611d6157600080fd5b837f65412581168e88a1e60c6459d7f44ae83ad0832e670826c05a4e2476b57af75284846040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611dcb578082015181840152602081019050611db0565b50505050905090810190601f168015611df85780820380516001836020036101000a031916815260200191505b50935050505060405180910390a2603c831415611e7c57837f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd2611e3a84612bd3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a25b816001600086815260200190815260200160002060008581526020019081526020016000209080519060200190611eb4929190613253565b5050505050565b606060046000858152602001908152602001600020600060036000878152602001908152602001600020548152602001908152602001600020600084815260200190815260200160002060008361ffff1661ffff1681526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fb25780601f10611f8757610100808354040283529160200191611fb2565b820191906000526020600020905b815481529060010190602001808311611f9557829003601f168201915b505050505090509392505050565b80611fca816123e4565b611fd357600080fd5b6003600083815260200190815260200160002060008154809291906001019190505550817fb757169b8492ca2f1c6619d9d76ce22803035c3b1d5f6930dffe7b127c1a198360405160405180910390a25050565b6060600260008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156120d05780601f106120a5576101008083540402835291602001916120d0565b820191906000526020600020905b8154815290600101906020018083116120b357829003601f168201915b50505050509050919050565b6000806008600084815260200190815260200160002060000154600860008581526020019081526020016000206001015491509150915091565b81612120816123e4565b61212957600080fd5b61213d83603c61213885612bf6565b611d4e565b505050565b8261214c816123e4565b61215557600080fd5b81600660008681526020019081526020016000206000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916847f7c69f06bea0bdef565b709e93a147836b0063ba2dd89f02d0b7e8d931e6a6daa84604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b60606001600084815260200190815260200160002060008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561233a5780601f1061230f5761010080835404028352916020019161233a565b820191906000526020600020905b81548152906001019060200180831161231d57829003601f168201915b5050505050905092915050565b600b602052826000526040600020602052816000526040600020602052806000526040600020600092509250509054906101000a900460ff1681565b600063c869023360e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806123dd57506123dc82612c41565b5b9050919050565b600080600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561245a57600080fd5b505afa15801561246e573d6000803e3d6000fd5b505050506040513d602081101561248457600080fd5b810190808051906020019092919050505090503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806125685750600b600084815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b915050919050565b612578613108565b828160000181905250818160c001818152505061259481612abf565b92915050565b6000816000015151826020015110159050919050565b60606125e082602001516125cc84600001518560200151612ca2565b8460000151612cfd9092919063ffffffff16565b9050919050565b60606126108260a001518360a001518460c00151038460000151612cfd9092919063ffffffff16565b9050919050565b60008151835114801561263657506126358360008460008751612d70565b5b905092915050565b6000600360008981526020019081526020016000205490506000878051906020012090506060612679868689612cfd9092919063ffffffff16565b90508315612861576000600460008c81526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060008a61ffff1661ffff1681526020019081526020016000208054600181600116156101000203166002900490501461275557600560008b815260200190815260200160002060008481526020019081526020016000206000838152602001908152602001600020600081819054906101000a900461ffff16809291906001900391906101000a81548161ffff021916908361ffff160217905550505b600460008b81526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060008961ffff1661ffff16815260200190815260200160002060006127af91906132d3565b897f03528ed0c2a3ebc993b12ce3c16bb382f9c7d88ef7d8a1bf290eaf35955a12078a8a60405180806020018361ffff1661ffff168152602001828103825284818151815260200191508051906020019080838360005b83811015612821578082015181840152602081019050612806565b50505050905090810190601f16801561284e5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a2612ab3565b6000600460008c81526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060008a61ffff1661ffff168152602001908152602001600020805460018160011615610100020316600290049050141561293557600560008b815260200190815260200160002060008481526020019081526020016000206000838152602001908152602001600020600081819054906101000a900461ffff168092919060010191906101000a81548161ffff021916908361ffff160217905550505b80600460008c81526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060008a61ffff1661ffff1681526020019081526020016000209080519060200190612997929190613253565b50897f52a608b3303a48862d07a73d82fa221318c0027fbbcfb1b2329bface3f19ff2b8a8a8460405180806020018461ffff1661ffff16815260200180602001838103835286818151815260200191508051906020019080838360005b83811015612a0f5780820151818401526020810190506129f4565b50505050905090810190601f168015612a3c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612a75578082015181840152602081019050612a5a565b50505050905090810190601f168015612aa25780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a25b50505050505050505050565b8060c00151816020018181525050806000015151816020015110612ae257612bd0565b6000612af682600001518360200151612ca2565b8260200151019050612b15818360000151612d9490919063ffffffff16565b826040019061ffff16908161ffff1681525050600281019050612b45818360000151612d9490919063ffffffff16565b826060019061ffff16908161ffff1681525050600281019050612b75818360000151612dba90919063ffffffff16565b826080019063ffffffff16908163ffffffff16815250506004810190506000612bab828460000151612d9490919063ffffffff16565b61ffff169050600282019150818360a00181815250508082018360c001818152505050505b50565b60006014825114612be357600080fd5b600c6101000a6020830151049050919050565b606060146040519080825280601f01601f191660200182016040528015612c2c5781602001600182028038833980820191505090505b509050600c6101000a82026020820152919050565b600063691f343160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612c9b5750612c9a82612de2565b5b9050919050565b6000808290505b600115612cf15783518110612cba57fe5b6000612ccf8286612e5490919063ffffffff16565b60ff16905060018101820191506000811415612ceb5750612cf1565b50612ca9565b82810391505092915050565b606083518284011115612d0f57600080fd5b6060826040519080825280601f01601f191660200182016040528015612d445781602001600182028038833980820191505090505b5090506000806020830191508560208801019050612d63828287612e78565b8293505050509392505050565b6000612d7d848484612ec1565b612d88878785612ec1565b14905095945050505050565b60008251600283011115612da757600080fd5b61ffff8260028501015116905092915050565b60008251600483011115612dcd57600080fd5b63ffffffff8260048501015116905092915050565b6000604051808061334160249139602401905060405180910390207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612e4d5750612e4c82612ee4565b5b9050919050565b6000828281518110612e6257fe5b602001015160f81c60f81b60f81c905092915050565b5b60208110612e9c5781518352602083019250602082019150602081039050612e79565b60006001826020036101000a0390508019835116818551168181178652505050505050565b600083518284011115612ed357600080fd5b818360208601012090509392505050565b600063a8fa568260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612f3e5750612f3d82612f45565b5b9050919050565b600063bc1c58d160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612f9f5750612f9e82612fa6565b5b9050919050565b6000633b3b57de60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061303f575063f1cb7e0660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061304f575061304e82613056565b5b9050919050565b6000632203ab5660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806130b057506130af826130b7565b5b9050919050565b60006301ffc9a760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6040518060e001604052806060815260200160008152602001600061ffff168152602001600061ffff168152602001600063ffffffff16815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061319457803560ff19168380011785556131c2565b828001600101855582156131c2579182015b828111156131c15782358255916020019190600101906131a6565b5b5090506131cf919061331b565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061321457803560ff1916838001178555613242565b82800160010185558215613242579182015b82811115613241578235825591602001919060010190613226565b5b50905061324f919061331b565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061329457805160ff19168380011785556132c2565b828001600101855582156132c2579182015b828111156132c15782518255916020019190600101906132a6565b5b5090506132cf919061331b565b5090565b50805460018160011615610100020316600290046000825580601f106132f95750613318565b601f016020900490600052602060002090810190613317919061331b565b5b50565b61333d91905b80821115613339576000816000905550600101613321565b5090565b9056fe696e74657266616365496d706c656d656e74657228627974657333322c62797465733429a165627a7a723058201451ccc13284df93e0a07692f76e93f019fe7a301e60231ebcc6cf9391bf17470029",
  sourceMap:
    "486:1802:3:-;;;1117:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;1117:56:3;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1117:56:3;;;;;;;;;;;;;;;;1162:4;1156:3;;:10;;;;;;;;;;;;;;;;;;1117:56;486:1802;;;;;;",
  deployedSourceMap:
    "486:1802:3:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;486:1802:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1107:169:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1107:169:13;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2403:1263:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2403:1263:9;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;2403:1263:9;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2403:1263:9;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2403:1263:9;;;;;;;;;;;;:::i;:::-;;573:184:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;573:184:13;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;573:184:13;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;573:184:13;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;573:184:13;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;573:184:13;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;573:184:13;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;573:184:13;;;;;;;;;;;;:::i;:::-;;1721:953:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1721:953:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1195:454:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1195:454:6;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1195:454:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;612:169:12;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;612:169:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;505:166:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;505:166:8;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;505:166:8;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;505:166:8;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;505:166:8;;;;;;;;;;;;:::i;:::-;;972:228:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;972:228:7;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1858:231:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1858:231:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4450:153:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4450:153:9;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;974:127:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;974:127:13;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;974:127:13;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;974:127:13;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;974:127:13;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;974:127:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;582:292:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;582:292:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;582:292:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;582:292:6;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;582:292:6;;;;;;;;;;;;:::i;:::-;;844:101:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;844:101:11;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;844:101:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;492:152;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;492:152:11;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;492:152:11;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;492:152:11;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;492:152:11;;;;;;;;;;;;:::i;:::-;;1206:286:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1206:286:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1206:286:7;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1206:286:7;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1206:286:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1206:286:7;;;;;;;;;;;;;;;:::i;:::-;;4068:168:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4068:168:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4068:168:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4742:128;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4742:128:9;;;;;;;;;;;;;;;;;:::i;:::-;;838:108:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;838:108:8;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;838:108:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1023:133:12;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1023:133:12;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;681:132:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;681:132:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;858:226:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;858:226:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1498:127:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1498:127:7;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1498:127:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;909:80:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;909:80:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1107:169:13;1174:4;144:10;1212:17;;1197:32;;;:11;:32;;;;:72;;;;1233:36;1257:11;1233:23;:36::i;:::-;1197:72;1190:79;;1107:169;;;:::o;2403:1263:9:-;2481:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;2497:15:9;2515:1;2497:19;;2526:14;2543:1;2526:18;;2554:17;2581:18;2609:16;2701:30;;:::i;:::-;2734:18;2750:1;2734:4;;:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2734:15:9;;;;;;;;:18;;;;:::i;:::-;2701:51;;2696:821;2755:11;:4;:9;:11::i;:::-;2696:821;;2811:1;2799:8;:13;;;2795:712;;;2843:4;:12;;;2832:23;;2880:11;:4;:9;:11::i;:::-;2873:18;;2947:4;2930:22;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2930:22:9;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2930:22:9;;;2920:33;;;;;;2909:44;;2985:12;:4;:10;:12::i;:::-;2971:27;;2795:712;;;3037:20;3060:11;:4;:9;:11::i;:::-;3037:34;;3105:4;:12;;;3093:24;;:8;:24;;;;:49;;;;3122:20;3134:7;3122:4;:11;;:20;;;;:::i;:::-;3121:21;3093:49;3089:404;;;3166:88;3178:4;3184;3190:8;3200:4;;3166:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3166:88:9;;;;;;3206:6;3228;3214:4;:11;;;:20;3252:1;3236:5;:12;:17;3166:11;:88::i;:::-;3287:4;:12;;;3276:23;;3330:4;:11;;;3321:20;;3370:7;3363:14;;3420:4;3410:15;;;;;;3399:26;;3461:12;:4;:10;:12::i;:::-;3447:27;;3089:404;2795:712;;2768:11;:4;:9;:11::i;:::-;2696:821;;;;3544:1;3530:4;:11;:15;3526:134;;;3561:88;3573:4;3579;3585:8;3595:4;;3561:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3561:88:9;;;;;;3601:6;3623;3609:4;;:11;;:20;3647:1;3631:5;:12;:17;3561:11;:88::i;:::-;3526:134;400:1:5;;;;;2403:1263:9;;;;:::o;573:184:13:-;668:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;703:5:13;;684;:11;690:4;684:11;;;;;;;;;;;696:3;;684:16;;;;;30:3:-1;22:6;14;1:33;57:3;49:6;45:16;35:26;;684:16:13;;;;;;;;;;;;;;;;;;:24;;;;;;;:::i;:::-;;741:3;;723:27;;;;;30:3:-1;22:6;14;1:33;57:3;49:6;45:16;35:26;;723:27:13;;;;;;;;;;;;;735:4;723:27;746:3;;723:27;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;723:27:13;;;;;;;;;;;;;;573:184;;;;;;:::o;1721:953:10:-;1808:7;1827:19;1849:10;:16;1860:4;1849:16;;;;;;;;;;;:29;1866:11;1849:29;;;;;;;;;;;;;;;;;;;;;;;;;;;1827:51;;1914:1;1891:25;;:11;:25;;;1888:73;;1939:11;1932:18;;;;;1888:73;1971:9;1983:10;1988:4;1983;:10::i;:::-;1971:22;;2019:1;2006:15;;:1;:15;;;2003:62;;;2052:1;2037:17;;;;;;2003:62;2076:12;2090:23;2117:1;:12;;304:10;2183:17;;2130:71;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2130:71:10;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;2130:71:10;2117:85;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2117:85:10;;;;;;;;;;;;;;;;;;;;;;;14:1:-1;21;16:31;;;;75:4;69:11;64:16;;144:4;140:9;133:4;115:16;111:27;107:43;104:1;100:51;94:4;87:65;169:16;166:1;159:27;225:16;222:1;215:4;212:1;208:12;193:49;7:242;;16:31;36:4;31:9;;7:242;;2075:127:10;;;;2216:7;2215:8;:34;;;;2247:2;2227:10;:17;:22;2215:34;:57;;;;2271:1;2253:19;;:10;2264:2;2253:14;;;;;;;;;;;;;;;;:19;;;;2215:57;2212:151;;;2350:1;2335:17;;;;;;;;2212:151;2397:1;:12;;2463:11;2410:65;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2410:65:10;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;2410:65:10;2397:79;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2397:79:10;;;;;;;;;;;;;;;;;;;;;;;14:1:-1;21;16:31;;;;75:4;69:11;64:16;;144:4;140:9;133:4;115:16;111:27;107:43;104:1;100:51;94:4;87:65;169:16;166:1;159:27;225:16;222:1;215:4;212:1;208:12;193:49;7:242;;16:31;36:4;31:9;;7:242;;2373:103:10;;;;;;;;2490:7;2489:8;:34;;;;2521:2;2501:10;:17;:22;2489:34;:57;;;;2545:1;2527:19;;:10;2538:2;2527:14;;;;;;;;;;;;;;;;:19;;;;2489:57;2486:163;;;2636:1;2621:17;;;;;;;;2486:163;2666:1;2659:8;;;;;;1721:953;;;;;:::o;1195:454:6:-;1267:7;1276:12;1300:38;1341:4;:10;1346:4;1341:10;;;;;;;;;;;1300:51;;1367:19;1389:1;1367:23;;1362:249;1407:12;1392:11;:27;1362:249;;1490:1;1473:12;1459:11;:26;1458:33;;:67;;;;;1524:1;1495:6;:19;1502:11;1495:19;;;;;;;;;;;:26;;;;;;;;;;;;;;;;:30;1458:67;1454:147;;;1553:11;1566:6;:19;1573:11;1566:19;;;;;;;;;;;1545:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1454:147;1437:1;1421:17;;;;;1362:249;;;;1629:1;1632:9;;;;;;;;;;;;1621:21;;;;;;;;1195:454;;;;;;:::o;612:169:12:-;687:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;719:15:12;;;;;;;;729:1;719:15;;;;732:1;719:15;;;703:7;:13;711:4;703:13;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;;763:4;749:25;769:1;772;749:25;;;;;;;;;;;;;;;;;;;;;;;;612:169;;;;:::o;505:166:8:-;584:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;615:4:8;;600:6;:12;607:4;600:12;;;;;;;;;;;:19;;;;;;;:::i;:::-;;653:4;634:30;659:4;;634:30;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;634:30:8;;;;;;;;;;;;;;505:166;;;;:::o;972:228:7:-;1021:15;1048:14;1065:25;1070:4;261:2;1065:4;:25::i;:::-;1048:42;;1115:1;1103;:8;:13;1100:60;;;1147:1;1132:17;;;;;1100:60;1176:17;1191:1;1176:14;:17::i;:::-;1169:24;;;972:228;;;;:::o;1858:231:3:-;1995:12;1952:14;:20;1967:4;1952:20;;;;;;;;;;;:32;1973:10;1952:32;;;;;;;;;;;;;;;:40;1985:6;1952:40;;;;;;;;;;;;;;;;:55;;;;;;;;;;;;;;;;;;2061:6;2022:60;;2049:10;2022:60;;2043:4;2022:60;2069:12;2022:60;;;;;;;;;;;;;;;;;;;;;;1858:231;;;:::o;4450:153:9:-;4522:4;4594:1;4546:16;:22;4563:4;4546:22;;;;;;;;;;;:38;4569:8;:14;4578:4;4569:14;;;;;;;;;;;;4546:38;;;;;;;;;;;:44;4585:4;4546:44;;;;;;;;;;;;;;;;;;;;;:49;;;;4538:58;;4450:153;;;;:::o;974:127:13:-;1046:13;1078:5;:11;1084:4;1078:11;;;;;;;;;;;1090:3;;1078:16;;;;;30:3:-1;22:6;14;1:33;57:3;49:6;45:16;35:26;;1078:16:13;;;;;;;;;;;;;;;;;;1071:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;974:127;;;;;:::o;582:292:6:-;674:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;780:1:6;764:11;759:1;745:11;:15;744:31;743:38;735:47;;;;;;819:4;;793;:10;798:4;793:10;;;;;;;;;;;:23;804:11;793:23;;;;;;;;;;;:30;;;;;;;:::i;:::-;;855:11;849:4;838:29;;;;;;;;;;582:292;;;;;:::o;844:101:11:-;895:13;927:5;:11;933:4;927:11;;;;;;;;;;;920:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;844:101;;;:::o;492:152::-;565:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;595:4:11;;581:5;:11;587:4;581:11;;;;;;;;;;;:18;;;;;;;:::i;:::-;;626:4;614:23;632:4;;614:23;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;614:23:11;;;;;;;;;;;;;;492:152;;;;:::o;1206:286:7:-;1286:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;1322:4:7;1307:33;1328:8;1338:1;1307:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1307:33:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;261:2;1353:8;:25;1350:96;;;1411:4;1399:36;1417:17;1432:1;1417:14;:17::i;:::-;1399:36;;;;;;;;;;;;;;;;;;;;;;1350:96;1484:1;1455:10;:16;1466:4;1455:16;;;;;;;;;;;:26;1472:8;1455:26;;;;;;;;;;;:30;;;;;;;;;;;;:::i;:::-;;1206:286;;;;:::o;4068:168:9:-;4153:12;4184:7;:13;4192:4;4184:13;;;;;;;;;;;:29;4198:8;:14;4207:4;4198:14;;;;;;;;;;;;4184:29;;;;;;;;;;;:35;4214:4;4184:35;;;;;;;;;;;:45;4220:8;4184:45;;;;;;;;;;;;;;;4177:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4068:168;;;;;:::o;4742:128::-;4796:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;4812:8:9;:14;4821:4;4812:14;;;;;;;;;;;;:16;;;;;;;;;;;;;4858:4;4843:20;;;;;;;;;;4742:128;;:::o;838:108:8:-;896:12;927:6;:12;934:4;927:12;;;;;;;;;;;920:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;838:108;;;:::o;1023:133:12:-;1076:9;1087;1116:7;:13;1124:4;1116:13;;;;;;;;;;;:15;;;1133:7;:13;1141:4;1133:13;;;;;;;;;;;:15;;;1108:41;;;;1023:133;;;:::o;681:132:7:-;743:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;759:47:7;767:4;261:2;788:17;803:1;788:14;:17::i;:::-;759:7;:47::i;:::-;681:132;;;:::o;858:226:10:-;955:4;371:18:5;384:4;371:12;:18::i;:::-;363:27;;;;;;1003:11:10;971:10;:16;982:4;971:16;;;;;;;;;;;:29;988:11;971:29;;;;;;;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;1052:11;1029:48;;;1046:4;1029:48;1065:11;1029:48;;;;;;;;;;;;;;;;;;;;;;858:226;;;;:::o;1498:127:7:-;1561:12;1592:10;:16;1603:4;1592:16;;;;;;;;;;;:26;1609:8;1592:26;;;;;;;;;;;1585:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1498:127;;;;:::o;909:80:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1162:171:12:-;1229:4;148:10;1267:19;;1252:34;;;:11;:34;;;;:74;;;;1290:36;1314:11;1290:23;:36::i;:::-;1252:74;1245:81;;1162:171;;;:::o;2095:191:3:-;2153:4;2169:13;2185:3;;;;;;;;;;;:9;;;2195:4;2185:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2185:15:3;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2185:15:3;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2185:15:3;;;;;;;;;;;;;;;;2169:31;;2226:10;2217:19;;:5;:19;;;:62;;;;2240:14;:20;2255:4;2240:20;;;;;;;;;;;:27;2261:5;2240:27;;;;;;;;;;;;;;;:39;2268:10;2240:39;;;;;;;;;;;;;;;;;;;;;;;;;2217:62;2210:69;;;2095:191;;;:::o;2435:182:16:-;2510:21;;:::i;:::-;2554:4;2543:3;:8;;:15;;;;2585:6;2568:3;:14;;:23;;;;;2601:9;2606:3;2601:4;:9::i;:::-;2435:182;;;;:::o;2788:121::-;2848:4;2886;:9;;;:16;2871:4;:11;;;:31;;2864:38;;2788:121;;;:::o;3890:166::-;3950:12;3981:68;4001:4;:11;;;4014:34;4025:4;:9;;;4036:4;:11;;;4014:10;:34::i;:::-;3981:4;:9;;;:19;;:68;;;;;:::i;:::-;3974:75;;3890:166;;;:::o;4229:172::-;4290:12;4321:73;4341:4;:16;;;4377:4;:16;;;4359:4;:15;;;:34;4321:4;:9;;;:19;;:73;;;;;:::i;:::-;4314:80;;4229:172;;;:::o;4913:176:15:-;4990:4;5028:5;:12;5013:4;:11;:27;:69;;;;;5044:38;5051:4;5057:1;5060:5;5067:1;5070:4;:11;5044:6;:38::i;:::-;5013:69;5006:76;;4913:176;;;;:::o;5057:965:9:-;5275:15;5293:8;:14;5302:4;5293:14;;;;;;;;;;;;5275:32;;5317:16;5346:4;5336:15;;;;;;5317:34;;5361:19;5383:28;5398:6;5406:4;5383;:14;;:28;;;;;:::i;:::-;5361:50;;5425:12;5421:595;;;5510:1;5457:7;:13;5465:4;5457:13;;;;;;;;;;;:22;5471:7;5457:22;;;;;;;;;;;:32;5480:8;5457:32;;;;;;;;;;;:42;5490:8;5457:42;;;;;;;;;;;;;;;:49;;;;;;;;;;;;;;;;:54;5453:136;;5531:16;:22;5548:4;5531:22;;;;;;;;;;;:31;5554:7;5531:31;;;;;;;;;;;:41;5563:8;5531:41;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5453:136;5609:7;:13;5617:4;5609:13;;;;;;;;;;;:22;5623:7;5609:22;;;;;;;;;;;:32;5632:8;5609:32;;;;;;;;;;;:42;5642:8;5609:42;;;;;;;;;;;;;;;;5602:50;;;;:::i;:::-;5688:4;5671:38;5694:4;5700:8;5671:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5671:38:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5421:595;;;5797:1;5744:7;:13;5752:4;5744:13;;;;;;;;;;;:22;5758:7;5744:22;;;;;;;;;;;:32;5767:8;5744:32;;;;;;;;;;;:42;5777:8;5744:42;;;;;;;;;;;;;;;:49;;;;;;;;;;;;;;;;:54;5740:136;;;5818:16;:22;5835:4;5818:22;;;;;;;;;;;:31;5841:7;5818:31;;;;;;;;;;;:41;5850:8;5818:41;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5740:136;5934:6;5889:7;:13;5897:4;5889:13;;;;;;;;;;;:22;5903:7;5889:22;;;;;;;;;;;:32;5912:8;5889:32;;;;;;;;;;;:42;5922:8;5889:42;;;;;;;;;;;;;;;:51;;;;;;;;;;;;:::i;:::-;;5976:4;5959:46;5982:4;5988:8;5998:6;5959:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5959:46:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5959:46:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5421:595;5057:965;;;;;;;;;;:::o;3032:682:16:-;3108:4;:15;;;3094:4;:11;;:29;;;;;3152:4;:9;;;:16;3137:4;:11;;;:31;3133:68;;3184:7;;3133:68;3236:8;3261:34;3272:4;:9;;;3283:4;:11;;;3261:10;:34::i;:::-;3247:4;:11;;;:48;3236:59;;3358:25;3379:3;3358:4;:9;;;:20;;:25;;;;:::i;:::-;3343:4;:12;;:40;;;;;;;;;;;3400:1;3393:8;;;;3424:25;3445:3;3424:4;:9;;;:20;;:25;;;;:::i;:::-;3411:4;:10;;:38;;;;;;;;;;;3466:1;3459:8;;;;3488:25;3509:3;3488:4;:9;;;:20;;:25;;;;:::i;:::-;3477:4;:8;;:36;;;;;;;;;;;3530:1;3523:8;;;;3568:16;3587:25;3608:3;3587:4;:9;;;:20;;:25;;;;:::i;:::-;3568:44;;;;3629:1;3622:8;;;;3659:3;3640:4;:16;;:22;;;;;3696:11;3690:3;:17;3672:4;:15;;:35;;;;;3032:682;;;;:::o;414:204:5:-;476:17;525:2;513:1;:8;:14;505:23;;;;;;598:2;593:3;589:12;583:2;580:1;576:10;570:17;566:36;561:41;;547:65;;;:::o;624:189::-;681:14;721:2;711:13;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;711:13:5;;;;707:17;;792:2;787:3;783:12;780:1;776:20;771:2;768:1;764:10;757:40;743:64;;;:::o;951:169:11:-;1018:4;144:10;1056:17;;1041:32;;;:11;:32;;;;:72;;;;1077:36;1101:11;1077:23;:36::i;:::-;1041:72;1034:79;;951:169;;;:::o;535:367:16:-;609:4;625:8;636:6;625:17;;652:215;659:4;652:215;;;692:4;:11;686:3;:17;679:25;;;;718:13;734:19;749:3;734:4;:14;;:19;;;;:::i;:::-;718:35;;;;785:1;774:8;:12;767:19;;;;816:1;804:8;:13;800:57;;;837:5;;;800:57;652:215;;;;889:6;883:3;:12;876:19;;;535:367;;;;:::o;8683:393:15:-;8766:12;8814:4;:11;8807:3;8798:6;:12;:27;;8790:36;;;;;;8837:16;8866:3;8856:14;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;8856:14:15;;;;8837:33;;8880:9;8899:8;8958:2;8953:3;8949:12;8941:20;;9000:6;8995:2;8989:4;8985:13;8981:26;8974:33;;9026:22;9033:4;9039:3;9044;9026:6;:22::i;:::-;9066:3;9059:10;;;;;8683:393;;;;;:::o;3277:209::-;3396:4;3448:31;3455:5;3462:11;3475:3;3448:6;:31::i;:::-;3419:25;3426:4;3432:6;3440:3;3419:6;:25::i;:::-;:60;3412:67;;3277:209;;;;;;;:::o;5697:223::-;5769:10;5810:4;:11;5805:1;5799:3;:7;:22;;5791:31;;;;;;5897:6;5890:3;5886:1;5880:4;5876:12;5872:22;5866:29;5862:42;5855:49;;5841:73;;;;:::o;6164:227::-;6236:10;6277:4;:11;6272:1;6266:3;:7;:22;;6258:31;;;;;;6364:10;6357:3;6353:1;6347:4;6343:12;6339:22;6333:29;6329:46;6322:53;;6308:77;;;;:::o;2680:174:10:-;2747:4;204:49;;;;;;;;;;;;;;;;;;;2770:37;;;:11;:37;;;;:77;;;;2811:36;2835:11;2811:23;:36::i;:::-;2770:77;2763:84;;2680:174;;;:::o;5331:122:15:-;5402:9;5436:4;5441:3;5436:9;;;;;;;;;;;;;;;;5430:16;;5423:23;;5331:122;;;;:::o;7914:549::-;8034:165;8048:2;8041:3;:9;8034:165;;8123:3;8117:10;8111:4;8104:24;8163:2;8155:10;;;;8186:2;8179:9;;;;8059:2;8052:9;;;;8034:165;;;8241:9;8273:1;8266:3;8261:2;:8;8253:3;:17;:21;8241:33;;8342:4;8338:9;8332:3;8326:10;8322:26;8394:4;8387;8381:11;8377:22;8438:7;8428:8;8425:21;8419:4;8412:35;8293:164;;;;;;:::o;306:238::-;387:11;434:4;:11;427:3;418:6;:12;:27;;410:36;;;;;;524:3;515:6;510:2;504:4;500:13;496:26;486:42;479:49;;465:73;;;;;:::o;4876:175:9:-;4943:4;265:10;4981:23;;4966:38;;;:11;:38;;;;:78;;;;5008:36;5032:11;5008:23;:36::i;:::-;4966:78;4959:85;;4876:175;;;:::o;952:177:8:-;1019:4;159:10;1057:25;;1042:40;;;:11;:40;;;;:80;;;;1086:36;1110:11;1086:23;:36::i;:::-;1042:80;1035:87;;952:177;;;:::o;1631:208:7:-;1698:4;144:10;1736:17;;1721:32;;;:11;:32;;;;:71;;;;207:10;1772:20;;1757:35;;;:11;:35;;;;1721:71;:111;;;;1796:36;1820:11;1796:23;:36::i;:::-;1721:111;1714:118;;1631:208;;;:::o;1655:168:6:-;1722:4;142:10;1760:16;;1745:31;;;:11;:31;;;;:71;;;;1780:36;1804:11;1780:23;:36::i;:::-;1745:71;1738:78;;1655:168;;;:::o;114:129:5:-;181:4;97:10;219:17;;204:32;;;:11;:32;;;;197:39;;114:129;;;:::o;486:1802:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  source:
    'pragma solidity ^0.5.0;\n\nimport "@ensdomains/ens/contracts/ENS.sol";\nimport "./profiles/ABIResolver.sol";\nimport "./profiles/AddrResolver.sol";\nimport "./profiles/ContentHashResolver.sol";\nimport "./profiles/DNSResolver.sol";\nimport "./profiles/InterfaceResolver.sol";\nimport "./profiles/NameResolver.sol";\nimport "./profiles/PubkeyResolver.sol";\nimport "./profiles/TextResolver.sol";\n\n/**\n * A simple resolver anyone can use; only allows the owner of a node to set its\n * address.\n */\ncontract PublicResolver is ABIResolver, AddrResolver, ContentHashResolver, DNSResolver, InterfaceResolver, NameResolver, PubkeyResolver, TextResolver {\n    ENS ens;\n\n    /**\n     * A mapping of authorisations. An address that is authorised for a name\n     * may make any changes to the name that the owner could, but may not update\n     * the set of authorisations.\n     * (node, owner, caller) => isAuthorised\n     */\n    mapping(bytes32=>mapping(address=>mapping(address=>bool))) public authorisations;\n\n    event AuthorisationChanged(bytes32 indexed node, address indexed owner, address indexed target, bool isAuthorised);\n\n    constructor(ENS _ens) public {\n        ens = _ens;\n    }\n\n    /**\n     * @dev Sets or clears an authorisation.\n     * Authorisations are specific to the caller. Any account can set an authorisation\n     * for any name, but the authorisation that is checked will be that of the\n     * current owner of a name. Thus, transferring a name effectively clears any\n     * existing authorisations, and new authorisations can be set in advance of\n     * an ownership transfer if desired.\n     *\n     * @param node The name to change the authorisation on.\n     * @param target The address that is to be authorised or deauthorised.\n     * @param isAuthorised True if the address should be authorised, or false if it should be deauthorised.\n     */\n    function setAuthorisation(bytes32 node, address target, bool isAuthorised) external {\n        authorisations[node][msg.sender][target] = isAuthorised;\n        emit AuthorisationChanged(node, msg.sender, target, isAuthorised);\n    }\n\n    function isAuthorised(bytes32 node) internal view returns(bool) {\n        address owner = ens.owner(node);\n        return owner == msg.sender || authorisations[node][owner][msg.sender];\n    }\n}\n',
  sourcePath:
    "/home/user/Dropbox/projects/resolvers/contracts/PublicResolver.sol",
  ast: {
    absolutePath:
      "/home/user/Dropbox/projects/resolvers/contracts/PublicResolver.sol",
    exportedSymbols: {
      PublicResolver: [295],
    },
    id: 296,
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 181,
        literals: ["solidity", "^", "0.5", ".0"],
        nodeType: "PragmaDirective",
        src: "0:23:3",
      },
      {
        absolutePath: "@ensdomains/ens/contracts/ENS.sol",
        file: "@ensdomains/ens/contracts/ENS.sol",
        id: 182,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 3725,
        src: "25:43:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/ABIResolver.sol",
        file: "./profiles/ABIResolver.sol",
        id: 183,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 741,
        src: "69:36:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/AddrResolver.sol",
        file: "./profiles/AddrResolver.sol",
        id: 184,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 900,
        src: "106:37:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/ContentHashResolver.sol",
        file: "./profiles/ContentHashResolver.sol",
        id: 185,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 970,
        src: "144:44:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/DNSResolver.sol",
        file: "./profiles/DNSResolver.sol",
        id: 186,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1401,
        src: "189:36:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/InterfaceResolver.sol",
        file: "./profiles/InterfaceResolver.sol",
        id: 187,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1588,
        src: "226:42:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/NameResolver.sol",
        file: "./profiles/NameResolver.sol",
        id: 188,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1658,
        src: "269:37:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/PubkeyResolver.sol",
        file: "./profiles/PubkeyResolver.sol",
        id: 189,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1749,
        src: "307:39:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/TextResolver.sol",
        file: "./profiles/TextResolver.sol",
        id: 190,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1832,
        src: "347:37:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        baseContracts: [
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 191,
              name: "ABIResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 740,
              src: "513:11:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_ABIResolver_$740",
                typeString: "contract ABIResolver",
              },
            },
            id: 192,
            nodeType: "InheritanceSpecifier",
            src: "513:11:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 193,
              name: "AddrResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 899,
              src: "526:12:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_AddrResolver_$899",
                typeString: "contract AddrResolver",
              },
            },
            id: 194,
            nodeType: "InheritanceSpecifier",
            src: "526:12:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 195,
              name: "ContentHashResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 969,
              src: "540:19:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_ContentHashResolver_$969",
                typeString: "contract ContentHashResolver",
              },
            },
            id: 196,
            nodeType: "InheritanceSpecifier",
            src: "540:19:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 197,
              name: "DNSResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1400,
              src: "561:11:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_DNSResolver_$1400",
                typeString: "contract DNSResolver",
              },
            },
            id: 198,
            nodeType: "InheritanceSpecifier",
            src: "561:11:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 199,
              name: "InterfaceResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1587,
              src: "574:17:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_InterfaceResolver_$1587",
                typeString: "contract InterfaceResolver",
              },
            },
            id: 200,
            nodeType: "InheritanceSpecifier",
            src: "574:17:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 201,
              name: "NameResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1657,
              src: "593:12:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_NameResolver_$1657",
                typeString: "contract NameResolver",
              },
            },
            id: 202,
            nodeType: "InheritanceSpecifier",
            src: "593:12:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 203,
              name: "PubkeyResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1748,
              src: "607:14:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_PubkeyResolver_$1748",
                typeString: "contract PubkeyResolver",
              },
            },
            id: 204,
            nodeType: "InheritanceSpecifier",
            src: "607:14:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 205,
              name: "TextResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1831,
              src: "623:12:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_TextResolver_$1831",
                typeString: "contract TextResolver",
              },
            },
            id: 206,
            nodeType: "InheritanceSpecifier",
            src: "623:12:3",
          },
        ],
        contractDependencies: [
          604,
          740,
          899,
          969,
          1400,
          1587,
          1657,
          1748,
          1831,
        ],
        contractKind: "contract",
        documentation:
          "A simple resolver anyone can use; only allows the owner of a node to set its\naddress.",
        fullyImplemented: true,
        id: 295,
        linearizedBaseContracts: [
          295,
          1831,
          1748,
          1657,
          1587,
          1400,
          969,
          899,
          740,
          604,
        ],
        name: "PublicResolver",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            id: 208,
            name: "ens",
            nodeType: "VariableDeclaration",
            scope: 295,
            src: "642:7:3",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_contract$_ENS_$3724",
              typeString: "contract ENS",
            },
            typeName: {
              contractScope: null,
              id: 207,
              name: "ENS",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 3724,
              src: "642:3:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_ENS_$3724",
                typeString: "contract ENS",
              },
            },
            value: null,
            visibility: "internal",
          },
          {
            constant: false,
            id: 216,
            name: "authorisations",
            nodeType: "VariableDeclaration",
            scope: 295,
            src: "909:80:3",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$_$",
              typeString:
                "mapping(bytes32 => mapping(address => mapping(address => bool)))",
            },
            typeName: {
              id: 215,
              keyType: {
                id: 209,
                name: "bytes32",
                nodeType: "ElementaryTypeName",
                src: "917:7:3",
                typeDescriptions: {
                  typeIdentifier: "t_bytes32",
                  typeString: "bytes32",
                },
              },
              nodeType: "Mapping",
              src: "909:58:3",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$_$",
                typeString:
                  "mapping(bytes32 => mapping(address => mapping(address => bool)))",
              },
              valueType: {
                id: 214,
                keyType: {
                  id: 210,
                  name: "address",
                  nodeType: "ElementaryTypeName",
                  src: "934:7:3",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                },
                nodeType: "Mapping",
                src: "926:40:3",
                typeDescriptions: {
                  typeIdentifier:
                    "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                  typeString: "mapping(address => mapping(address => bool))",
                },
                valueType: {
                  id: 213,
                  keyType: {
                    id: 211,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "951:7:3",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  nodeType: "Mapping",
                  src: "943:22:3",
                  typeDescriptions: {
                    typeIdentifier: "t_mapping$_t_address_$_t_bool_$",
                    typeString: "mapping(address => bool)",
                  },
                  valueType: {
                    id: 212,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "960:4:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                },
              },
            },
            value: null,
            visibility: "public",
          },
          {
            anonymous: false,
            documentation: null,
            id: 226,
            name: "AuthorisationChanged",
            nodeType: "EventDefinition",
            parameters: {
              id: 225,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 218,
                  indexed: true,
                  name: "node",
                  nodeType: "VariableDeclaration",
                  scope: 226,
                  src: "1023:20:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 217,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1023:7:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 220,
                  indexed: true,
                  name: "owner",
                  nodeType: "VariableDeclaration",
                  scope: 226,
                  src: "1045:21:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 219,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1045:7:3",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 222,
                  indexed: true,
                  name: "target",
                  nodeType: "VariableDeclaration",
                  scope: 226,
                  src: "1068:22:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 221,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1068:7:3",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 224,
                  indexed: false,
                  name: "isAuthorised",
                  nodeType: "VariableDeclaration",
                  scope: 226,
                  src: "1092:17:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 223,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "1092:4:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "1022:88:3",
            },
            src: "996:115:3",
          },
          {
            body: {
              id: 235,
              nodeType: "Block",
              src: "1146:27:3",
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 233,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 231,
                      name: "ens",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 208,
                      src: "1156:3:3",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_ENS_$3724",
                        typeString: "contract ENS",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      argumentTypes: null,
                      id: 232,
                      name: "_ens",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 228,
                      src: "1162:4:3",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_ENS_$3724",
                        typeString: "contract ENS",
                      },
                    },
                    src: "1156:10:3",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_ENS_$3724",
                      typeString: "contract ENS",
                    },
                  },
                  id: 234,
                  nodeType: "ExpressionStatement",
                  src: "1156:10:3",
                },
              ],
            },
            documentation: null,
            id: 236,
            implemented: true,
            kind: "constructor",
            modifiers: [],
            name: "",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 229,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 228,
                  name: "_ens",
                  nodeType: "VariableDeclaration",
                  scope: 236,
                  src: "1129:8:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_contract$_ENS_$3724",
                    typeString: "contract ENS",
                  },
                  typeName: {
                    contractScope: null,
                    id: 227,
                    name: "ENS",
                    nodeType: "UserDefinedTypeName",
                    referencedDeclaration: 3724,
                    src: "1129:3:3",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_ENS_$3724",
                      typeString: "contract ENS",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "1128:10:3",
            },
            returnParameters: {
              id: 230,
              nodeType: "ParameterList",
              parameters: [],
              src: "1146:0:3",
            },
            scope: 295,
            src: "1117:56:3",
            stateMutability: "nonpayable",
            superFunction: null,
            visibility: "public",
          },
          {
            body: {
              id: 264,
              nodeType: "Block",
              src: "1942:147:3",
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 254,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        baseExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 245,
                            name: "authorisations",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 216,
                            src: "1952:14:3",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$_$",
                              typeString:
                                "mapping(bytes32 => mapping(address => mapping(address => bool)))",
                            },
                          },
                          id: 250,
                          indexExpression: {
                            argumentTypes: null,
                            id: 246,
                            name: "node",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 238,
                            src: "1967:4:3",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "1952:20:3",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            typeString:
                              "mapping(address => mapping(address => bool))",
                          },
                        },
                        id: 251,
                        indexExpression: {
                          argumentTypes: null,
                          expression: {
                            argumentTypes: null,
                            id: 247,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4075,
                            src: "1973:3:3",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 248,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          referencedDeclaration: null,
                          src: "1973:10:3",
                          typeDescriptions: {
                            typeIdentifier: "t_address_payable",
                            typeString: "address payable",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "1952:32:3",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_bool_$",
                          typeString: "mapping(address => bool)",
                        },
                      },
                      id: 252,
                      indexExpression: {
                        argumentTypes: null,
                        id: 249,
                        name: "target",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 240,
                        src: "1985:6:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "1952:40:3",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      argumentTypes: null,
                      id: 253,
                      name: "isAuthorised",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 242,
                      src: "1995:12:3",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    src: "1952:55:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 255,
                  nodeType: "ExpressionStatement",
                  src: "1952:55:3",
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        id: 257,
                        name: "node",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 238,
                        src: "2043:4:3",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 258,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4075,
                          src: "2049:3:3",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 259,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        referencedDeclaration: null,
                        src: "2049:10:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable",
                        },
                      },
                      {
                        argumentTypes: null,
                        id: 260,
                        name: "target",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 240,
                        src: "2061:6:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        argumentTypes: null,
                        id: 261,
                        name: "isAuthorised",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 242,
                        src: "2069:12:3",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                        {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable",
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 256,
                      name: "AuthorisationChanged",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 226,
                      src: "2022:20:3",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_bool_$returns$__$",
                        typeString: "function (bytes32,address,address,bool)",
                      },
                    },
                    id: 262,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2022:60:3",
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 263,
                  nodeType: "EmitStatement",
                  src: "2017:65:3",
                },
              ],
            },
            documentation:
              "@dev Sets or clears an authorisation.\nAuthorisations are specific to the caller. Any account can set an authorisation\nfor any name, but the authorisation that is checked will be that of the\ncurrent owner of a name. Thus, transferring a name effectively clears any\nexisting authorisations, and new authorisations can be set in advance of\nan ownership transfer if desired.\n     * @param node The name to change the authorisation on.\n@param target The address that is to be authorised or deauthorised.\n@param isAuthorised True if the address should be authorised, or false if it should be deauthorised.",
            id: 265,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setAuthorisation",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 243,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 238,
                  name: "node",
                  nodeType: "VariableDeclaration",
                  scope: 265,
                  src: "1884:12:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 237,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1884:7:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 240,
                  name: "target",
                  nodeType: "VariableDeclaration",
                  scope: 265,
                  src: "1898:14:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 239,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1898:7:3",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 242,
                  name: "isAuthorised",
                  nodeType: "VariableDeclaration",
                  scope: 265,
                  src: "1914:17:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 241,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "1914:4:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "1883:49:3",
            },
            returnParameters: {
              id: 244,
              nodeType: "ParameterList",
              parameters: [],
              src: "1942:0:3",
            },
            scope: 295,
            src: "1858:231:3",
            stateMutability: "nonpayable",
            superFunction: null,
            visibility: "external",
          },
          {
            body: {
              id: 293,
              nodeType: "Block",
              src: "2159:127:3",
              statements: [
                {
                  assignments: [273],
                  declarations: [
                    {
                      constant: false,
                      id: 273,
                      name: "owner",
                      nodeType: "VariableDeclaration",
                      scope: 293,
                      src: "2169:13:3",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                      typeName: {
                        id: 272,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "2169:7:3",
                        stateMutability: "nonpayable",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      value: null,
                      visibility: "internal",
                    },
                  ],
                  id: 278,
                  initialValue: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        id: 276,
                        name: "node",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 267,
                        src: "2195:4:3",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      ],
                      expression: {
                        argumentTypes: null,
                        id: 274,
                        name: "ens",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 208,
                        src: "2185:3:3",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_ENS_$3724",
                          typeString: "contract ENS",
                        },
                      },
                      id: 275,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "owner",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 3709,
                      src: "2185:9:3",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        typeString:
                          "function (bytes32) view external returns (address)",
                      },
                    },
                    id: 277,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2185:15:3",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2169:31:3",
                },
                {
                  expression: {
                    argumentTypes: null,
                    commonType: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    id: 291,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                      id: 282,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 279,
                        name: "owner",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 273,
                        src: "2217:5:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "==",
                      rightExpression: {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 280,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4075,
                          src: "2226:3:3",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 281,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        referencedDeclaration: null,
                        src: "2226:10:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable",
                        },
                      },
                      src: "2217:19:3",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "||",
                    rightExpression: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        baseExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 283,
                            name: "authorisations",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 216,
                            src: "2240:14:3",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$_$",
                              typeString:
                                "mapping(bytes32 => mapping(address => mapping(address => bool)))",
                            },
                          },
                          id: 285,
                          indexExpression: {
                            argumentTypes: null,
                            id: 284,
                            name: "node",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 267,
                            src: "2255:4:3",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "2240:20:3",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            typeString:
                              "mapping(address => mapping(address => bool))",
                          },
                        },
                        id: 287,
                        indexExpression: {
                          argumentTypes: null,
                          id: 286,
                          name: "owner",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 273,
                          src: "2261:5:3",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "2240:27:3",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_bool_$",
                          typeString: "mapping(address => bool)",
                        },
                      },
                      id: 290,
                      indexExpression: {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 288,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4075,
                          src: "2268:3:3",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 289,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        referencedDeclaration: null,
                        src: "2268:10:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "IndexAccess",
                      src: "2240:39:3",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    src: "2217:62:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  functionReturnParameters: 271,
                  id: 292,
                  nodeType: "Return",
                  src: "2210:69:3",
                },
              ],
            },
            documentation: null,
            id: 294,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "isAuthorised",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 268,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 267,
                  name: "node",
                  nodeType: "VariableDeclaration",
                  scope: 294,
                  src: "2117:12:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 266,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "2117:7:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "2116:14:3",
            },
            returnParameters: {
              id: 271,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 270,
                  name: "",
                  nodeType: "VariableDeclaration",
                  scope: 294,
                  src: "2153:4:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 269,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "2153:4:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "2152:6:3",
            },
            scope: 295,
            src: "2095:191:3",
            stateMutability: "view",
            superFunction: 559,
            visibility: "internal",
          },
        ],
        scope: 296,
        src: "486:1802:3",
      },
    ],
    src: "0:2289:3",
  },
  legacyAST: {
    absolutePath:
      "/home/user/Dropbox/projects/resolvers/contracts/PublicResolver.sol",
    exportedSymbols: {
      PublicResolver: [295],
    },
    id: 296,
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 181,
        literals: ["solidity", "^", "0.5", ".0"],
        nodeType: "PragmaDirective",
        src: "0:23:3",
      },
      {
        absolutePath: "@ensdomains/ens/contracts/ENS.sol",
        file: "@ensdomains/ens/contracts/ENS.sol",
        id: 182,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 3725,
        src: "25:43:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/ABIResolver.sol",
        file: "./profiles/ABIResolver.sol",
        id: 183,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 741,
        src: "69:36:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/AddrResolver.sol",
        file: "./profiles/AddrResolver.sol",
        id: 184,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 900,
        src: "106:37:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/ContentHashResolver.sol",
        file: "./profiles/ContentHashResolver.sol",
        id: 185,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 970,
        src: "144:44:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/DNSResolver.sol",
        file: "./profiles/DNSResolver.sol",
        id: 186,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1401,
        src: "189:36:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/InterfaceResolver.sol",
        file: "./profiles/InterfaceResolver.sol",
        id: 187,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1588,
        src: "226:42:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/NameResolver.sol",
        file: "./profiles/NameResolver.sol",
        id: 188,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1658,
        src: "269:37:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/PubkeyResolver.sol",
        file: "./profiles/PubkeyResolver.sol",
        id: 189,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1749,
        src: "307:39:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "/home/user/Dropbox/projects/resolvers/contracts/profiles/TextResolver.sol",
        file: "./profiles/TextResolver.sol",
        id: 190,
        nodeType: "ImportDirective",
        scope: 296,
        sourceUnit: 1832,
        src: "347:37:3",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        baseContracts: [
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 191,
              name: "ABIResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 740,
              src: "513:11:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_ABIResolver_$740",
                typeString: "contract ABIResolver",
              },
            },
            id: 192,
            nodeType: "InheritanceSpecifier",
            src: "513:11:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 193,
              name: "AddrResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 899,
              src: "526:12:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_AddrResolver_$899",
                typeString: "contract AddrResolver",
              },
            },
            id: 194,
            nodeType: "InheritanceSpecifier",
            src: "526:12:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 195,
              name: "ContentHashResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 969,
              src: "540:19:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_ContentHashResolver_$969",
                typeString: "contract ContentHashResolver",
              },
            },
            id: 196,
            nodeType: "InheritanceSpecifier",
            src: "540:19:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 197,
              name: "DNSResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1400,
              src: "561:11:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_DNSResolver_$1400",
                typeString: "contract DNSResolver",
              },
            },
            id: 198,
            nodeType: "InheritanceSpecifier",
            src: "561:11:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 199,
              name: "InterfaceResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1587,
              src: "574:17:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_InterfaceResolver_$1587",
                typeString: "contract InterfaceResolver",
              },
            },
            id: 200,
            nodeType: "InheritanceSpecifier",
            src: "574:17:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 201,
              name: "NameResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1657,
              src: "593:12:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_NameResolver_$1657",
                typeString: "contract NameResolver",
              },
            },
            id: 202,
            nodeType: "InheritanceSpecifier",
            src: "593:12:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 203,
              name: "PubkeyResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1748,
              src: "607:14:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_PubkeyResolver_$1748",
                typeString: "contract PubkeyResolver",
              },
            },
            id: 204,
            nodeType: "InheritanceSpecifier",
            src: "607:14:3",
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 205,
              name: "TextResolver",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1831,
              src: "623:12:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_TextResolver_$1831",
                typeString: "contract TextResolver",
              },
            },
            id: 206,
            nodeType: "InheritanceSpecifier",
            src: "623:12:3",
          },
        ],
        contractDependencies: [
          604,
          740,
          899,
          969,
          1400,
          1587,
          1657,
          1748,
          1831,
        ],
        contractKind: "contract",
        documentation:
          "A simple resolver anyone can use; only allows the owner of a node to set its\naddress.",
        fullyImplemented: true,
        id: 295,
        linearizedBaseContracts: [
          295,
          1831,
          1748,
          1657,
          1587,
          1400,
          969,
          899,
          740,
          604,
        ],
        name: "PublicResolver",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            id: 208,
            name: "ens",
            nodeType: "VariableDeclaration",
            scope: 295,
            src: "642:7:3",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_contract$_ENS_$3724",
              typeString: "contract ENS",
            },
            typeName: {
              contractScope: null,
              id: 207,
              name: "ENS",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 3724,
              src: "642:3:3",
              typeDescriptions: {
                typeIdentifier: "t_contract$_ENS_$3724",
                typeString: "contract ENS",
              },
            },
            value: null,
            visibility: "internal",
          },
          {
            constant: false,
            id: 216,
            name: "authorisations",
            nodeType: "VariableDeclaration",
            scope: 295,
            src: "909:80:3",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$_$",
              typeString:
                "mapping(bytes32 => mapping(address => mapping(address => bool)))",
            },
            typeName: {
              id: 215,
              keyType: {
                id: 209,
                name: "bytes32",
                nodeType: "ElementaryTypeName",
                src: "917:7:3",
                typeDescriptions: {
                  typeIdentifier: "t_bytes32",
                  typeString: "bytes32",
                },
              },
              nodeType: "Mapping",
              src: "909:58:3",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$_$",
                typeString:
                  "mapping(bytes32 => mapping(address => mapping(address => bool)))",
              },
              valueType: {
                id: 214,
                keyType: {
                  id: 210,
                  name: "address",
                  nodeType: "ElementaryTypeName",
                  src: "934:7:3",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                },
                nodeType: "Mapping",
                src: "926:40:3",
                typeDescriptions: {
                  typeIdentifier:
                    "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                  typeString: "mapping(address => mapping(address => bool))",
                },
                valueType: {
                  id: 213,
                  keyType: {
                    id: 211,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "951:7:3",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  nodeType: "Mapping",
                  src: "943:22:3",
                  typeDescriptions: {
                    typeIdentifier: "t_mapping$_t_address_$_t_bool_$",
                    typeString: "mapping(address => bool)",
                  },
                  valueType: {
                    id: 212,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "960:4:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                },
              },
            },
            value: null,
            visibility: "public",
          },
          {
            anonymous: false,
            documentation: null,
            id: 226,
            name: "AuthorisationChanged",
            nodeType: "EventDefinition",
            parameters: {
              id: 225,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 218,
                  indexed: true,
                  name: "node",
                  nodeType: "VariableDeclaration",
                  scope: 226,
                  src: "1023:20:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 217,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1023:7:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 220,
                  indexed: true,
                  name: "owner",
                  nodeType: "VariableDeclaration",
                  scope: 226,
                  src: "1045:21:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 219,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1045:7:3",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 222,
                  indexed: true,
                  name: "target",
                  nodeType: "VariableDeclaration",
                  scope: 226,
                  src: "1068:22:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 221,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1068:7:3",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 224,
                  indexed: false,
                  name: "isAuthorised",
                  nodeType: "VariableDeclaration",
                  scope: 226,
                  src: "1092:17:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 223,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "1092:4:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "1022:88:3",
            },
            src: "996:115:3",
          },
          {
            body: {
              id: 235,
              nodeType: "Block",
              src: "1146:27:3",
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 233,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 231,
                      name: "ens",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 208,
                      src: "1156:3:3",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_ENS_$3724",
                        typeString: "contract ENS",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      argumentTypes: null,
                      id: 232,
                      name: "_ens",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 228,
                      src: "1162:4:3",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_ENS_$3724",
                        typeString: "contract ENS",
                      },
                    },
                    src: "1156:10:3",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_ENS_$3724",
                      typeString: "contract ENS",
                    },
                  },
                  id: 234,
                  nodeType: "ExpressionStatement",
                  src: "1156:10:3",
                },
              ],
            },
            documentation: null,
            id: 236,
            implemented: true,
            kind: "constructor",
            modifiers: [],
            name: "",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 229,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 228,
                  name: "_ens",
                  nodeType: "VariableDeclaration",
                  scope: 236,
                  src: "1129:8:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_contract$_ENS_$3724",
                    typeString: "contract ENS",
                  },
                  typeName: {
                    contractScope: null,
                    id: 227,
                    name: "ENS",
                    nodeType: "UserDefinedTypeName",
                    referencedDeclaration: 3724,
                    src: "1129:3:3",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_ENS_$3724",
                      typeString: "contract ENS",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "1128:10:3",
            },
            returnParameters: {
              id: 230,
              nodeType: "ParameterList",
              parameters: [],
              src: "1146:0:3",
            },
            scope: 295,
            src: "1117:56:3",
            stateMutability: "nonpayable",
            superFunction: null,
            visibility: "public",
          },
          {
            body: {
              id: 264,
              nodeType: "Block",
              src: "1942:147:3",
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 254,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        baseExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 245,
                            name: "authorisations",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 216,
                            src: "1952:14:3",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$_$",
                              typeString:
                                "mapping(bytes32 => mapping(address => mapping(address => bool)))",
                            },
                          },
                          id: 250,
                          indexExpression: {
                            argumentTypes: null,
                            id: 246,
                            name: "node",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 238,
                            src: "1967:4:3",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "1952:20:3",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            typeString:
                              "mapping(address => mapping(address => bool))",
                          },
                        },
                        id: 251,
                        indexExpression: {
                          argumentTypes: null,
                          expression: {
                            argumentTypes: null,
                            id: 247,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4075,
                            src: "1973:3:3",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 248,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          referencedDeclaration: null,
                          src: "1973:10:3",
                          typeDescriptions: {
                            typeIdentifier: "t_address_payable",
                            typeString: "address payable",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "1952:32:3",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_bool_$",
                          typeString: "mapping(address => bool)",
                        },
                      },
                      id: 252,
                      indexExpression: {
                        argumentTypes: null,
                        id: 249,
                        name: "target",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 240,
                        src: "1985:6:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "1952:40:3",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      argumentTypes: null,
                      id: 253,
                      name: "isAuthorised",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 242,
                      src: "1995:12:3",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    src: "1952:55:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 255,
                  nodeType: "ExpressionStatement",
                  src: "1952:55:3",
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        id: 257,
                        name: "node",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 238,
                        src: "2043:4:3",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 258,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4075,
                          src: "2049:3:3",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 259,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        referencedDeclaration: null,
                        src: "2049:10:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable",
                        },
                      },
                      {
                        argumentTypes: null,
                        id: 260,
                        name: "target",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 240,
                        src: "2061:6:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        argumentTypes: null,
                        id: 261,
                        name: "isAuthorised",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 242,
                        src: "2069:12:3",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                        {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable",
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 256,
                      name: "AuthorisationChanged",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 226,
                      src: "2022:20:3",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_bool_$returns$__$",
                        typeString: "function (bytes32,address,address,bool)",
                      },
                    },
                    id: 262,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2022:60:3",
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 263,
                  nodeType: "EmitStatement",
                  src: "2017:65:3",
                },
              ],
            },
            documentation:
              "@dev Sets or clears an authorisation.\nAuthorisations are specific to the caller. Any account can set an authorisation\nfor any name, but the authorisation that is checked will be that of the\ncurrent owner of a name. Thus, transferring a name effectively clears any\nexisting authorisations, and new authorisations can be set in advance of\nan ownership transfer if desired.\n     * @param node The name to change the authorisation on.\n@param target The address that is to be authorised or deauthorised.\n@param isAuthorised True if the address should be authorised, or false if it should be deauthorised.",
            id: 265,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setAuthorisation",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 243,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 238,
                  name: "node",
                  nodeType: "VariableDeclaration",
                  scope: 265,
                  src: "1884:12:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 237,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1884:7:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 240,
                  name: "target",
                  nodeType: "VariableDeclaration",
                  scope: 265,
                  src: "1898:14:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 239,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1898:7:3",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 242,
                  name: "isAuthorised",
                  nodeType: "VariableDeclaration",
                  scope: 265,
                  src: "1914:17:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 241,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "1914:4:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "1883:49:3",
            },
            returnParameters: {
              id: 244,
              nodeType: "ParameterList",
              parameters: [],
              src: "1942:0:3",
            },
            scope: 295,
            src: "1858:231:3",
            stateMutability: "nonpayable",
            superFunction: null,
            visibility: "external",
          },
          {
            body: {
              id: 293,
              nodeType: "Block",
              src: "2159:127:3",
              statements: [
                {
                  assignments: [273],
                  declarations: [
                    {
                      constant: false,
                      id: 273,
                      name: "owner",
                      nodeType: "VariableDeclaration",
                      scope: 293,
                      src: "2169:13:3",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                      typeName: {
                        id: 272,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "2169:7:3",
                        stateMutability: "nonpayable",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      value: null,
                      visibility: "internal",
                    },
                  ],
                  id: 278,
                  initialValue: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        id: 276,
                        name: "node",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 267,
                        src: "2195:4:3",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      ],
                      expression: {
                        argumentTypes: null,
                        id: 274,
                        name: "ens",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 208,
                        src: "2185:3:3",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_ENS_$3724",
                          typeString: "contract ENS",
                        },
                      },
                      id: 275,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "owner",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 3709,
                      src: "2185:9:3",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        typeString:
                          "function (bytes32) view external returns (address)",
                      },
                    },
                    id: 277,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2185:15:3",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2169:31:3",
                },
                {
                  expression: {
                    argumentTypes: null,
                    commonType: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    id: 291,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                      id: 282,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 279,
                        name: "owner",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 273,
                        src: "2217:5:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "==",
                      rightExpression: {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 280,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4075,
                          src: "2226:3:3",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 281,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        referencedDeclaration: null,
                        src: "2226:10:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable",
                        },
                      },
                      src: "2217:19:3",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "||",
                    rightExpression: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        baseExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 283,
                            name: "authorisations",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 216,
                            src: "2240:14:3",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$_$",
                              typeString:
                                "mapping(bytes32 => mapping(address => mapping(address => bool)))",
                            },
                          },
                          id: 285,
                          indexExpression: {
                            argumentTypes: null,
                            id: 284,
                            name: "node",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 267,
                            src: "2255:4:3",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "2240:20:3",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            typeString:
                              "mapping(address => mapping(address => bool))",
                          },
                        },
                        id: 287,
                        indexExpression: {
                          argumentTypes: null,
                          id: 286,
                          name: "owner",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 273,
                          src: "2261:5:3",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "2240:27:3",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_bool_$",
                          typeString: "mapping(address => bool)",
                        },
                      },
                      id: 290,
                      indexExpression: {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 288,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4075,
                          src: "2268:3:3",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 289,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        referencedDeclaration: null,
                        src: "2268:10:3",
                        typeDescriptions: {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "IndexAccess",
                      src: "2240:39:3",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    src: "2217:62:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  functionReturnParameters: 271,
                  id: 292,
                  nodeType: "Return",
                  src: "2210:69:3",
                },
              ],
            },
            documentation: null,
            id: 294,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "isAuthorised",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 268,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 267,
                  name: "node",
                  nodeType: "VariableDeclaration",
                  scope: 294,
                  src: "2117:12:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 266,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "2117:7:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "2116:14:3",
            },
            returnParameters: {
              id: 271,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 270,
                  name: "",
                  nodeType: "VariableDeclaration",
                  scope: 294,
                  src: "2153:4:3",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 269,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "2153:4:3",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "2152:6:3",
            },
            scope: 295,
            src: "2095:191:3",
            stateMutability: "view",
            superFunction: 559,
            visibility: "internal",
          },
        ],
        scope: 296,
        src: "486:1802:3",
      },
    ],
    src: "0:2289:3",
  },
  compiler: {
    name: "solc",
    version: "0.5.8+commit.23d335f2.Emscripten.clang",
  },
  networks: {
    "1": {
      events: {
        "0xe1c5610a6e0cbe10764ecd182adcef1ec338dc4e199c99c32ce98f38e12791df": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              name: "target",
              type: "address",
            },
            {
              indexed: false,
              name: "isAuthorised",
              type: "bool",
            },
          ],
          name: "AuthorisationChanged",
          type: "event",
        },
        "0xd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a7550": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "indexedKey",
              type: "string",
            },
            {
              indexed: false,
              name: "key",
              type: "string",
            },
          ],
          name: "TextChanged",
          type: "event",
        },
        "0x1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e46": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "x",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "y",
              type: "bytes32",
            },
          ],
          name: "PubkeyChanged",
          type: "event",
        },
        "0xb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f7": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "name",
              type: "string",
            },
          ],
          name: "NameChanged",
          type: "event",
        },
        "0x7c69f06bea0bdef565b709e93a147836b0063ba2dd89f02d0b7e8d931e6a6daa": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "interfaceID",
              type: "bytes4",
            },
            {
              indexed: false,
              name: "implementer",
              type: "address",
            },
          ],
          name: "InterfaceChanged",
          type: "event",
        },
        "0x52a608b3303a48862d07a73d82fa221318c0027fbbcfb1b2329bface3f19ff2b": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "name",
              type: "bytes",
            },
            {
              indexed: false,
              name: "resource",
              type: "uint16",
            },
            {
              indexed: false,
              name: "record",
              type: "bytes",
            },
          ],
          name: "DNSRecordChanged",
          type: "event",
        },
        "0x03528ed0c2a3ebc993b12ce3c16bb382f9c7d88ef7d8a1bf290eaf35955a1207": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "name",
              type: "bytes",
            },
            {
              indexed: false,
              name: "resource",
              type: "uint16",
            },
          ],
          name: "DNSRecordDeleted",
          type: "event",
        },
        "0xb757169b8492ca2f1c6619d9d76ce22803035c3b1d5f6930dffe7b127c1a1983": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
          ],
          name: "DNSZoneCleared",
          type: "event",
        },
        "0xe379c1624ed7e714cc0937528a32359d69d5281337765313dba4e081b72d7578": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "hash",
              type: "bytes",
            },
          ],
          name: "ContenthashChanged",
          type: "event",
        },
        "0x52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd2": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "a",
              type: "address",
            },
          ],
          name: "AddrChanged",
          type: "event",
        },
        "0x65412581168e88a1e60c6459d7f44ae83ad0832e670826c05a4e2476b57af752": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "coinType",
              type: "uint256",
            },
            {
              indexed: false,
              name: "newAddress",
              type: "bytes",
            },
          ],
          name: "AddressChanged",
          type: "event",
        },
        "0xaa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe3": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "contentType",
              type: "uint256",
            },
          ],
          name: "ABIChanged",
          type: "event",
        },
      },
      links: {},
      address: "0x48D421c223E32B68a8973ef05e1314C97BBbc4bE",
      transactionHash:
        "0xa899df8afd17088566ec8ad1ff5b9521293690d1b8447dc4a31391cf8e1d55d0",
    },
    "2": {
      events: {
        "0xe1c5610a6e0cbe10764ecd182adcef1ec338dc4e199c99c32ce98f38e12791df": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              name: "target",
              type: "address",
            },
            {
              indexed: false,
              name: "isAuthorised",
              type: "bool",
            },
          ],
          name: "AuthorisationChanged",
          type: "event",
        },
        "0xd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a7550": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "indexedKey",
              type: "string",
            },
            {
              indexed: false,
              name: "key",
              type: "string",
            },
          ],
          name: "TextChanged",
          type: "event",
        },
        "0x1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e46": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "x",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "y",
              type: "bytes32",
            },
          ],
          name: "PubkeyChanged",
          type: "event",
        },
        "0xb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f7": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "name",
              type: "string",
            },
          ],
          name: "NameChanged",
          type: "event",
        },
        "0x7c69f06bea0bdef565b709e93a147836b0063ba2dd89f02d0b7e8d931e6a6daa": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "interfaceID",
              type: "bytes4",
            },
            {
              indexed: false,
              name: "implementer",
              type: "address",
            },
          ],
          name: "InterfaceChanged",
          type: "event",
        },
        "0x52a608b3303a48862d07a73d82fa221318c0027fbbcfb1b2329bface3f19ff2b": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "name",
              type: "bytes",
            },
            {
              indexed: false,
              name: "resource",
              type: "uint16",
            },
            {
              indexed: false,
              name: "record",
              type: "bytes",
            },
          ],
          name: "DNSRecordChanged",
          type: "event",
        },
        "0x03528ed0c2a3ebc993b12ce3c16bb382f9c7d88ef7d8a1bf290eaf35955a1207": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "name",
              type: "bytes",
            },
            {
              indexed: false,
              name: "resource",
              type: "uint16",
            },
          ],
          name: "DNSRecordDeleted",
          type: "event",
        },
        "0xb757169b8492ca2f1c6619d9d76ce22803035c3b1d5f6930dffe7b127c1a1983": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
          ],
          name: "DNSZoneCleared",
          type: "event",
        },
        "0xe379c1624ed7e714cc0937528a32359d69d5281337765313dba4e081b72d7578": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "hash",
              type: "bytes",
            },
          ],
          name: "ContenthashChanged",
          type: "event",
        },
        "0x52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd2": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "a",
              type: "address",
            },
          ],
          name: "AddrChanged",
          type: "event",
        },
        "0x65412581168e88a1e60c6459d7f44ae83ad0832e670826c05a4e2476b57af752": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "coinType",
              type: "uint256",
            },
            {
              indexed: false,
              name: "newAddress",
              type: "bytes",
            },
          ],
          name: "AddressChanged",
          type: "event",
        },
        "0xaa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe3": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "contentType",
              type: "uint256",
            },
          ],
          name: "ABIChanged",
          type: "event",
        },
      },
      links: {},
      address: "0xBA671d859490F4917e128887b4dCde1668F3E21A",
      transactionHash:
        "0xafc76cb936f60ce761ab5f7f45040382883b3c922683cefca99eedc1b5264c35",
    },
    "5777": {
      events: {
        "0xe1c5610a6e0cbe10764ecd182adcef1ec338dc4e199c99c32ce98f38e12791df": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              name: "target",
              type: "address",
            },
            {
              indexed: false,
              name: "isAuthorised",
              type: "bool",
            },
          ],
          name: "AuthorisationChanged",
          type: "event",
        },
        "0xd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a7550": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "indexedKey",
              type: "string",
            },
            {
              indexed: false,
              name: "key",
              type: "string",
            },
          ],
          name: "TextChanged",
          type: "event",
        },
        "0x1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e46": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "x",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "y",
              type: "bytes32",
            },
          ],
          name: "PubkeyChanged",
          type: "event",
        },
        "0xb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f7": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "name",
              type: "string",
            },
          ],
          name: "NameChanged",
          type: "event",
        },
        "0x7c69f06bea0bdef565b709e93a147836b0063ba2dd89f02d0b7e8d931e6a6daa": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "interfaceID",
              type: "bytes4",
            },
            {
              indexed: false,
              name: "implementer",
              type: "address",
            },
          ],
          name: "InterfaceChanged",
          type: "event",
        },
        "0x52a608b3303a48862d07a73d82fa221318c0027fbbcfb1b2329bface3f19ff2b": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "name",
              type: "bytes",
            },
            {
              indexed: false,
              name: "resource",
              type: "uint16",
            },
            {
              indexed: false,
              name: "record",
              type: "bytes",
            },
          ],
          name: "DNSRecordChanged",
          type: "event",
        },
        "0x03528ed0c2a3ebc993b12ce3c16bb382f9c7d88ef7d8a1bf290eaf35955a1207": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "name",
              type: "bytes",
            },
            {
              indexed: false,
              name: "resource",
              type: "uint16",
            },
          ],
          name: "DNSRecordDeleted",
          type: "event",
        },
        "0xb757169b8492ca2f1c6619d9d76ce22803035c3b1d5f6930dffe7b127c1a1983": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
          ],
          name: "DNSZoneCleared",
          type: "event",
        },
        "0xe379c1624ed7e714cc0937528a32359d69d5281337765313dba4e081b72d7578": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "hash",
              type: "bytes",
            },
          ],
          name: "ContenthashChanged",
          type: "event",
        },
        "0x52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd2": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "a",
              type: "address",
            },
          ],
          name: "AddrChanged",
          type: "event",
        },
        "0x65412581168e88a1e60c6459d7f44ae83ad0832e670826c05a4e2476b57af752": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: false,
              name: "coinType",
              type: "uint256",
            },
            {
              indexed: false,
              name: "newAddress",
              type: "bytes",
            },
          ],
          name: "AddressChanged",
          type: "event",
        },
        "0xaa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe3": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "node",
              type: "bytes32",
            },
            {
              indexed: true,
              name: "contentType",
              type: "uint256",
            },
          ],
          name: "ABIChanged",
          type: "event",
        },
      },
      links: {},
      address: "0x734BB52F00130f96ea16c7b95b30e670134fB2e0",
      transactionHash:
        "0x106c03c162e9e391def0bc59d426786146e499a41d5511536724901b05024a3a",
    },
  },
  schemaVersion: "3.3.4",
  updatedAt: "2021-05-20T20:06:29.628Z",
  networkType: "ethereum",
  devdoc: {
    methods: {
      "ABI(bytes32,uint256)": {
        params: {
          contentTypes:
            "A bitwise OR of the ABI formats accepted by the caller.",
          node: "The ENS node to query",
        },
        return:
          "contentType The content type of the return valuedata The ABI data",
      },
      "addr(bytes32)": {
        params: {
          node: "The ENS node to query.",
        },
        return: "The associated address.",
      },
      "clearDNSZone(bytes32)": {
        params: {
          node: "the namehash of the node for which to clear the zone",
        },
      },
      "contenthash(bytes32)": {
        params: {
          node: "The ENS node to query.",
        },
        return: "The associated contenthash.",
      },
      "dnsRecord(bytes32,bytes32,uint16)": {
        params: {
          name:
            "the keccak-256 hash of the fully-qualified name for which to fetch the record",
          node: "the namehash of the node for which to fetch the record",
          resource:
            "the ID of the resource as per https://en.wikipedia.org/wiki/List_of_DNS_record_types",
        },
        return: "the DNS record in wire format if present, otherwise empty",
      },
      "hasDNSRecords(bytes32,bytes32)": {
        params: {
          name: "the namehash of the node for which to check the records",
          node: "the namehash of the node for which to check the records",
        },
      },
      "interfaceImplementer(bytes32,bytes4)": {
        params: {
          interfaceID: "The EIP 168 interface ID to check for.",
          node: "The ENS node to query.",
        },
        return:
          "The address that implements this interface, or 0 if the interface is unsupported.",
      },
      "name(bytes32)": {
        params: {
          node: "The ENS node to query.",
        },
        return: "The associated name.",
      },
      "pubkey(bytes32)": {
        params: {
          node: "The ENS node to query",
        },
        return:
          "x, y the X and Y coordinates of the curve point for the public key.",
      },
      "setABI(bytes32,uint256,bytes)": {
        params: {
          contentType: "The content type of the ABI",
          data: "The ABI data.",
          node: "The node to update.",
        },
      },
      "setAddr(bytes32,address)": {
        params: {
          a: "The address to set.",
          node: "The node to update.",
        },
      },
      "setAuthorisation(bytes32,address,bool)": {
        details:
          "Sets or clears an authorisation. Authorisations are specific to the caller. Any account can set an authorisation for any name, but the authorisation that is checked will be that of the current owner of a name. Thus, transferring a name effectively clears any existing authorisations, and new authorisations can be set in advance of an ownership transfer if desired.",
        params: {
          isAuthorised:
            "True if the address should be authorised, or false if it should be deauthorised.",
          node: "The name to change the authorisation on.",
          target: "The address that is to be authorised or deauthorised.",
        },
      },
      "setContenthash(bytes32,bytes)": {
        params: {
          hash: "The contenthash to set",
          node: "The node to update.",
        },
      },
      "setDNSRecords(bytes32,bytes)": {
        params: {
          data: "the DNS wire format records to set",
          node: "the namehash of the node for which to set the records",
        },
      },
      "setInterface(bytes32,bytes4,address)": {
        params: {
          implementer:
            "The address of a contract that implements this interface for this node.",
          interfaceID: "The EIP 168 interface ID.",
          node: "The node to update.",
        },
      },
      "setName(bytes32,string)": {
        params: {
          name: "The name to set.",
          node: "The node to update.",
        },
      },
      "setPubkey(bytes32,bytes32,bytes32)": {
        params: {
          node: "The ENS node to query",
          x: "the X coordinate of the curve point for the public key.",
          y: "the Y coordinate of the curve point for the public key.",
        },
      },
      "setText(bytes32,string,string)": {
        params: {
          key: "The key to set.",
          node: "The node to update.",
          value: "The text data value to set.",
        },
      },
      "text(bytes32,string)": {
        params: {
          key: "The text data key to query.",
          node: "The ENS node to query.",
        },
        return: "The associated text data.",
      },
    },
  },
  userdoc: {
    methods: {
      "ABI(bytes32,uint256)": {
        notice:
          "Returns the ABI associated with an ENS node. Defined in EIP205.",
      },
      "addr(bytes32)": {
        notice: "Returns the address associated with an ENS node.",
      },
      "clearDNSZone(bytes32)": {
        notice: "Clear all information for a DNS zone.",
      },
      "contenthash(bytes32)": {
        notice: "Returns the contenthash associated with an ENS node.",
      },
      "dnsRecord(bytes32,bytes32,uint16)": {
        notice: "Obtain a DNS record.",
      },
      "hasDNSRecords(bytes32,bytes32)": {
        notice: "Check if a given node has records.",
      },
      "interfaceImplementer(bytes32,bytes4)": {
        notice:
          "Returns the address of a contract that implements the specified interface for this name. If an implementer has not been set for this interfaceID and name, the resolver will query the contract at `addr()`. If `addr()` is set, a contract exists at that address, and that contract implements EIP168 and returns `true` for the specified interfaceID, its address will be returned.",
      },
      "name(bytes32)": {
        notice:
          "Returns the name associated with an ENS node, for reverse records. Defined in EIP181.",
      },
      "pubkey(bytes32)": {
        notice:
          "Returns the SECP256k1 public key associated with an ENS node. Defined in EIP 619.",
      },
      "setABI(bytes32,uint256,bytes)": {
        notice:
          "Sets the ABI associated with an ENS node. Nodes may have one ABI of each content type. To remove an ABI, set it to the empty string.",
      },
      "setAddr(bytes32,address)": {
        notice:
          "Sets the address associated with an ENS node. May only be called by the owner of that node in the ENS registry.",
      },
      "setContenthash(bytes32,bytes)": {
        notice:
          "Sets the contenthash associated with an ENS node. May only be called by the owner of that node in the ENS registry.",
      },
      "setDNSRecords(bytes32,bytes)": {
        notice:
          "Set one or more DNS records.  Records are supplied in wire-format. Records with the same node/name/resource must be supplied one after the other to ensure the data is updated correctly. For example, if the data was supplied:    a.example.com IN A 1.2.3.4    a.example.com IN A 5.6.7.8    www.example.com IN CNAME a.example.com. then this would store the two A records for a.example.com correctly as a single RRSET, however if the data was supplied:    a.example.com IN A 1.2.3.4    www.example.com IN CNAME a.example.com.    a.example.com IN A 5.6.7.8 then this would store the first A record, the CNAME, then the second A record which would overwrite the first.",
      },
      "setInterface(bytes32,bytes4,address)": {
        notice:
          "Sets an interface associated with a name. Setting the address to 0 restores the default behaviour of querying the contract at `addr()` for interface support.",
      },
      "setName(bytes32,string)": {
        notice:
          "Sets the name associated with an ENS node, for reverse records. May only be called by the owner of that node in the ENS registry.",
      },
      "setPubkey(bytes32,bytes32,bytes32)": {
        notice: "Sets the SECP256k1 public key associated with an ENS node.",
      },
      "setText(bytes32,string,string)": {
        notice:
          "Sets the text data associated with an ENS node and key. May only be called by the owner of that node in the ENS registry.",
      },
      "text(bytes32,string)": {
        notice: "Returns the text data associated with an ENS node and key.",
      },
    },
    notice:
      "A simple resolver anyone can use; only allows the owner of a node to set its address.",
  },
};
