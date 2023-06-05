# API de Personagens de Game of Thrones
Esta API fornece informações sobre personagens da popular série de TV "Game of Thrones". Ela oferece uma variedade de campos de dados para cada personagem, permitindo que você explore seus detalhes e atributos.

## URL Base
A URL base para acessar a API é: https://thronesapi.com/api/v2/Characters

## Endpoints
## Obter Todos os Personagens
Endpoint: /
Método: GET
Descrição: Recupera uma lista de todos os personagens da série Game of Thrones.
Exemplo: https://thronesapi.com/api/v2/Characters
## Obter Personagem por ID
Endpoint: /{id}
Método: GET
Descrição: Recupera informações detalhadas sobre um personagem específico com base em seu ID.
Exemplo: https://thronesapi.com/api/v2/Characters/{id}
## Formato da Resposta
As respostas da API são retornadas no formato JSON e incluem vários detalhes sobre cada personagem, como nome completo, primeiro nome, sobrenome, título, família, imageUrl, história, características e citações.

Aqui está um exemplo de resposta para o endpoint "Obter Personagem por ID":

json
Copy code
{
  "id": 1,
  "fullName": "Jon Snow",
  "firstName": "Jon",
  "lastName": "Snow",
  "title": "Rei do Norte",
  "family": "Casa Stark",
  "imageUrl": "https://example.com/jon_snow.jpg",
  "history": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "characteristics": "Corajoso, leal, espadachim habilidoso",
  "quotes": ["O inverno está chegando.", "Eu não sei de nada."]
}
## Tratamento de Erros
Em caso de erros, a API retornará um código de status HTTP apropriado, juntamente com uma mensagem de erro no corpo da resposta.

Aqui estão alguns códigos de status HTTP comuns e seus significados:

200 OK: A requisição foi bem-sucedida.
400 Bad Request: A requisição foi inválida ou faltam parâmetros obrigatórios.
404 Not Found: O recurso solicitado não foi encontrado.
500 Internal Server Error: Ocorreu um erro inesperado no servidor.
Observe que a API pode ter limites de taxa ou outras restrições de uso. Consulte a documentação da API ou entre em contato com o provedor para obter mais detalhes.

## Conclusão
A API de Personagens de Game of Thrones permite que você acesse informações detalhadas sobre os personagens da série. Você pode obter uma lista de todos os personagens ou buscar detalhes específicos de um personagem com base em seu ID. Use esta API para aprimorar seus aplicativos ou projetos relacionados a Game of Thrones. Aproveite para explorar o mundo de Westeros!
