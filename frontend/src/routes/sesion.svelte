<script>
    import NavbarLogOut from "$lib/NavbarLogOut.svelte";
    import Footer from "$lib/Footer.svelte";

    import RegistroForm from "$lib/RegistroForm.svelte";
    import IniciarsesionForm from "$lib/IniciarsesionForm.svelte";


    let usuarioRegistro = {
        nombre: "",
        correo: "",
        contrasena: "",
        plan: [],
    };

    let usuarioInicioSesion = {
        correo: "",
        contrasena: "",
    };

    let registro = true;
</script>

<NavbarLogOut />
    <IniciarsesionForm />
<Footer />

