## Variable Declarations

### `var` vs `let`

Global/local scopes, block scope

### `let` vs `const`

`const` Example
```javascript
const user = {
	name: 'Vadim',
	role: 'UI'
};

// error
user = {
	name: 'John',
	role: 'QA'
};

// ok
user.name = 'John';
user.role = 'QA';
```
### `readonly` vs `const`

Для переменных используется `const`, для свойств 'readonly'.

```javascript
interface Role {
	readonly title: string,
	readonly privilege: number
};

const role: Role = {
	title: 'Admin',
	privilege: 0
};
```

### Destructuring

Документация - [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

#### Array destructuring

```javascript
let input = [1, 2];
let [first, second] = input;

// is the same as
first = input[0];
second = input[1];
```

Также работает с уже объявленными переменными

```javascript
// swap variables
[first, second] = [second, first];
```

Как параметр функции
```javascript
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);
```

##### Синтакс `...`

Создание переменной для "оставшихся" элементов

```javascript
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
```

Создание переменной для "определенных" элементов
```javascript
let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1

let [, second, , fourth] = [1, 2, 3, 4];
```

#### Object destructuring

Создание новых переменных `a` и `b` из `o.a` и `o.b`

```javascript
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
```

Присвоение переменных без объявления

```javascript
({ a, b } = { a: "baz", b: 101 });
```

##### Синтакс `...`
```javascript
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
```
#### Property renaming

Присвоение свойствам других имен. 

```javascript
let { a: newName1, b: newName2 } = o;
```

В примере выше `:` *не укзавает* тип.

Типы в деструктуризации:

```javascript
let { a, b }: { a: string, b: number } = o;
```

#### Default values

```javascript
let {a, b = 10} = {a: 1};
```

```javascript
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}
```

#### Function declarations

```javascript
function f({ a, b } = { a: "", b: 0 }): void {
    // ...
}
f(); // ok, default to { a: "", b: 0 }
```
##### Default values

```javascript
function f({ a, b = 0 } = { a: "" }): void {
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to { a: "" }, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument
```

#### Spread

Оператор обратный деструктуризации

*Массивы*
```javascript
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5]; // [0,1,2,3,4,5]
```
*Объекты*
```javascript
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" }; // { food: "rich", price: "$$", ambiance: "noisy" }
```

Оператор работает только с перечисляемыми свойствами

```javascript
class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
clone.m(); // error!
```