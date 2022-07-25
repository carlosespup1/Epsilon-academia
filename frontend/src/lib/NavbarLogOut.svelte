<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		ColorShadowButton
	} from 'flowbite-svelte';

	let NavLinkStyles = 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';

</script>

<Navbar let:hidden let:toggle class="mt-2 rounded-lg mb-8">
	<NavBrand href="/">
		<!--<img
			src=""
			class="mr-3 h-6 sm:h-9"
			alt="Logo de marca"
		/>-->
		<span class="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
			Epsilon<span class="text-purple-800">.</span>
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<a href="/sesion">
			<ColorShadowButton color="purple">Crear una cuenta</ColorShadowButton>
		</a>
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl {hidden}>
		<NavLi
			href="/"
			active={true}
			activeClass="block py-2 pr-4 pl-3 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white"
			>Inicio</NavLi
		>
		<NavLi href="/cursos" nonActiveClass={NavLinkStyles}>Cursos</NavLi>
		<NavLi href="/suscripcion-planes" nonActiveClass={NavLinkStyles}>Planes</NavLi>
		<NavLi href="/contacto" nonActiveClass={NavLinkStyles}>Contáctenos</NavLi>
	</NavUl>
</Navbar>
