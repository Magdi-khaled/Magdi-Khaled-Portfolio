<script setup>
defineProps({
    process: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="min-h-[14em] bg-bgsecondary p-4 rounded-md">
        <h1 data-aos="fade-up" class="font-bold text-lg sm:text-xl text-secondary">{{ process.id }}</h1>
        <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500"
            class="font-bold text-md sm:text-lg my-3 first-letter:text-secondary">{{ process.title }}</h1>
        <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800"
            class="font-medium text-primary opacity-60 text-sm sm:text-md my-4 text-ellipsis h-[8em] overflow-hidden">
            {{ process.desc }}</p>
    </div>
</template>