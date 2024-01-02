<script>
    import logo from '$lib/assets/bot-logo.png';
</script>

<main class="overflow-x-hidden">
    <!-- MAIN LANDING SECTION -->
    <section class="p-4 md:p-10 m-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start my-20 md:my-32">
        <div class="order-2 md:order-1 text-center md:text-left">
            <h1 class="font-bold text-4xl md:text-6xl m-5 md:m-10">PizzaHat</h1>
            <p class="m-5 md:m-10 ml-4 md:ml-12 mr-4 md:mr-60 pr-4 md:pr-60 text-base md:text-xl text-wrap">   
                Elevate your Discord server! Our multi-purpose bot brings seamless moderation, entertaining utilities, and customizable features. Invite today and let the fun begin!
            </p>

            <div class="ml-4 md:ml-14">
                <button class="rounded-lg p-2 md:p-4 mt-2 md:mt-5 md:m-2 lg:m-2 bg-indigo-900 hover:bg-indigo-700" >
                    <a href="https://dsc.gg/pizza-invite" target="_blank">Add to server</a>
                </button>
                <button class="rounded-lg p-2 md:p-4 mt-2 md:mt-5 m-2 lg:m-2 bg-zinc-800 hover:bg-zinc-700">
                    <a href="https://discord.gg/WhNVDTF" target="_blank">Join server</a>
                </button>
            </div>
        </div>

        <img src={logo} alt="logo" draggable="false" class="animate-bounce m-5 w-24 h-24 md:w-60 md:h-60 md:ml-0 md:mr-10 rounded-full order-1 md:order-2">
    </section>

    <!-- BOT STATS SECTION -->
    <section class="p-4 md:p-10 m-5">
        <div class="mt-5 md:mt-7">
            <h1 class="font-bold text-4xl md:text-6xl m-5 md:m-10 pb-5 md:pb-10" data-aos="fade-up">Stats</h1>
            <div class="m-5 md:m-10 text-center">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-14 mx-auto">
                    <div class="p-4 md:p-6 bg-zinc-950 border border-indigo-950 rounded-lg" data-aos="fade-right">
                        <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight">Servers</h5>
                        <p class="font-normal text-sm md:text-base">150+</p>
                    </div>
                    <div class="p-4 md:p-6 bg-zinc-950 border border-indigo-950 rounded-lg" data-aos="fade-up">
                        <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight">Users</h5>
                        <p class="font-normal text-sm md:text-base">170,000+</p>
                    </div>
                    <div class="p-4 md:p-6 bg-zinc-950 border border-indigo-950 rounded-lg" data-aos="fade-left">
                        <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight">Commands</h5>
                        <p class="font-normal text-sm md:text-base">100+</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>
