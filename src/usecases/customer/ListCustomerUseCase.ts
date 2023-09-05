import { Customer } from "../../entities/Customer";
import CustomerRepository from "../../core/applications/ports/CustomerRepository";

export class ListCustomerUseCase {
	repository: CustomerRepository;

	constructor(repository: CustomerRepository) {
		this.repository = repository;
	}
	
    public async execute(): Promise<Customer[] | null> {
		return await this.repository.list();
	}
}