## Interfaces

```javascript
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

### Optional Properties

```javascript
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
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
```

### Readonly properties

```javascript
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation:

```javascript
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

On the last line of the snippet you can see that even assigning the entire ReadonlyArray back to a normal array is illegal. You can still override it with a type assertion, though

```javascript
a = ro as number[];
```

### Excess Property Checks

```javascript
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}

let mySquare = createSquare({ colour: "red", width: 100 });
// error: 'colour' not expected in type 'SquareConfig'
```

Getting around these checks is actually really simple. The easiest method is to just use a type assertion:

```javascript
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

However, a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are used in some special way. If SquareConfigs can have color and width properties with the above types, but could also have any number of other properties, then we could define it like so:

```javascript
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```
Here we’re saying a SquareConfig can have any number of properties, and as long as they aren’t color or width, their types don’t matter

One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable: Since squareOptions won’t undergo excess property checks, the compiler won’t give you an error.

```javascript
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

### Function Types

the interface a call signature

```javascript
interface SearchFunc {
    (source: string, subString: string): boolean;
}
```

### Indexable Types

 Indexable types have an index signature that describes the types we can use to index into the object, along with the corresponding return types when indexing

 ```javascript
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
 ```

 Above, we have a StringArray interface that has an index signature. This index signature states that when a StringArray is indexed with a number, it will return a string.

 ## Class Types

 ```javascript
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
 ```

 ## Extending Interfaces

 ```javascript
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
 ```

## Interfaces Extending Classes

```javascript
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class Image {
    select() { }
}

class Location {
    select() { }
}
```