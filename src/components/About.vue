<script setup>
import { CoEducation } from '@kalimahapps/vue-icons/co';
import { BxBriefcase, BxSupport } from '@kalimahapps/vue-icons/bx';
import BaseButton from '@/components/BaseButton.vue';
import Resume from '@/assets/media/Magdi\'s-Resume.pdf';
import { isDarkTheme } from '@/composables/useTheme';

const downloadResume = () => {
    const link = document.createElement('a')
    link.href = Resume;
    link.download = 'Magdi Khaled\'s Resume.pdf';
    link.click();
};
</script>
<template>
    <div class="mt-8 flex flex-col lg:flex-row gap-4 justify-between xl:justify-center items-center">
        <div class="w-full sm:w-1/2 flex justify-center">
            <img class="hidden sm:block rounded-3xl grayscale-[0.25] w-[15em] lg:w-[20em] h-[17rem] lg:h-[22em]"
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
                    <p class="text-[10px] font-medium" :class="{ 'text-secondary': !isDarkTheme }">Open
                        to Work</p>
                </div>
            </div>
            <p class=" my-4 text-md w-full xl-w-11/12" :class="{ 'text-secondary': !isDarkTheme }">
                Recent graduate with a Bachelor's degree in Computer Science, with two years of experience as a
                Front-end developer, turning ideas into seamless, interactive web experiences. I blend design
                and code
                to
                craft user-friendly interfaces that not only look great but feel intuitive. Passionate about
                creating
                smooth, engaging digital journeys.
            </p>
            <BaseButton @click="downloadResume" class="w-fit">
                download CV
                <img src="@/assets/media/icons/resume.svg" class="size-5 bg-white rounded-lg shadow-md" alt="">
            </BaseButton>
        </div>
    </div>
</template>