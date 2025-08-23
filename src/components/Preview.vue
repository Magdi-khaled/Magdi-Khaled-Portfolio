<script setup>
import { ref, onMounted } from 'vue';
import { isDarkTheme } from '@/composables/useTheme.js';
import hiIcon from '@/assets/media/icons/hello-icon.svg';

const words = ["Frontend Engineer", "Freelancer"];
const jobTitle = ref("");

let wordIndex = 0, letterIndex = 0, isDeleting = false, animateCaret = false;

const typeEffect = () => {
    const word = words[wordIndex];

    if (isDeleting) {
        jobTitle.value = word.substring(0, letterIndex--);
        animateCaret = false;
    }
    else jobTitle.value = word.substring(0, letterIndex++);

    if (!isDeleting && letterIndex === word.length) {
        animateCaret = true;
        setTimeout(() => (isDeleting = true), 2000);
    }

    else if (isDeleting && letterIndex === 0) {
        animateCaret = false;
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, isDeleting ? 100 : 200);
};

onMounted(typeEffect);
</script>

<template>
    <div>
        <div class="flex gap-2 items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-4">
            <span class="font-bold whitespace-nowrap"> Magdi Khaled</span>
            <hiIcon />
            <!-- <img src="@/assets/media/icons/hello-icon.svg"> -->
        </div>
        <h3 class="flex items-center gap-4 text-lg sm:text-xl font-bold">
            <span class="w-[2em] sm:w-[4em] border-b-[2px] border-b-gray-400 rounded-full inline-block"></span>
            Software Engineer
        </h3>
        <p class="relative w-full sm:w-[85%] md:w-[85%] lg:w-[65%] inline-block sm:block py-2 text-[16px]"
            :class="{ 'text-secondary': !isDarkTheme }">
            Web Developer based in Cairo, driven by
            passion and creativity to build seamless digital
            experiences.
            <br>
        </p>
        <p class="font-bold block">
            {{ jobTitle }}
            <span class="h-[10em] border-l-[2px]"
                :class="{ 'caret': animateCaret, 'border-l-gray-200': isDarkTheme }"></span>
        </p>
    </div>
</template>

<style scoped>
.caret {
    animation: caretBlink 1s steps(2, jump-none) infinite;
}

@keyframes caretBlink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>