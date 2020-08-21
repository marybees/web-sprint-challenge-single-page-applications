describe('Pizza App', () => {

 

    describe('Inputs and submit button', () => {
      
      it('Submit button is disabled', () => {
        cy.visit('http://localhost:3000') 
        cy.get('.submit-button').should('be.disabled')
      })

      it('Can select size drop-down', () => {
        cy.get('select').select('Small') 
          .should('have.value', 'small')
      })
  
      it('Can type something in the "name" input', () => {
        cy.get('input[name="name"]')
          .type('Testing testing 123')
          .should('have.value', 'Testing testing 123')
      })
  
      it('Can Type Something In The "instructions" input', () => {
        cy.get('input[name="instructions"]')
          .type('Testing testing 123')
          .should('have.value', 'Testing testing 123')
      })

      it('Boxes can be checked and unchecked', () => {
        cy.get('[type="checkbox"]').check()
      })
  
      it('Submit button is enabled', () => {
        cy.get('.submit-button').should('be.enabled')
      })
      
    })
  })