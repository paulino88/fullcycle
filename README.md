# Full Cycle 2.0
### Desafio com Docker Compose para montar uma stack completa de desenvolvimento.

Para montar a stack precisamos criar os objetos abaixo:
1. Container MySQL com volume persistente;
2. Desenvolver uma aplicação em NodeJS que faça INSERT's em uma base de dados MySQL;
3. Montar a configuração de um proxy reverso com Nginx, afim de invocar a aplicação criada no item 2 NodeJS;
4. Montar dois Dockerfile, um para o proxy reverso e outro para à aplicação NodeJS;
5. Utilizar MultiStage Build no Dockerfile da aplicação NodeJS;
6. Impedir que a aplicação não seja provisionada antes do banco de dados;
7. Impedir que o proxy reverso seja provisionado antes da aplicação NodeJS;
8. Criar o docker-compose.yml contendo todos objetos da stack;

Pré-requisitos;
1. Nenhum container além do proxy reverso pode ter portas expostas;
2. A stack inteira deve ser provisionada atraves do comando `docker-compose up -d`;
3. Os dados gravados no banco de dados não devem ser perdidos em caso de falhas no container;
-------------------

![image](https://user-images.githubusercontent.com/64498966/151688923-ca72f1c7-8a70-448f-b235-3e142546b88f.png)
