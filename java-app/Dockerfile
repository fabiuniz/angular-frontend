# Estágio de construção da aplicação
# Usamos a imagem oficial do Maven com OpenJDK 17 para compilar o projeto.
FROM maven:3.8.4-openjdk-17 AS builder

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Copia os arquivos de configuração do Maven.
COPY pom.xml .

# Copia o código-fonte da aplicação.
COPY src ./src

# Compila a aplicação e empacota o JAR, pulando os testes para maior agilidade.
RUN mvn clean package -DskipTests

# --- Estágio final para rodar a aplicação ---

# Usamos uma imagem mais leve do OpenJDK 17 para o contêiner final.
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho.
WORKDIR /app

# Copia o arquivo JAR do estágio 'builder' para o contêiner final.
# O nome do arquivo pode variar, verifique a pasta 'target' do seu projeto.
COPY --from=builder /app/target/hello-world-java-1.0-SNAPSHOT.jar /app/app.jar

# Expõe a porta que a aplicação Java utiliza.
EXPOSE 8080

# Comando para rodar a aplicação quando o contêiner for iniciado.
CMD ["java", "-jar", "/app/app.jar"]