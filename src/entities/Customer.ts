import { Order } from './Order';

export class Customer {
	id?: number;
	name: string;
	cpf: string;
	email: string;
	orders?: Order[];

	constructor(id: number, name: string, cpf: string, email: string, orders: Order[] | undefined) {
		this.id = id;
		this.name = name;
		this.cpf = cpf;
		this.email = email;
		this.orders = orders;
	}
}