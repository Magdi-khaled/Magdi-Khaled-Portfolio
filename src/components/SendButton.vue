<script setup>
defineProps({
    loading: {
        type: Boolean,
        required: true
    }
})
</script>
<template>
    <button
        class="w-full my-2 py-2 sm:py-3 uppercase cursor-pointer rounded-xl bg-secondary text-bgprimary font-bold text-xs lg:text-[14px]
                hover:bg-white  hover:scale-[1.004] transition-all transition-[cubic-bezier(0.175, 0.885, 0.32, 1.275)] duration-300">
        <p v-if="loading" class="loading relative size-6 border-[3px] border-solid border-bgprimary rounded-full m-auto 
                        border-t-[3px] border-t-primary">
        </p>
        <slot v-else />
    </button>
</template>
<style scoped>
.loading {
    animation: loadingAnimate 3s linear infinite;
}

@keyframes loadingAnimate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
