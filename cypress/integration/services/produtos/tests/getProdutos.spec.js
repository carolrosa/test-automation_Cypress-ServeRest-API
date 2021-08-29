/*Criar um teste de contrato para a lista de produtos.
 - Assim como validamos o contrato dos usuários, agora devemos validar o contrato da listagem de produtos.*/

import produtosSchema from '../contracts/produtos.contract';
import * as GetProdutos from '../requests/getProdutos.request';

describe('Get produtos', () => {
    it('Listar os produtos com sucesso', () => {
        GetProdutos.listar().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    });

    it('Validar o contrato da lista de produtos', () => {
        GetProdutos.listar().should((response) => {
            return produtosSchema.validateAsync(response.body);
        })
    })
});