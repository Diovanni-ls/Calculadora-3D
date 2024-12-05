function insert(num) {
    const resultado = document.getElementById('resultado');
    resultado.textContent += num;

    // Rola automaticamente para o final do visor
    resultado.scrollLeft = resultado.scrollWidth;
}

function calcular() {
    const resultado = document.getElementById('resultado');
    try {
        resultado.textContent = eval(resultado.textContent);

        // Rola automaticamente para o final do visor
        resultado.scrollLeft = resultado.scrollWidth;
    } catch (error) {
        resultado.textContent = 'Erro';
    }
}


function clean(){
    document.getElementById('resultado').innerHTML = '';
}

function back(){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length -1);
}
