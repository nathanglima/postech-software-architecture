import { Order } from "../../entities/Order";
import OrderRepository from "../../core/applications/ports/OrderRepository";

export class CreateOrderUseCase {
	repository: OrderRepository;

	constructor(repository: OrderRepository) {
		this.repository = repository;
	}
	
    public async execute(order: Order): Promise<Order | null> {
		return await this.repository.save(order);
	}
}