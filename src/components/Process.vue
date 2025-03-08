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
        <h1 class="font-bold text-lg sm:text-xl">{{ process.id }}</h1>
        <h1 class="font-bold text-md sm:text-lg my-3">{{ process.title }}</h1>
        <p class="font-medium text-primary opacity-60 text-sm sm:text-md my-4 text-ellipsis h-[8em] overflow-hidden">
            {{ process.desc }}</p>
    </div>
</template>