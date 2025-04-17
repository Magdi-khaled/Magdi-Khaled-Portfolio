<script setup>
import { GlClose } from '@kalimahapps/vue-icons/gl';
import { BxHomeAlt, BxBriefcaseAlt2 } from '@kalimahapps/vue-icons/bx';
import { AnOutlinedUser } from '@kalimahapps/vue-icons/an';
import { CgFileDocument } from '@kalimahapps/vue-icons/cg';
import { UnScenery } from '@kalimahapps/vue-icons/un';
import { AkSend } from '@kalimahapps/vue-icons/ak';
import NavItem from '@/components/NavItem.vue';
import { isDarkTheme } from '@/composables/useTheme';
import { activeSection } from '@/composables/useUtils.js';

const show = defineModel('show');
const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
</script>

<template>
    <teleport to='body'>
        <transition name="fade-up">
            <nav v-if="show"
                class="md:hidden fixed z-[10] left-0 bottom-0 h-44 w-full  shadow-top px-4 py-2 rounded-t-3xl"
                :class="{ 'bg-primary': isDarkTheme, 'bg-body-color': !isDarkTheme }">
                <ul class="grid grid-cols-3 gap-8 capitalize text-sm font-medium p-4">
                    <NavItem v-for="link in sections" :key="link" :href="`#${link}`" :id="link"
                        :class="{ 'text-gray-500 ': activeSection === link }">
                        <div class="text-xl">
                            <BxHomeAlt v-if="link === 'home'" />
                            <AnOutlinedUser v-else-if="link === 'about'" />
                            <CgFileDocument v-else-if="link === 'skills'" />
                            <BxBriefcaseAlt2 v-else-if="link === 'experience'" />
                            <UnScenery v-else-if="link === 'projects'" />
                            <AkSend v-else />
                        </div>
                        {{ link }}
                    </NavItem>
                </ul>
                <button @click="show = !show" class="cursor-pointer text-xl absolute right-3 bottom-3
            hover:text-secondary transition-color duration-150">
                    <GlClose />
                </button>
            </nav>
        </transition>
    </teleport>
</template>

<style scoped>
.shadow-top {
    box-shadow: 0 -1px 4px #00000047;
}

.fade-up-enter-from,
.fade-up-leave-to {
    opacity: 0;
    transform: translateY(100%);
}

.fade-up-enter-to,
.fade-up-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.fade-up-enter-active,
.fade-up-leave-active {
    transition: opacity 0.25s, transform 0.25s;
}
</style>