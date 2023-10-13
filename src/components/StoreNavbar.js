import { Container, Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const StoreNavbar = () => {

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Redux Online Store</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer data-testit="cart-link" to="/cart">
                        <Nav.Link>Cart</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default StoreNavbar