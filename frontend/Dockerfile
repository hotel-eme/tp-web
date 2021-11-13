FROM node:16

# Configura acesso ao usuário da imagem Docker
WORKDIR /app

# Instala dependências do projeto
COPY package.json .
RUN npm config set unsafe-perm true
RUN npm install --force
