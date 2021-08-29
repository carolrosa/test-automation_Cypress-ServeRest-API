/// <reference types="cypress" />

function apagar(auth) {
    return cy.request({
        method: "DELETE",
        url: "produtos/_id",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false
    })
}

export {apagar}