interface Item {
    name: string;
    age: number
}

let items: Item[] = [
    { name: "bruno", age: 12 },
    { name: "batman", age: 40 }
]

const test = (id: number) => items[id];

const act = async() => {
    let user = await test(0);
    console.log(user);
    return user;
}

let x = act();
console.log(x);
