<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import { CaLight } from '@kalimahapps/vue-icons/ca';
import { AkGrid } from '@kalimahapps/vue-icons/ak';
import { MdOutlinedDarkMode } from '@kalimahapps/vue-icons/md';
import { isDarkTheme, changeTheme } from '@/composables/useTheme.js';
import { updateActiveSection } from '@/composables/useUtils.js';
import SmallNavbar from '@/components/SmallNavbar.vue';
import NavItem from '@/components/NavItem.vue';

const toggleNavigation = ref(false);
const scrollY = ref(window.scrollY);
const screenWidth = ref(window.innerWidth < 768);
const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
const isScrolled = computed(() => scrollY.value > 0);

const updateScreen = () => {
    scrollY.value = window.scrollY;
    screenWidth.value = window.innerWidth < 768;
    updateActiveSection(sections);
}

onMounted(async () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') changeTheme();

    window.addEventListener('resize', updateScreen);
    window.addEventListener('scroll', updateScreen);
});
onUnmounted(() => {
    window.removeEventListener('resize', updateScreen);
    window.removeEventListener('scroll', updateScreen);
});
</script>

<template>
    <span id="home"></span>
    <header
        class="w-full fixed md:sticky bottom-0 md:top-0 z-10 py-[0%] md:py-[1.2rem] px-[5%] md:px-[14%] flex items-center justify-around"
        :class="{
            'shadow-xs': isScrolled, 'shadow-top': screenWidth & isScrolled,
            'bg-body-color text-primary': !isDarkTheme,
            'bg-[var(--hovered)] text-body-color': isDarkTheme,
        }">
        <nav class="relative h-fit w-full flex items-center justify-between">
            <div class="w-[1.825rem] md:w-[2rem] monoton-regular capitalize text-xl">
                <a href="#home">mk</a>
            </div>
            <ul class="hidden md:flex flex-row gap-8 text-left text-[14.5px] capitalize font-bold">
                <NavItem v-for="id in sections" :key="id" :href="`#${id}`" :id="id">
                    {{ id }}
                </NavItem>
            </ul>
            <button @click="changeTheme" class="cursor-pointer text-2xl">
                <MdOutlinedDarkMode v-if="!isDarkTheme" />
                <CaLight v-else />
            </button>

            <div class="md:hidden text-end pt-4 pb-2">
                <button @click="toggleNavigation = !toggleNavigation" class="md:hidden cursor-pointer text-xl">
                    <AkGrid />
                </button>
            </div>
            <SmallNavbar v-model:show="toggleNavigation" />
        </nav>
    </header>
</template>