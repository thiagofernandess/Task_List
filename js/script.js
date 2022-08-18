let contador = 0;
let input = document.getElementById("inputQuest");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaList");

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;
    
    //SE NÃO FOR VAZIO, NEM NULO, INDEFINIDO
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined){
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>

        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}

        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})"class="delete"><i class="mdi mdi-delete">Delete Quest</i></button>
            
        </div>
    </div>`;
        //ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        //ZERAR OS CAMPOS
        input.value = "";
        input.focus();

    }
}

//RECUPERAR O VALOR id="${contador}", NA DIV novoItem
function deletar(id){
    var tarefa = document.getElementById(id);
    //FUNÇÃO .remove DELETA O VALOR RECUPERADO ACIMA
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
    } else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

//PARA ADICIONAR INPUT TECLANDO 'ENTER'(13) AO INVÉS DE CLICAR COM O MOUSE
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        //preventDefault bloqueia o default do ENTER dentro desse elemento 
        event.preventDefault();
        //.click() VAI TRANSFORMAR O ENTER EM UM CLICK DE MOUSE
        btnAdd.click();
    }
})