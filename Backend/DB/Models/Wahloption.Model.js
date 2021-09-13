const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WahloptionSchema = new Schema({
  Name: String,
  beschreibung: String,
  hatPrioritaet: boolean,
  maxTeilnehmerAnzahl: number
}, { versionKey: false });

const Wahloption = mongoose.model('wahloption', WahloptionSchema,'wahloption');
module.exports = Wahloption;