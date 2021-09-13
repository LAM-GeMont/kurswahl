const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeilnahmeSchema = new Schema({
  ID: Number,
  schuelerNr: { type: mongoose.Types.ObjectId, required: true},
  wahlId: { type: mongoose.Types.ObjectId, required: true},
  wuensche: [{
      wahloption: {type: mongoose.Types.ObjectId, required: true},
      prioritaet: {type: mongoose.Types.ObjectId, required: true}
  }],
  ergebnisWahloption: { type:{
      wahloption: {type: mongoose.Types.ObjectId, required: true},
      name: {type: string}
    }, index= true
  }
}, { versionKey: false });

const Teilnahme = mongoose.model('teilnahme', TeilnahmeSchema,'teilnahme');
module.exports = Teilnahme;