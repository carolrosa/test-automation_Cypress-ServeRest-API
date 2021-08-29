import Joi from 'joi';

const produtosSchema = Joi.object({
    quantidade: Joi.number(),
    produtos: Joi.array().items(
        Joi.object({
            nome: Joi.string(),
            //na documentação exige um integer para preço
            preco: Joi.number().integer(),
            descricao: Joi.string(),
            quantidade: Joi.number().integer(),
            _id: Joi.string()
        })
    )
})

export default produtosSchema;
