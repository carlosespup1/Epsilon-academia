import { writable} from "svelte/store";

export const usuarioAuth = writable(false);
export const usuarioRol = writable("");

export let  totalCursos = writable(0);
export const  totalAlumnos = writable(0);