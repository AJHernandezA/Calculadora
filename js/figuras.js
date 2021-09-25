//FORMULAS PARA CALCULOS

//************** CODIGO DEL CUADRADO

const perimetroCuadrado = (lado) => lado*4;

const areaCuadrado = (lado) => lado*lado;

//************* CODIGO DEL TRIANGULO */

const perimetroTriangulo = (lado1,lado2,base) => lado1 + lado2 + base;

const areaTriangulo = (base,altura) => ((base*altura)/2).toFixed(2);

const trianguloIsosceles = (lado1,lado2,base) => {
    if (lado1 == lado2 && lado1 != base) {
        altura = Math.sqrt((lado1 ** 2) - (base ** 2) / 4 );
        return altura.toFixed(2);
    } else {
        return false;
    }
} 

/********** CODIGO DEL CICRCULO */

const PI = Math.PI;

const diametroCirculo = (radio) => radio * 2;

const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio); 
    return (diametro * PI).toFixed(2);
}

const areaCirculo = (radio) => ((radio * radio) * PI).toFixed(2);

/**Limpiar error */

const cleanError = (id) => {
    errors = document.getElementById(id).querySelectorAll('.error');
    for (e of errors) {
        e.innerHTML = '';
    }
}

// EJECUCIÓN
// ==========


//VALIDACIONES

const checkInputsCuadrado = (l1) => {
    if (Number.isNaN(l1) || l1 <= 0) {
        e = document.getElementById('errorCL1');
        e.innerHTML = 'Ingrese un valor válido para el Lado';
        return false;
    }
    return true;
}

function checkInputsTriangulo (l1, l2, b, h) {
    if (h == false) {
        if (Number.isNaN(l1) || l1 <= 0) {
            e = document.getElementById('errorT1');
            e.innerHTML = 'Ingrese un valor válido para el Lado A';
            return false;
        }

        if (Number.isNaN(l2) || l2 <= 0) {
            e = document.getElementById('errorT2');
            e.innerHTML = 'Ingrese un valor válido para el Lado B';
            return false;
        }
        if (Number.isNaN(b) || b <= 0) {
            e = document.getElementById('errorTBase');
            e.innerHTML = 'Ingrese un valor válido para la Base';
            return false;
        }
        } else {
        if (Number.isNaN(b) || b <= 0) {
            e = document.getElementById('errorTBase');
            e.innerHTML = 'Ingrese un valor válido para la Base';
            return false;
        }
        if (Number.isNaN(h) || h <= 0) {
            e = document.getElementById('errorTAltura');
            e.innerHTML = 'Ingrese un valor válido para la Altura';
            return false;
        }

    }
    return true;
}

function checkInputsCirculo(l1) {
    if (Number.isNaN(l1) || l1 <= 0) {
        e = document.getElementById('errorCirculo');
        e.innerHTML = 'Ingrese un valor válido para el radio';
        return false;
    }
    return true;
}

// Cuadrado



const renderResultSquare = (r, dimension) =>{
    const resultado = document.getElementById("respuesta-cuadrado");
    const unit = dimension == 'Area' ? 'cm<span>2</span>' : 'cm';
    resultado.innerHTML = `El ${dimension} del cuadrado <br>es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularPerimetroCuadrado() {
    cleanError('cuadrados');

    const lado = parseInt(document.getElementById('inputCuadrado').value);

    if(checkInputsCuadrado(lado)) {
        const result = perimetroCuadrado(lado);
        renderResultSquare(result, 'Perimetro');
    }
}

function calcularAreaCuadrado() {
    cleanError('cuadrados');

    const lado = parseInt(document.getElementById('inputCuadrado').value);
    if (checkInputsCuadrado(lado)) {
        const result = areaCuadrado(lado);
        renderResultSquare(result, 'Area');
    }
}

//Triangulo

const renderResultTriangulo = (r, dimension) =>{
    const resultado = document.getElementById("respuesta-triangulo");
    const unit = dimension == 'Area' ? 'cm<span>2</span>' : 'cm';
    resultado.innerHTML = `El ${dimension} del triangulo <br> es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularAreaTriangulo() {
    cleanError('triangulos');

    const lado1 = false;
    const lado2 = false;
    const base = parseInt(document.getElementById('inputBase').value);
    const altura = parseInt(document.getElementById('inputAltura').value);

    if (checkInputsTriangulo(lado1, lado2, base, altura)) {
        const result = areaTriangulo(base, altura);
        renderResultTriangulo(result, 'Area');
    }
}

function calcularPerimetroTriangulo() {
    cleanError('triangulos');

    const lado1 = parseInt(document.getElementById('inputTriangulo1').value);
    const lado2 = parseInt(document.getElementById('inputTriangulo2').value);
    const base = parseInt(document.getElementById('inputBase').value);
    const altura =  false;

    if (checkInputsTriangulo(lado1, lado2, base, altura)) {
        const result = perimetroTriangulo(lado1, lado2, base);

        renderResultTriangulo(result, 'Perimetro');
    }    
}

// Circulo

const renderResultCirculo = (r, dimension) =>{
    const resultado = document.getElementById("respuesta-circulo");
    const unit = dimension == 'Area' || 'Diametro' ? 'cm<span>2</span>' : 'cm';
    resultado.innerHTML = `El ${dimension} del Circulo <br> es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularPerimetroCirculo() {
    cleanError('circulos');
    
    const radio = parseInt(document.getElementById('inputCirculo').value);

    if(checkInputsCirculo(radio)){
        const result = perimetroCirculo(radio);
        renderResultCirculo(result, 'Perimetro');
    }
}

function calcularAreaCirculo() {
    cleanError('circulos');
    
    const radio = parseInt(document.getElementById('inputCirculo').value);

    if(checkInputsCirculo(radio)){
        const result = areaCirculo(radio);
        renderResultCirculo(result, 'Area');
    }
}

function calcularDiametroCirculo() {
    cleanError('circulos');
    
    const radio = parseInt(document.getElementById('inputCirculo').value);

    if(checkInputsCirculo(radio)){
        const result = diametroCirculo(radio);
        renderResultCirculo(result, 'Diametro');
    }
}

























