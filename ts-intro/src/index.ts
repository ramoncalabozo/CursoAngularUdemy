interface Detalles{
    autor: string;
    anio: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

console.log('El valumen actual es de: ' + reproductor.volumen);
console.log('El segundo actual es: ' + reproductor.segundo);
console.log('La canción actual es : ' + reproductor.cancion);
console.log('El autor es: ' + reproductor.detalles.autor);