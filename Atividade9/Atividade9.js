var opcao;
var tresNum = new Array();

alert("Informe 3 números!")
for(let i=1;i<=3;i++){
    tresNum[i-1] = prompt("Informe o " + i +"º número: ");
}

opcao = prompt("Você deseja:\nEncontrar o maior entre 3 números? ->1\nOrdenar 3 números? ->2")

switch(parseInt(opcao)){
    case 1:
        alert("O Maior número é: " + encontraMaior(tresNum))
    case 2:
        ordena(tresNum);
        
        break;
}


function encontraMaior(numeros){
    var maior = numeros[0];
    for(let i=0;i<numeros.length;i++){
        if (maior < numeros[i]){
            maior = numeros[i];
        }
    }
    return maior;
}

function ordena(numeros){
    let n = numeros.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i - 1; j++){
            if (numeros[j] > numeros[j + 1]) {
                let aux = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = aux;
            }
        }
    }
    alert("O 1º agora é número : " + numeros[0]+"\n");
    alert("O 2º agora é número : " + numeros[1]+"\n");
    alert("O 3º agora é número : " + numeros[2]+"\n");
}
