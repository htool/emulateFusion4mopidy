const debug = require('debug')('device');
debug('Emulate: Fusion');

// Device address (suggested)
var deviceAddress = 10;

// AddressClaim PGN
addressClaim = {
  pgn: 60928,
  dst: 255,
  "Unique Number": 76223,
  "Manufacturer Code": 419,
  "Device Function": 130,
  "Device Class": 125,
  "Device Instance Lower": 0,
  "Device Instance Upper": 0,
  "System Instance": 0,
  "Industry Group": 4
  // "Reserved1": 1,
  // "Reserved2": 2
}

// Product info PGN
productInfo = {
  pgn: 126996,
  dst: 255,
  "NMEA 2000 Version": 1301,
  "Product Code": 3115,
  "Model ID": "UD-650",
  "Software Version Code": "2.0.265",
  "Model Version": "FUSION-LINK-1.0",
  "Model Serial Code": "76223",
  "Certification Level": 1,
  "Load Equivalency": 1
}

// Config info PGN
configInfo = {
  pgn: 126998,
  dst: 255,
  "Installation Description #1": "UD-650",
  "Installation Description #2": "FUSION",
  "Installation Description #3": "Fusion Electronics Ltd",
  "Manufacturer Information": "FUSION",
}

const defaultTransmitPGNs = [
  60928,
  59904,
  59392,
  59904,
  126720,
  130820, ]

module.exports.defaultTransmitPGNs = defaultTransmitPGNs
