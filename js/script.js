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
        <div class="item-icone">
            <i class="mdi mdi-circle-outline"></i>

        </div>
        <div class="item-nome">
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

//PARA ADICIONAR INPUT TECLANDO 'ENTER'(13) AO INVÉS DE CLICAR COM O MOUSE
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        //preventDefault bloqueia o default do ENTER dentro desse elemento 
        event.preventDefault();
        //.click() VAI TRANSFORMAR O ENTER EM UM CLICK DE MOUSE
        btnAdd.click();
    }
})