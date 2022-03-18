const heroes = {
    capi: {
        nombre: "Capitan America",
        poder: "aguantar golpes",
    },
    iron: {
        nombre: "Ironman",
        poder: "tener mucho dinero",
    },
    spider: {
        nombre: "Spiderman",
        poder: "tener la mejor reaccion a los peligros",
    },
};

export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }
    });
};

export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        throw Error(`No existe un heroe con el id ${id}`);
    }
};

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`promesa lenta`);
    }, 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`promesa media`);
    }, 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`promesa rapida`);
    }, 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };
