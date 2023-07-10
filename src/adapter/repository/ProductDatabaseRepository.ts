import { PostgresDataSource } from "../../database/config/app-data-source";
import ProductRepository from "../../core/application/ports/ProductRepository";
import { Product } from "../../database/entities/Product";
import { ProductCategory } from "../../database/entities/ProductCategory";

export default class ProductDatabaseRepository implements ProductRepository {

  productRepository = PostgresDataSource.getRepository(Product);

  async save(product: Product): Promise<Product> {
    const newProduct = this.productRepository.create(product);
    return await this.productRepository.save(newProduct);
  }

  async findById(id: number): Promise<Product | null> {
    return await this.productRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.softDelete(id);
  }

  async update(product: Product): Promise<void> {
    const productId = Number(product.id);
    this.productRepository.update(productId, product);
  }

  async listByCategory(category: ProductCategory): Promise<Product[]> {
    return await this.productRepository.findBy({ category })
  }

}