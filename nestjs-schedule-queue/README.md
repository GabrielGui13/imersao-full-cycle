## Live

```zsh
npm i -g @nestjs/cli
nest new <nome_do_projeto>
```

## Comandos básicos

* Gerar elementos
```zsh
# criar controller
nest g controller teste

# criar serviço
nest g service database
```

* Gerar um crud/api completo
```zsh
# vai perguntar o transporte: rest, graphql, etc
nest g resource tweets
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
