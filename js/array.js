// создать массив
let fruit = ["apple", "banana", "orange"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);
let frui = {"pin":16}
console.log(frui["pin"]);
//FOR Loop
for(let i = 0; i < 3; i++){
    let message = `${i+1}. ${fruit[i]}`;
    console.log(message);
}

//FOREACH Loop
fruit.forEach(element => {
    console.log("Hello from FOREACH", element);
});

//Выбрать случайный элемент массива

let rnd = Math.floor(Math.random() * fruit.length)
console.log(rnd);

let randomFruit = fruit[rnd];
console.log("My random fruit", randomFruit);
//добавить новый жлемет в массив
fruit.push("avocado")
console.log(fruit);

// удалить элемент banana из массива

let bananaindex = fruit.indexOf("banana");
console.log("index of banana: ", bananaindex);
fruit.splice(bananaindex, 1)
console.log(fruit);