<script setup>
import { watch } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    label: String,
    name: String,
    modelValue: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String
});

watch(() => props.modelValue, (newValue) => {
    console.log("New Value:", newValue);
});

</script>

<template>
    <div class="flex flex-col gap-1 sm:gap-2">
        <label :for="name" class="capitalize text-sm sm:text-md">{{ label }}</label>

        <!-- Input Field -->
        <input v-if="type !== 'textarea'" :id="name" :name="name" :type="type" :placeholder="placeholder" class="px-3 lg:px-4 py-3 lg:py-4
        text-xs lg:text-[14px] tracking-wide
        border-0 outline-0 rounded-xl bg-[#292b2c] focus:bg-[#000000bc] focus:scale-[1.01] transition-all duration-200"
            :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />

        <!-- Textarea Field -->
        <textarea v-else :id="name" :name="name" :placeholder="placeholder" class="p-3 lg:p-4 h-[7rem] text-xs lg:text-[14px] tracking-wide border-0 outline-0
            rounded-2xl bg-[#292b2c] focus:bg-[#000000bc] focus:scale-[1.01] transition-scale duration-200"
            :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />
    </div>
</template>
