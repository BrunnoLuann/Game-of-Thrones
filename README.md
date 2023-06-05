# API de Personagens de Game of Thrones
Esta API fornece informações sobre personagens da popular série de TV "Game of Thrones". Ela oferece uma variedade de campos de dados para cada personagem, permitindo que você explore seus detalhes e atributos.

# URL Base
A URL base para acessar a API é: https://thronesapi.com/api/v2/Characters

# Acesse o site https://abusive-street.surge.sh/

# Obter Todos os Personagens
Endpoint: /
Método: GET
Descrição: Recupera uma lista de todos os personagens da série Game of Thrones.
Exemplo: https://thronesapi.com/api/v2/Characters

# Obter Personagem por ID
Endpoint: /{id}
Método: GET
Descrição: Recupera informações detalhadas sobre um personagem específico com base em seu ID.
Exemplo: https://thronesapi.com/api/v2/Characters/{id}

# Formato da Resposta
As respostas da API são retornadas no formato JSON e incluem vários detalhes sobre cada personagem, como nome completo, primeiro nome, sobrenome, título, família, imageUrl, história, características e citações.

Aqui está um exemplo de resposta para o endpoint "Obter Personagem por ID":

<li>
"id": 1
</li>
<li>
"fullName": "Jon Snow"
</li>
<li>
 "firstName": "Jon"
</li>
<li>
  "title": "Rei do Norte"
</li>
<li>
"family": "Casa Stark"</li>
<li>
 "imageUrl": "https://example.com/jon_snow.jpg"
</li>

# Tratamento de Erros
Em caso de erros, a API retornará um código de status HTTP apropriado, juntamente com uma mensagem de erro no corpo da resposta.

Aqui estão alguns códigos de status HTTP comuns e seus significados:
<li>
200 OK: A requisição foi bem-sucedida.
</li>
<li>
400 Bad Request: A requisição foi inválida ou faltam parâmetros obrigatórios.
</li>
<li>
404 Not Found: O recurso solicitado não foi encontrado.
</li>
<li>
 500 Internal Server Error: Ocorreu um erro inesperado no servidor.
</li>
<li>
Observe que a API pode ter limites de taxa ou outras restrições de uso. Consulte a documentação da API ou entre em contato com o provedor para obter mais detalhes.
</li>

# Conclusão
A API de Personagens de Game of Thrones permite que você acesse informações detalhadas sobre os personagens da série. Você pode obter uma lista de todos os personagens ou buscar detalhes específicos de um personagem com base em seu ID. Use esta API para aprimorar seus aplicativos ou projetos relacionados a Game of Thrones. Aproveite para explorar o mundo de Westeros!
