# Project-Open-Orders

Sistema de Pedidos criado no Be MEAN.

A ideia é criar um sistema de **PEDIDOS** básico que sirva de base para nosso ECOMMERCE.

Imagine a seguinte situação:

> Sou um programador que trabalha **home-office** e preciso comprar 1 quadro branco e post-its para ele mas não quero sair de casa. Poderia ligar em alguma papelaria, mas em vez disso posso fazer o pedido via ESSE sistema e a **LOJA** me liga para confirmar o PEDIDO e enviar ele via {QUALQUER TIPO}, exemplo: Moto-boy.

Logo o Sistema deverá gerenciar o cadastro dos vendedores, compraores e produtos e sua interação, além da sua ENTREGA.


**Para quem está lendo isso agora:**

O sistema será feito em [MEAN](http://webschool.io/bemean), após a finalização da MODELAGEM das ENTIDADES, o FRONT e o BACK poderão seguir em paralelo.

No BACK iremos definir os Organismos, Moléculas, Átomos, Quarks e afins. Caso não saiba do que se trata favor ver as [aulas de Node.js](https://www.youtube.com/playlist?list=PL77JVjKTJT2hP_lxL88oDo2rJvOskpGfJ).

No FRONT usaremos Angular e Materialize.

Gerente de Projeto: [rohmunhoz](https://github.com/rohmunhoz)

## Entidades

- User
- Vendedor (não é necessário ainda)
- Comprador
- Loja
- Produto
- Pedido

### Comprador

- nome: String
- dataNascimento: Date
- produtos: Array

#### API

- C: POST http://localhost:3000/api/compradores/
- R: GET http://localhost:3000/api/compradores/
  + GET http://localhost:3000/api/compradores/{_id}
- U: PUT http://localhost:3000/api/compradores/{_id}
- D: DELETE http://localhost:3000/api/compradores/{_id}


### Produto

- nome: String
- sku: String
- descricao: String
- tamanho: String
- createdAt: Date
- updatedAt: Date
- peso: {
    valor: Number
  , unidade: String
  }
- images: {
    thumb: String,
    gallery: Array
}
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
