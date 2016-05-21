# Project-Open-Orders

Sistema de Pedidos criado no Be MEAN.

A ideia é criar um sistema de **PEDIDOS** básico que sirva de base para nosso ECOMMERCE.

Gerente de Projeto: [rohmunhoz](https://github.com/rohmunhoz)

## Entidades

- User
- Vendedor
- Compardor
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