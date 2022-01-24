import express from "express";
import "reflect-metadata";

import ItemController from "./item.controller";
import { container } from "../../inversify.config";

const ItemControllerInstance = container.get<ItemController>(ItemController);
const itemsRouter = express.Router();

itemsRouter.get("/", ItemControllerInstance.getAll.bind(ItemControllerInstance));
itemsRouter.post("/", ItemControllerInstance.create.bind(ItemControllerInstance));
itemsRouter.delete("/:id", ItemControllerInstance.delete.bind(ItemControllerInstance));

export default itemsRouter;