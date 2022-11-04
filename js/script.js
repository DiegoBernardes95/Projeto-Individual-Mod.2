// Variáveis do campo de seleção, das áreas de texto e do botão.
const cesar = document.querySelector('#cesar');
const base64 = document.querySelector('#base64');
const enterCode = document.querySelector('#enterCode');
const result = document.querySelector('#outputCode');
const buttonCripto = document.querySelector('#buttonCripto');

// Código do campo de seleção para escolher o método de criptografia.
const method = document.querySelector('.method');
const select = document.querySelector('#chooseCod');
const increment = document.querySelector('.increment');
let inputIncrement = document.createElement('input');
inputIncrement.type = 'number';
inputIncrement.max = '25';
inputIncrement.min = '1';
increment.append(inputIncrement);
increment.remove();
select.addEventListener('change', function (){
    if(select.value === 'Cifra de César'){
        method.append(increment);
    } else{
        increment.remove();
    }
});

// Código para o texto do botão mudar de acordo com o campo radial selecionado.
buttonCripto.addEventListener('click', function(event){
    event.preventDefault();
});
const optionCode = document.querySelector('.optionCode');
buttonCripto.remove();
const typeCripto = document.querySelector('#cripto');
typeCripto.addEventListener('click', function (){
    optionCode.append(buttonCripto);
    buttonCripto.value = 'Codificar';
    buttonCripto.style.backgroundColor = 'blue';
});

const typeDescripto = document.querySelector('#descripto');
typeDescripto.addEventListener('click', function (){
    optionCode.append(buttonCripto);
    buttonCripto.value = 'Decodificar';
    buttonCripto.style.backgroundColor = 'red';
});

// Função para Base64
buttonCripto.addEventListener('click', function (){
    let valueCode = enterCode.value;
    let optionResult = buttonCripto.value;
    if(select.value === 'Base64' && optionResult === 'Codificar'){
        result.value = btoa(valueCode);
    } else if(select.value === 'Base64' && optionResult === 'Decodificar'){
        result.value = atob(valueCode);
    }
});

// Função para Cifra de César
buttonCripto.addEventListener('click', function (){
    let optionResultCesar = buttonCripto.value;
    let numIncrement = (Number(inputIncrement.value) % 26); // essa variável limita o deslocamento do incremento.
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // alfabeto para fazer a codificação.
    const simbols = ['â','ã','á','à','é','ê','è','í','ì','ó','ô','õ','ú','ç','!',',','?','"','.','-','+','=','&','%','$','#','(',')','*','/','^','~','|','@','<','>','{','}','[',']','_',';',':','0','1','3','4','5','6','7','8','9','¹','²','³','ª','º']; // array com os símbolos. 
    let valueCodeCesar = enterCode.value.toLowerCase();
    let messageCodify = ''; // variável onde a mensagem codificada vai ser inserida.
    if(select.value === 'Cifra de César' && optionResultCesar === 'Codificar'){
        for(let i = 0; i < valueCodeCesar.length; i++){
            for(let j = 0; j < alphabet.length; j++){
                if(valueCodeCesar[i] == alphabet[j]){
                    messageCodify += alphabet [j + numIncrement];
                    break;
                } else if(valueCodeCesar[i] == ' '){
                    messageCodify += ' ';
                    break;
                }
            }
            for(let s = 0; s < simbols.length; s++){
                if(valueCodeCesar[i] == simbols[s]){
                    messageCodify += simbols[s];
                    break;
                } 
            }    
        }
        return result.value = messageCodify; 

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
                for(let s = 0; s < simbols.length; s++){
                    if(valueCodeCesar[i] == simbols[s]){
                        messageCodify += simbols[s];
                        break;
                    }
                } 
            }
            return result.value = messageCodify; 
        }
});
