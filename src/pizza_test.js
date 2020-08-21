describe('Pizza App', () => {
    describe('Inputs and submit button', () => {
      it('the submit button is disabled', () => {
        cy.get('.submit-button').should('be.disabled')
      })
  
      it('can type something in the "name" input', () => {
        cy.get('input[name="name"]')
          .type('Testing testing 123')
          .should('have.value', 'Testing testing 123')
      })
  
      it('Can Type Something In The "instructions" input', () => {
        cy.get('input[name="instructions"]')
          .type('Testing testing 123')
          .should('have.value', 'Testing testing 123')
      })
  
      it('submit button is enabled', () => {
        cy.get('.submit-button').should('be.enabled')
      })
      
      it('submit button is enabled', () => {
        cy.get('[type="checkbox"]').check()
      })
      
    })
  })