import { Card, Container } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import Product from "./Product";

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart.cart);
    console.log("CartItems; ", cartItems)

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Container>
            <h1>Cart</h1>
            <Container className="d-flex flex-wrap justify-content-between">
            {cartItems.length === 0 && <p>Your cart is empty</p>}
            {cartItems.map((item) => (
                 <Product {...item} key={item.id}/>
            ))}
            </Container>
            {cartItems.length > 0 && (
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Total Price</Card.Title>
            <Card.Text>{totalPrice} €</Card.Text>
          </Card.Body>
        </Card>
      )}
        </Container>
    )
}

export default Cart;