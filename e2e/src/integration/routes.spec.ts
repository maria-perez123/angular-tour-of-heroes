describe('Routes testing', () => {

    it('it test the routes are working', () => {
        cy.visit('/') 
        cy.url().should('include', '/dashboard')
        cy.get('[data-cy="nav-heroes"]').click()  
        cy.url().should('include', '/heroes')
        cy.get(':nth-child(1) > [data-cy=list-of-heroes]').click() 
        cy.url().should('include', '/detail/')
        cy.get('[data-cy="goback-button"]').click() 
        cy.url().should('include', '/heroes')
        cy.get('[data-cy="nav-dashboard"]').click() 
        cy.url().should('include', '/dashboard')
        cy.get(':first-child()[data-cy="grid-elements"]').invoke('attr','href').then(href=>{
            cy.get(':first-child()[data-cy="grid-elements"]').click()             
            cy.url().should('contain', href)
        })
        cy.url().should('include', '/detail/')
        cy.go('back')
        cy.url().should('include', '/dashboard')
    })
    it('it test a wrong url drives to root page', () => {
        cy.visit('/dajkdjdkdjnkada')
        cy.url().should('eq', 'http://localhost:4200/')
    })
})