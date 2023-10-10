import mongoose, {Document} from "mongoose";


export type Bot = {name : string, token : string}
export type BotDocument = Bot & Document;

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
