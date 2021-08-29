import Joi from 'joi';
//uso da lib Joi para escrever os contratos

//definição do contrato, usando a documentação
//posso usar uma constante porque não pretende-se alterar os valores 
const usuariosSchema = Joi.object({
    quantidade: Joi.number(),
    usuarios: Joi.array().items(
        Joi.object({
            nome: Joi.string(),
            email: Joi.string(),
            password: Joi.string(),
            administrador: Joi.boolean(),
            _id: Joi.string()
        })
    )
})

//exportar para poder usar no teste getUsuarios.spec
export default usuariosSchema;