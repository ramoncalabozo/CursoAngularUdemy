interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}


const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion:{
        calle: 'Main str',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.calle;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);