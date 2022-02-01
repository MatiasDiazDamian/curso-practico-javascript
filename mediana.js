function calcularMedinaAritmetica(lista){
  const sumarLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumarLista / lista.length;
  return promedioLista;
};

const lista1 = [
 100,
 200,
 600,
 40000,
];

const mitadLista1 = parseInt(lista1.length / 2); 

function  esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana; 

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const promedioElemento1y2 = calcularMedinaAritmetica([
    elemento1,
    elemento2,
  ]);

  mediana = promedioElemento1y2;
} else {
  mediana = lista1[mitadLista1];
}