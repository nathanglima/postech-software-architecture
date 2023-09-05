import { Customer } from "../../entities/Customer";
import CustomerRepository from "../../core/applications/ports/CustomerRepository";

export class CreateCustomerUseCase {
	repository: CustomerRepository;

	constructor(repository: CustomerRepository) {
		this.repository = repository;
	}
	
    public async execute(customer: Customer): Promise<Customer | null> {
		return await this.repository.save(customer);
	}
}