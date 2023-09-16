import { Product } from "@/models";
import { ProductCreationDto, ProductDto } from "@/types/dto";

export async function createProduct(info: ProductCreationDto): Promise<SuccessResult<ProductDto>> {
    const product = await Product.create(info);

    return {
        success: true,
        data: {
            id: product.id,
            name: product.name,
            quantity: product.quantity
        }
    };
}