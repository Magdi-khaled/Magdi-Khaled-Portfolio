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
        <a :href="href"
            class="relative capitalize font-bold flex flex-col items-center gap-2 link-underline transition-colors duration-150"
            :class="{
                'link-underline-active before:bg-transparent before:md:bg-body-color': activeSection === id,
                'before:bg-transparent before:md:bg-primary hover:text-[#0000007f]': !isDarkTheme,
                'hover:text-[#8a8787da]': isDarkTheme
            }">
            <slot />
        </a>
    </li>
</template>
