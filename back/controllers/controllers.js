import { ConnectDbBoardTaks } from "../db/mysql.js";

export class ControllerQuery {
  static async getAll(req, res) {
    try {
      const result = await ConnectDbBoardTaks.getAll();
      res.json(result);
    } catch (e) {
      console.log(e);
    }
  }

  static async Create(req, res) {
    try {
      await ConnectDbBoardTaks.Create(req.body);
      res.json({ message: "Taks Created" });
    } catch (e) {
      throw new Error("Error internal sever: " + e);
    }
  }
  static async Delete(req, res) {
    const { id } = req.params;
    if (!res.ok) console.error("error in query");
    await ConnectDbBoardTaks.Delete(id);
    res.json({ message: "Taks Deleted" });
  }
}
