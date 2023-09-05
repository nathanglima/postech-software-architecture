import { OrderPaymentStatus } from "../../entities/Order";

export default interface PaymentStatusGateway {
	getStatus(): Promise<OrderPaymentStatus | null>;
}