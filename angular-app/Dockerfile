# Estágio de construção da aplicação Angular
FROM node:18-alpine as builder

# Define o diretório de trabalho no contêiner.
WORKDIR /app

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli@17

# Copia os arquivos de configuração do npm para aproveitar o cache do Docker.
COPY package*.json ./

# Instala todas as dependências do npm.
RUN npm install

# Copia o restante do projeto Angular.
COPY . .

# Constrói a aplicação em modo de produção.
RUN ng build --configuration production

# --- Estágio final usando o Nginx ---
# Usa uma imagem oficial do Nginx.
FROM nginx:stable-alpine

# Remove a configuração padrão do Nginx.
RUN rm /etc/nginx/conf.d/default.conf

# Copia uma configuração customizada do Nginx para SPAs
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos compilados do estágio 'builder' para a pasta do Nginx.
COPY --from=builder /app/dist/frontend-angular/ /usr/share/nginx/html/

# Expõe a porta 80 do contêiner.
EXPOSE 8081

# Comando para iniciar o Nginx.
CMD ["nginx", "-g", "daemon off;"]