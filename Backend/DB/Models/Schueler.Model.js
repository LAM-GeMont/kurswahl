const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchuelerSchema = new Schema({
  SchuelerNr: String,
  vorname: String,
  nachname: String,
  klassenstufe: number
}, { versionKey: false });

const Schueler = mongoose.model('schueler', SchuelerSchema,'schueler');
module.exports = Schueler;