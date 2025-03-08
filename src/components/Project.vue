<script setup>
import { ref } from 'vue';

defineProps({
    project: {
        type: Object,
        required: true
    }
})
let hovered = ref(null);
</script>

<template>
    <!-- <div class="card relative w-full h-[12em] md:h-[15em] lg:h-[20em] bg-bgsecondary rounded-md p-2 cursor-pointer  -->
    <div class="relative text-center w-full h-[21em] bg-bgsecondary shadow-md shadow-sec rounded-md p-2 cursor-pointer 
    transition-all duration-300" @mouseover="hovered = project.name" @mouseleave="hovered = null">
        <img class="w-full h-[8em] border-2 border-secondary rounded" :src="project.logo"
            :class="{ 'p-4': project.name === 'Darba - دَربْ' }" :alt="project.name">
        <h1
            class="capitalize whitespace-nowrap text-md md:text-xl lg:text-[18px] font-semibold my-2 px-2 first-letter:text-secondary">
            {{ project.name }}</h1>
        <p class="px-2 first-letter:text-secondary text-start text-sm text-ellipsis h-[10em] overflow-hidden">
            {{ project.desc }}</p>
        <transition name="fade">
            <div v-show="hovered"
                class="hover absolute inset-0 w-full flex rounded-lg bg-[#000000aa] transition-all duration-300">
                <a :href="project.src" class="w-full h-full flex justify-center items-center">
                    <p v-if="project.isDeployed" class="text-xl capitalize font-semibold">
                        Live Demo <i class="fa-solid fa-link"></i>
                    </p>
                    <p v-else class="text-xl capitalize font-semibold">
                        Source Code <i class="fa-solid fa-link"></i>
                    </p>
                </a>
            </div>
        </transition>
    </div>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
    transform: translateX(-10%);
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    transform: translateX(1%);
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>