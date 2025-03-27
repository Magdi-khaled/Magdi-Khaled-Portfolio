<script setup>
import Navbar from '../components/Navbar.vue';
import BaseButton from '../components/BaseButton.vue';
import SendButton from '../components/SendButton.vue';
import Preview from '../components/Preview.vue';
import Social from '../components/Social.vue';
import About from '../components/About.vue';
// import BaseModal from '../components/Resume.vue';
import Skill from '../components/Skill.vue';
import Project from '../components/Project.vue';
import Process from '../components/Process.vue';
import Experience from '../components/Experience.vue';
import Footer from '../components/Footer.vue';
import Field from '../components/Field.vue';
import Contact from '../components/Contact.vue';
import BaseTeleport from '../components/Teleport.vue';
import GoTop from '../components/GoTop.vue';

import { ref, toRef } from "vue";
import { skills } from '../composables/skills';
import { projects } from '../composables/projects';
import { experiences } from '../composables/experiences';
import { processes } from '../composables/processes';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel, Scrollbar, Autoplay } from 'swiper/modules';

import { useContactStore } from '../stores';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().required('Name is required').min(5, 'Name must be at least 6 characters'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

const { handleSubmit, resetForm } = useForm({
    validationSchema
});

const contactStore = useContactStore();
const modules = [Navigation, Mousewheel, Scrollbar, Autoplay];
const resumeUrl = "https://drive.google.com/file/d/13dJq72aMBILvg9GP4aQf7V8A0Tnk-XHt/view";

const mouseWheelResponsive = ref(window.innerWidth > 768);

// let modalActive = ref(false);

let success = ref(false), failed = ref(false);
let loading = toRef(contactStore, 'loading');
let name = toRef(contactStore, 'name');
let email = toRef(contactStore, 'email');
let subject = toRef(contactStore, 'subject');
let message = toRef(contactStore, 'message');
let status = toRef(contactStore, 'status');

const sendMessage = handleSubmit(async () => {
    try {
        if (contactStore.getFormData) {
            await contactStore.sendEmail();
            if (status.value === 'success') {
                resetForm();
                success.value = true;
                setTimeout(() => { success.value = false; }, 2000);
            }
            else {
                failed.value = true;
                setTimeout(() => { failed.value = false; }, 2000);
            }
            status.value = null;
        }
    }
    catch (error) {
        console.error('Error While Sending Email', error);
        failed.value = true;
        setTimeout(() => { failed.value = false; }, 2000);
    }
});
const openResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
</script>

<template>
    <Navbar />

    <body class="px-4 sm:px-16">
        <section class="flex py-12">
            <div data-aos="fade-right" data-aos-delay="1500"
                class="relative w-full md:w-7/12 lg:w-6/12 text-md sm:text-3xl md:text-4xl capitalize flex flex-wrap items-center">
                <div class="w-full py-0 md:py-12 leading-10 sm:leading-14 h-fit md:h-[8em]">
                    <img class="block md:hidden w-[7.5em] mb-4 border-2 rounded-full grayscale-[0.35] highlighAnimate"
                        src="../assets/media/personal-img.png" alt="personal-img" loading="lazy">
                    <Preview />
                </div>
                <div class="flex flex-wrap gap-4 my-4">
                    <!-- <BaseButton @click="modalActive = !modalActive"> resume </BaseButton> -->
                    <BaseButton @click="openResume">
                        resume </BaseButton>
                    <a href="#contact">
                        <BaseButton> contact me </BaseButton>
                    </a>
                </div>
                <Social class="block md:hidden bottom-[0%] right-[0%]" />
            </div>
            <!-- Resume -->
            <!-- <BaseModal :modalActive="modalActive" @close-modal="modalActive = false" /> -->
            <div class="w-5/12 lg:w-6/12 hidden md:flex justify-end items-center">
                <div data-aos="fade-left" data-aos-delay="1500" class="relative flex justify-end">
                    <!-- Personal Image -->
                    <img class="w-[30em] lg:w-[25em] border-l-2 rounded-l-full shadow-2xl grayscale-[0.35] highlighAnimate"
                        src="../assets/media/personal-img.png" alt="personal-img" loading="lazy">
                    <!-- Social Links -->
                    <Social />
                </div>
            </div>
        </section>
        <span id="about"></span>
        <hr class="border-secondary border-b">
        <!-- about -->
        <section data-aos="fade-up" data-aos-delay="3000" class="about py-6 sm:py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold pb-8">about</h1>
            <About />
        </section>
        <span id="skills"></span>
        <hr class="border-secondary border-b">
        <!-- skills -->
        <section data-aos="fade-up" class="py-6 sm:py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold pb-8 text-center">my skills</h1>
            <div class="hidden lg:flex flex-wrap gap-4 justify-center">
                <div v-for="(item, index) in skills" :key="index">
                    <Skill :skill="item" />
                </div>
            </div>
            <div class="pl-0 sm:pl-6 lg:hidden">
                <swiper :modules="modules" :breakpoints="{
                    368: { slidesPerView: 2, spaceBetween: 10 },
                    410: { slidesPerView: 2.2, spaceBetween: 10 },
                    450: { slidesPerView: 2.5, spaceBetween: 10 },
                    568: { slidesPerView: 3, spaceBetween: 10 },
                    620: { slidesPerView: 3.5, spaceBetween: 10 },
                    672: { slidesPerView: 4, spaceBetween: 10 },
                    815: { slidesPerView: 5, spaceBetween: 10 },
                    968: { slidesPerView: 5.5, spaceBetween: 10 },
                    1096: { slidesPerView: 7, spaceBetween: 10 }
                }" navigation pagination
                    :mousewheel="mouseWheelResponsive ? { forceToAxis: true, passive: true } : false"
                    :autoplay="{ delay: 1500 }">
                    <swiper-slide v-for="(item, index) in skills" :key="index">
                        <Skill :skill="item" />
                    </swiper-slide>
                </swiper>
            </div>
        </section>
        <span id="projects"></span>
        <hr class="border-secondary border-b">
        <!-- projects -->
        <section data-aos="fade-up" class="py-6 sm:py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-center">my projects</h1>
            <div class="flex gap-3 justify-center">
                <swiper :modules="modules" :breakpoints="{
                    368: { slidesPerView: 1.4, spaceBetween: 10 },
                    510: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 2.4, spaceBetween: 15 },
                    1076: { slidesPerView: 3.5, spaceBetween: 20 },
                    1280: { slidesPerView: 4.5, spaceBetween: 20 }
                }" navigation pagination :mousewheel="{ scrollable: true }" :autoplay="false" class="">
                    <swiper-slide v-for="item in projects">
                        <Project :project="item" class="my-12" />
                    </swiper-slide>
                </swiper>
            </div>
        </section>
        <hr class="border-secondary border-b">
        <span id="process"></span>
        <!-- process -->
        <section data-aos="fade-up" class="py-6 sm:py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold pb-8 text-center">MY 4 STEPS CREATIVE PROCESS</h1>
            <div class="w-full flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-6">
                <div v-for="(item, index) in processes" :key="index" class="w-[85%] md:w-[48%] lg:w-[22%]">
                    <Process :process="item" />
                </div>
            </div>
        </section>
        <span id="experience"></span>
        <hr class="border-secondary border-b">
        <!-- experience -->
        <section data-aos="fade-up" class="py-6 sm:py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-start">experience</h1>
            <div class="bg-bgsecondary flex flex-wrap items-center gap-6 my-6 py-8">
                <Experience v-for="item in experiences" :key="item.id" :experience="item" />
            </div>
        </section>
        <span id="contact"></span>
        <hr class="border-secondary border-b">
        <!-- contact -->
        <section class="py-6 sm:py-8">
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-start">Contact me</h1>
            <div class="w-full flex items-center justify-between mt-6">
                <div data-aos="fade-right" class="w-full md:w-8/12 lg:w-6/12 bg-bgsecondary rounded-2xl p-3 sm:p-6">
                    <h2>Let's <span class="text-secondary">talk</span></h2>
                    <p class="text-primary opacity-60 py-1 text-sm sm:text-md">
                        To request a quoute or want to meet up for coffe, contact me directly or
                        fill out the form and i will get back to you soon.</p>
                    <form @submit.prevent="sendMessage" class="my-2">
                        <div class="grid grid-cols-2 items-center gap-2 sm:gap-3">
                            <Field class="col-span-2 sm:col-span-1" label="Your Name" name="name" v-model="name"
                                type="text" placeholder="Enter your name" />
                            <Field class="col-span-2 sm:col-span-1" label="Your Email" name="email" v-model="email"
                                type="email" placeholder="Enter your email" />
                            <Field class="col-span-2" label="Subject" name="subject" v-model="subject" type="text"
                                placeholder="Enter subject (topic)" />
                            <Field class="col-span-2" label="Your Message" name="message" v-model="message"
                                type="textarea" placeholder="Type your message here..." />

                            <SendButton class="col-span-2" @click="sendMessage" :loading="loading">
                                Send Message</SendButton>
                        </div>
                    </form>
                    <BaseTeleport :show="success" :state="true">
                        <i class="fa-solid fa-check-double"></i>
                        message sent and i will answer as soon as possible
                    </BaseTeleport>
                    <BaseTeleport :show="failed" :state="false">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        error While sending message
                    </BaseTeleport>
                </div>
                <div data-aos="fade-up" class="w-0 md:w-5/12 flex justify-end">
                    <img class="" src="../assets/media/contact/contact.png" alt="" loading="lazy">
                </div>
            </div>
            <Contact />
        </section>
        <GoTop />
    </body>
    <hr class="border-bgthird border-b">
    <Footer />
</template>

<style scoped>
@import url('../assets/stylesheets/portfolio.css');
</style>