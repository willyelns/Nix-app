# Nix-app
## Descrição do Projeto

Aplicativo multiplataforma mobile para visualização de Transferências Bancárias por consumo de uma API REST.
O aplicativo dispõe:
- Verificar todas as Transferências.
- Filtrar Transferências por:
    * Nome do pagador
    * Nome do beneficiário
    * status
    * tipo
- Ver detalhes da transferência individualmente.
- Consumo de api para gerar usuários aleatoriamente.
- Informações iniciais das transferências, total do valor transferido até o momento e total de transferências até o momento.

## Tecnologias usadas

### UI e Prototipagem

* [Adobe XD](https://www.adobe.com/products/xd.html) para desenvolvimento do layout e prototipagem.

### Desenvolvimento

* [Ionic 3.20.0](https://ionicframework.com/) como tecnologia principal.
* [Ionic DevApp](https://ionicframework.com/docs/pro/devapp/) para testar localmente durante o desenvolvimento do aplicativo no dispostivo.
* [Sass](https://sass-lang.com/) para criar modificar o tema.
* [Visual Studio Code](https://code.visualstudio.com/) como IDE.
* MacOS High Sierra 10.13.4 como Sistam Operacional.
* iOS 11.4 como aparelho de teste.

## Setup

### Ionic

Esse projeto requer Ionic 3.20.0+ para tal, pode ser instalado usando o [npm](https://www.npmjs.com/) e rodando:

```bash 
$ npm install -g ionic cordova
```
Para instalar todas as dependências, rode:

```bash 
$ npm install
```
Para rodar o projeto no browser:

```bash
$ ionic serve
```
Caso tenha o [Ionic DevApp](https://ionicframework.com/docs/pro/devapp/) instalado, rode:
```bash
$ ionic serve -c
```
## Build e Deploy

Como depende de qual dispositivo será instalado, o link: [Deploying](https://ionicframework.com/docs/intro/deploying/), explica melhor o passo-a-passo para a instalação do aplicativo no smartphone.

## Criação e Prototipagem

Inicialmente foi pensado um Fluxo a partir do SplashScreen, com páginas de Login, Home, Menu, Lista de Transferências, Detalhes de Transparência e Filtro, assim trazendo um ar mais completo ao aplicativo.
Algumas páginas tratando o Aplicativo caso tenha algum problema, como:
- Falta de conexão.
- Falta de dados.
- Problema com o servidor.

E páginas demonstrando interação do usuário como:
- Puxe para atualizar as Transferências.
- Lista depois de filtrada.

### Telas

1. ![alt][SplashScreen]
2. ![alt][Login]
3. ![alt][Home]
4. ![alt][FluxoNormal]
5. ![alt][Filtro]
6. ![alt][Filtrado]
7. ![alt][DetalhesDeTransparencia]
8. ![alt][Menu]
9. ![alt][InteracaoDeAtualizacao]
10. ![alt][SemDados]
11. ![alt][SemConexao]
12. ![alt][ProblemaComServidor]

[SplashScreen]: ./prototipo-info/SplashScreen.png "SplashScreen"