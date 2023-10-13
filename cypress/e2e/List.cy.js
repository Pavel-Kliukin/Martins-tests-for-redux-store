describe("List component test", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Page and Title render", () => {
    cy.get('h1').should('contain', 'List will be here')
  })

  it("Page products load", () => {
    cy.get('[data-testid= "Individual_Product_Component"]', {timeout: 4000}).should('have.length', 20)
  })

  it("List link to Cart works", ()=> {
    cy.get('[data-testit="cart-link"]').click()
    cy.url().should('include', '/cart')
    cy.get('h1').should('contain', 'Cart')
  })
})