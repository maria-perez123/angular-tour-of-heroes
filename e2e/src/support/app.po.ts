//here you can create a const function that can be imported to your test file
const messageFetchHeroes=()=>cy.get(':last-child()[data-cy="message"]').should('contain', `HeroService: fetched heroes`);
const messageFetchHero=id=>cy.get(':last-child()[data-cy="message"]').should('contain', `HeroService: fetched hero id=${id}`);
const messageUpdateHero=id=>cy.get(':nth-last-child(2)[data-cy="message"]').should('contain', `HeroService: updated hero id=${id}`);
const messageAddHero=id=>cy.get(':last-child()[data-cy="message"]').should('contain', `HeroService: added hero w/ id=${id}`);
const messageDeleteHero=id=>cy.get(':last-child()[data-cy="message"]').should('contain', `HeroService: deleted hero id=${id}`);
const messageFoundHero=term=>cy.get(':last-child()[data-cy="message"]').should('contain', `HeroService: found heroes matching "${term}"`);
const messageNotfoundHero=term=>cy.get(':last-child()[data-cy="message"]').should('contain', `HeroService: no heroes matching "${term}"`);

export{messageFetchHeroes, messageFetchHero, messageUpdateHero, messageAddHero, messageDeleteHero, messageFoundHero, messageNotfoundHero}