import express, { Request, Response } from "express";
import { productCreationValidator } from "@/validators";
import { productService } from "@/services";

const router = express.Router();
const productRouter = express.Router();

// routes

router.use('/products', productRouter);
productRouter.use('/create', createProduct);

// route handlers

async function createProduct(req: Request, res: Response) {

    const result = productCreationValidator.safeParse(req.body);

    if (!result.success) {
        res.sendErrors(400, result.error);
        return;
    }

    const response = await productService.createProduct(result.data);
    const product = response.data;

    res.header('location', `/api/v1/products/${product.id}`);
    return res.sendData(201, { product }, 'Product created successfully');

}


export { router };
