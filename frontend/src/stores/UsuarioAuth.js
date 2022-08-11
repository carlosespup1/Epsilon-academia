import { writable} from "svelte/store";

export const usuarioAuth = writable(false);
export const usuarioRol = writable("");
export const usuarioInfo = writable({});

export let estadoLogin = false;
export let informacion = {};

usuarioAuth.subscribe(usuario => {
    estadoLogin = usuario;
});

usuarioInfo.subscribe(usuario => {
    informacion = usuario;
});