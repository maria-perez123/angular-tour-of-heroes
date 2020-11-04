import { getGreeting } from '../support/app.po';

describe('angular-tour-of-heroes', () => {
/*
it('should have the title 'Tour Of Heroes', ()=>{
  cy.visit('/')
  cy.contains('Tour of Heroes', {mathCase:false})
})



it('testing routes', () => {
    cy.visit('/') //testing visit to home/dashboard
    cy.url().should('include', '/dashboard')
    cy.get('[data-cy="nav-heroes"]').click()  //testing heroes button
    cy.url().should('include', '/heroes')
    cy.get(':nth-child(1) > [data-cy=list-of-heroes]').click() //testing hero list from heroes
    cy.url().should('include', '/detail/11')
    cy.get('[data-cy="goBack-button"]').click() //testing goback button from details
    cy.url().should('include', '/heroes')
    cy.get('[data-cy="nav-dashboard"]').click() // testing button dashboard
    cy.url().should('include', '/dashboard')
    cy.get(':nth-child(1) >[data-cy=grid-elements]').click() // testing hero list from dashboard
    cy.url().should('include', '/detail/12')
    cy.go('back')  //testing go back in history
    cy.url().should('include', '/dashboard')
  });*/
/*
  it('testing search filter', () => {
    cy.visit('/')
    const term='m'
    cy.get('#search-box').type(term)
    //demostrar que todos los anchors contiene la letra 'M'

    cy.get('ul li').each(($li) => {
      cy.wrap($li).invoke('text').should(text => {
        expect(text.toLowerCase()).to.include(term);
      })
    })
    cy.get(':nth-child(1) >[data-y="search-hero"]').click()
    cy.url().should('include', '/detail/')
  });*/
/*
  it('If the term search dont appear dont show anything', () => {
    cy.visit('/')
    cy.get('#search-box').type('WWWWWW')
    cy.get('[data-y="search-hero"]').should('have.length', 0)
  });
*/

  /*it('test the messages can be deleted with the "clear"button ', ()=>{
    cy.visit('/')
    cy.get('[data-cy=messages-div]').should('exist');
    cy.get('[data-cy="clear-button"]').click()
    cy.get('[data-cy=messages-div]').should('not.exist');
  })*/
/*
  it('testing route :id is equal to hero id ', ()=>{
    cy.visit('/detail/11')
    cy.url().then(url=>{
      const currentURL=url.split('/')
      const id=currentURL[4]
      cy.get('[data-cy="div-id"]').invoke('text').should('include', id )
    })
  })*//*
  it('testing name in input is equal to title in uppercase', ()=>{
    cy.visit('/heroes')
    cy.get(':nth-child(1) > [data-cy=list-of-heroes]').click()
    cy.get('[data-cy="input-name"]').clear().type('Tornado')
    cy.get('[data-cy="input-name"]').invoke('attr', 'ng-reflect-model').then(text=>{
      const texto=text.toUpperCase()
      console.log(text)
      cy.get('[data-cy="titleherodetail"]').invoke('text').should('include', texto)
    })
    cy.get('[ data-cy="save-button"]').click()
    cy.get(':nth-child(1) > [data-cy=list-of-heroes]').invoke('text').should('contain', 'Tornado')
  })*/
/*
  it('testing name in input is equal to title in uppercase', ()=>{
    cy.visit('/heroes')
    cy.get(':nth-child(1) > [data-cy=list-of-heroes]').click()
    cy.get('[data-cy="input-name"]').clear().type('WWWWWWWWWW')
    cy.get('[ data-cy="goback-button"]').click()
    cy.get(':nth-child(1) > [data-cy=list-of-heroes]').invoke('text').should('not.contain', 'WWWWWWWWWW')
  })*/
/*
  it('testing name in input is equal to title in uppercase', ()=>{
    cy.visit('/heroes')
    cy.get('[data-cy="addhero-input"]').clear().type('name')
    cy.get('[data-cy="add-button"]').click()
    cy.wait(500)
    cy.get(':last-child() > [data-cy=list-of-heroes]').invoke('text').should('contain', 'name')
    cy.get('[data-cy=list-of-heroes]').should('have.length', 11)
  })*/
  it('testing name in input is equal to title in uppercase', ()=>{
    cy.visit('/heroes')
    cy.get(':last-child() > [data-cy=list-of-heroes]').invoke('text').then(text=>{
      cy.get(':last-child()>[data-cy="delete-button"]').click()
      cy.wait(500)
      cy.get(':last-child() > [data-cy=list-of-heroes]').invoke('text').should('not.contain', text)
    })
    cy.get('[data-cy=list-of-heroes]').should('have.length', 9)
  })
});