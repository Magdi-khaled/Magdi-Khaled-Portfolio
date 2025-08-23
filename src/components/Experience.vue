<script setup>
import { UiDate } from '@kalimahapps/vue-icons/ui';
import { GlLocation } from '@kalimahapps/vue-icons/gl';
import UserLocation from './icons/user-location.svg';
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
            <div :class="{ '': isDarkTheme, 'text-secondary': !isDarkTheme }">
                <p v-if="experience.company || experience.location" class="block py-1 font-medium text-sm">
                    {{ experience.company }}
                </p>

                <p v-if="experience.location" class="block font-medium text-sm">
                    <user-location class="inline-block -mb-[2px] -ml-[2px]" />
                    {{ experience.location.split('|')[0] }}
                </p>

                <p v-if="experience.location.split('|')[1]" class="block font-medium text-sm">
                    <GlLocation class="-ml-[1px] mr-[2px] inline-block" />
                    {{ experience.location.split('|')[1] }}
                </p>
            </div>
        </h1>
        <div class="flex items-center gap-2 text-xs my-1" :class="{ '': isDarkTheme, 'text-secondary': !isDarkTheme }">
            <UiDate class="inline-block" />
            <p class="inline">{{ experience.date }}</p>
        </div>
    </div>
</template>