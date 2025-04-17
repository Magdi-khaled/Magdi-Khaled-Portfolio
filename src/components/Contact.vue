<script setup>
import { MdEmail } from '@kalimahapps/vue-icons/md';
import { PhWhatsappLogo } from '@kalimahapps/vue-icons/ph';
import { ThLinkedin } from '@kalimahapps/vue-icons/th';
import { isDarkTheme } from '@/composables/useTheme.js';

const contacts = [
    { type: 'email', data: 'magdikhaled23s@gmail.com', link: 'magdikhaled23s@gmail.com' },
    { type: 'number', data: '+201122368948', link: 'https://wa.me/201122368948' },
    { type: 'linkedin', data: 'Magdi Khaled', link: 'https://www.linkedin.com/in/magdi-khaled-2b1b61206', },
];
const writeMe = (contact) => {
    const link = document.createElement('a');
    if (contact.type === 'email') {
        link.href = `mailto:${contact.link}`;
    } else {
        link.href = contact.link;
        link.target = '_blank';
    }
    link.click();
};
</script>
<template>
    <div>
        <h2 class="text-lg my-6 capitalize font-bold text-center">Talk to Me </h2>
        <div v-for="(contact, index) in contacts" :key="index" class="my-4 w-[260px] sm:w-[280px] justify-self-center flex flex-col items-center
                gap-1 border-[1px] rounded-xl py-4 px-3"
            :class="{ 'bg-white border-gray-200': !isDarkTheme, 'bg-hovered border-bg-color': isDarkTheme }">
            <MdEmail v-if="contact.type === 'email'" class="text-2xl" />
            <PhWhatsappLogo v-else-if="contact.type === 'number'" class="text-2xl" />
            <ThLinkedin v-else class="text-2xl" />
            <h2 class="capitalize font-bold">{{ contact.type }}</h2>
            <h3 class="text-sm" :class="{ 'text-secondary': !isDarkTheme }">{{
                contact.data }}</h3>
            <button @click="writeMe(contact)"
                class="mt-2 text-[12px] cursor-pointer flex items-center gap-2 hover:gap-3 transition-discrete duration-200"
                :class="{ 'text-muted': !isDarkTheme }">
                Write me <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
</template>