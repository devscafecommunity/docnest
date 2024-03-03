const esprima = require('esprima');
const fs = require('fs');

// Função para analisar o código fonte e extrair os comentários
function extractComments(code) {
    const ast = esprima.parseScript(code, { comment: true, loc: true });
    const comments = ast.comments.map(comment => ({
        value: comment.value.trim(),
        loc: comment.loc.start
    }));
    return comments;
}

// Função para gerar a documentação com base nos comentários
function generateDocumentation(comments) {
    const documentation = [];
    comments.forEach(comment => {
        documentation.push({
            comment: comment.value,
            line: comment.loc.line
        });
    });
    return documentation;
}

// Ler o código fonte de um arquivo
const code = fs.readFileSync('code.js', 'utf-8');

// Extrair os comentários do código
const comments = extractComments(code);

// Gerar a documentação com base nos comentários extraídos
const documentation = generateDocumentation(comments);

// Exibir a documentação gerada
console.log(documentation);