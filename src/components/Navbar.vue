<script setup>
import { ref } from 'vue';

const searchText = ref('');
const show = ref(false);

</script>

<template>
    <nav class="py-4 flex flex-wrap items-center justify-between">
        <picture class="w-[9%] sm:w-[6%] md:w-[4%]">
            <img src="../assets/media/icon.png" alt="mk-logo">
        </picture>
        <button @click="show = true"
            class="text-xl opacity-60 text-secondary hover:text-primary cursor-pointer block lg:hidden">
            <i class="fa-solid fa-bars-staggered"></i>
        </button>
        <ul
            class="w-full sm:w-8/12 md:w-9/12 lg:w-8/12 hidden lg:flex justify-center items-center gap-12 capitalize font-medium text-lg">
            <a href="#about" class="hover:text-third transition-text duration-150">about</a>
            <a href="#skills" class="hover:text-third transition-text duration-150">skills</a>
            <a href="#projects" class="hover:text-third transition-text duration-150">projects</a>
            <!-- <a href="#achievements" class="hover:text-third transition-text duration-150">achievements</a> -->
            <a href="#process" class="hover:text-third transition-text duration-150">developing process</a>
            <a href="#contact" class="hover:text-third transition-text duration-150">contact</a>
        </ul>
        <div class="hidden w-2/12 lg:flex justify-end">
            <label for="search" class="w-fit bg-[#3d3e42] flex items-center justify-between gap-2 px-3 py-2 rounded-md">
                <input type="text" id="search" name="search" v-model="searchText"
                    class="w-fit outline-hidden bg-[#3d3e42]" placeholder="Search Skill">
                <i class="fa-solid fa-search"></i>
            </label>
        </div>
    </nav>

    <Transition name="slide">
        <aside v-if="show"
            class="fixed z-[100] w-9/12 sm:w-6/12 md:w-4/12 h-screen top-0 right-0 bg-bgprimary border-l-2 flex flex-col capitalize">
            <div class="flex justify-end text-2xl py-2 px-4">
                <button @click="show = false"
                    class=" opacity-70 text-xl text-secondary hover:text-primary cursor-pointer">
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
            </div>
            <ul class="px-4 text-primary">
                <li
                    class="cursor-pointer font-semibold border-b-2 border-b-forth hover:bg-bgsecondary transition-text duration-150">
                    <a href="#about" class="py-3 block w-full h-full">about</a>
                </li>
                <li
                    class="cursor-pointer font-semibold border-b-2 border-b-forth hover:bg-bgsecondary transition-text duration-150">
                    <a href="#skills" class="py-3 block w-full h-full">skills</a>
                </li>
                <li
                    class="cursor-pointer font-semibold border-b-2 border-b-forth hover:bg-bgsecondary transition-text duration-150">
                    <a href="#projects" class="py-3 block w-full h-full">projects</a>
                </li>
                <!-- <li
                    class="cursor-pointer font-semibold border-b-2 border-b-forth hover:bg-bgsecondary transition-text duration-150">
                    <a href="#achievements" class="py-3 block w-full h-full">achievements</a>
                </li> -->
                <li
                    class="cursor-pointer font-semibold border-b-2 border-b-forth hover:bg-bgsecondary transition-text duration-150">
                    <a href="#process" class="py-3 block w-full h-full">developing process</a>
                </li>
                <li
                    class="cursor-pointer font-semibold border-b-2 border-b-forth hover:bg-bgsecondary transition-text duration-150">
                    <a href="#contact" class="py-3 block w-full h-full">contact</a>
                </li>
            </ul>
        </aside>
    </Transition>
</template>

<style scoped>
.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>