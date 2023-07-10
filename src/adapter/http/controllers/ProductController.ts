import { Request, Response } from "express";
import ProductCategoryDatabaseRepository from "../../repository/ProductCategoryDatabaseRepository";
import ProductDatabaseRepository from "../../repository/ProductDatabaseRepository";
import ProductCreateUseCase from "../../../core/application/useCase/Product/ProductCreateUseCase";
import ProductListByCategoryUseCase from "../../../core/application/useCase/Product/ProductListByCategoryUseCase";
import { ProductCategory } from "../../../database/entities/ProductCategory";
import ProductDeleteUseCase from "../../../core/application/useCase/Product/ProductDeleteUseCase";
import ProductFindByIdUseCase from "../../../core/application/useCase/Product/ProductFindByIdUseCase";
import { ProductUpdateBody, ProductUpdateUseCase } from '../../../core/application/useCase/Product/ProductUpdateUseCase';

const productRepository = new ProductDatabaseRepository();
const productCategoryRepository = new ProductCategoryDatabaseRepository();

export class ProductController {

	async create(req: Request, res: Response): Promise<Response> {

		const { name, description, price } = req.body;
		const { categoryId } = req.params ?? 0;

		const productCreate = new ProductCreateUseCase(productRepository, productCategoryRepository);
		const result = await productCreate.execute({
			name,
			description,
			price,
			category: {
				id: parseInt(categoryId)
			} as ProductCategory
		});

		if (productCreate.hasErrors()) {
			return res.status(400).json(productCreate.getErrors());
		}

		return res.status(201).json(result);
	}

	async getById(req: Request, res: Response) {

		const { id } = req.params;

		const productFindById = new ProductFindByIdUseCase(productRepository);
		const result = await productFindById.execute(Number(id));

		if (productFindById.hasErrors()) {
			return res.status(400).json(productFindById.getErrors());
		}

		return res.status(200).json(result);
	}


	async getByCategory(req: Request, res: Response) {
	
		const { categoryId } = req.params;

		const productListByCategory = new ProductListByCategoryUseCase(productRepository, productCategoryRepository);
		const result = await productListByCategory.execute(parseInt(categoryId));

		if (productListByCategory.hasErrors()) {
			return res.status(400).json(productListByCategory.getErrors());
		}

		return res.status(200).json(result);
	}

	async update(req: Request, res: Response): Promise<Response> {

		const { name, description, price, categoryId } = req.body;
		const { id } = req.params;

		const productUpdate = new ProductUpdateUseCase(productRepository, productCategoryRepository);
		const result = await productUpdate.execute(<ProductUpdateBody>{ id: Number(id), name, description, price, categoryId });

		if (productUpdate.hasErrors()) {
			return res.status(400).json(productUpdate.getErrors());
		}

		return res.status(200).json(result);
	}

	async delete(req: Request, res: Response) {

		const { id } = req.params;

		const productId = Number(id);
		const productDelete = new ProductDeleteUseCase(productRepository);
		productDelete.execute(productId);

		if (productDelete.hasErrors()) {
			return res.status(400).json(productDelete.getErrors());
		}

		return res.status(200).json();
	}
}