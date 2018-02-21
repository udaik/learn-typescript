let isDone: boolean = false;

console.log('isDone', isDone);

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log('Decimal ', decimal);
console.log('hex ', hex);
console.log('binary ', binary);
console.log('octal ', octal);

let color: string = "blue";
color = 'red';
console.log('color ', color);


let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. I'll be , ${ age + 1 }, years old next month.`
console.log('sentence ', sentence);

// arrays

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

console.log(list1, list2);

// Tuple
let x: [string, number];
// Initialize it

x = ["hello", 10]; // OK
console.log('typle ', x);

// enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log('c', c);

// any data type
let notSure: any = 4;
notSure = "maybe a string instead";
console.log('notSure ', notSure);
notSure = false; // okay, definitely a boolean
console.log('notSure ', notSure);

function warnUser(): void {
    let retVal : void = undefined;
    console.log("This is my warning message");
    return retVal;
}

let warnMsg: any = warnUser();
console.log('warnMsg ', warnMsg);

function never_returns(message: string): never {
    throw new Error(message);
}

// console.log(never_returns('msg'));

// Type assertions.

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(someValue, strLength);