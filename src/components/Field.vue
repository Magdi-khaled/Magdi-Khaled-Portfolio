<script setup>
import { useField } from 'vee-validate';
import { watch } from 'vue';

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
    <div class="flex flex-col gap-1">
        <label :for="props.name" class="capitalize text-sm sm:text-md">{{ label }}</label>

        <!-- Input Field -->
        <input v-if="type !== 'textarea'" :id="props.name" :name="props.name" :type="props.type" autocomplete="off"
            :placeholder="props.placeholder" class="px-3 lg:px-4 py-3 lg:py-4 text-xs lg:text-[14px] tracking-wide border-0 outline-0 rounded-xl bg-[#292b2c]
            focus:bg-[#000000bc] focus:scale-[1.01] transition-all duration-200" v-model="value" />
        <!-- Textarea Field -->
        <textarea v-else :id="props.name" :name="props.name" :placeholder="props.placeholder" autocomplete="off" class="p-3 lg:p-4 h-[7rem] text-xs lg:text-[14px] tracking-wide border-0 outline-0
            rounded-2xl bg-[#292b2c] focus:bg-[#000000bc] focus:scale-[1.01] transition-scale duration-200"
            v-model="value" />

        <p v-if="errorMessage" class="text-red-400 text-xs font-light mt-[-2px] px-1">{{ errorMessage }}</p>
    </div>

</template>
