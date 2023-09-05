import { Order } from "../../entities/Order";
import OrderRepository from "../../core/applications/ports/OrderRepository";

export class ListOrderUseCase {
	repository: OrderRepository;

	constructor(repository: OrderRepository) {
		this.repository = repository;
	}
	
    public async execute(): Promise<Order[] | null> {
		return await this.repository.list();
	}
}