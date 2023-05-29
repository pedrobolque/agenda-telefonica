const form = document.getElementById("form-agenda");
const nomes = [];
const numeros = [];


 let linhas ='';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

 function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumAgenda = document.getElementById('numero-agenda');

    if(nomes.includes(inputNomeAgenda.value)) {
        alert(`O nome ${inputNomeAgenda.value} já foi inserido!`);
    }
    else{
        nomes.push(inputNomeAgenda.value);
        numeros.push(inputNumAgenda.value);

        let linha = '<tr>';
        linha+= `<td>${inputNomeAgenda.value}</td>`;
        linha+=`<td>${inputNumAgenda.value}</td>`;
        linha+=`</tr>`;

        linhas+= linha;
    }
   

    inputNomeAgenda.value = '';
    inputNumAgenda.value = '';
 }

 function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML =linhas
 }