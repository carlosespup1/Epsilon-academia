<script>
	import { Button } from 'flowbite-svelte';
	
	import NavbarLogOut from '$lib/NavbarLogOut.svelte';
	import Estadisticas from '$lib/Estadisticas.svelte';
	import Footer from '$lib/Footer.svelte';
	import BannerInicio from '$lib/BannerInicio.svelte';  

	let image1 =
		'https://images.unsplash.com/photo-1599041125553-a3b967646ca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80';
	let image2 =
		'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg';
</script>

<NavbarLogOut />
<BannerInicio />
<Estadisticas />
<Footer />