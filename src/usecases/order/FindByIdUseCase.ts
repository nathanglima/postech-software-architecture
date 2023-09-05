import { Order } from "../../entities/Order";
import OrderRepository from "../../core/applications/ports/OrderRepository";

export class FindByIdUseCase {
	repository: OrderRepository;

	constructor(repository: OrderRepository) {
		this.repository = repository;
	}
	
    public async execute(id: number): Promise<Order | null> {
		const order = await this.repository.findById(id);

		if(!order) {
			return Promise.reject("order not found");
		}

		return order;
	}
}