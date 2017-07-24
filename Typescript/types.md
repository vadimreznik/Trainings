## Типы

### Boolean

```javascript
let isDone: boolean = false;
```

### Number

```javascript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### String

Двойные и одинарные кавычки

```javascript
let color: string = "blue";
color = 'red';
```

Использование шаблонизации

```javascript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.


I'll be ${ age + 1 } years old next month.`;
```
Эквивалентно

```javascript
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
```

### Array

Массив может быть записан двумя способами:

```javascript
let list: number[] = [1, 2, 3];
``` 
и
```javascript
let list: Array<number> = [1, 2, 3];
```

### Tuple

Позволяет выражать массив, в котором известен тип фиксированного числа элементов, но не обязательно должен быть одинаковым

```javascript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error


x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

x[6] = true; // Error, 'boolean' isn't 'string | number'
```

### Enum

```javascript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
```javascript
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```
```javascript
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

### Any

`any` используется для переменных с динамическим контентом

```javascript
let notSure: any = 4;
notSure = "maybe a string instead";
```

Можно использовать также, когда известна только часть типа

```javascript
let list: any[] = [1, true, "free"];

list[1] = 100;
```

### Void

`void` указывает на отсутствие типа. Часто используется для того чтобы указать, что функция ничего не возвращает

```javascript
function warnUser(): void {
    alert("This is my warning message");
}
```

Объявление переменных с типом `void` обычно не используется, т.к. переменные такого типа могут быть присвоены только `undefined` или `null`

```javascript
let unusable: void = undefined;
```

### Null и Undefined

По умолчанию `null` и `undefined` являются подтипами всех других типов. Это значит, что переменные с такими типами могут быть присвоены чему-то вроде `number`
*--strictNullChecks*
`strictNullChecks` опция указывает, что `null` и `undefined` могут быть присвоены таким же типам или `void`.

### Never

The never type represents the type of values that never occur.
The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

```javascript
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
```

### Type assertions

*“trust me, I know what I’m doing.”* &copy;

Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms. One is the “angle-bracket” syntax:

```javascript
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
And the other is the as-syntax:
```javascript
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.