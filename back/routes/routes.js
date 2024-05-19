import { Router } from "express";
import { ControllerQuery } from "../controllers/controllers.js";

const route = Router();

route.get("/api/taks", ControllerQuery.getAll);

route.post("/api/taks/create", ControllerQuery.Create);

route.delete("/api/taks/delete/:id", ControllerQuery.Delete);

route.post("/board/:id", (req, res) => res.send("some..."));

export default route;
