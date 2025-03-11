<script setup>
import { ref } from 'vue';
const links = ref([
    { value: 'https://github.com/Magdi-khaled', icon: 'fa-brands fa-github', title: 'GitHub' },
    { value: 'https://www.linkedin.com/in/magdi-khaled-2b1b61206', icon: 'fa-brands fa-linkedin-in p-1', title: 'Linked In' },
    { value: 'https://codeforces.com/profile/MagdiKhaled1', icon: 'fa-solid fa-code', title: 'Codeforces' },
    { value: 'https://www.facebook.com/Magdi.k.s1/', icon: 'fa-brands fa-facebook', title: 'Facebook' },
    { value: 'https://wa.me/201122368948', icon: 'fa-brands fa-whatsapp', title: 'Whatsapp' },
]);
</script>

<template>
    <footer class="flex flex-wrap justify-between items-center py-2 px-4">
        <p class="text-primary opacity-70 text-xs sm:text-md py-2 sm:py-0">
            &copy;Copyright 2025 by Magdi Khaled Kelany.
        </p>
        <ul class="w-fit flex gap-4 items-center my-2 sm:my-0">
            <li v-for="item in links"
                class="w-8 border border-secondary text-center rounded-full hover:bg-primary hover:text-bgprimary transform-all duration-300">
                <a :href="item.value" class="block w-full h-full p-1" :title="item.title">
                    <i :class="item.icon"></i>
                </a>
            </li>
        </ul>
        <div class="text-sm sm:text-md flex gap-2">
            <p class="text-primary opacity-60">My mail id : </p>
            <h4>magdikhaled23s@gmail.com</h4>
        </div>
    </footer>
</template>