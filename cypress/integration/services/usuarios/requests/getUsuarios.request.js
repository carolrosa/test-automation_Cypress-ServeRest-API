// estrutura de nome de arquivos: verbo|método - endpoint . motivo(request) . extensão
/// <reference types="cypress" />

function listar() {
    return cy.request({
        method: "GET",
        url: "usuarios",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
}

export {listar}