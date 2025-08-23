<script setup>
import { CoEducation } from '@kalimahapps/vue-icons/co';
import { BxBriefcase, BxSupport } from '@kalimahapps/vue-icons/bx';
import docIcon from '@/assets/media/icons/resume.svg';
import BaseButton from '@/components/BaseButton.vue';
import Resume from '@/assets/media/Magdi\'s-Resume.pdf';
import { isDarkTheme } from '@/composables/useTheme';

const downloadResume = () => {
    const link = document.createElement('a')
    link.href = Resume;
    link.download = 'Magdi\'s Resume.pdf';
    link.click();
};
</script>
<template>
    <div class="mt-8 flex flex-col lg:flex-row gap-4 justify-between xl:justify-center items-center">
        <div class="w-full sm:w-1/2 flex justify-center">
            <img class="hidden sm:block rounded-4xl border-[1px] border-neutral-400 grayscale-[0.15] w-[15rem] lg:w-[18.25rem] h-[16rem] lg:h-[20em]"
                loading="lazy" src="@/assets/media/personal-image.webp" alt="graduate-img">
        </div>
        <div class="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 flex flex-col gap-4">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 w-full font-bold">
                <div class="col-span-1 flex flex-col items-center gap-1 border-[1px] rounded-xl py-4 px-3"
                    :class="{ 'bg-white border-gray-200': !isDarkTheme, 'bg-hovered border-bg-color': isDarkTheme }">
                    <CoEducation class="text-2xl" />

                    <h1 class="capitalize text-sm">education</h1>
                    <p class="text-[10px] font-medium" :class="{ 'text-secondary': !isDarkTheme }">
                        Computer Science</p>
                </div>

                <div class="col-span-1 flex flex-col items-center gap-1 border-[1px] rounded-xl py-4 px-3"
                    :class="{ 'bg-white border-gray-200': !isDarkTheme, 'bg-hovered border-bg-color': isDarkTheme }">
                    <BxBriefcase class="text-2xl" />

                    <h1 class="capitalize text-sm">projects</h1>
                    <p class="text-[10px] font-medium" :class="{ 'text-secondary': !isDarkTheme }">15+
                        Projects</p>
                </div>

                <div class="col-span-1 flex flex-col items-center gap-1 border-[1px] rounded-xl py-4 px-3"
                    :class="{ 'bg-white border-gray-200': !isDarkTheme, 'bg-hovered border-bg-color': isDarkTheme }">
                    <BxSupport class="text-2xl" />

                    <h1 class="capitalize text-sm">opportunities</h1>
                    <p class="text-[10px] font-medium" :class="{ 'text-secondary': !isDarkTheme }">Works @ HIGHBASE</p>
                </div>
            </div>
            <p class=" my-4 text-md w-full xl-w-11/12" :class="{ 'text-secondary': !isDarkTheme }">
                Computer Science graduate with a strong foundation in software development specialized in frontend
                development. Skilled
                in Vue.js, Nuxt.js, and JavaScript, with hands-on experience building responsive, user-friendly web
                apps. Proficient in
                REST APIs, version control, and modern UI/UX principles.
            </p>
            <BaseButton @click="downloadResume" class="w-fit">
                download CV
                <docIcon class="size-6 bg-white rounded-lg shadow-md" />
            </BaseButton>
        </div>
    </div>
</template>