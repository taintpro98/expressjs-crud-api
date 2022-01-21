import express from "express";
import "reflect-metadata";

import ItemController from "./item.controller";
import { container } from "../../inversify.config";

const ItemControllerInstance = container.get<ItemController>(ItemController);
const itemsRouter = express.Router();

itemsRouter.get("/", ItemControllerInstance.getAll.bind(ItemControllerInstance));

export default itemsRouter;