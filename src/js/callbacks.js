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

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    if (heroe) {
        callback(null, heroe);
    } else {
        callback(`No existe un heroe con el id ${id}`);
    }
};
