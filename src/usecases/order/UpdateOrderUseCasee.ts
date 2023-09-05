import { Order } from "../../entities/Order";
import OrderRepository from "../../core/applications/ports/OrderRepository";

export class UpdateOrderUseCasee {
	repository: OrderRepository;

	constructor(repository: OrderRepository) {
		this.repository = repository;
	}
	
    public async execute(order: Order): Promise<void> {
		return await this.repository.update(order);
	}
}