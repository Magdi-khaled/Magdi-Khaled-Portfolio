<script setup>
import { ref } from "vue";
import { CdGithubAlt } from '@kalimahapps/vue-icons/cd';
import { UnLinkedinAlt } from '@kalimahapps/vue-icons/un';
import { SiCodeforces } from '@kalimahapps/vue-icons/si';
import { PhWhatsappLogo, PhLightInstagramLogo } from '@kalimahapps/vue-icons/ph';

const links = ref([
    { value: 'https://www.linkedin.com/in/magdi-khaled-2b1b61206', title: 'Linked In' },
    { value: 'https://github.com/Magdi-khaled', title: 'GitHub' },
    { value: 'https://www.instagram.com/magdi_khaled1t/', title: 'Instagram' },
    { value: 'https://wa.me/201122368948', title: 'Whatsapp' },
    { value: 'https://codeforces.com/profile/MagdiKhaled1', title: 'Codeforces' },
]);
</script>

<template>
    <div class="flex flex-col items-start gap-3 text-2xl">
        <span data-aos="fade-down" class="w-[1.5px] h-[2rem] bg-bg-color ml-3 rounded-full"></span>
        <ul data-aos="fade-right" class="flex flex-col gap-2">
            <li v-for="link in links" :key="link">
                <a :href="link.value" target="_blank" :title="link?.title" class="block w-full h-full">
                    <UnLinkedinAlt v-if="link.title === 'Linked In'" />
                    <CdGithubAlt v-else-if="link.title === 'GitHub'" />
                    <SiCodeforces v-else-if="link.title === 'Codeforces'" />
                    <PhWhatsappLogo v-else-if="link.title === 'Whatsapp'" />
                    <PhLightInstagramLogo v-else-if="link.title === 'Instagram'" />
                </a>
            </li>
        </ul>
    </div>
</template>
