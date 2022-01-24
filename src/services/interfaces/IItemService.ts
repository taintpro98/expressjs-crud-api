import { ItemModel } from "../../models/item/item.model";

export default interface IItemService {
    getAll(): Promise<ItemModel[]>;
    create(data: Partial<ItemModel>): Promise<boolean>;
    deleteById(id: number): Promise<boolean>;
} 