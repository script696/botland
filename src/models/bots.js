import mongoose from "mongoose";

const botSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  token: {
    type: String,
    required: true,
  },
});

const botModel = mongoose.model("bot", botSchema);

export default  botModel
