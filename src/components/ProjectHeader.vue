<script setup>
import { isDarkTheme } from '@/composables/useTheme.js';

const projectChoice = defineModel('projectChoice');
const headings = ['all', 'HTML', 'vue', 'nodeJS', 'fullstack'];
</script>

<template>
    <div class="flex flex-wrap items-center gap-2 sm:gap-4 justify-center my-4 text-[14px] sm:text-md">
        <button v-for="(item, index) in headings" :key="index" @click="projectChoice = item" class="px-3 p-[4px] whitespace-nowrap 
            flex items-center tracking-wider gap-2 capitalize font-semibold cursor-pointer
            hover:bg-hovered hover:text-body-color rounded-lg transition-colors duration-300" :class="{
                'border-[2px] bg-body-color text-dark-hovered': projectChoice !== item && isDarkTheme,
                'bg-dark-hovered text-body-color': projectChoice === item && !isDarkTheme,
                'border-[2px] bg-hovered text-body-color': projectChoice === item && isDarkTheme,
            }">
            {{ item === 'HTML' ? 'HTML & CSS' : item }}
        </button>
    </div>
</template>
