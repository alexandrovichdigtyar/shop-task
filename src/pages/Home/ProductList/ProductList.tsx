import { useAppSelector } from "../../../reduxToolkit/hooks";
import ProductCard from "./ProductCard/ProductCard";
import "./ProductList.scss"

function ProductList() {
    const products = useAppSelector(state => state.productsReducer.products)

    return (
        <div className="product-list wrapper">
            <h2 className="product-list__title">
                Our products
            </h2>
            <div className="product-list__catalog">
                {products.map((product: any) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default ProductList;