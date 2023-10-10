import BotModel from '../models/bots';
// import {updateBots} from "../app";

export class BotController {
  static createBot = async (req, res) => {
    console.log(req.body, 'req.body');
    try {
      const bot = await BotModel.create(req.body);
      // updateBots([bot])
      res.send({ data: bot });
    } catch (err) {
      console.log(err);
    }
  };

  static getBots = async (_, res) => {
    try {
      const bots = await BotModel.find();
      res.send({ data: bots });
    } catch (err) {
      console.log(err);
    }
  };
}
