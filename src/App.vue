<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const showPreview = ref(true);
const router = useRouter();

router.beforeEach((to, from, next) => {
  if (to.path === '/portfolio' && showPreview.value) {
    setTimeout(() => {
      showPreview.value = false;
    }, 3000);
  }
  next();
});
</script>

<template>
  <div id="app">
    <transition name="fade-preview">
      <div v-if="showPreview" id="preview" class="block">
        <div class="w-full h-full flex justify-center items-center">
          <div class="relative p-3 sm:p-5 border-2 previewAnimateClass overflow-hidden">
            <h1 class="animate__flipOutX text-2xl first-letter:text-secondary">Magdi Khaled - Portfolio</h1>
          </div>
        </div>
      </div>
    </transition>
    <router-view />
  </div>
</template>