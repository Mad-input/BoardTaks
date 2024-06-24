import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  port: 3306,
  user: "mad",
  password: "252525",
  database: "TaksBoard",
};

const connection = await mysql.createConnection(config);

export class ConnectDbBoardTaks {
  static async getAll() {
    try {
      const [taks] = await connection.query("SELECT * FROM Taks");
      return taks;
    } catch (e) {
      console.error(e);
    }
  }
  static async Create({ icon, title, description, state }) {
    try {
      await connection.query(
        "INSERT INTO Taks(icon,title,description,state) VALUES(?,?,?,?)",
        [icon, title, description, state]
      );
    } catch (e) {
      throw new Error("Error internal server");
    }
  }
  static async Delete(id) {
    try {
      await connection.query("DELETE FROM Taks WHERE id = ?", [id]);
    } catch (e) {
      throw new Error("Error internal sever");
    }
  }
  static Update() {}
}
