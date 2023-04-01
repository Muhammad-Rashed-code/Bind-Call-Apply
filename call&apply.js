const aliVaiya = {
    id: 2045,
    name: 'Shoriful islam ali',
    address: 'rajshahi',
    profassion: 'instuctar',
    institution: 'eshikhon.com',
    slary: 100000,
    balance: 500000,
    aknTreatDen: function (expance, tax, boksis) {
        this.balance = this.balance - expance - boksis - tax;
        console.log('show', this);
        return this.balance;
    }
};


const AriyanMia = {
    id: 56458,
    name: 'AriyanMia',
    balance: 500000,
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


// Call
// aliVaiya.aknTreatDen.call(AriyanMia, 500, 200, 400);

// Apply
aliVaiya.aknTreatDen.apply(AriyanMia, 500, 200, 400);


