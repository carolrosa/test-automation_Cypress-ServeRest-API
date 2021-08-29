import * as PostUsuarios from '../requests/postUsuarios.request';
import * as PostLogin from '../../login/requests/postLogin.request';
import * as DeleteUsuarios from '../requests/deleteUsuarios.request';

describe('Post Usuarios', () => {
    it ('Cadastrar novo usuário administrador com sucesso', () => {
        
        PostUsuarios.adicionar().should((responseCadastrar) => {
            expect(responseCadastrar.status).to.eq(201),
            PostLogin.entrar().should((responseEntrar) => {
                expect(responseEntrar.status).to.eq(200),
                DeleteUsuarios.apagar(responseEntrar.body.authorization, responseCadastrar.body._id).should((responseDelete) => {
                    expect(responseDelete.status).to.eq(200)
                })
            })
        })
    })
});