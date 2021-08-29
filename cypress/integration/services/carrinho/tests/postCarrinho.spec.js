/*Adicionar um produto ao carrinho.
 - Realizar o login com um usuário com possibilidade de criar carrinhos.
 - Pegar qualquer produto da listagem de produtos.
 - Criar o carrinho .
 - Validar a criação deste carrinho com sucesso.
Obs: Cada usuário pode ter somente um carrinho cadastrado, então após adicionar e validar a existência é indicado a exclusão do carrinho.*/

import * as PostLogin from '../../login/requests/postLogin.request';
import * as GetProdutos from '../../produtos/requests/getProdutos.request';
import * as PostCarrinho from '../requests/postCarrinho.request';
import * as DeleteCarrinho from '../requests/deleteCarrinho.request';


describe('Post Carrinho', () => {
    it('Criar um carrinho com sucesso', () => {
        //login com usuário administrador
        PostLogin.entrar().should((responseEntrar) => {
            expect(responseEntrar.status).to.eq(200)
            //listar os produtos existentes
            GetProdutos.listar().should((responseProdutos) => {
                expect(responseProdutos.status).to.eq(200),
                //criar o carrinho adicionando sempre o primeiro produto da listagem
                PostCarrinho.adicionar(responseEntrar.body.authorization, responseProdutos.body.produtos[0]).should((responseCarrinho) => {
                    expect(responseCarrinho.status).to.eq(201),
                    expect(responseCarrinho.body.message).to.eq("Cadastro realizado com sucesso"),
                    DeleteCarrinho.apagar(responseEntrar.body.authorization).should((responseDelete) => {
                        expect(responseDelete.status).to.eq(200)
                    })
                })
            })
        })
    })
});