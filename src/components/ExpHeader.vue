<script setup>
import { CoEducation } from '@kalimahapps/vue-icons/co';
import { BxBriefcase } from '@kalimahapps/vue-icons/bx';

const expChoice = defineModel('expChoice');
</script>
<template>
    <div class="flex items-center gap-4 justify-center my-4 text-[15px] sm:text-lg">
        <button @click="expChoice = 'edu'"
            class="flex items-center gap-2 capitalize font-semibold cursor-pointer  transition-colors duration-150"
            :class="{ 'text-secondary hover:text-primary': expChoice !== 'edu' }">
            <CoEducation class="text-xl" /> education
        </button>
        <span class="font-bold text-secondary">/</span>
        <button @click="expChoice = 'exp'"
            class="flex items-center gap-2 capitalize font-semibold cursor-pointer transition-colors duration-150"
            :class="{ 'text-secondary hover:text-primary': expChoice !== 'exp' }">
            <BxBriefcase class="text-xl" /> experience
        </button>
    </div>
</template>
