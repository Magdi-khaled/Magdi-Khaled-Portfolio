<script setup>
import { isDarkTheme } from '@/composables/useTheme.js';
import { CdGithubAlt } from '@kalimahapps/vue-icons/cd';
import { UnLinkedinAlt } from '@kalimahapps/vue-icons/un';
import { BsInstagram } from '@kalimahapps/vue-icons/bs';

const links = [
    { value: 'https://www.linkedin.com/in/magdi-khaled-2b1b61206', icon: 'fa-brands fa-linkedin-in', title: 'Linked In' },
    { value: 'https://github.com/Magdi-khaled', icon: 'fa-brands fa-github', title: 'GitHub' },
    { value: 'https://www.instagram.com/magdi_khaled1t/', icon: 'fa-brands fa-facebook', title: 'Instagram' },
];
const sections = ['about', 'skills', 'experience', 'projects']

const goto = (item) => {
    const link = document.createElement('a');
    link.href = item.value;
    link.target = "_blank";
    link.click();
}
</script>
<template>
    <footer class="border-t-gray-300 flex flex-col items-center gap-6"
        :class="{ 'bg-hovered shadow-top': isDarkTheme, 'border-t-[1px]': !isDarkTheme }">
        <p class="monoton-regular text-md py-4">
            Magdi Khaled </p>
        <div class="w-full flex items-center justify-center gap-4">
            <a v-for="(item, index) in sections" :key="index" :href="`#${item}`" target="_blank"
                class="capitalize text-sm decoration-0 hover:underline transition-all duration-300"
                :class="{ 'text-bg-color': !isDarkTheme }">{{ item }}</a>
        </div>
        <div class="w-fit flex gap-4 my-2">
            <button v-for="item in links" @click="goto(item)" :title="item.title" class="size-8 sm:size-10 capitalize flex justify-center items-center
                text-lg sm:text-xl rounded-md cursor-pointer transition-colors duration-300" :class="{
                    'bg-primary text-body-color hover:bg-dark-hovered': !isDarkTheme,
                    'bg-body-color text-dark-hovered border-dark-hovered hover:text-secondary hover:bg-dark-hovered': isDarkTheme,
                }">
                <CdGithubAlt v-if="item.title === 'GitHub'" />
                <UnLinkedinAlt v-if="item.title === 'Linked In'" />
                <BsInstagram v-if="item.title === 'Instagram'" />
            </button>
        </div>
        <p class="text-xs sm:text-md py-6 mb-12" :class="{ 'text-secondary': !isDarkTheme }">
            Copyright © Magdi 2025 </p>
    </footer>
</template>