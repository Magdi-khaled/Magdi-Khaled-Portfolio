<script setup>
import { ref, onMounted } from 'vue';
const words = ["Frontend Developer", "Freelancer"];

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
        I'M <span class="text-secondary text-xl sm:text-4xl md:text-5xl"> Magdi Khaled</span>
        <br>
        Software Engineer
        <p class="relative w-fit inline-block sm:block">
            <span class=" inline-block sm:hidden">|</span>
            {{ jobTitle }}
            <span class="h-[10em] border-l-[3px] border-l-secondary" :class="{ 'caret': animateCaret }"></span>
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