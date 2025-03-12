<script setup>
import { ref } from 'vue';
import Button from '../components/SendButton.vue';

defineProps({
    project: {
        type: Object,
        required: true
    }
})
let hovered = ref(null);
</script>

<template>
    <div class="relative text-center w-full h-[21em] bg-bgsecondary shadow-md shadow-sec rounded-md p-2 cursor-pointer 
    transition-all duration-300" @mouseover="hovered = project.name" @mouseleave="hovered = null">
        <img data-aos-easing="ease-in-out" data-aos-duration="1000" loading="lazy"
            class="w-full h-[8em] border-2 border-secondary rounded" :src="project.logo"
            :class="{ 'p-4': project.name === 'Darba - دَربْ' }" :alt="project.name">
        <h1 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1000"
            class="capitalize whitespace-nowrap text-md md:text-xl lg:text-[18px] font-semibold my-2 px-2 first-letter:text-secondary">
            {{ project.name }}</h1>
        <p data-aos="fade-up"
            class="px-2 first-letter:text-secondary text-start text-sm text-ellipsis h-[10em] overflow-hidden">
            {{ project.desc }}</p>
        <transition name="fade">
            <div v-show="hovered" class="hover absolute inset-0 w-full rounded-lg bg-[#000000aa] transition-all duration-300 
                flex flex-col justify-center items-center px-4">
                <Button v-if="project.isDeployed">
                    <a :href="project.src" class="">
                        Live Demo <i class="fa-solid fa-link"></i>
                    </a>
                </Button>
                <Button>
                    <a :href="project.src" class="">
                        Source Code <i class="fa-solid fa-code"></i>
                    </a>
                </Button>
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