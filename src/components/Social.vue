<script setup>
import { ref } from "vue";

const links = ref([
    { value: 'https://github.com/Magdi-khaled', icon: 'fa-brands fa-github', title: 'GitHub' },
    { value: 'https://codeforces.com/profile/MagdiKhaled1', icon: 'fa-solid fa-code text-sm sm:text-[16px] px-[0px]', title: 'Codeforces' },
    { value: 'https://www.linkedin.com/in/magdi-khaled-2b1b61206', icon: 'fa-brands fa-linkedin-in text-sm px-[3px]', title: 'Linked In' },
    { value: 'https://www.facebook.com/Magdi.k.s1/', icon: 'fa-brands fa-facebook', title: 'Facebook' },
    { value: 'https://wa.me/201122368948', icon: 'fa-brands fa-whatsapp px-[2px]', title: 'Whasapp' },
]);
</script>

<template>
    <div class="absolute right-2 bottom-2 w-fit flex flex-col items-center gap-4 text-lg sm:text-xl">
        <span class="h-[5em] border-l-2 border-l-secondary rounded-full"></span>
        <ul v-for="link in links" :key="link.id" data-aos="fade-left" data-aos-easing="ease-in-out"
            data-aos-duration="1000">
            <a :href="link.value" target="_blank" :title="link?.title"
                class="border border-secondary py-[5px] sm:py-1 px-[5px] sm:px-2 rounded-full hover:text-bgprimary hover:bg-white transition-all duration-300">
                <i :class="link.icon"></i>
            </a>
        </ul>
    </div>
</template>
