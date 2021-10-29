FROM node:16
WORKDIR /app

# Instala Expo CLI globalmente
# https://www.npmjs.com/package/expo-cli
RUN npm -g --allow-root install expo-cli@4.12.10

# Instala dependências do projeto
COPY package.json package-lock.json .
RUN npm install
