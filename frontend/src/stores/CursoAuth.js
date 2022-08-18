import { writable } from "svelte/store";
import { browser } from "$app/env";


const inicial = browser ? localStorage.getItem("link") : "null";
export let link = inicial ? inicial : "null";
export const linkVideo = writable(inicial);
linkVideo.subscribe(video => {
    if(browser) {
        localStorage.setItem("link", video);
        link = video;
    }
});

export { linkVideo as default };