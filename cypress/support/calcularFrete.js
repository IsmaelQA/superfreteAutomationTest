const elements = {
    inputCepOrigem: "#originPostcode",
    selectEmbalagem: "#object_format",
    selectCaixa: ".Mui-selected",
    selectPeso: "#weight",
    selectOptionPeso: '[data-value="0.3"]',
    inputAltura: "#packageHeight",
    inputLargura: "#packageWidth",
    inputComprimento: "#packageDepth",
    inputCepDestino: "#destinationPostcode",
    buttonCalcularFrete: '[data-cy="calculator-submit"]',
    labelMensagemOk: "#resultsArea",
    labelErroCep: "#originPostcode-helper-text",
    labelErroCepDestino: "#destinationPostcode-helper-text",
    labelErroAlturaMinima: "#packageHeight-helper-text",
    labelErroLarguraMinima: "#packageWidth-helper-text",
    labelErroCompMinimo: "#packageDepth-helper-text"
};

Cypress.Commands.add('InformeCepOrigem', (cepOrigem) => {

    cy.EscreverNoCampo(elements.inputCepOrigem, cepOrigem)
})

Cypress.Commands.add('InformeDimensoesEmbalagem', (altura, largura, comprimento) => {

    cy.clicarNoElemento(elements.selectEmbalagem)
    cy.clicarNoElemento(elements.selectCaixa)
    cy.clicarNoElemento(elements.selectPeso)
    cy.clicarNoElemento(elements.selectOptionPeso)
    cy.EscreverNoCampo(elements.inputAltura, altura)
    cy.EscreverNoCampo(elements.inputLargura, largura)
    cy.EscreverNoCampo(elements.inputComprimento, comprimento)
})

Cypress.Commands.add('InformeDestino', (destino) => {

    cy.EscreverNoCampo(elements.inputCepDestino, destino)
})

Cypress.Commands.add('CalcularFreteDesconto', () => {

    cy.clicarNoElemento(elements.buttonCalcularFrete)
    cy.wait(2000)

})
Cypress.Commands.add('ValidoResultadoSucesso', () => {
    
    cy.VerificarSeCampoContemTexto(elements.labelMensagemOk, 'SELECIONE A MODALIDADE')
})

Cypress.Commands.add('ValidoErroCepOrigem', () => {
    
    cy.ValidarSeCampoContemMensagem(elements.labelErroCep, 'CEP de origem é obrigatório')
    
})

Cypress.Commands.add('ValidoErroCepDestino', () => {
    
    cy.ValidarSeCampoContemMensagem(elements.labelErroCepDestino, 'CEP de destino é obrigatório')
})

Cypress.Commands.add('ValidaErroMedidaEmb', () => {
    
    cy.ValidarSeCampoContemMensagem(elements.labelErroAlturaMinima, 'Altura mínima 0.4 cm.')
    cy.ValidarSeCampoContemMensagem(elements.labelErroLarguraMinima, 'Largura mínima 8 cm.')
    cy.ValidarSeCampoContemMensagem(elements.labelErroCompMinimo, 'Comprimento mínimo 13 cm.')
})
