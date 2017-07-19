## Functuions

### Варианты создания функций

```javascript
// Именованная
function add(x, y){
	return x + y;
}

// Анонимная
let addFunc = function(x, y){ 
	return x + y;
};

```

### Области видимости

```javascript
let x = 1;

function(y){
	return x + y;
}
```

### Типизация функций

```javascript
function add(x: number, y:number): number{
	return x + y;
}

let addF: (a: number, b: number) => number =
	function(x, y) { return x + y; };
```

### Опциональные и параметры по умолчанию

```javascript
function getName(fName: string, lName: string){
	return fName + ' ' + lName;
}

var man1 = getName('John');				// error
var man2 = getName('John', 'D', 'Jr');	// error
var man3 = getName('John', 'D');		// ok
```
```javascript
function getName(fName: string, lName?: string){
	return fName + ' ' + lName;
}

var man1 = getName('John');				// ok
var man2 = getName('John', 'D', 'Jr');	// error
var man3 = getName('John', 'D');		// ok
```

```javascript
function getName(fName: string, lName = 'Woo'){
	return fName + ' ' + lName;
}

var man1 = getName('John');				// ok
var man2 = getName('John', 'D', 'Jr');	// error
var man3 = getName('John', 'D');		// ok

```

## Rest Parametrs

```javascript
function getName(fName: string, ...restOfName: string[]){
	return fName + ' ' + restOfName.join(' ');
}

let name = getName('John', 'D', 'Woo', 'Jr');

```

## Overloads

```javascript
function simpleFunc(n: number){}: string;
function simpleFunc(n: string){}: string;

simpleFunc(1);
simpleFunc('1');
```