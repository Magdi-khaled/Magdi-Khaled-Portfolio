<script setup>
import { activeSection } from '@/composables/useUtils.js';
import { isDarkTheme } from '@/composables/useTheme.js';
defineProps({
    id: { type: String, required: true },
    href: { type: String, required: true },
});
</script>
<template>
    <li>
        <a :href="href" class="relative capitalize font-bold flex flex-col items-center gap-2 link-underline" :class="{
            'link-underline-active before:bg-transparent before:md:bg-body-color': activeSection === id,
            'before:bg-transparent before:md:bg-primary': !isDarkTheme
        }">
            <slot />
        </a>
    </li>
</template>
