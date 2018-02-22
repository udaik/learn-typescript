function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 101 Object"};
printLabel(myObj);


interface LabelledValue {
    label: string;
}

function printLabel1(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj1 = {size: 10, label: "Size 10 Object"};
printLabel(myObj1);

// optional properties

interface SquareConfig {
    color?: string;
    width?: number;
    area?: number;
}

function createSquare(config: SquareConfig): SquareConfig {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare.color, mySquare.area);


// readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}

let P1: Point = { x:10, y: 20};

interface SearchFunc {
    (source: string, subString: string, another : number): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

console.log(mySearch("udai kiran", "udai", 2));