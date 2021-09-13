const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WahloptionSchema = new Schema({
  ID: Number,
  name: {type: String, required: true},
  beschreibung: {type: String, required: true},
  hatPrioritaet: {type: boolean, required: true},
  maxTeilnehmerAnzahl: number
}, { versionKey: false });

const Wahloption = mongoose.model('wahloption', WahloptionSchema,'wahloption');
module.exports = Wahloption;