const user = {
	name: 'Vadim',
	role: 'UI'
};

user.name = 'John';

interface Role {
	readonly title: string,
	readonly privilege: number
};

const role: Role = {
	title: 'Admin',
	privilege: 0
}


console.log(user, role);

let {a, b = 10} = {a: 1};

console.log(a, b);