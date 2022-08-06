## Mesha_test

# Api

- Para começar o projeto primeiro vamos criar nosso banco de dados para a nossa API;
- Utilizando mysql devemos criar um banco de dados;
- Dentro da pasta api_mesha devemos criar um arquivo chamado .env seguindo o modelo .env.example;
- Nesse ponto devemos nos atentar no nosso .env as variáveis: DB_DATABASE, DB_USERNAME e DB_PASSWORD. Devemos colocar o nome e as credenciais do banco que acabamos de criar:

DB_CONNECTION=mysql<br>
DB_HOST=127.0.0.1<br>
DB_PORT=3306<br>
DB_DATABASE=Example<br>
DB_USERNAME=root<br>
DB_PASSWORD=root

- Apos criarmos nosso banco de dados devemos rodar o seguinte comando:
  `php artisan migrate`

- Com ele a table de user deve ser criada no banco de dados que você acaba de criar;
- Após criada a table de user podemos usar o comando:
  `php artisan serve`
- Inciando assim a nossa api na porta: 8000
- Caso queira testar basta acessar: http://127.0.0.1:8000 e a página de boas vindas do laravel deve aparecer.

# Front

- Para inciar o nosso front com angular devemos rodar primeiramente o comando para instalar todos modulos do projeto:
  `npm install`

- Após todos os modulos baixados basta rodar:
  `ng serve`
  Para iniciar o servidor do angular;

- Com o servidor ligado temos acesso as seguintes rotas:
- Rota para acessar o form de cadastro http://localhost:4200/NOMECOLABORADOR/registrar
- Rota com todos os colaboradores registrados http://localhost:4200/registros
- Rota para ter acesso aos dados do colaborador e validar ou não o mesmo http://localhost:4200/NOMECOLABORADOR/validar
