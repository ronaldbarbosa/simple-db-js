# REST API & LowDB
Base de dados simples em JSON.<br>
Todas as tarefas possuem um id, gerado pelo módulo uuid.

## Instalação
npm i npm start

## Execução
npm start

## Utilização
#### URL base: http://localhost:3000/

| Método | Descrição | Caminho | Request body |
| ------ | :--------: | :-----: | -----------:|
| GET | Buscando todas as tarefas | /tasks | Não |
| GET | Buscando uma tarefa específica | /tasks/{id} | Não |
| POST |  Criando uma tarefa | /tasks | Sim |
| PUT | Atualizando uma tarefa | /tasks/{id} | Sim |
| DELETE | Deletando uma tarefa | /tasks/{id} | Não |
| GET | Número total de tarefas | /tasks/count | Não |


