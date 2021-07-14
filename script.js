//Hey kiddo
const myAge = function (number) {
    if (number >= 18) {
        console.log("true")
    }
    else if (number < 18) {
        console.log("false");
    }
};

const adult = function (number) {
    console.log(number)
    const age = myAge(number)
    if (number >= 18) {
        return "Hello there";
    }
    return "Hey kiddo"

};
console.log(adult(35));


//BTW Oefening 1
const berekenBTW = function (exclbedrag, tarief) {
    const btw = exclbedrag * tarief / 100
    return btw;
}

const berekenBTW1 = function (exclbedrag, tarief) {
    const inclBTW = exclbedrag + result

    return inclBTW;
}

const result = berekenBTW(1000, 21)
const result2 = berekenBTW1(1000)
console.log("BTW bedrag is:", result)
console.log("Totaal bedrag inclusief BTW is:", result2)


//BTW Oefening 2
const berekenexclBTW = function (inclbedrag, tarief1) {
    const btw1 = inclbedrag / tarief1
    return btw1;
}

const berekenexclBTW1 = function (inclbedrag, tarief1) {
    const exclBTW = inclbedrag - result3

    return exclBTW;
}

const result3 = berekenexclBTW(1210, 1.21)
const result4 = berekenexclBTW1(1210)
console.log("BTW bedrag is:", result3)
console.log("Totaal bedrag inclusief BTW is:", result4)





