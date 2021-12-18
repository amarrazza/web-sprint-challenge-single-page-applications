describe('Pizza Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select[name=size]')
    const roni = () => cy.get('input[name=roni]');
    const subBtn = () => cy.get('button[id="order-button"]');

    it('elements are showing', () => {
        nameInput().should('exist');
        sizeInput().should('exist');
    })
    it('can type, assert, and submit', () => {
        nameInput()
            .should('have.value', '')
            .type('Austin')
            .should('have.value', 'Austin')
        sizeInput()
            .select('medium')
        roni()
            .click()
        subBtn()
            .should('not.be.disabled')
            .click()
        cy.contains('Austin').should('exist')
        nameInput()
            .should('have.value', '')

    })
})