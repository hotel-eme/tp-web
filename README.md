# Trabalho Prático de desenvolvimento web

Este repositório contém o trabalho prático feito em equipe para a composição de
nota das seguintes disciplinas, ministradas no curso de Análise e
Desenvolvimento de Sistemas da UNIP:

- Tópicos Especiais de Programação Orientada a Objetos
- Programação Orientada a Objetos II

Siga as nossas [instruções de contribuição](./CONTRIBUTING.md) para participar
do desenvolvimento do projeto.

A aplicação se encontra online nos seguintes endereços:

- back-end: https://emyller-tp-backend.herokuapp.com/api/
- front-end: https://emyller-tp-frontend.herokuapp.com/

A atualização desses ambiente (_deploy_) é feita de forma automática, através do
GitHub Actions, onde implantamos um sistema de _continuous delivery_. A solução
de infraestrutura utilizada foi o Heroku.


## Screenshots

Confira capturas de tela de cada parte do projeto:

- [Back-end](./backend/screenshots/_galeria.md)
- Front-end web
- [Front-end mobile](./mobile/screenshots/_galeria.md)


## Ferramentas e tecnologias

O projeto é feito com:

- JavaScript como linguagem de programação para front-end.
- Python como linguagem de programação para back-end.
- React Native como framework de desenvolvimento _mobile_.
- Expo como plataforma facilitadora de implantação de aplicativos.
- Django como framework de desenvolvimento back-end MVC.
- Django REST Framework como framework de desenvolvimento de APIs REST.


## Partes do projeto

O projeto inclui três partes principais, localizadas em diretórios distintos,
sendo cada uma responsável por um aspecto do sistema.

- `backend/`: contém as modelagens de dados e APIs usadas no front-end.
- `frontend/`: contém a aplicação para front-end web, usada em navegadores.
- `mobile/`: contém a aplicação para front-end _mobile_, usada em celulares.


## O que é necessário instalar?

[Docker][], nada mais. É muito provável que o seu sistema operacional ofereça a
instalação através de um gerenciador de pacotes, como o `chocolatey` (Windows),
`brew` (MacOS), `apt` (Ubuntu), `pacman` (Arch Linux), etc.

Utilizamos Docker como facilitador de configuração do ambiente local, evitando
a necessidade de baixar, instalar e configurar outras ferramentas
individualmente. Verifique o seu funcionamento:

```sh
docker info  # Deve exibir informações sobre o Docker no seu computador.
docker-compose version  # Deve exibir a versão, se estiver instalado.
```

> Dependendo da plataforma, pode ser necessário instalar o [Docker Compose][]
manualmente.

[Docker]: https://docs.docker.com/get-docker/
[Docker Compose]: https://docs.docker.com/compose/install/


## Como executar a aplicação no ambiente local

Incluímos um script no diretório `.bin` que auxilia na execução de cada parte do
projeto. A seguir, conferimos instruções para cada um.

> Se sua intenção é executar todos os serviços simultaneamente, você pode usar o
> comando `docker-compose up`, ignorando os tópicos a seguir.

### Back-end

```sh
.bin/run-backend
```

O comando acima executa um container com a aplicação de backend, junto ao
container de banco de dados.

Acesse o ambiente em http://localhost:19800.

### Front-end (web)

```sh
.bin/run-frontend
```

O comando acima executa um container com a aplicação de front-end, junto aos
containers para o banco de dados e aplicação de back-end, pois são necessários
para o funcionamento da aplicação.

Acesse o ambiente em http://localhost:19300.


### Mobile

```sh
.bin/run-mobile
```

O comando acima executa um container com a aplicação de front-end _mobile_,
junto aos containers para o banco de dados e aplicação de back-end, pois são
necessários para o funcionamento da aplicação.

Acesse o ambiente em http://localhost:19006.

### Outros comandos

Cada script `run` também pode executar outros comandos através de um container
do ambiente correspondente, ou seja, utilizando as ferramentas que configuramos
em cada imagem Docker.

```sh
.bin/run-mobile npm list  # Lista os pacotes instalados no mobile
.bin/run-backend python manage.py showmigrations  # Lista migrações do backend
```


## Autores

- Evandro Myller
- Alienne Silva
- Carolina Model
- Mauricio Schaefer

## Participação especial

- Marcelo Aguiar
