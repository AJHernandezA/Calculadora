const lista1 = [
    100,
    200,
    300,
    400,
    100,
    200,
    200,
    500,
    700,
]

/****** MEDIA ARITMETICA *****************/

const calcularMediaAritmetica = (lista) => {
    //let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

/********* MEDIANA ******************/

const ordenarLista = (lista) => {
    const ordenada = lista.sort(function(a, b) {
      return a - b;
    });
    return ordenada;
}

const esPar = (numero) => {
    if(numero % 2 === 0) {
      return true;
    }else {
      return false;
    }
  }

const calcularMediana = (lista) => {
    const listaOrdenada = ordenarLista(lista);
  
    const mitadLista = parseInt(listaOrdenada.length / 2);
  
    let mediana;
  
    if(esPar(listaOrdenada.length)) {
      const elemento1 = listaOrdenada[mitadLista - 1];
      const elemento2 = listaOrdenada[mitadLista];
  
      const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
  
      mediana = promedioElemento1y2;
    } else{
      mediana = listaOrdenada[mitadLista];
    }
    
    return mediana;
}

//********* MODA ************/
const lista1Count = {};

lista1.map (
    function(elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] = lista1Count[elemento]+1;
        } else{
            lista1Count[elemento]=1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
  function(valorAcumulado,nuevoValor){
    return valorAcumulado[1] - nuevoValor[1];
  }
);

const moda = lista1Array[lista1Array.length-1];

/********* PROMEDIO PONDERADO */
const notes = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];

const notesWithCredit = notes.map(function (noteObject) {
  return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);

const credits = notes.map(function (noteObject) {
  return noteObject.credit;
});

const sumOfCredits = credits.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;