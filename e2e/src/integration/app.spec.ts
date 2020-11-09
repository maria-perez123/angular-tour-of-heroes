import {
  messageFetchHeroes, 
  messageFetchHero, 
  messageUpdateHero, 
  messageAddHero, 
  messageDeleteHero, 
  messageFoundHero, 
  messageNotfoundHero} from '../support/app.po'


describe('search filter and message division tests', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('it test the titles and messages of fetched heroes appears', ()=>{
    cy.visit('/')
    cy.contains('TOP HEROES', {matchCase:false})
    messageFetchHeroes()
    cy.visit('/heroes')
    cy.contains('MY HEROES', {matchCase:false})
    messageFetchHeroes()
  })

  it('it test the  search filter', () => {
    const term='m'
    cy.get('input').type(term)
    cy.get('[data-y="search-hero"]').each(($li) => {
      cy.wrap($li).invoke('text').should(text => {
        expect(text.toLowerCase()).to.include(term);
      })
    })
    messageFoundHero(term)
    cy.get(':nth-child(1) >[data-y="search-hero"]').invoke('attr','href').then(href=>{
      cy.get(':nth-child(1) >[data-y="search-hero"]').click()
      cy.url().should('contain', href)
    })
    cy.url().should('include', '/detail/')
  });

  it('it test the search filter doesnt show anything if the search word doesnt appear', () => {
    const term='WWWWWW'
    cy.get('input').type(term)
    cy.get('[data-y="search-hero"]').should('have.length', 0)
    messageNotfoundHero(term)
  });

  it('it test the messages can be deleted with the "clear"button ', ()=>{
    cy.get('[data-cy=messages-div]').should('exist');
    cy.get('[data-cy="clear-button"]').click()
    cy.get('[data-cy=messages-div]').should('not.exist');
  })

})

describe('Hero related tests', () => {
  beforeEach(()=>{
    cy.visit('/heroes')
  })

  it('it test the hero id is contain in the detail url and messages of fetch appear', ()=>{
    cy.visit('/detail/11')
    cy.url().then(url=>{
      const id=url.substr(url.lastIndexOf('/')+1)
      cy.get('[data-cy="div-id"]').invoke('text').should('include', id )
      messageFetchHero(id)
    })
  })

  it('it test the hero name can be updated, and the title in hero datail contains the hero name in uppercase', ()=>{
    cy.get(':nth-child(1) > [data-cy=list-of-heroes]').click()
    cy.get('[data-cy="input-name"]').clear().type('Tornado')
    cy.get('[data-cy="input-name"]').invoke('attr', 'ng-reflect-model').then(text=>{
      const texto=text.toUpperCase()
      cy.get('[data-cy="titleherodetail"]').invoke('text').should('include', texto)
    })
    cy.url().then(url=>{
      const id=url.substr(url.lastIndexOf('/')+1)
      cy.get('[ data-cy="save-button"]').click()
      messageUpdateHero(id)
    })
    cy.get(':nth-child(1) > [data-cy=list-of-heroes]').invoke('text').should('contain', 'Tornado')
  })

  it('it test the hero name shouldnt update when is pressed the goback button', ()=>{
    cy.get(':nth-child(1) > [data-cy=list-of-heroes]').click()
    cy.get('[data-cy="input-name"]').clear().type('WWWWWWWWWW')
    cy.get('[ data-cy="goback-button"]').click()
    cy.get(':nth-child(1) > [data-cy=list-of-heroes]').invoke('text').should('not.contain', 'WWWWWWWWWW')
  })

  it('it test a hero can be added and the number of elements in the heroes list is increased by one', ()=>{
    const newheroname='newheroname'
    cy.get('[data-cy=list-of-heroes]').its('length').then(length=>{
      cy.get('[data-cy="addhero-input"]').clear().type(newheroname)
      cy.get('[data-cy="add-button"]').click()
      cy.wait(500)
      cy.get(':last-child() > [data-cy=list-of-heroes]').invoke('text').should('contain', newheroname).then(text=>{
        const id=text.substr(0, text.indexOf(' '))
        messageAddHero(id)
      })
      cy.get('[data-cy=list-of-heroes]').should('have.length', length+1)
    })
  })

  it('it test a hero can be deleted and the number of elements is decrease by one', ()=>{
    cy.get('[data-cy=list-of-heroes]').its('length').then(length=>{
      cy.get(':last-child() > [data-cy=list-of-heroes]').invoke('text').then(text=>{
        const id=text.substr(0, text.indexOf(' '))
        cy.get(':last-child()>[data-cy="delete-button"]').click()
        cy.wait(500)
        messageDeleteHero(id)
        cy.get(':last-child() > [data-cy=list-of-heroes]').invoke('text').should('not.contain', text)
      })
    cy.get('[data-cy=list-of-heroes]').should('have.length', length-1)
    })
  })
});