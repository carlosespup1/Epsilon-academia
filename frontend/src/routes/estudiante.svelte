<script>
    import Navbarestudiante from "../lib/Navbarestudiante.svelte";
    import IniciarsesionForm from "../lib/Navbarestudiante.svelte";
    import { estadoLogin } from '../stores/UsuarioAuth.js';

    const obtenerToken = () => {
        let token = localStorage.getItem('token');
        return !!token;
    }
</script>

{#if estadoLogin}
    <Navbarestudiante/>
    <p>Estoy logeado</p>
    {:else}
        <IniciarsesionForm />
    <p>No estoy logeado</p>
{/if}
