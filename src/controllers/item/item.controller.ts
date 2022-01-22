import IItemService from "../../services/interfaces/IItemService";
import { injectable, inject } from "inversify";
import { ItemModel } from "../../models/item/item.model";
import express, { Request, Response } from "express";
import { TYPES } from "../../types";

@injectable()
export default class ItemController {
    @inject(TYPES.ItemService) private itemService!: IItemService;

    public async getAll(req: Request, res: Response) {
        try {
            const items = await this.itemService.getAll();
            res.status(200).send(items);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }

    public async create(req: Request, res: Response){
        try {
            const item: ItemModel = req.body;
    
            const newItem = await this.itemService.create(item);
    
            res.status(201).json(newItem);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }
}