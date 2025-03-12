<script setup>
import { ref } from 'vue';

const email = ref('magdikhaled23s@gmail.com');
const numbers = ref(['01122368948', '01065390754']);
const location = ref('Egypt - Giza - Warrak El-Arab - Kornish El-warrak');
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
        <div class="flex items-center gap-2 p-2 bg-bgsecondary rounded-md">
            <i class="fa-solid fa-paper-plane text-secondary"></i>
            <p class="first-letter:text-secondary">{{ email }}</p>
        </div>
        <div class="flex items-center gap-2 p-2 bg-bgsecondary rounded-md">
            <i class="fa-solid fa-phone text-secondary"></i>
            <p><span class="text-secondary">(+02)</span> {{numbers.map(num => num).join("/")}} </p>
        </div>
        <div class="flex items-center gap-2 p-2 bg-bgsecondary rounded-md w-full md:w-fit lg:w-full">
            <i class="fa-solid fa-location-dot text-secondary"></i>
            <p class="first-letter:text-secondary">{{ location }}</p>
        </div>
    </div>
</template>