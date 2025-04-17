<script setup>
import { useField } from 'vee-validate';
import { watch } from 'vue';
import { isDarkTheme } from '@/composables/useTheme.js';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    label: String,
    name: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String,
});

const { value, errorMessage } = useField(props.name, props.rules);

watch(value, (newVal) => {
    emit("update:modelValue", newVal);
})

</script>

<template>
    <div class="block relative pt-3">
        <label :for="props.name" class="absolute left-[3%] md:left-[4%] top-[4%] px-[6px] capitalize text-sm sm:text-md"
            :class="{
                'text-secondary bg-body-color': !isDarkTheme, 'bg-dark-hovered': isDarkTheme
            }">{{ label }}</label>

        <!-- Input Field -->
        <input v-if="type !== 'textarea'" :id="props.name" :name="props.name" :type="props.type" autocomplete="off"
            :placeholder="props.placeholder" class="w-full p-4 text-sm sm:text-md
            border-[2px] outline-0 rounded-xl"
            :class="{ 'border-gray-300': !isDarkTheme, 'border-bg-color': isDarkTheme }" v-model="value" />

        <!-- Textarea Field -->
        <textarea v-else :id="props.name" :name="props.name" :placeholder="props.placeholder" autocomplete="off"
            class="w-full p-4 h-[7rem] text-sm sm:text-md border-[2px] outline-0 rounded-xl"
            :class="{ 'border-gray-300': !isDarkTheme, 'border-bg-color': isDarkTheme }" v-model="value" />

        <p v-if="errorMessage" class="text-red-400 text-xs font-light px-1">{{ errorMessage }}</p>
    </div>

</template>
