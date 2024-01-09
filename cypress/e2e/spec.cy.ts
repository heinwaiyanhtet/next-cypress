describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("My first passing test",() => {
  it("Does not do much!",() => {
      expect(true).to.equal(true);
  })
})

describe("My first failing test",() => {

  it("Does not do much!", () => {
      expect(true).to.equal(false);
  }) 

})

describe("Visit a page",() => {
  it("visit the Kitchen Sink",() => {
    cy.visit('https://example.cypress.io');
  })
})

describe("query for an element",() => {
  it('find the content "type"',() => {
     cy.visit("https://example.cypress.io")

     cy.contains("type");
  })
})

describe("Click an element",() => {
  it('find the content "type"',() => {
     cy.visit("https://example.cypress.io")

     cy.contains("type").click();
  })
})


describe("make an assertion",() => {
  
  it('Gets, types and asserts',() => {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()

      cy.url().should('include','/commands/actions')

      cy.get('.action-email').type('fake@email.com')

      cy.get('.action-email').should('have.value', 'fake@email.com')

  })
})