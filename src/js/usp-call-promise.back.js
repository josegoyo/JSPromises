import { buscarHeroe as buscarHeroeCallback } from "./callbacks";
import { buscarHeroe } from "./promises";

// Callback example

/*buscarHeroe("capi", (error, heroe) => {
    if (error) {
        return console.log(error);
    }

    console.log(heroe);
});*/

let id = "capi";
let id2 = "spider";
/*buscarHeroe(id)
    .then((heroe) => {
        console.log("response", heroe);
    })
    .catch((error) => {
        console.log(error);
    });*/

Promise.all([buscarHeroe(id), buscarHeroe(id2)])
    .then(([heroe1, heroe2]) => {
        console.log("response", heroe1.nombre, heroe2.nombre);
    })
    .catch((error) => {
        alert(error);
    })
    .finally(() => {
        console.log("se termino el promise all");
    });
