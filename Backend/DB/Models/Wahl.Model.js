const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WahlSchema = new Schema({
  WahlId: String,
  name: String,
  beschreibung: String,
  klassenstufen: [String]
}, { versionKey: false });

const Wahl = mongoose.model('wahl', WahlSchema,'wahl');
module.exports = Wahl;