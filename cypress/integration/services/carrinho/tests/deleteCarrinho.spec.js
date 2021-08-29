import * as PostLogin from '../../login/requests/postLogin.request';
import * as DeleteCarrinho from '../requests/deleteCarrinho.request';

describe('Deletar carrinho criado', () => {
    it('Deletar', () => {
        PostLogin.entrar().should((responseEntrar) => {
            expect(responseEntrar.status).to.eq(200)
            DeleteCarrinho.apagar(responseEntrar.body.authorization).should((responseDelete) => {
                expect(responseDelete.status).to.eq(200)
            })
        })
    })
})