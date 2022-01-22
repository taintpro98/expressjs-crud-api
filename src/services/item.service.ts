
import { injectable, inject } from "inversify";
import "reflect-metadata";

import { TYPES } from "../types";
import IItemRepository from "../repositories/interfaces/IItemRepository";
import { ItemModel } from "../models/item/item.model";
import IItemService from "./interfaces/IItemService";

@injectable()
export default class ItemService implements IItemService {
    @inject(TYPES.ItemRepository) private itemRepository!: IItemRepository;

    public async getAll(): Promise<ItemModel[]> {
        return await this.itemRepository.getAll();
    }

    public async create(item: Partial<ItemModel>): Promise<boolean>{
        return await this.itemRepository.create(item);
    }
}