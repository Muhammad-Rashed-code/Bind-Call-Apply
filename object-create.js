const eshikhon = { name: 'eshikhon.com', job: 'traning institute' };
// console.log(eshikhon);

const parson = new Object();
// console.log(parson);


const institute = Object.create(eshikhon)
// console.log(institute.name);

// class people {
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
// }
// const result = new people('yo yo', 48, 'hati guti kha');
// console.log(result);





class Man {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

const result = new Man('janina', 333, 'nai');
console.log(result);