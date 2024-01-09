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