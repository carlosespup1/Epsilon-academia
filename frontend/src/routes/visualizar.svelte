<script>
    import { link } from "../stores/CursoAuth.js";
    import { Spinner } from "flowbite-svelte";

    let video = link+'?controls=0';

    let nota = "";
    let notas = [];
    const agregarNota = () => {
        notas = [...notas, nota];
        nota = "";
        return notas;
    }

    const regresar = () => {
        //wait a second and then redirect to the home page
        setTimeout(() => {
            window.location.href = "/estudiante";
        }, 1000);
    }

    let loader = true;
    setTimeout(() => {
        loader = false;
    }, 1500);

</script>


{#if loader}
    <div class="text-center">
        <p class="text-xl text-purple-700 my-4">Cargando curso</p>
        <Spinner color="purple" size="8"></Spinner>
    </div>
    {:else}
    <div class="w-full mx-2 my-4 bg-purple-700 rounded p-2">
        <h1 class="text-white">Panel del curso 🏫</h1>
    </div>
    <div class="mt-8 flex">
        <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div>
            <button on:click={()=> regresar()} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 my-4 ml-4 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Regresar a cursos
            </button>
            <div class="ml-4">
                <p class="font-bold">Notas del curso: </p>
                {#each notas as nota}
                    <p>👉🏻 {nota}</p>
                {/each}
            </div>

        </div>
    </div>
    <div class="py-4">
        <p class="mb-2 font-bold">Agregar notas temporales: <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Se borran automaticamente al final del curso</span></p>
        <textarea bind:value={nota}></textarea>
    </div>
    <button on:click={()=> agregarNota()} class="text-white bg-purple-700 rounded p-2">Agregar</button>
{/if}