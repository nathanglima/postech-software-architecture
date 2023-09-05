import { Order, OrderStatus } from "../../entities/Order";
import OrderRepository from "../../core/applications/ports/OrderRepository";

export class UpdateStatusOrderUseCase {
	repository: OrderRepository;

	constructor(repository: OrderRepository) {
		this.repository = repository;
	}
	
	async execute(orderId: number, status: OrderStatus): Promise<Order | null> {
		const order = await this.repository.findById(orderId);
		order!.status = status!;

		return await this.repository.save(order!);
	}
}