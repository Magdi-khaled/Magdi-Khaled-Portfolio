<script setup>
defineProps({
    show: { type: Boolean, required: true },
    state: { type: Boolean, required: true }
});
</script>

<template>
    <teleport to='body'>
        <div v-show="show" class="fixed w-10/12 sm:w-fit z-50 top-4 left-4 p-4 sm:p-6 text-body-color rounded-2xl"
            :class="{ 'bg-green-900': state, 'bg-red-900 ': !state }">
            <p class="text-xs sm:text-[13px] capitalize">
                <slot />
            </p>
        </div>
    </teleport>
</template>
