import { ProductCategory } from "./ProductCategory";
import { Order } from "./order";

export class Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    orders?: Order[];

    constructor(id: number | undefined, name: string, desc: string, price: number, category: ProductCategory) {
		this.id = id;
		this.name = name;
		this.description = desc;
		this.price = price;
		this.category = category;
	}
}