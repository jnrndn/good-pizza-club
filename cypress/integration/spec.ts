describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('WELCOME!')
    cy.contains('Make yourself at home')
  })
})
