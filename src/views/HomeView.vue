<script setup>
import Header from '@/components/Header.vue';
import BaseButton from '@/components/BaseButton.vue';
import Preview from '@/components/Preview.vue';
import Social from '@/components/Social.vue';
import About from '@/components/About.vue';
import Skill from '@/components/Skill.vue';
import Project from '../components/Project.vue';
import Experience from '@/components/Experience.vue';
import ExpHeader from '@/components/ExpHeader.vue';
import ProjectHeader from '@/components/ProjectHeader.vue';
import Footer from '@/components/Footer.vue';
import Field from '@/components/Field.vue';
import Contact from '@/components/Contact.vue';
import BaseTeleport from '@/components/Teleport.vue';
import GoTop from '@/components/GoTop.vue';

import { computed, ref, toRef, watch } from "vue";
import { projects } from '@/composables/projects';
import { frontend, backendAndTools, progLangs } from '@/composables/skills.js';
import { experiences, educations } from '@/composables/qualifications';
import { isDarkTheme } from '@/composables/useTheme.js';

import { useRouter } from 'vue-router';
import { useContactStore } from '@/stores';
import { BsMouse } from '@kalimahapps/vue-icons/bs';
import { CoSend } from '@kalimahapps/vue-icons/co';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().required('Name is required').min(5, 'Name must be at least 6 characters')
        .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

const contactStore = useContactStore();
const router = useRouter();
const { handleSubmit, resetForm } = useForm({ validationSchema });

const expChoice = ref('exp');
const projectChoice = ref('all');
const success = ref(false), failed = ref(false);
const name = toRef(contactStore, 'name');
const email = toRef(contactStore, 'email');
const message = toRef(contactStore, 'message');
const status = toRef(contactStore, 'status');
const loading = toRef(contactStore, 'loading');
const filteredProjects = ref([...projects]);

const sendMessage = handleSubmit(async () => {
    try {
        if (contactStore.getFormData) {
            await contactStore.sendEmail();
            if (status.value === 'success') {
                resetForm();
                success.value = true;
                setTimeout(() => { success.value = false; }, 2500);
            }
            else {
                failed.value = true;
                setTimeout(() => { failed.value = false; }, 2500);
            }
            status.value = null;
        }
    }
    catch (error) {
        console.error('Error While Sending Email', error);
        failed.value = true;
        setTimeout(() => { failed.value = false; }, 2500);
    }
});
const toContact = () => {
    router.push({ path: '/', hash: '#contact' });
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

watch(projectChoice, (newChoice) => {
    if (newChoice === 'all') filteredProjects.value = [...projects];
    else if (newChoice === 'HTML & CSS')
        filteredProjects.value = projects.filter((project) =>
            project.category.includes('html') || project.category.includes('css'));
    else if (newChoice === 'nodeJS')
        filteredProjects.value = projects.filter((project) =>
            project.category.includes('node'));
    else
        filteredProjects.value = projects.filter((project) =>
            project.category.includes(newChoice.toLowerCase()));
});
</script>

<template>
    <BaseTeleport :show="success" :state="true">
        <i class="fa-solid fa-check-double pr-2"></i>
        message sent and i will answer as soon as possible
    </BaseTeleport>
    <BaseTeleport :show="failed" :state="false">
        <i class="fa-solid fa-circle-exclamation pr-2"></i>
        error While sending message
    </BaseTeleport>

    <Header />

    <main class="my-2 mx-[5%] md:mx-[10%] lg:mx-[14%]">
        <section data-aos="fade-up"
            class="flex flex-wrap justify-start md:justify-between gap-4 md:gap-0 items-center py-8 md:py-16">
            <Social class="order-0 w-1/12" />
            <div class="order-2 md:order-1 relative w-full md:w-6/12 flex flex-wrap items-center">
                <Preview class="w-full py-4 md:py-8 h-fit" />
                <BaseButton class="my-2" @click="toContact">
                    say hello
                    <CoSend />
                </BaseButton>
            </div>
            <div class="order-1 md:order-2 w-7/12 md:w-5/12 flex justify-end">
                <img width="150px" height="150px" src="@/assets/media/personal-image.webp" alt="personal-img"
                    class="bg-gray-200 w-[15em] md:w-[16rem] lg:w-[18rem] grayscale-[0.25] image-animate"
                    loading="eager" fetchpriority="high">
            </div>
        </section>
        <span id="about"></span>
        <a href="#about" class="w-fit hidden md:flex gap-2 items-center capitalize font-bold cursor-pointer my-8">
            <BsMouse class="text-2xl" />
            <p>scroll down <i class="fa-solid fa-arrow-down"></i></p>
        </a>
        <!-- about -->
        <section data-aos="fade-up" class="about py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-center">about me</h1>
            <p class="text-center py-2 text-sm" :class="{ 'text-secondary': !isDarkTheme }">My introduction
            </p>
            <About />
        </section>
        <div id="skills" class="mb-3 md:mb-10"></div>
        <!-- skills -->
        <section data-aos="fade-up" class="py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-center">skills</h1>
            <p class="text-center py-2 text-sm" :class="{ 'text-secondary': !isDarkTheme }">My technical
                level</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 mx-0 xl:mx-10">
                <div class="w-[320px] sm:w-[370px] m-auto my-0 p-8 border-[1px] rounded-3xl"
                    :class="{ 'bg-hovered border-bg-color': isDarkTheme, 'bg-white border-gray-300': !isDarkTheme }">
                    <h1 class="capitalize font-bold text-center mb-4">frontend development
                    </h1>
                    <!-- :class="{ 'text-hovered': isDarkTheme }" -->
                    <div class="grid grid-cols-2 gap-6">
                        <Skill v-for="(item, index) in frontend" :key="index" :skill="item" />
                    </div>
                </div>
                <div class="w-[320px] sm:w-[370px] m-auto my-0 p-8 border-[1px] rounded-3xl"
                    :class="{ 'bg-hovered border-bg-color': isDarkTheme, 'bg-white border-gray-300': !isDarkTheme }">
                    <h1 class="capitalize font-bold text-center mb-4">backend & tools</h1>
                    <div class="grid grid-cols-2 gap-6 mb-4">
                        <Skill v-for="(item, index) in backendAndTools" :key="index" :skill="item" />
                    </div>
                    <h1 class="capitalize font-bold text-center mb-4">programming languages</h1>
                    <div class="grid grid-cols-2 gap-6">
                        <Skill v-for="(item, index) in progLangs" :key="index" :skill="item" />
                    </div>
                </div>
            </div>
        </section>
        <div id="experience" class="mb-3 md:mb-10"></div>
        <!-- experience -->
        <section data-aos="fade-up" class="py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-center">experience</h1>
            <p class="text-center py-2 text-sm" :class="{ 'text-secondary': !isDarkTheme }">My personel journey</p>
            <ExpHeader v-model:expChoice="expChoice" />
            <template v-if="expChoice === 'edu'">
                <div v-for="(item, index) in educations" :key="index"
                    class="w-full grid grid-cols-[8.5rem_1.2rem_8.5rem] sm:grid-cols-[10rem_1.5rem_10rem] justify-center gap-4">
                    <Experience :experience="item" :order="index" />
                    <div class="order-1 justify-self-start w-2 h-full border-r-[2px] relative
                        before:absolute before:size-3 before:rounded-full before:left-[1px]" :class="{
                            'before:top-4': index, 'border-r-body-color before:bg-body-color': isDarkTheme,
                            'border-r-muted before:bg-muted': !isDarkTheme
                        }">
                    </div>
                    <div :class="{ 'order-0': index % 2, 'order-2': !(index % 2) }"></div>
                </div>
            </template>
            <template v-else>
                <div v-for="(item, index) in experiences" :key="index"
                    class="w-full grid grid-cols-[8.5rem_1.2rem_8.5rem] sm:grid-cols-[10rem_1.5rem_10rem] justify-center gap-4">
                    <Experience :experience="item" :order="index" />
                    <div class="order-1 justify-self-start w-2 h-full border-r-[2px] relative
                        before:absolute before:size-3 before:rounded-full before:left-[1px]" :class="{
                            'before:top-4': index, 'border-r-body-color before:bg-body-color': isDarkTheme,
                            'border-r-muted before:bg-muted': !isDarkTheme
                        }"></div>
                    <div :class="{ 'order-s': index % 2, 'order-2': !(index % 2) }"></div>
                </div>
            </template>
        </section>
        <div id="projects" class="mb-3 md:mb-10"></div>
        <!-- projects -->
        <section data-aos="fade-up" class="py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-center">projects</h1>
            <p class="text-center py-2 text-sm" :class="{ 'text-secondary': !isDarkTheme }">My personel
                projects</p>
            <ProjectHeader v-model:projectChoice="projectChoice" />
            <div
                class="px-2 xl:px-4 grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-6 justify-center my-6">
                <Project v-for="item in filteredProjects" :project="item" />
            </div>
        </section>
        <div id="contact" class="mb-3 md:mb-10"></div>
        <!-- contact -->
        <section class="py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-center">Get in touch</h1>
            <p class="text-center py-2 text-sm" :class="{ 'text-secondary': !isDarkTheme }">contact me </p>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-12 mx-0 lg:mx-16">
                <Contact />
                <div class="w-full items-center">
                    <h2 class="text-lg my-6 capitalize font-bold text-center">Let's connect </h2>
                    <form @submit.prevent="sendMessage" class="grid grid-cols-1 items-center gap-2 sm:gap-4">
                        <Field label="name" name="name" v-model="name" type="text" placeholder="Type your name" />
                        <Field label="email" name="email" v-model="email" type="email" placeholder="Type your email" />
                        <Field label="message" name="message" v-model="message" type="textarea"
                            placeholder="Type your message here..." />
                        <div>
                            <BaseButton @click="sendMessage" class="m-auto sm:m-0 w-[300px] tracking-wide font-semibold"
                                :class="{ 'pointer-events-none opacity-[0.6]': loading }">
                                <p v-if="!loading" class="flex items-center gap-2">
                                    send message
                                    <CoSend />
                                </p>
                                <p v-else class="relative size-6 before:rounded-full before:border-[3px] before:border-y-transparent 
                                before:absolute before:size-6 before:inset-0 animate-spin">
                                </p>
                            </BaseButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <GoTop />
    </main>

    <Footer />
</template>