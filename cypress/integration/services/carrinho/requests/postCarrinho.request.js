/// <reference types="cypress" />
let payloadAddCarrinho = require('../payloads/add-carrinho.payload.json');

function adicionar(auth) {
    return cy.request({
        method: "POST",
        url: "carrinhos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAddCarrinho
    })
}

export {adicionar}