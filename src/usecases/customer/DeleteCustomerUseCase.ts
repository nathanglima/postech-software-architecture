import CustomerRepository from "../../core/applications/ports/CustomerRepository";

export class DeleteCustomerUseCase {
	repository: CustomerRepository;

	constructor(repository: CustomerRepository) {
		this.repository = repository;
	}
	
    public async execute(id: number): Promise<void> {
		return await this.repository.delete(id);
	}
}