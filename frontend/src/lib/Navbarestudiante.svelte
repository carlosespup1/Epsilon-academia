<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger
    } from 'flowbite-svelte';

    let NavLinkStyles = 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
</script>

<Navbar let:hidden let:toggle class="bg-purple-700 text-white mt-0 mb-8 sm:mt-4">
    <NavBrand href="/estudiante">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Epsilon<span class="text-white">.</span>
		</span>
    </NavBrand>
    <NavHamburger class="text-white" on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="/estudiante" nonActiveClass={NavLinkStyles}><span class="text-white">Inicio</span></NavLi>
        <NavLi href="/cursosEstudiante" nonActiveClass={NavLinkStyles}><span class="text-white">Catalogo</span></NavLi>
        <NavLi href="/perfil" nonActiveClass={NavLinkStyles}><span class="text-white">Perfil</span></NavLi>
        <NavLi href="/contacto" nonActiveClass={NavLinkStyles}><span class="text-white">Contacto</span></NavLi>
    </NavUl>
</Navbar>