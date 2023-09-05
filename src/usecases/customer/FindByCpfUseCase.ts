import { Customer } from "../../entities/Customer";
import CustomerRepository from "../../core/applications/ports/CustomerRepository";

export class FindByCpfUseCase {
	repository: CustomerRepository;

	constructor(repository: CustomerRepository) {
		this.repository = repository;
	}
	
    public async execute(cpf: string): Promise<Customer | null> {
		const customer = await this.repository.findByCPF(cpf);

		if(!customer) {
			return Promise.reject("Customer not found");
		}

		return customer;
	}
}