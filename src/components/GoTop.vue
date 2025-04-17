<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { AkArrowUp } from '@kalimahapps/vue-icons/ak';
import { isDarkTheme } from '@/composables/useTheme.js';

const showButton = ref(window.scrollY > 300);

const handleScroll = () => {
    showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
    <teleport to='body'>
        <transition name="fade">
            <button v-show="showButton" @click="scrollToTop" class="fixed z-[9] bottom-15 right-4 sm:right-8 
                px-[0.825rem] py-[1rem] rounded-xl cursor-pointer transition-all duration-200 hover:bg-bgsecondary"
                :class="{
                    'bg-bg-color text-body-color hover:bg-dark-hovered': !isDarkTheme,
                    'bg-body-color text-dark-hovered hover:bg-gray-300': isDarkTheme,
                }">
                <AkArrowUp />
            </button>
        </transition>
    </teleport>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>
