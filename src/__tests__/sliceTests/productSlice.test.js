import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchProducts } from "../../features/productsSlice";

// This creates us a mock store that we can use to test our actions
const mockStore = configureStore([thunk])

describe ('a test', ()=> {
  it('should pass', ()=> {
    expect(true).toBe(true)
  })
})

describe("fetchproducts", ()=> {
  
  // This one is in case if API is slow
  beforeEach(()=>{
    jest.setTimeout(10000)
  })

  it("should fetch products", async ()=> {
    // This is the mock store and we are passing an empty array as the initial state
    const store = mockStore({products: []})
    await store.dispatch(fetchProducts())

    // This is the array of actions that were dispatched
    const actions = store.getActions()

    expect(actions[0].type).toEqual("products/fetchProducts/pending")
    expect(actions[1].type).toEqual("products/fetchProducts/fulfilled")

    const products = actions[1].payload
    expect(products).toHaveLength(20)

  })

  it("Products should contain data that is equal to our test case", async () => {
    const store = mockStore({products: []})
    await store.dispatch(fetchProducts())

    const actions = store.getActions()
    const products = actions[1].payload

    products.forEach((product) => {
      expect(product).toHaveProperty("id")
      expect(product).toHaveProperty("title")
      expect(product).toHaveProperty("price")
      expect(product).toHaveProperty("description")
      expect(product).toHaveProperty("category")
      expect(product).toHaveProperty("image")
    })

  })
  
  it("Product 1 has specific data to our test case", async () => {
    const store = mockStore({products: []})
    await store.dispatch(fetchProducts())
    
    const actions = store.getActions()
    const products = actions[1].payload
    
    expect(products[0].id).toEqual(1)
    expect(products[0].title).toEqual("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    expect(products[0].price).toEqual(109.95)
    expect(products[0].description).toEqual("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday")
    expect(products[0].image).toEqual("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")
    expect(products[0].category).toEqual("men's clothing")
  })

})