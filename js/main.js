// Llamar a los nodos
let num1 = document.getElementById('uno');
let num2 = document.getElementById('dos');
let num3 = document.getElementById('tres');
let num4 = document.getElementById('cuatro');
let num5 = document.getElementById('cinco');
let num6 = document.getElementById('seis');
let num7 = document.getElementById('siete');
let num8 = document.getElementById('ocho');
let num9 = document.getElementById('nueve');
let num0 = document.getElementById('cero');
let coma = document.getElementById('coma');
let input = document.getElementById('barra');
let sumar = document.getElementById('sumar');
let restar = document.getElementById('restar');
let multi = document.getElementById('multiplicar');
let dividir = document.getElementById('dividir');
let producto1 = 0;
// Que aparezcan en el input
num1.addEventListener('click', function(){
    input.value += parseInt(num1.value);
});
num2.addEventListener('click', function(){
    input.value += parseInt(num2.value);
});
num3.addEventListener('click', function(){
    input.value += parseInt(num3.value);
});
num4.addEventListener('click', function(){
    input.value += parseInt(num4.value);
});
num5.addEventListener('click', function(){
    input.value += parseInt(num5.value);
});
num6.addEventListener('click', function(){
    input.value += parseInt(num6.value);
});
num7.addEventListener('click', function(){
    input.value += parseInt(num7.value);
});
num8.addEventListener('click', function(){
    input.value += parseInt(num8.value);
});
num9.addEventListener('click', function(){
    input.value += parseInt(num9.value);
});
num0.addEventListener('click', function(){
    input.value += parseInt(num0.value);
});
coma.addEventListener('click', function(){
    input.value += coma.value;
});
sumar.addEventListener('click', function(){
    producto1 += parseFloat(input.value);
    input.value = '';
    console.log(producto1);
})
restar.addEventListener('click', function(){
    
    producto1 = (producto1 == 0) ? parseFloat(input.value) : producto1 - parseFloat(input.value);
    input.value = '';
    console.log(producto1);
})
multi.addEventListener('click', function(){
    producto1 = (producto1 == 0) ? parseFloat(input.value) : producto1 * parseFloat(input.value);
    input.value = '';
    console.log(producto1);
})
dividir.addEventListener('click', function(){
    producto1 = (producto1 == 0) ? parseFloat(input.value) : producto1 / parseFloat(input.value);
    input.value = '';
    console.log(producto1);
})