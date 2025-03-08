<script setup>
import Navbar from '../components/Navbar.vue';
import BaseButton from '../components/BaseButton.vue';
import SendButton from '../components/SendButton.vue';
import Preview from '../components/Preview.vue';
import Social from '../components/Social.vue';
import BaseModal from '../components/Resume.vue';
import Skill from '../components/Skill.vue';
import Project from '../components/Project.vue';
import Process from '../components/Process.vue';
import Experience from '../components/Experience.vue';
import Footer from '../components/Footer.vue';
import Field from '../components/Field.vue';
import GoTop from '../components/GoTop.vue';

import { ref } from "vue";
import { skills } from '../composables/skills';
import { projects } from '../composables/projects';
import { experiences } from '../composables/experience';
import { processes } from '../composables/processes';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel, Scrollbar, Autoplay } from 'swiper/modules';

let modalActive = ref(false);
let name = ref(''), email = ref(''), message = ref('');
const modules = [Navigation, Mousewheel, Scrollbar, Autoplay];


const clickedSkill = ref(null);
const mouseWheelResponsive = ref(window.innerWidth > 768);

const handleSkillClick = (index) => {
    clickedSkill.value = clickedSkill.value === index ? null : index;
};

const sendMessage = async () => {
    await console.log('Message Sent');
};
</script>

<template>

    <body background="red" class="px-4 sm:px-16">
        <Navbar />
        <main data-aos="fade-up" class="flex py-12">
            <div
                class="relative w-full md:w-7/12 lg:w-6/12 text-md sm:text-3xl md:text-4xl capitalize flex flex-wrap items-center">
                <div class="w-full py-12 leading-10 sm:leading-14 h-fit md:h-[8em]">
                    <Preview />
                </div>
                <div class="flex flex-wrap gap-4 my-4">
                    <BaseButton @click="modalActive = !modalActive"> resume </BaseButton>
                    <a href="#contact">
                        <BaseButton> contact me </BaseButton>
                    </a>
                </div>
                <Social class="block md:hidden bottom-[5%] right-[-1%]" />
            </div>
            <!-- Resume -->
            <BaseModal :modalActive="modalActive" @close-modal="modalActive = false" />
            <div class="w-5/12 lg:w-6/12 hidden md:flex justify-end items-center">
                <div class="relative flex justify-end">
                    <!-- Personal Image -->
                    <img class="w-[30em] lg:w-[25em] border-l-2 rounded-l-full shadow-2xl shadow-secondary opacity-50"
                        src="../assets/media/personal-img.png" alt="personal-img">
                    <!-- Social Links -->
                    <Social />
                </div>
            </div>
        </main>
        <hr class="border-secondary border-b">
        <!-- about -->
        <section data-aos="fade-up" class="about py-6 sm:py-8">
            <span id="about"></span>
            <h1 class="text-2xl sm:text-4xl capitalize font-bold pb-8">about</h1>
            <div class="flex gap-4">
                <span class="w-[4em] h-4 border-b-2 border-b-secondary hidden sm:block"></span>
                <p class="w-full sm:w-11/12 text-sm sm:text-lg">
                    I'm <span>Magdi Khaled</span>, Fresh Graduate with around <span>2 years</span> of experience
                    designing and developing responsive, user-centric web applications. Proficient in modern front-end
                    frameworks like <span>Vue.js, Nuxt.js and Tailwind CSS</span>, along with solid
                    back-end knowledge. <br>
                    Passionate about solving problems, collaborating in teams, and delivering scalable, high-performance
                    solutions to meet business goals. <br>
                    I have a <span>Bachelor's degree in Computer Science</span> from <span>Cairo University</span>,
                    where I developed a strong foundation in <span class="capitalize"> programming, software
                        engineering, operating
                        systems, compiliers, logic gates, networking basics and advanced
                        mathematics</span>. My passion lies in solving complex problems and crafting innovative
                    solutions that make an impact.

                    With experience in <span>Full-stack Web Development</span>, I thrive on bridging the gap between
                    design and functionality. My collaborative mindset and problem-solving skills allow me to deliver
                    high-quality results, whether working independently or as part of a team. <br>
                </p>
            </div>
        </section>
        <hr class="border-secondary border-b">
        <!-- skills -->
        <section data-aos="fade-up" class="py-6 sm:py-8">
            <span id="skills"></span>
            <h1 class="text-2xl sm:text-4xl capitalize font-bold pb-8 text-center">my skills</h1>
            <div class="hidden lg:flex flex-wrap gap-4 justify-center">
                <div v-for="(item, index) in skills" :key="index">
                    <Skill :skill="item" :isActive="clickedSkill === index" @click="handleSkillClick(index)" />
                </div>
            </div>
            <!-- <div class="pl-0 sm:pl-6 lg:hidden"> -->
            <div class="pl-0 sm:pl-6 lg:hidden">
                <swiper :modules="modules" :breakpoints="{
                    368: { slidesPerView: 2.1, spaceBetween: 10 },
                    468: { slidesPerView: 2.5, spaceBetween: 10 },
                    568: { slidesPerView: 3, spaceBetween: 10 },
                    620: { slidesPerView: 3.5, spaceBetween: 10 },
                    672: { slidesPerView: 4, spaceBetween: 10 },
                    815: { slidesPerView: 5, spaceBetween: 10 },
                    968: { slidesPerView: 5.5, spaceBetween: 10 },
                    1096: { slidesPerView: 7, spaceBetween: 10 }
                    // 1268: { slidesPerView: 8, spaceBetween: 10 }
                }" navigation pagination
                    :mousewheel="mouseWheelResponsive ? { forceToAxis: true, passive: true } : false"
                    :autoplay="{ delay: 1500 }">
                    <swiper-slide v-for="(item, index) in skills" :key="index">
                        <Skill :skill="item" :isActive="clickedSkill === index" @click="handleSkillClick(index)" />
                    </swiper-slide>
                </swiper>
            </div>
        </section>
        <hr class="border-secondary border-b">
        <!-- process -->
        <section data-aos="fade-up" class="py-6 sm:py-8">
            <span id="process"></span>
            <h1 class="text-2xl sm:text-4xl capitalize font-bold pb-8 text-center">MY 4 STEPS CREATIVE PROCESS</h1>
            <div class="w-full flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-6">
                <div v-for="(item, index) in processes" :key="index" class="w-[85%] md:w-[48%] lg:w-[22%]">
                    <Process :process="item" />
                </div>
            </div>
        </section>
        <hr class="border-secondary border-b">
        <!-- projects -->
        <section data-aos="fade-up" class="py-6 sm:py-8">
            <span id="projects"></span>
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-center">my projects</h1>
            <!-- <div class="hidden lg:flex flex-wrap gap-2 justify-center">
                <div v-for="(item, index) in projects" :key="index" class="w-[30%] lg:w-[19.5%]">
                    <Project :project="item" class="my-8 " />
                </div>
            </div> -->
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
        <!-- experience -->
        <hr class="border-secondary border-b">
        <section data-aos="fade-up" class="py-6 sm:py-8">
            <span id="experience"></span>
            <h1 class="text-2xl sm:text-4xl capitalize font-bold text-start">experience</h1>
            <div class="bg-bgsecondary flex flex-wrap items-center gap-6 my-6 py-8">
                <Experience v-for="item in experiences" :key="item.id" :experience="item" />
            </div>
        </section>
        <hr class="border-secondary border-b">
        <!-- contact -->
        <section data-aos="fade-up" class="py-6 sm:py-8">
            <span id="contact"></span>
            <div>
                <h1 class="text-2xl sm:text-4xl capitalize font-bold text-start">Contact me</h1>
                <div class="w-full flex items-center justify-between mt-6">
                    <div data-aos="fade-right" class="w-full md:w-8/12 lg:w-6/12 bg-bgsecondary rounded-2xl p-3 sm:p-6">
                        <h2>Let's <span class="text-secondary">talk</span></h2>
                        <p class="text-primary opacity-60 py-1 text-sm sm:text-md">
                            To request a quoute or want to meet up for coffe, contact me directly or
                            fill out the form and i will get back to you soon.</p>
                        <form @submit.prevent="sendMessage" class="my-2">
                            <div class="grid grid-cols-2 items-center gap-2 sm:gap-3">
                                <Field class="col-span-2 sm:col-span-1" label="your name" name="name" v-model="name"
                                    type="text" placeholder="Enter your name" />
                                <Field class="col-span-2 sm:col-span-1" label="your email" name="email" v-model="email"
                                    type="email" placeholder="Enter your email" />
                                <Field class="col-span-2" label="your message" name="message" v-model="message"
                                    type="textarea" placeholder="Type your message here..." />
                                <SendButton class="col-span-2" @click="sendMessage">Send Message</SendButton>
                            </div>
                        </form>
                    </div>
                    <div class="w-0 md:w-5/12 flex justify-end">
                        <img class="" src="../assets/media/contact/contact.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <GoTop />
    </body>
    <hr class="border-bgthird border-b">
    <Footer />
</template>

<style scoped>
@import url('../assets/stylesheets/portfolio.css');
</style>