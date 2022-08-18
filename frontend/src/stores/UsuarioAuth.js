import { writable} from "svelte/store";
import { browser } from "$app/env";

export const usuarioAuth = writable(false);
export const usuarioRol = writable("");



export let estadoLogin = false;


usuarioAuth.subscribe(usuario => {
    estadoLogin = usuario;
});

// informacion del usuario
const idInicial = browser ? localStorage.getItem("usuarioId") : 0;
export const usuarioInfo = writable(idInicial);
export let informacion = 0;
usuarioInfo.subscribe(id => {
    if(browser){
        localStorage.setItem("usuarioId", id);
        informacion = id;
    }
});

// Manejar el token de autenticacion;
const inicial = browser ? localStorage.getItem("token") : "null";
export let valorPublico = inicial ? inicial : "null";
export const tokenUsuario = writable(inicial);

tokenUsuario.subscribe(token => {
    if(browser) {
        localStorage.setItem("token", token);
        valorPublico = token;
    }
});

export { tokenUsuario as default };

