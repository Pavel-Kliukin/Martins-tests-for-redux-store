import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/productsSlice";
import Product from "./Product";

const List = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart.cart);

    useEffect(() => {
        if(products.length < 1) dispatch(fetchProducts());
    }, [dispatch, products])

    return (
        <div>
        <h1>List will be here</h1>
        <Container className="d-flex flex-wrap justify-content-between">
        {products.map((product) => 
            (<Product key={product.id} {...product} cartItems={cartItems}/>)
        )}
        </Container>
        </div>


    )
}

export default List;