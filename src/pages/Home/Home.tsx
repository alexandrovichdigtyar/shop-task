import { useAppDispatch, useAppSelector } from "../../reduxToolkit/hooks";
import ProductList from "./ProductList/ProductList";
import CircularProgress from '@mui/material/CircularProgress';
import "./Home.scss";

function Home() {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.productsReducer.isLoading);

    return isLoading ?
        (<CircularProgress className="page-loader" />) :
        (<ProductList></ProductList>)
}

export default Home;