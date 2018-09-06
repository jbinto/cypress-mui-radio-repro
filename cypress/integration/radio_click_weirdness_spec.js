describe('some tests', () => {
  for (var i = 0; i < 50; i++) {
    it('a test', () => {
      cy.visit('http://localhost:3000/')

      cy.get('#optionTwo').click()
      cy.get('button').click()
      cy.get('#textField').type('Blah blah blah')
    })
  }
})
