<script setup>
import { computed, ref } from 'vue';
import { skills } from '../composables/skills';

const searchText = ref('');
const show = ref(false);

const handleSearchSkill = computed(() => {
    return skills.filter(value => value.label.toLowerCase().toString().includes(searchText.value.toLowerCase()));
});

const handleSkillClick = (item) => {
    item.clicked === true ? item.clicked = true : item.clicked = !item.clicked;
};

</script>

<template>
    <nav class="px-4 sm:px-16 py-4 flex flex-wrap items-center justify-between transition-all duration-150">
        <picture class="w-[9%] sm:w-[6%] md:w-[3%]">
            <img src="../assets/media/icon.png" alt="mk-logo">
        </picture>
        <button @click="show = true"
            class="text-xl opacity-60 text-secondary hover:text-primary cursor-pointer block lg:hidden">
            <i class="fa-solid fa-bars-staggered"></i>
        </button>
        <ul
            class="w-full sm:w-8/12 md:w-9/12 lg:w-6/12 xl:w-5/12 hidden lg:flex justify-center items-center gap-8 capitalize font-medium text-md">
            <a href="#about" class="hover:text-third transition-text duration-150">about</a>
            <a href="#skills" class="hover:text-third transition-text duration-150">skills</a>
            <a href="#projects" class="hover:text-third transition-text duration-150">projects</a>
            <a href="#experience" class="hover:text-third transition-text duration-150">experience</a>
            <!-- <a href="#achievements" class="hover:text-third transition-text duration-150">achievements</a> -->
            <a href="#process" class="hover:text-third transition-text duration-150 whitespace-nowrap">dev-process</a>
            <a href="#contact" class="hover:text-third transition-text duration-150">contact</a>
        </ul>
        <!-- Search Bar -->
        <div class="hidden w-3/12 xl:w-2/12 lg:flex justify-end">
            <label for="search"
                class="relative w-fit bg-[#3d3e42] flex items-center justify-between gap-2 px-3 py-2 rounded-md">
                <input type="text" id="search" name="search" v-model="searchText" @Input="handleSearchSkill"
                    class="w-fit outline-hidden bg-[#3d3e42]" placeholder="Search Skill">
                <i class="fa-solid fa-search"></i>
                <!-- Searched Skills -->
                <div v-show="searchText"
                    class="absolute top-[97%] left-0 rounded-b border-b border-b-secondary w-full max-h-52 overflow-y-auto bg-bgsecondary text-primary z-50">
                    <ul>
                        <li v-for="(item, index) in handleSearchSkill" :key="index">
                            <a href="#skills" class="block w-full h-full p-2 border-b hover:bg-bgforth capitalize"
                                @click="handleSkillClick(item)">
                                {{ item.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </label>
        </div>
    </nav>
    <transition name="slide">
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
                    <a href="#experience" class="py-3 block w-full h-full">experience</a>
                </li>
                <li
                    class="cursor-pointer font-semibold border-b-2 border-b-forth hover:bg-bgsecondary transition-text duration-150">
                    <a href="#process" class="py-3 block w-full h-full">dev-process</a>
                </li>
                <li
                    class="cursor-pointer font-semibold border-b-2 border-b-forth hover:bg-bgsecondary transition-text duration-150">
                    <a href="#contact" class="py-3 block w-full h-full">contact</a>
                </li>
            </ul>
        </aside>
    </transition>
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
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>