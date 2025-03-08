<script setup>
defineEmits(["closeModal"]);

const props = defineProps({
    modalActive: {
        type: Boolean,
        required: true
    },
});

const resumeUrl = "https://drive.google.com/file/d/1WmOGUugo7dnjbAIJHp9dVstyoJruVFPk/preview";
</script>

<template>
    <Teleport to='body'>
        <Transition name="modal-outer">
            <div v-show="props.modalActive"
                class="fixed inset-0 z-50 w-full flex justify-center items-center bg-[#000000b3] p-2 sm:p-24"
                @click="$emit('close-modal')">
                <Transition class="modal-inner">
                    <div class="w-full flex justify-center items-center text-primary text-4xl pt-12 sm:pt-12"
                        @click.stop>
                        <button @click="$emit('close-modal')"
                            class="cursor-pointer absolute z-[100] right-[5%] top-[2%]">
                            <i
                                class="fa-solid fa-right-from-bracket text-primary hover:text-bgforth transition duration-200 text-2xl"></i>
                        </button>
                        <div class="w-full">
                            <iframe class="w-full h-[90vh] border border-primary rounded-xl" :src="resumeUrl"></iframe>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>
<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
    opacity: 0;
}

.modal-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.modal-inner-leave-to {
    transform: scale(0.8);
}
</style>