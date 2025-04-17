<script setup>
import { isDarkTheme } from '@/composables/useTheme.js';
</script>
<template>
    <button class="capitalize whitespace-nowrap px-[1.5rem] sm:px-[2rem] py-[1rem] sm:py-[1.25rem] rounded-[1rem] cursor-pointer flex 
        justify-center items-center gap-2 transition-colors duration-300 text-sm sm:text-[16px]" :class="{
            'bg-body-color text-primary hover:bg-muted font-semibold': isDarkTheme,
            'bg-primary text-body-color hover:bg-dark-hovered ': !isDarkTheme,
        }">
        <slot />
    </button>
</template>