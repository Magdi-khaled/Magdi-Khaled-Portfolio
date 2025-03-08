<script setup>
defineProps({
    skill: {
        type: Object,
        required: true
    },
    isActive: Boolean
});


const emit = defineEmits(['click']);

</script>

<template>
    <div @click="emit('click')"
        :class="{ 'bg-secondary text-bgsecondary transform scale-[1.01] sm:scale-[1.09]': isActive, 'bg-bgsecondary': !isActive }"
        class="cursor-pointer p-2 w-[10em] sm:w-[8em] h-[8em] flex flex-col items-center font-semibold rounded-lg transition-all duration-200">
        <img class="w-[4em] sm:w-[5em]" :src="skill.icon" :alt="skill.label">
        <h2 class="text-center whitespace-nowrap capitalize">{{ skill.label }}</h2>
    </div>
</template>