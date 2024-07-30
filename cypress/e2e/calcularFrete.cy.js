/// <reference types="cypress" />
describe("Quotation module for buyer users", () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
      });

    it("Validar calculo de frete com sucesso", () => {
       cy.visitarUrl();
       cy.wait(10000)
       cy.InformeOrigemValida();
    });
});