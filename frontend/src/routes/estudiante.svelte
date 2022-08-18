<script>
    import axios from 'axios';
    import Navbarestudiante from "../lib/Navbarestudiante.svelte";
    import CursoPremiun from "$lib/CursoPremiun.svelte";
    import Footer from "$lib/Footer.svelte";
    import { Spinner } from "flowbite-svelte";

    import { valorPublico } from "../stores/UsuarioAuth.js";
    import { informacion } from "../stores/UsuarioAuth.js"; //informacion estudiante
    import { linkVideo } from "../stores/CursoAuth.js"; //informacion curso

    const actualizarCursoAuth = url => { // obtener la url del curso y actulizar el estado
        linkVideo.set(url);
        setTimeout(() => {
            window.location.href = "/visualizar";
        }, 1500);
    }

    let nombre = "";
    let cursos = [];

    const estudiante = async () => {
       try {
           let usuario = await axios.get('http://localhost:1337/api/users/'+informacion+'?populate=%2A');
           nombre = usuario.data.username;
       } catch (error) {
           console.log(error);
       }
    };

    const getCursos = async () => { // cursos inscritos por el estudiante
        try {
            const response = await axios.get("http://localhost:1337/api/inscripciones/"+"?populate[0]=cursos");
            let cursosCargados = [...response.data.data];
            cursosCargados.forEach(curso => {
                cursos = [...cursos, curso.attributes.cursos.data[0].attributes];
            }
        );
            console.log(cursos);
            return cursos;
        } catch (error) {
            return error;
        }
    };

    let loader = true;
        setTimeout(() => {
            return loader = false;
        }, 2000)

    estudiante();
    let loadCursos = getCursos();
</script>

{#if valorPublico === "null" || valorPublico === 0 || valorPublico === "0"}
    {#if loader}
        <h1 class="text-purple-700 text-2xl text-center my-8">Cargando, por favor espere.</h1>
        <div class="text-center">
            <Spinner size="8" color="purple"/>
        </div>
        {:else}
            <div class="text-center text-purple-700 mt-10">
                <h1>Error, algo ha salido mal.</h1>
                <h2><a href="/sesion">Favor iniciar sesion nuevamente</a></h2>
            </div>
    {/if}

    {:else}
    <Navbarestudiante />
    <h1 class="text-center text-purple-700 text-xl uppercase font-semibold font-mono pb-3">¡Bienvenido <span class="text-gray-600">{nombre}<span class="text-purple-700 font-semibold font-mono pb-3">!</span></span></h1>
    <h4 class="text-left text-purple-700 font-semibold font-mono text-xl pb-4 pt-8">Continua aprendiendo</h4>
    <hr/>
    {#if cursos.length === 0}
        <div class="mt-8">
            <h1 class="text-purple-700 font-light text-xl">No tienes cursos inscritos 😥</h1>
            <a href="/cursosEstudiante"><span class="text-purple-700 font-extrabold">Ver cursos disponibles</span></a> <span>👈🏻</span>
        </div>
    {:else}
        <div class="w-full flex flex-wrap justify-center items-start space-y-5">
            {#each cursos as curso}
                <div class="max-w-full sm:max-w-xs mx-4 my-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="px-4 py-2">
                        <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{curso.Titulo}</h1>
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{curso.Descripcion}</p>
                    </div>

                    <img class="object-cover w-full h-48 mt-2" src={curso.imagen} alt={curso.Titulo}/>

                    <div class="flex items-center justify-center w-full px-4 py-2 bg-gray-900">
                        <button on:click={()=> actualizarCursoAuth(curso.link)} class="px-2 py-2 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">continuar aprendiendo</button>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
    <Footer />
{/if}


