import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router";
import { useAppSelector } from "../../../reduxToolkit/hooks";
import Comments from "./Comments/Comments";
import "./AboutProduct.scss";

function AboutProduct() {
    const isLoading = useAppSelector(state => state.productsReducer.isLoading);
    const productId = new URLSearchParams(useLocation().search).get('id');
    const currentProduct = useAppSelector(state => state.productsReducer.products).find(product => product.id === productId);

    return isLoading ?
        (
            (<CircularProgress className="page-loader" />)
        ) :
        (<div className="about-product wrapper">
            <img
                width="250"
                height="250"
                src={currentProduct.imageUrl}
                alt="product"
            >
            </img>
            <h2 className="about-product__title">
                {currentProduct.name}
            </h2>
            <p className="about-product__parameters">
                Amount:
                {currentProduct.count}
            </p>
            <p className="about-product__parameters">
                Width of product:
                {currentProduct.size.width}
            </p>
            <p className="about-product__parameters">
                Height of product:
                {currentProduct.size.height}
            </p>
            <p className="about-product__parameters">
                Weight of product:
                {currentProduct.size.height}
            </p>
            <Comments currentProduct={currentProduct}/>
        </div>)
}

export default AboutProduct;