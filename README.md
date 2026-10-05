# Dona Clara Panificadora

> Solução digital acadêmica para uma panificadora artesanal de bairro.

## 1. Briefing do problema

A Dona Clara é uma panificadora artesanal fundada há 12 anos por Clara Ramos e Roberto. A empresa possui tradição na produção de pães de fermentação natural e produtos coloniais, mas ainda depende do atendimento presencial e de anotações em caderno para pedidos e encomendas.

A mudança na rotina dos moradores do bairro aumentou a procura por conveniência. Os clientes querem garantir produtos sem enfrentar filas e desejam maior segurança em encomendas de bolos, tábuas de frios e eventos.

Além disso, a chegada de duas redes de padarias gourmet com forte presença digital aumentou a necessidade de modernização do negócio.

## 2. Dor do cliente

Os principais problemas identificados foram:

- dependência do atendimento presencial;
- filas em horários de maior movimento;
- risco de produtos estarem esgotados;
- pedidos registrados manualmente;
- erros de sabor e quantidade;
- atrasos em encomendas;
- dificuldade para alcançar novos moradores e empresas;
- ausência de um canal digital estruturado.

## 3. Solução escolhida

Foi desenvolvido um **site responsivo com características de Web App**.

A escolha ocorreu porque o site pode ser acessado diretamente pelo celular ou computador, sem instalação. Ele também funciona como vitrine digital e como ponto de entrada para pedidos e encomendas.

### Funcionalidades

- página inicial institucional;
- apresentação da história da empresa;
- cardápio digital;
- filtros por categoria;
- página de encomenda;
- formulário com data e horário de retirada;
- resumo para conferência antes do envio;
- integração demonstrativa com WhatsApp;
- seção para Coffee Break corporativo;
- layout responsivo para celular e desktop.

## 4. Decisão de design

A identidade visual utiliza tons inspirados em panificação artesanal: creme, marrom, dourado e branco.

O objetivo é transmitir:

- tradição;
- proximidade;
- qualidade artesanal;
- confiança;
- simplicidade.

A navegação foi mantida direta para que um cliente com pouca familiaridade digital consiga encontrar o cardápio e realizar uma encomenda rapidamente.

## 5. Protótipo / telas

### Tela inicial
Apresenta a marca, proposta de valor, produtos em destaque, história e acesso rápido às encomendas.

### Cardápio
Organiza produtos por categorias e permite filtrar entre pães, doces, coloniais e eventos.

### Encomendas
Centraliza os dados necessários para diminuir erros: cliente, WhatsApp, data, horário, tipo de pedido, produtos e observações.

### Coffee Break
Cria um canal específico para empresas que procuram produtos para reuniões e eventos.

## 6. Arquitetura

O projeto utiliza uma arquitetura simples de front-end:

```text
HTML5
├── Estrutura das páginas
│
CSS3
├── Layout
├── Responsividade
└── Identidade visual
│
JavaScript
├── Filtros do cardápio
├── Menu mobile
├── Formulário
├── Resumo da encomenda
└── Montagem da mensagem do WhatsApp
```

## 7. Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

Não foram utilizadas APIs externas nem credenciais secretas.

## 8. Como executar

### Localmente

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.

Também é possível utilizar a extensão **Live Server** no VS Code.

### Publicação

O projeto pode ser publicado utilizando o GitHub Pages:

`Settings → Pages → Deploy from a branch → main → / (root)`

## 9. Estrutura do projeto

```text
dona-clara-panificadora/
├── index.html
├── cardapio.html
├── encomenda.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
├── .gitignore
├── LICENSE
└── README.md
```

## 10. Segurança

Nenhuma senha, token, chave de API ou credencial é armazenada no código.

O número de WhatsApp presente no protótipo é fictício e deve ser substituído pelo contato real da empresa em uma implantação real.

## 11. Melhorias futuras

Em uma versão de produção, podem ser adicionados:

- banco de dados;
- painel administrativo;
- controle real de estoque;
- pagamento online;
- autenticação de clientes;
- notificações automáticas;
- integração oficial com WhatsApp Business;
- histórico de pedidos;
- relatórios financeiros.

## 12. Objetivo acadêmico

Este projeto foi desenvolvido como proposta de solução digital para o cenário apresentado na atividade, buscando solucionar a dor principal da Dona Clara com uma interface simples, acessível e organizada.
