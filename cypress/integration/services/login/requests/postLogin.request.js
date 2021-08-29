/// <reference types="cypress" />
let payloadLogin = require('../payloads/login-admin.payload.json');

function entrar() {
    return cy.request({
        method: "POST",
        url: "login",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        body: payloadLogin
    })
}

export {entrar}