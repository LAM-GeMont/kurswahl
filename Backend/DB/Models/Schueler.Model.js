const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchuelerSchema = new Schema({
  ID: Number,
  schuelerNr: { type: String, required: true, unique: true, index:true },
  vorname: String,
  nachname: String,
  klassenstufe: { type: String, required: true}
}, { versionKey: false });

const Schueler = mongoose.model('schueler', SchuelerSchema,'schueler');
module.exports = Schueler;