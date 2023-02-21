const form = document.getElementById('form-agenda');
const msg = '<img src="./images/telefone.png" alt="Telefone" />';
const ligar = '<img src="./images/mensagem.png" alt="Telefone" />';
const atividades = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    let inputNomeContato = document.getElementById('nome-contato');
    let inputNumeroContato = document.getElementById('numero-contato');

    if (atividades.includes(inputNumeroContato.value)) {
        alert(`O número: ${inputNumeroContato.value} já foi inserido`);
    } else {
        atividades.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value >= 11 ? msg : msg}</td>`;
        linha += `<td>${inputNumeroContato.value >= 11 ? ligar : msg}</td>`;
        linha += '</tr>';

        linhas += linha;
        atualizaTabela();
    }
    
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}