<script>
	import logo from '$lib/assets/bot-logo.png';
	import Features from './Features.svelte';
</script>

<main>
	<!-- MAIN LANDING SECTION -->
	<section
		class="p-4 md:p-10 m-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start my-20 md:my-32"
	>
		<div class="order-2 md:order-1 text-center md:text-left">
			<h1 class="font-bold text-6xl md:text-7xl m-5 md:m-10">PizzaHat</h1>
			<p
				class="m-5 md:m-10 ml-4 md:ml-12 mr-4 md:mr-60 pr-4 md:pr-60 text-base md:text-xl text-wrap"
			>
				Elevate your Discord server! Our multi-purpose bot brings seamless moderation, entertaining
				utilities, and customizable features. Invite today and let the fun begin!
			</p>
			<p class="m-5 md:m-10 ml-4 md:ml-12 text-sm">Serving 170k+ users in 150+ servers</p>

			<div class="ml-4 md:ml-14">
				<button
					class="text-black font-bold rounded-lg p-2 md:p-4 mt-2 md:mt-5 md:m-2 lg:m-2 bg-accent_1 hover:bg-accent_1_hover"
				>
					<a href="https://dsc.gg/pizza-invite" target="_blank">Add to server</a>
				</button>
				<button
					class="text-black font-bold rounded-lg p-2 md:p-4 mt-2 md:mt-5 m-2 lg:m-2 bg-accent_2 hover:bg-accent_2_hover"
				>
					<a href="https://discord.gg/WhNVDTF" target="_blank">Join server</a>
				</button>
				<button
					class="text-black font-bold rounded-lg p-2 ml-0 md:p-4 mt-2 md:mt-5 m-2 lg:m-2 bg-accent_3 hover:bg-accent_3_hover"
				>
					<a href="https://github.com/DTS-11/PizzaHat" target="_blank">⭐ Star the repo</a>
				</button>
			</div>
		</div>

		<img
			src={logo}
			alt="logo"
			draggable="false"
			class="animate-bounce m-5 w-24 h-24 md:w-60 md:h-60 md:ml-0 md:mr-10 rounded-full order-1 md:order-2"
		/>
	</section>

	<!-- BOT FEATURES SECTION -->
	<Features />
</main>
