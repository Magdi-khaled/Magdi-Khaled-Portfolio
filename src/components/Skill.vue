<script setup>
import piniaIcon from '@/assets/media/skills/pinia_.webp';
import { AnFilledHtml5 } from '@kalimahapps/vue-icons/an';
import { BxCss3, BxTailwindCss, BxNodejs, BxPostgresql } from '@kalimahapps/vue-icons/bx';
import { FaBandsJs } from '@kalimahapps/vue-icons/fa';
import {
    CoBrandTypescript, CoBrandSass, CoBrandJquery, CoBrandGit,
    CoBrandPostman, CoBrandPython, CoBrandNetlify
} from '@kalimahapps/vue-icons/co';
import { AkVueFill, AkBootstrapFill } from '@kalimahapps/vue-icons/ak';
import { SiNuxtdotjs, SiMongodb, SiCsharp, SiCplusplus, SiVercel } from '@kalimahapps/vue-icons/si';
import { UnVuejsAlt } from '@kalimahapps/vue-icons/un';
import { BsCommand } from '@kalimahapps/vue-icons/bs';
import { CaApi } from '@kalimahapps/vue-icons/ca';
import { TaBrandVite, TaBrandMysql } from '@kalimahapps/vue-icons/ta';
import { FeFigma } from '@kalimahapps/vue-icons/fe';
import { ReJavaLine } from '@kalimahapps/vue-icons/re';
import { LuCodeXml } from '@kalimahapps/vue-icons/lu';

const props = defineProps({
    skill: { type: Object, required: true }
});

const iconMap = {
    html: AnFilledHtml5, css: BxCss3, javaScript: FaBandsJs, typeScript: CoBrandTypescript,
    vue: AkVueFill, nuxt: SiNuxtdotjs, vuex: UnVuejsAlt, tailwind: BxTailwindCss, bootstrap: AkBootstrapFill,
    sass: CoBrandSass, jQuery: CoBrandJquery, nodejs: BxNodejs, 'node js': BxNodejs, express: BsCommand,
    mongoDB: SiMongodb, postgreSQL: BxPostgresql, git: CoBrandGit, 'REST API': CaApi, postman: CoBrandPostman,
    figma: FeFigma, vite: TaBrandVite, cpp: SiCplusplus, csharp: SiCsharp, 'c#': SiCsharp,
    java: ReJavaLine, python: CoBrandPython, mySQL: TaBrandMysql, ajax: LuCodeXml,
    netlify: CoBrandNetlify, vercel: SiVercel
};
</script>

<template>
    <div class="flex gap-3 col-span-1">

        <component v-if="skill.label === 'pinia'" :is="'img'" :src="piniaIcon" alt="pinia-icon"
            class="mt-1 w-4 h-6 grayscale-[0.9]" />
        <component v-else-if="iconMap[skill.label]" :is="iconMap[skill.label]" class="mt-1" />

        <div>
            <h1 class="capitalize font-semibold">{{ skill.label }}</h1>
            <p class="capitalize text-[10px] text-muted">{{ skill.proficiency }}</p>
        </div>
    </div>
</template>
