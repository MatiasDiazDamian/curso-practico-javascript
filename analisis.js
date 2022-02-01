//Helpers 
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
  
  function calcularMedinaAritmetica(lista){
      const sumarLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
      );
      const promedioLista = sumarLista / lista.length;
      return promedioLista;
    };

//Calculadora de Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMedinaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
        } else {
            const personitaMitad = lista[mitad];
            return personitaMitad; 
        }
    }
  
//Mediana General
const salariosArg = argentina.map(
 function (personita) {
     return personita.salary;
   }
);

const salariosArgSorted = salariosArg.sort(
 function (salaryA, salaryB) {
   return salaryA - salaryB;
 }
);

//Mediana del top 10%


const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length - spliceStart;

const slarioArgTop10 = salariosArgSorted.splice(
    spliceStart,
    spliceCount
);


const medianaGeneralArg = medianaSalarios(salariosArgSorted);
const medianaTop10Arg = medianaSalarios(slarioArgTop10);

console.log({
    medianaGeneralArg, 
    medianaTop10Arg
});