let habilidades: string[] = ['Hola'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bush', 'Counter', 'Healing']
}

console.table(personaje);