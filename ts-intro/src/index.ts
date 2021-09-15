function sumar (a: number, b: number) : number{
    return a + b;
}

const sumarFlecha = (a: number, b: number) : number => {
    return a + b;
}

function multiplicar (a: number, b?: number, base: number = 2) : number {
    return a * base;
}

let resultadoSuma = sumar(5, 7);

console.log(resultadoSuma);

console.log(sumarFlecha);

let resultadoMultiplicacion = multiplicar(5);

function curar(): void{
    
}