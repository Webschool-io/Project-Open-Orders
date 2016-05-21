# Project-Open-Orders

Sistema de Pedidos criado no Be MEAN.

A ideia é criar um sistema de **PEDIDOS** básico que sirva de base para nosso ECOMMERCE.

Gerente de Projeto: [rohmunhoz](https://github.com/rohmunhoz)

## Entidades

- User
- Vendedor
- Comprador
- Loja
- Produto
- Pedido

### Produto

- nome: String
- sku: String
- descricao: String
- tamanho: String
- peso: {
    valor: Number
  , unidade: String
  }
- thumb: String
- image: String
- valor: {
    real: Number
  , moeda: String
  }
- dimensoes: {
    largura: Number
  , comprimento: Number
  , altura: Number
  , unidade: String
  }
- categorias: Array
- tags: Array


### Pedido

- vendedor_id: ObjectId
- comprador_id: ObjectId
- produtos: [{
    produto_id: ObjectId,
    quantidade: Number,
    desconto: Number // em %
  }]
- desconto: Number // em %

### Loja

- nome: String
- categoria: ENUM
- tags: Array
- endereço: {}
- telefone: {}
- produtos: []
- vendedores: []
- compradores:[]