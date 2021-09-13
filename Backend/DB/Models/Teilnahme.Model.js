const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeilnahmeSchema = new Schema({
  schuelerNr: String,
  wahlId: String,
  Wuensche: [{
      wahloptionName: String,
      prioritaet: number
  }],
  ergebnisName: String
}, { versionKey: false });

const Teilnahme = mongoose.model('teilnahme', TeilnahmeSchema,'teilnahme');
module.exports = Teilnahme;