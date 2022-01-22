import { injectable } from "inversify";
import { ItemModel } from "../models/item/item.model";
import IItemRepository from "./interfaces/IItemRepository";
import db from "../../data/database";

@injectable()
export default class ItemRepository implements IItemRepository {
    private readonly tableName: string;

    constructor() {
        this.tableName = "items";
    }

    public async getAll(): Promise<ItemModel[]> {
        return new Promise((resolve) => {
            db.all(`SELECT * FROM ${this.tableName}`, [], (err: Error, rows: any) => {
                if (err) {
                    console.log("Error");
                } else {
                    resolve(rows as ItemModel[]);
                }
            });
        });
    }

    public async create(data: Partial<ItemModel>): Promise<boolean> {
        let params: any[] = [];
        let fields: string[] = [];
        Object.keys(data).forEach((item) => {
            fields.push(item);
            params.push(data[item as keyof Partial<ItemModel>]);
        });
        return new Promise((resolve) => {
            db.run(
                `INSERT INTO ${this.tableName} (${fields.join(
                    ","
                )}) VALUES (${new Array(fields.length).fill("?")})`,
                params,
                (err: Error) => {
                    if (err) {
                        throw new InternalError(err.message);
                    } else {
                        resolve(true);
                    }
                }
            );
        });
    }
}