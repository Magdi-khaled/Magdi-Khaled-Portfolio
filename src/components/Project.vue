<script setup>
import { ref } from 'vue';
import { isDarkTheme } from '@/composables/useTheme.js';
defineProps({
    project: {
        type: Object,
        required: true
    }
})
const hovered = ref(null);
</script>

<template>
    <div class="justify-self-center w-full max-w-[300px] border-[1px]
            rounded-2xl p-[1rem] cursor-pointer transition-colors duration-300" :class="{
                'bg-hovered border-bg-color hover:border-gray-300': isDarkTheme,
                'bg-white border-gray-300 hover:border-bg-color': !isDarkTheme
            }" @mouseover="hovered = project.name" @mouseleave="hovered = null">
        <img loading="lazy" class="w-full h-[10em] border-[1px] border-gray-300 rounded-2xl" :src="project.image"
            :alt="project.name">
        <h2 class="capitalize max-w-full overflow-hidden whitespace-nowrap text-ellipsis font-semibold my-2 text-sm tracking-wide"
            :class="{ 'text-body-color': isDarkTheme, 'text-bg-color ': !isDarkTheme, }">
            {{ project.name }}</h2>
        <p class="text-start text-sm text-muted my-2"
            :class="{ 'text-body-color': isDarkTheme, 'text-bg-color': !isDarkTheme }">
            {{ project.desc }}</p>

        <div class="flex flex-wrap items-center gap-[2px] text-sm capitalize text-blue-400 my-2">
            <p v-for="(item, index) in project.hashtags" :key="index"> #{{ item }}</p>
        </div>
        <div class="flex items-center gap-3 text-sm capitalize">
            <div @click="" v-if="project.isDeployed"
                class="border-[1px] rounded-xl hover:translate-x-1 transition-transform duration-300">
                <a :href="project.src" target="_blank" class="py-1 px-2 block w-full h-full">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
                </a>
            </div>
            <div class="border-[1px] rounded-xl hover:translate-x-1 transition-transform duration-300">
                <a :href="project.src_code" target="_blank" class="py-1 px-2 block w-full h-full">
                    <i class="fa-brands fa-github"></i> Code
                </a>
            </div>
        </div>
    </div>
</template>