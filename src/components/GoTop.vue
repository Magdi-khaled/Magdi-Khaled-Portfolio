<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

let showButton = ref(window.scrollY > 300);

const handleScroll = () => {
    showButton.value = window.scrollY > 300; // Show when scrolled 200px
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
            <button v-show="showButton" @click="scrollToTop()"
                class="fixed z-50 bottom-14 right-2 bg-bgforth text-primary px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-bgsecondary">
                <i class="fa-solid fa-up-long"></i>
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
