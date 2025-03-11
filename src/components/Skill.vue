<script setup>
import { toRef } from 'vue';

const props = defineProps({
    skill: {
        type: Object,
        required: true
    }
});
const clicked = toRef(props.skill, 'clicked');
</script>

<template>
    <div @click="clicked = !clicked"
        :class="{ 'bg-secondary text-bgsecondary transform scale-[1.01] sm:scale-[1.09]': clicked, 'bg-bgsecondary': !clicked }"
        class="cursor-pointer p-2 w-[10em] sm:w-[8em] h-[8em] flex flex-col items-center font-semibold rounded-lg transition-all duration-200">
        <img data-aos="fade-left" class="w-[4em] sm:w-[5em]" :src="skill.icon" :alt="skill.label" loading="lazy">
        <h2 data-aos="fade-right" class="text-center whitespace-nowrap capitalize">{{ skill.label }}</h2>
    </div>
</template>