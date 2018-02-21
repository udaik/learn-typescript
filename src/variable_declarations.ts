// Var declarations.

var a = 10;
let hello = 'Hello';

// block scoping 
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    // return b;
    return 10;
}


function ff(condition: boolean, x:number) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

console.log(ff(false, 0));
console.log(ff(true, 0));

for (let i = 0; i < 10 ; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

const numLivesForCat = 9;

const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

function f12([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f12([1, 2]);

let first1 = [1, 2];
let second1 = [3, 4];
let bothPlus = [0, ...first1, ...second1, 5];
console.log(bothPlus);
