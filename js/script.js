// Variáveis do campo de seleção e das áreas de texto
let cesar = document.querySelector('#cesar');
let base64 = document.querySelector('#base64');
let enterCode = document.querySelector('#enterCode');
let closeCode = document.querySelector('#closeCode');

// Código do campo de seleção para escolher o método de criptografia
let method = document.querySelector('.method');
let select = document.querySelector('#changeCod');
let increment = document.querySelector('.increment');
let inputIncrement = document.createElement('input');
inputIncrement.type = 'number';
inputIncrement.max = '26';
inputIncrement.min = '1';
increment.append(inputIncrement);
increment.remove();
select.addEventListener('change', incrementFunction);
function incrementFunction(){
    if(select.value === 'Cifra de César'){
        method.append(increment);
    } else{
        increment.remove();
    }
}

// Código para o texto do botão mudar de acordo com o campo radial selecionado
let buttonCripto = document.querySelector('#buttonCripto');
let optionCode = document.querySelector('.optionCode');
buttonCripto.remove();
let typeCripto = document.querySelector('#cripto');
typeCripto.addEventListener('click', buttonClickCripto);
function buttonClickCripto(){
    optionCode.append(buttonCripto);
    buttonCripto.value = 'Codificar';
}
let typeDescripto = document.querySelector('#descripto');
typeDescripto.addEventListener('click', buttonClickDescripto);
function buttonClickDescripto(){
    optionCode.append(buttonCripto);
    buttonCripto.value = 'Decodificar';
}

// Função para Base64
buttonCripto.addEventListener('click', base64Codify);
function base64Codify(){
    let valueCode = enterCode.value;
    let optionResult = buttonCripto.value;
    if(select.value === 'Base64' && optionResult === 'Codificar'){
        closeCode.value = btoa(valueCode);
    } else if(select.value === 'Base64' && optionResult === 'Decodificar'){
        closeCode.value = atob(valueCode);
    }
}

// Função para Cifra de César
buttonCripto.addEventListener('click', cesarCodify);
function cesarCodify(){
    let optionResultCesar = buttonCripto.value;
    let numIncrement = (Number(inputIncrement.value) % 26); // essa variável limita o deslocamento do incremento.
    let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"; // alfabeto para fazer a condificação.
    let valueCodeCesar = enterCode.value.toLowerCase(); // essa váriavel transforma em minúscula as letras do campo de texto onde o usuário digita, para que no if os valores sejam semelhantes quando comparados com o alphabet.
    let messageCodify = ''; // variável onde a mensagem codificada vai ser inserida.
    if(select.value === 'Cifra de César' && optionResultCesar === 'Codificar'){
        for(let i = 0; i < valueCodeCesar.length; i++){ // Vai ler cada caractere inserido na área de texto.
            for(let j = 0; j < alphabet.length; j++){ // Vai ler os caracteres do alphabet, tendo de ponto de referência o 'For' que pertence.
                if(valueCodeCesar[i] == alphabet[j]){ // condição para acontecer a criptografia.
                    messageCodify += alphabet [j + numIncrement]; // será inserido no messageCodify a string do alphabet a partir do incremento escolhido pelo usuário.
                    break;
                } else if(valueCodeCesar[i] == ' '){
                    messageCodify += ' ';
                    break;
                }
            }
        }
        return closeCode.value = messageCodify; 

    } else if(select.value === 'Cifra de César' && optionResultCesar === 'Decodificar'){
            for(let i = 0; i < valueCodeCesar.length; i++){
                for(let j = alphabet.length - 1; j >= 0; j--){
                    if(valueCodeCesar[i] == alphabet[j]){
                        messageCodify += alphabet [j - numIncrement]
                        break;
                    } else if(valueCodeCesar[i] == ' '){
                        messageCodify += ' ';
                        break;
                    }
                }
            }
            return closeCode.value = messageCodify; 
        }
};
