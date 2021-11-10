FROM node:16

# Configura acesso ao usuário da imagem Docker
WORKDIR /app
RUN chown node:node /app
USER node

# Instala dependências do projeto
COPY package.json .
RUN npm install
