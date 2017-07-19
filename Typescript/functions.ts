function add(x: number, y: number): number {
	return x + y;
}

console.log(add(1,2));

let addFunc: (x: number, y: number) => number =
	function(x: number, y: number): number { return x + y };

let addF: (base: number, inc: number) => number =
	function(x, y) { return x + y; };


console.log(addF(1, 3));

function simpleFunc(n: number): string;
function simpleFunc(n: string): string;
function simpleFunc(n): any {
	return n.toString();
}

simpleFunc(1);
simpleFunc('1');