// Variáveis do campo de seleção e das áreas de texto
const cesar = document.querySelector('#cesar');
const base64 = document.querySelector('#base64');
const enterCode = document.querySelector('#enterCode');
const closeCode = document.querySelector('#closeCode');

// Código do campo de seleção para escolher o método de criptografia
const method = document.querySelector('.method');
const select = document.querySelector('#changeCod');
const increment = document.createElement('label');
increment.innerHTML = `
    <label class="increment">Incremento 1-25<input type="number"></label>
`;
increment.remove();
select.addEventListener('change', incrementFunction);
function incrementFunction(){
    const changeOption = select.value;
    if(changeOption === 'Cifra de César'){
        method.append(increment);
    } else{
        increment.remove();
    }
}

// Código para o texto do botão mudar de acordo com o campo radial selecionado
const buttonCripto = document.querySelector('#buttonCripto');
const optionCode = document.querySelector('.optionCode');
buttonCripto.remove();
const typeCripto = document.querySelector('#cripto');
typeCripto.addEventListener('click', buttonClickCripto);
function buttonClickCripto(){
    optionCode.append(buttonCripto);
    buttonCripto.value = 'Codificar';
}
const typeDescripto = document.querySelector('#descripto');
typeDescripto.addEventListener('click', buttonClickDescripto);
function buttonClickDescripto(){
    optionCode.append(buttonCripto);
    buttonCripto.value = 'Decodificar';
}