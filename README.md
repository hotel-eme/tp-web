# hotel-eme backend

Este repositório contém o trabalho prático de front-end mobile, feito em equipe
para a composição de nota da disciplina **Tópicos Especiais de Programação
Orientada a Objetos**. O projeto é feito com:

- JavaScript como linguagem de programação.
- React Native como framework de desenvolvimento mobile.
- Expo como plataforma facilitadora de implantação de aplicativos.

O projeto também inclui uma pequena aplicação back-end, escrita em Python, para
servir algumas APIs necessárias para o desenvolvimento do front-end. Para mais
informações sobre essas APIs, visite [http://localhost:19800/api/](a página de
documentação) uma vez que seu ambiente local esteja preparado e funcionando.

Siga as nossas [instruções de contribuição](./CONTRIBUTING.md) para participar
do desenvolvimento do projeto.


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

```sh
./bin/run
```

O script `run`, quando usado sem outros parâmetros, executa o servidor web no
seu ambiente local através de um container Docker, disponibilizando a aplicação
em http://localhost:19006.

Você também pode executar outros comandos através de um container da aplicação,
ou seja, utilizando as ferramentas que configuramos na nossa imagem Docker. Para
isso, basta passar o comando após o `run`:

```sh
./bin/run node  # Executa o Node incluído na imagem Docker do projeto.
./bin/run-backend python  # Executa o Python também incluído.
```


## Autores

- Evandro Myller
- Alienne Silva
- Carolina Model
- Mauricio Schaefer

## Participação especial

- Marcelo Aguiar
