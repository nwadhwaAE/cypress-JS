const data = require('../../cypress/fixtures/data.json');

before('Login to the app',()=>{
    const { email, password } = data;
    cy.visit('')
        .wait(1000)
    //var email = Cypress.env("email");
    //var password = Cypress.env("password")
    cy.login(email,password)
})
describe('Perform E2E test using cypress features',()=>{
    it('Read Fixture file and post a article ',()=>{
        cy.contains("New Post")
            .click()
            .wait(1000)
            const { article } = data;
            cy.enterArticleDetails(article.new);
    })
    it('Verifies Published Article content using Fixture Files',()=>{
        const { article } = data;
        cy.verifyArticleDetails(article.new);
    })
    it('Edit Article',()=>{
        cy.contains("Edit Article")
            .click()
            .wait(1000)
            const { article } = data;
            cy.enterArticleDetails(article.new);
    })
    it('Verifies Edited Article',()=>{
        const { article } = data;
        cy.verifyArticleDetails(article.new);
    })
})

/*function login(email,password){
    cy.get('ul>li:nth-child(2)')
        .should('have.text','Sign in')
        .click()
        .wait(1000)
    cy.get('fieldset>input[type="email"]')
        .type(email)
        .wait(1000)
    cy.get('fieldset>input[type="password"]')
        .type(password)
        .wait(1000)
    cy.get('button')
        .click()
        .wait(1000)
}
function enterArticleDetails(article){
    cy.get('fieldset>input[placeholder="Article Title"]')
        .clearAndType(article.title)
        .wait(1000)
    cy.get('fieldset>input[placeholder="What\'s this article about?"]')
        .clearAndType(article.introduction)
        .wait(1000)
    cy.get('fieldset>textarea[placeholder="Write your article (in markdown)"]')
        .clearAndType(article.body)
        .wait(1000)
    cy.get('fieldset>input[placeholder="Enter tags"]')
        .clearAndType(article.tags)
        .wait(1000)
    cy.get('button')
        .click()
        .wait(1000)
}
function verifyArticleDetails(article){
    cy.get('h1')
        .should('have.text',article.title)
        .wait(1000)
    cy.get('.page p')
        .should('have.text',article.body)
        .wait(1000)
}*/