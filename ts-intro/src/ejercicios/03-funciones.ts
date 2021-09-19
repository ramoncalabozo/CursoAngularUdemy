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

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR= {
    nombre: 'Pedo',
    pv: 30,
    mostrarHP(){
        console.log('Los puntos de vida son:', this.pv);
    }
}

curar(nuevoPersonaje,20);