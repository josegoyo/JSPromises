import "./styles.css";
import { buscarHeroeAsync, buscarHeroe } from "./js/promises";
import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";

//Promise.race([promesaLenta, promesaMedia, promesaRapida])
//    .then(console.log).warn(console.warn);

/*buscarHeroe("capi")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

buscarHeroeAsync("iron")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });*/

obtenerHeroeAwait("capi")
    .then((response) => {
        console.log(response);
    })
    .catch(console.warn);
