const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const owedSchema = new Schema({
    userId: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      math: {
        type: String,
        required: true
      },
      history: {
        type: String, 
        required: true
      },
      science: {
        type: String,
        required: true
      },
      english: {
        type: String,
        required: true
      }
    });

const Oweds = mongoose.model("Owed", owedSchema);

module.exports = Oweds;
