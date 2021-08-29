import * as PostProdutos from '../requests/postProdutos.request';
import * as PostLogin from '../../login/requests/postLogin.request';
import * as DeleteProdutos from '../requests/deleteProdutos.request';

describe('Post Produtos', () => {
    it('Adicionar um novo produto', () => {
        PostLogin.entrar().should((responseEntrar) => {
            expect(responseEntrar.status).to.eq(200),
            PostProdutos.adicionar(responseEntrar.body.authorization).should((responseProdutos) => {
                expect(responseProdutos.status).to.eq(201),
                expect(responseProdutos.body.message).to.eq("Cadastro realizado com sucesso"),
                DeleteProdutos.apagar(responseEntrar.body.authorization, responseProdutos.body._id).should((responseDelete) => {
                    expect(responseDelete.status).to.eq(200)
                })
            })
        })
    })
});