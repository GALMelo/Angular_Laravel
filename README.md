# Mesha_test

Para começar o projeto primeiro vamos criar nosso banco de dados para a nossa API:

- Utilizando mysql devemos criar um banco de dados;
- Dentro da pasta api_mesha devemos criar um arquivo chamado .env seguindo o modelo .env.example;
- Nesse ponto devemos nos atentar no nosso .env as variáveis: DB_DATABASE, DB_USERNAME e DB_PASSWORD. Devemos colocar o nome e as credenciais do banco que acabamos de criar:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=Example
DB_USERNAME=root
DB_PASSWORD=root

- Apos criarmos nosso banco de dados devemos rodar o seguinte comando:
  php artisan migrate

- Com ele a table de user deve ser criada no banco de dados que você acaba de criar;
- Após criada a table de user podemos usar o comando:
  php artisan serve
- Inciando assim a nossa api na porta: 8000
- Caso queira testar basta acessar: http://127.0.0.1:8000 e a página de boas vindas do laravel deve aparecer.
