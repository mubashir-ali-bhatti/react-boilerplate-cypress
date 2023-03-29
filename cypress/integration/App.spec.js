describe('App', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays the user list', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', { fixture: 'users.json' }).as('getUsers');

        cy.wait('@getUsers');

        cy.get('h1').should('have.text', 'User List');

        cy.get('li').should('have.length', 10);

        cy.get('li').eq(0).should('have.text', 'Leanne Graham');

        cy.get('li').eq(9).should('have.text', 'Clementina DuBuque');
    });
});