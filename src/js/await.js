import { buscarHeroeAsync } from "./promises";
const heroesIds = ["capi", "spider", "iron"];

export const obtenerHeroesArr = async () => {
    const heroesArr = [];

    for (const id of heroesIds) {
        heroesArr.push(buscarHeroeAsync(id));
    }

    return await Promise.all(heroesArr);
};

export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        console.log("catch await");
        throw error;
    }
};
