const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WahlSchema = new Schema({
  ID: Number,
  name: { type: String, required: true, unique: true },
  beschreibung: String,
  klassenstufen: [{ type: String, required: true}],
  wahloptionen: [{ type: mongoose.Types.ObjectId, required: true}]
}, { versionKey: false });

//Constraints
WahlSchema.index({ WahlId: 1, name: 1 }, { unique: true })

const Wahl = mongoose.model('wahl', WahlSchema,'wahl');
module.exports = Wahl;