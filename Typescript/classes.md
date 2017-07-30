## Classes

```javascript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

### Наследование

В TypeScript, используются общие объектно-ориентированные паттерны

```javascript
class Car{
	name: string;
	maxSpeed: number;
	constructor(title: string, speed: number){ 
		this.name = title;
		this.maxSpeed = speed
	}
	hp(torque: number = 0, rpm: number = 0){
		console.log(`${this.name} has max speed ${this.maxSpeed} km/h and ${(rpm * torque / 5252).toFixed(2)} HP`);
	}
}

class Mazda extends Car{
	constructor(title: string, speed: number){
		super(title, speed);
	}
	hp(torque = 210, rpm = 4000){
		console.log('Mazda');
		super.hp(torque, rpm);
	}
}

class Toyota extends Car{
	constructor(title: string, speed: number){
		super(title, speed);
	}
	hp(torque = 189, rpm = 4300){
		console.log('Toyota');
		super.hp(torque, rpm);
	}
}

let cx5 = new Mazda('CX-5', 192);
let crv = new Toyota('CR-V', 188);

cx5.hp();
crv.hp();

```

### Public, private, and protected

#### Public

In TypeScript, each member is public by default.

#### Private

When a member is marked private, it cannot be accessed from outside of its containing class

```javascript
class Car{
	private name: string;
	maxSpeed: number;
	constructor(title: string, speed: number){ 
		this.name = title;
		this.maxSpeed = speed
	}
	hp(torque: number = 0, rpm: number = 0){
		console.log(`${this.name} has max speed ${this.maxSpeed} km/h and ${(rpm * torque / 5252).toFixed(2)} HP`);
	}
}
```
#### Protected

The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed by instances of deriving classes

```javascript
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```

A constructor may also be marked protected. This means that the class cannot be instantiated outside of its containing class, but can be extended

```javascript
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // Error: The 'Person' constructor is protected
```

#### Readonly 

You can make properties readonly by using the readonly keyword. Readonly properties must be initialized at their declaration or in the constructor.

```javascript
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly
```

### Accessors

```javascript
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
```

Accessors require you to set the compiler to output ECMAScript 5 or higher. Downlevelling to ECMAScript 3 is not supported. 
Accessors with a `get` and no `set` are automatically inferred to be readonly. This is helpful when generating a .d.ts file from your code, because users of your property can see that they can’t change it.

### Static Properties

```javascript
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
```

### Abstract Classes

The `abstract` keyword is used to define abstract classes as well as abstract methods within an abstract class

```javascript
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}
```

Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes. Abstract methods share a similar syntax to interface methods. Both define the signature of a method without including a method body. However, abstract methods must include the abstract keyword and may optionally include access modifiers

```javascript
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type
```

### Class as an interface

```javascript
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```