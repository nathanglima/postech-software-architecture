import { Order, OrderStatus } from "../../entities/Order";
import PaymentStatusGateway from "../../gateways/payment/PaymentStatusGateway";
import OrderRepository from "../../core/applications/ports/OrderRepository";

export class UpdatePaymantStatusOrderUseCase {
	repository: OrderRepository;

	constructor(repository: OrderRepository) {
		this.repository = repository;
	}
	
	async execute(orderId: number, paymentStatusGateway: PaymentStatusGateway): Promise<Order | null> {
		const order = await this.repository.findById(orderId);
        order!.paymentStatus = status!;

        return await this.repository.save(order!);
	}
}