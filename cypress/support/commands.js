
Cypress.Commands.add('clearAndType', {
    prevSubject: true,
  }, (subject, text) => {
    return cy.get(subject)
        .clear()
        .wait(1000)
        .type(text)
        .wait(1000)
})

Cypress.Commands.add("login", (email, password) => {
    //const { email, password } = Cypress.env("user");
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
  });
  
  Cypress.Commands.add("enterArticleDetails", (article) => {
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
  });
  
  Cypress.Commands.add("verifyArticleDetails", (article) => {
    cy.get('h1')
      .should('have.text', article.title)
      .wait(1000)
    cy.get('.page p')
      .should('have.text', article.body)
      .wait(1000)
  });