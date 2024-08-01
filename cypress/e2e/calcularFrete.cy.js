/// <reference types="cypress" />

describe("Suite de testes calcular cotações de frete", () => {

  it("Calcular frete com sucesso", () => {

    const dados = {
      cepOrigem: "08090-284",
      altura: "2",
      largura: "11",
      comprimento: "16",
      cepDestino: "05407-002"
    }
    cy.InformeCepOrigem(dados.cepOrigem)
    cy.InformeDimensoesEmbalagem(dados.altura, dados.largura, dados.comprimento)
    cy.InformeDestino(dados.cepDestino)
    cy.CalcularFreteDesconto()
    cy.wait(3000)
    cy.ValidoResultadoSucesso()
  });

  it("Calcular frete sem informar o cep de origem", () => {

    const dados = {
      altura: "2",
      largura: "11",
      comprimento: "16",
      cepDestino: "05407-002"
    }

    cy.InformeDimensoesEmbalagem(dados.altura, dados.largura, dados.comprimento)
    cy.InformeDestino(dados.cepDestino)
    cy.CalcularFreteDesconto()
    cy.ValidoErroCepOrigem()
  });

  it("Calcular frete sem informar o cep de destino", () => {

    const dados = {
      cepOrigem: "08090-284",
      altura: "2",
      largura: "11",
      comprimento: "16",
    }

    cy.InformeCepOrigem(dados.cepOrigem)
    cy.InformeDimensoesEmbalagem(dados.altura, dados.largura, dados.comprimento)
    cy.CalcularFreteDesconto()
    cy.ValidoErroCepDestino()
  });

  it("Calcular frete informando dimensões invalidas para embalagem", () => {
    const dados = {
      cepOrigem: "08090-284",
      altura: "0.3",
      largura: "7",
      comprimento: "12",
      cepDestino: "05407-002"
    }
    cy.InformeCepOrigem(dados.cepOrigem)
    cy.InformeDimensoesEmbalagem(dados.altura, dados.largura, dados.comprimento)
    cy.InformeDestino(dados.cepDestino)
    cy.CalcularFreteDesconto()
    cy.ValidaErroMedidaEmb()
  });

});