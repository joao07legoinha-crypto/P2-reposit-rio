# Alínea 3a - Dados a Processar/Armazenar no Servidor

## User Story USR1 - Autenticação
- Dados recebidos: username, password.
- Processamento no servidor: validação das credenciais.
- Dados armazenados/calculados: atualização do último acesso e criação de registo em `acessos`.

## User Story USR2 - Pesquisa de disponibilidade
- Dados recebidos: tipo, destino, data.
- Processamento no servidor: leitura dos valores submetidos e preparação da pesquisa.
- Dados armazenados/calculados: parâmetros da pesquisa e resposta apresentada ao utilizador.

## User Story USR3 - Registo de reserva
- Dados recebidos: nome, email, tipo, destino, data, método de pagamento.
- Processamento no servidor: validação e inserção da reserva na base de dados.
- Dados armazenados/calculados: criação do registo em `reservas` com data/hora de criação.

## User Story USR4 - Consulta de acessos
- Dados lidos: username e data/hora dos acessos.
- Processamento no servidor: leitura da tabela `acessos`.
- Dados armazenados/calculados: listagem ordenada dos acessos por data/hora.
