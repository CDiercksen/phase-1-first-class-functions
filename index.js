function receivesAFunction(special) {
    console.log(special());
}

function returnsANamedFunction() {
    return function specialBoy() {
        console.log("I\'m a SPECIAL BOY");
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Shhhhh");
    }
}