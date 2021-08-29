/// <reference types="cypress" />
let payloadAddUsuario = require('../payloads/add-usuario.payload.json');
let faker = require('faker');

function adicionar() {
    payloadAddUsuario.email = faker.internet.email();
    return cy.request({
        method: "POST",
        url: "usuarios",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        body: payloadAddUsuario
    })
}

export {adicionar}