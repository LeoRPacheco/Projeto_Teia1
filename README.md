 POST para manipular uma string enviada no body da requisição

 Corpo de entrada (JSON): {"texto": "String de entrada"}

 Corpo de saída(JSON): {"palindromo": true/false, "ocorrencias_caracteres": {"caractere1": quantidade1, "caractere2: quantidade 2, ...}}

 Linguagem: NodeJs

 Instruções de instalação:

# Instale as dependências
npm install

# Execute o servidor
node index.js


 Exemplo de requisição: 

# Enviar uma requisição POST para processar uma string
curl -X POST -H "Content-Type: application/json" -d '{"texto": "arara"}' http://localhost:3000/processar-string


 Resposta da chamada:

{
    "palindromo": true,
    "ocorrencias_caracteres": {
        "a": 3,
        "r": 2
    }
}

 Estrutura do projet:

├── index.js
├── package.json
└── README.md
