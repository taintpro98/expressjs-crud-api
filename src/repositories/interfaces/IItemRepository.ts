import { ItemModel } from "../../models/item/item.model";

export default interface IItemRepository {
    getAll(): Promise<ItemModel[]>;
    create(data: Partial<ItemModel>): Promise<boolean>;
}