import usuariosSchema from '../contracts/usuarios.contract';
import * as GetUsuarios from '../requests/getUsuarios.request'

describe('Get usuarios', () => {
    //primeiro teste
    it('Listar os usuários com sucesso', () => {
        GetUsuarios.listar().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    });
    
    //segundo teste
    it('Validar o contrato da lista de usuários', () => {
        GetUsuarios.listar().should((response) => {
            return usuariosSchema.validateAsync(response.body);
        })
    });
});