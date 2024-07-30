const elements = {
    inputCep: "#originPostcode",
    selectEmbalagem: "#object_format",

};

Cypress.Commands.add('InformeOrigemValida', () => {
    cy.EscreverNoCampo(elements.inputCep, '06236-110')
    cy.clicarNoElemento(elements.selectEmbalagem)
})
