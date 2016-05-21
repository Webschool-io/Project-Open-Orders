# Project-Open-Orders

Sistema de Pedidos criado no Be MEAN.

A ideia é criar um sistema de **PEDIDOS** básico que sirva de base para nosso ECOMMERCE.

**Para quem está lendo isso agora:**

O sistema será feito em [MEAN](http://webschool.io/bemean), após a finalização da MODELAGEM das ENTIDADES, o FRONT e o BACK poderão seguir em paralelo.

No BACK iremos definir os Organismos, Moléculas, Átomos, Quarks e afins. Caso não saiba do que se trata favor ver as [aulas de Node.js](https://www.youtube.com/playlist?list=PL77JVjKTJT2hP_lxL88oDo2rJvOskpGfJ).

No FRONT usaremos Angular e Materialize.

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

- dono_id: ObjectId
- nome: String
- contato: {
    Nome: String
  , email: String
  , Telefone: String
  , Endereço: String
  }
- categoria: ENUM
- tags: Array
- endereço: {}
- telefone: {}
- produtos: []
- vendedores: []
- compradores:[]