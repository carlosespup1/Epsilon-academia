<script>
    import axios from 'axios';
    import Navbarestudiante from "../lib/Navbarestudiante.svelte";
    import Footer from "$lib/Footer.svelte";
    import Planes from "$lib/Planes.svelte";

    import { valorPublico } from "../stores/UsuarioAuth.js";
    import { informacion } from "../stores/UsuarioAuth.js"; //informacion estudiante
</script>

{#if valorPublico === "null" || valorPublico === 0 || valorPublico === "0"}
    <p>{informacion}</p>
    <div class="flex text-center text-purple-700">
        <h1>Error, algo ha salido mal.</h1>
        <h2><a href="/sesion"></a></h2>
    </div>
    {:else}
        <Navbarestudiante />
            <Planes />
        <Footer />
{/if}