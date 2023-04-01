// const first = { a: 1, b: 2 };
// const second = { a: 1, b: 2 };
// const third = first;

// if (first === second) {
//     console.log('object are matched');
// } else {
//     console.log('object are not matched');
// }


// const first = { a: 1, b: 2 };
// const second = { a: 1, b: 2 };

// if (JSON.stringify(first) === JSON.stringify(second)) {
//     console.log('same');
// } else {
//     console.log('not same');
// }



const aliVaiya = {
    id: 2045,
    name: 'Shoriful islam ali',
    address: 'rajshahi',
    profassion: 'instuctar',
    institution: 'eshikhon.com',
    slary: 100000,
    balance: 500000,
    aknTreatDen: function () {
        console.log(this.balance);
        this.balance = this.balance - expance;
        return this.balance;
    }
};


const AriyanMia = {
    id: 56458,
    name: 'AriyanMia',
    address: 'bangladesh',
    profassion: 'student',
    institute: 'bhola govt. college',
    roll: 501
};


const ShakibAlHasan = {
    id: 56458,
    name: 'Shakib al Hasan',
    address: 'bangladesh',
    profassion: 'crekter',
    country: 'bangladesh',
    captain: 'bangladesh creket team'
};


aliVaiya.aknTreatDen(500);
const AriyanMiaTreatDey = aliVaiya.aknTreatDen.bind(AriyanMia);
AriyanMiaTreatDey(200);
