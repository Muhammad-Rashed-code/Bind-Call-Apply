// const Bike = {
//     name: 'MT-15',
//     color: 'red',
//     price: 450000,
//     isBrandNew: true
// }
// keys
// const keys = Object.keys(Bike);
// console.log(keys);

// value
// const value = Object.values(Bike)
// console.log(value);

// Total
// const Total = Object.entries(Bike);
// console.log(Total);

// Object.seal(Bike);
// Bike.price = 500000;
// console.log(Bike);




const bikes = {
    name: 'MT-15',
    color: 'red',
    price: 450000,
    isBrandNew: true
}
// for (const bike in bikes) {
//     console.log(bike, bikes[bike]);
// }

const keys = Object.keys(bikes);
for (const key of keys) {
    // console.log(key, bikes[key]);
}

// const entries = Object.entries(bikes);
// console.log(entries);

for (const [key, value] of Object.entries(bikes)) {
    console.log(key, value);
}
