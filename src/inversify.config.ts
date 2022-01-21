import { Container } from "inversify";
import { TYPES } from "./types";

import ItemController from "./controllers/item/item.controller";

import ItemService from "./services/item.service";
import IItemService from "./services/interfaces/IItemService";

import ItemRepository from "./repositories/item.repository";
import IItemRepository from "./repositories/interfaces/IItemRepository";

const container = new Container();

//item
container.bind(ItemController).to(ItemController);
container.bind<IItemService>(TYPES.ItemService).to(ItemService);
container.bind<IItemRepository>(TYPES.ItemRepository).to(ItemRepository);

export { container };