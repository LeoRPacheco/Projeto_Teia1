const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/manipulacao-string', (req, res) => {
    const inputString = req.body.texto;

    // Remover espaços e transf em letras minúsculas
    const cleanedString = inputString.toLowerCase().replace(/\s/g, '');

    // Verificar se é palíndromo
    const isPalindrome = cleanedString === cleanedString.split('').reverse().join('');

    // Contar caracteres
    const charCounts = {};
    for (const char of cleanedString) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    // Resposta
    const response = {
        palindromo: isPalindrome,
        ocorrencias_caracteres: charCounts
    };

    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
