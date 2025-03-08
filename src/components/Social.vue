<script setup>
import { ref } from "vue";

const links = ref([
    { value: 'https://github.com/Magdi-khaled', icon: 'fa-brands fa-github' },
    { value: 'https://www.linkedin.com/in/magdi-khaled-2b1b61206', icon: 'fa-brands fa-linkedin-in text-sm p-1' },
    { value: 'https://www.facebook.com/Magdi.k.s1/', icon: 'fa-brands fa-facebook' },
    { value: 'https://wa.me/201122368948', icon: 'fa-brands fa-whatsapp' },
]);
</script>

<template>
    <div class="absolute right-2 bottom-2 w-fit flex flex-col items-center gap-4 text-lg sm:text-xl">
        <span class="h-[5em] border-l-2 border-l-secondary rounded-full"></span>
        <ul v-for="link in links" :key="link.id">
            <a :href="link.value"
                class="border border-secondary p-1 px-2 rounded-full hover:text-bgprimary hover:bg-white transition-all duration-300">
                <i :class="link.icon"></i>
            </a>
        </ul>
    </div>
</template>
