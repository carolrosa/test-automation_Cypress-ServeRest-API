/// <reference types="cypress" />

function apagar(auth) {
    return cy.request({
        method: "DELETE",
        url: "carrinhos/cancelar-compra",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false
    })
}

export {apagar}