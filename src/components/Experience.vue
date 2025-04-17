<script setup>
import { UiDate } from '@kalimahapps/vue-icons/ui';
import { isDarkTheme } from '@/composables/useTheme.js';
defineProps({
    experience: { type: Object, required: true },
    order: { type: Number, required: true }
});
</script>

<template>
    <div :class="{ 'order-2': order % 2, 'order-0': !(order % 2) }">
        <h1 class="font-bold my-1">
            {{ experience.title }}
            <span v-if="experience.company || experience.location" class="block py-1 font-medium text-sm"
                :class="{ '': isDarkTheme, 'text-secondary': !isDarkTheme }">
                {{ experience.company }}<span v-if="experience.location"> | {{ experience.location }}</span>
            </span>
        </h1>
        <div class="flex items-center gap-2 text-xs my-1" :class="{ '': isDarkTheme, 'text-secondary': !isDarkTheme }">
            <UiDate class="inline-block" />
            <p class="inline">{{ experience.date }}</p>
        </div>
    </div>
</template>