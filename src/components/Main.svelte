<script>
	import logo from '$lib/assets/bot-logo.png';
	import Features from './Features.svelte';
</script>

<main>
	<!-- MAIN LANDING SECTION -->
	<section
		class="p-4 md:p-10 m-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start my-20 md:my-32 md:mx-20"
	>
		<div class="order-2 md:order-1 text-center md:text-left">
			<h1 class="font-bold text-6xl md:text-7xl m-4 md:m-8">PizzaHat</h1>
			<p class="m-4 md:m-8 ml-3 md:ml-10 mr-3 md:mr-36 text-base md:text-xl text-wrap">
				Multi-purpose Discord Bot. <br />
				User friendly <br />
				Secure
			</p>
			<p class="m-4 md:m-8 ml-3 md:ml-10 text-sm">Serving 170k+ users in 150+ servers</p>

			<div class="ml-3 md:ml-10">
				<button
					class="text-black font-bold rounded-lg p-2 md:p-4 mt-3 md:mt-4 md:m-3 lg:m-3 bg-accent_1 hover:bg-accent_1_hover"
				>
					<a href="https://dsc.gg/pizza-invite" target="_blank">Add to server</a>
				</button>
				<button
					class="text-black font-bold rounded-lg p-2 md:p-4 mt-3 md:mt-4 m-3 lg:m-3 bg-accent_2 hover:bg-accent_2_hover"
				>
					<a href="https://discord.gg/WhNVDTF" target="_blank">Join server</a>
				</button>
				<button
					class="text-black font-bold rounded-lg p-2 ml-0 md:p-4 mt-3 md:mt-4 m-3 lg:m-3 bg-accent_3 hover:bg-accent_3_hover"
				>
					<a href="https://github.com/DTS-11/PizzaHat" target="_blank">⭐ Star the repo</a>
				</button>
			</div>
		</div>

		<img
			src={logo}
			alt="logo"
			draggable="false"
			class="animate-bounce mt-8 md:mt-12 m-5 w-24 h-24 md:w-60 md:h-60 md:ml-44 md:mr-10 rounded-full order-1 md:order-2"
		/>
	</section>

	<!-- BOT FEATURES SECTION -->
	<Features />
</main>
