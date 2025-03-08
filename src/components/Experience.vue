<script setup>
defineProps({
    experience: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="exp min-h-[11em] px-6 sm:px-7 m-auto w-full sm:w-10/12 md:w-8/12 lg:w-6/12 relative
            after:inset-0 after:absolute after:left-[2%] after:sm:left-[1.5%] after:top-[16%] after:sm:top-[20%] after:h-[80%] after:sm:h-[60%]
            after:w-[0.2rem] after:rounded-[15px] after:bg-primary after:opacity-60
            before:absolute before:w-5 before:h-5 before:rounded-full before:bg-secondary before:shadow-lg before:shadow-bgthird before:border-2
            before:border-third before:left-[0%] before:top-[3%]">
        <div class="relative flex flex-wrap justify-between items-center">
            <h1 class="w-full sm:w-fit capitalize font-bold my-1 first-letter:text-secondary">{{ experience.company }}
            </h1>
            <h3
                class="block lg:hidden w-full sm:w-fit text-end capitalize font-medium text-muted text-sm whitespace-nowrap">
                {{ experience.date }}</h3>
            <span class="w-48 left-[-50%] xl:left-[-39%] whitespace-nowrap hidden lg:block absolute top-0.5 bg-third px-4 py-1 capitalize
                font-bold first-letter:text-secondary text-sm z-10 after:size-5 after:bg-third after:absolute after:top-[16%]
                after:right-[-5%] after:rotate-[45deg]">
                {{ experience.date }}</span>
        </div>
        <div class="flex flex-wrap justify-between items-center">
            <h1 class="w-full sm:w-fit capitalize font-bold my-1 first-letter:text-secondary">{{ experience.title }}
            </h1>
            <i
                class="w-full sm:w-fit text-end font-medium text-primary opacity-70 text-sm sm:text-md whitespace-nowrap">
                {{ experience.location }}</i>
        </div>
        <p class="text-sm sm:text-md mt-1">
            {{ experience.description }}
        </p>
    </div>
</template>