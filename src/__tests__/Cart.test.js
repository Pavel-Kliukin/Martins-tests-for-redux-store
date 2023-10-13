import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {MemoryRouter} from 'react-router-dom'
import Cart from '../components/Cart'
import {render, screen} from '@testing-library/react'
import {cartItems} from '../testData/cartData'


const mockStore = configureStore([])

describe("Cart initialisation:", ()=> {
  it("Cart should be empty when the cart is empty:", ()=>{
    const store = mockStore(
      {
        cart: {
          cart: []
        }
      }
    )

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument()
  })

  it("Should render a list of products when the cart is not empty:", ()=>{
    const store = mockStore(
      {
        cart: {
          cart: cartItems
        }
      }
    )

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    )
    expect(screen.getAllByTestId("product")).toHaveLength(2)
  })

  it("Should render the total price of the cart", ()=> {
    const store = mockStore(
      {
        cart: {
          cart: cartItems
        }
      }
    )

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText(/Total Price/i)).toBeInTheDocument()

    const expectedPrice = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0)
    expect(screen.getByText(`${expectedPrice} €`)).toBeInTheDocument()
  })
})