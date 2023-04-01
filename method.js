const EshikhonCEO = {
    name: 'ibrahim akbar',
    position: 'ceo',
    age: 35,
    money: 4500,
    isRich: false,
    sub: ['english', 'bangli', 'math', 'islam-shikkah', 'accounting'],
    bestFriend: {
        name: 'bozra bazarer zakir',
        age: 32
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treadDen: function (expanse, boksis) {
        this.money = this.money - expanse - boksis;
        return this.money;
    },

}

// EshikhonCEO.takeExam()

const result = EshikhonCEO.treadDen(450, 80);
console.log(result);