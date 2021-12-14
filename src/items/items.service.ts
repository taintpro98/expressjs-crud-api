// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

let items: Items = {
    1: {
        id: 1,
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
        id: 2,
        name: "Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
        id: 3,
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
};

var dataJson: string = "data/items.json";
var fs = require('fs');

export const getAll = async (): Promise<Items> => {
    let rawdata = fs.readFileSync(dataJson);
    let data: Items = {} = JSON.parse(rawdata);
    return data;
}

// export const createItem = async (newItem: Item): boolean => {
//     let data = await getAll();
//     const id = new Date().valueOf();
//     data[id] = {
//         id,
//         ...newItem,
//     };
//     let jsonData: string = JSON.stringify(data);
//     fs.writeFile(dataJson, jsonData, (err: any) => {
//         if (err) return false;
//         console.log("Data written to file");
//     });
//     return true;
// }

/**
 * Service Methods
 */
export const findAll = async (): Promise<Item[]> => {
    let itemsss = await getAll();
    return Object.values(itemsss);
};

export const find = async (id: number): Promise<Item> => {
    let data = await getAll();
    return data[id];
}

export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();

    let data = await getAll();
    data[id] = {
        id,
        ...newItem,
    };

    let jsonData: string = JSON.stringify(data);
    fs.writeFile(dataJson, jsonData, (err: any) => {
        if (err) throw err;
        console.log("Data written to file");
    });

    return data[id];
};

export const update = async (
    id: number,
    itemUpdate: BaseItem
): Promise<Item | null> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    let data = await getAll();
    data[id] = { id, ...itemUpdate };

    let jsonData: string = JSON.stringify(data);
    fs.writeFile(dataJson, jsonData, (err: any) => {
        if (err) throw err;
        console.log("Data written to file");
    });

    return data[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);
    if (!item) {
        return null;
    }

    let data = await getAll();
    delete data[id];
    let jsonData: string = JSON.stringify(data);
    fs.writeFile(dataJson, jsonData, (err: any) => {
        if (err) throw err;
        console.log("Data written to file");
    });
};