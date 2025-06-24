
import darbImage from '@/assets/media/projects/darb.webp';
import ystoreImage from '@/assets/media/projects/ystore.webp';
import ecommerceImage from '@/assets/media/projects/e-commerce-nuxt.webp';
import dashboardImage from '@/assets/media/projects/dashboard.webp';
import escooterImage from '@/assets/media/projects/escooter.webp';
import tsImage from '@/assets/media/projects/ts-management.webp';
import ycourseImage from '@/assets/media/projects/ycourse.webp';
import PortfolioSGTImage from '@/assets/media/projects/portfolio-sgt.webp';
import crudImage from '@/assets/media/projects/cruds-system.webp';
import weatherImage from '@/assets/media/projects/net-weather.webp';

export const projects = [
    {
        name: 'E-commerce website - Nuxt 3',
        desc: `A dynamic e-commerce platform built with Nuxt 3, featuring product listings/filtering, 
            a pretty shopping cart, checkout and user authentication, styled with Tailwind.`,
        src: 'https://e-commerce-vr-xiv-qr.netlify.app',
        src_code: 'https://github.com/Magdi-khaled/e-commerce-website-nuxt',
        image: ecommerceImage,
        hashtags: ['nuxtJS', 'vueuse', 'typescript', 'swiper', 'pinia', 'tailwind', 'IconifyVue'],
        isDeployed: true,
        category: ['fullstack', 'vue', 'node']
    },
    {
        name: 'Interactive E-commerce Dashboard',
        desc: `An intuitive and interactive seller dashboard built with NuxtJS for e-commerce platforms, empowering vendors to manage sales, 
        track orders, monitor performance metrics, and gain valuable insights in real-time.`,
        src: 'https://nuxt-interactive-dashboard.netlify.app',
        src_code: 'https://github.com/Magdi-khaled/Nuxt-Dashboard-ShadCN',
        image: dashboardImage,
        hashtags: ['nuxtJS', 'typescript', 'pinia', 'tailwind'],
        isDeployed: true,
        category: ['fullstack', 'vue', 'node']
    }, {
        name: 'Net Weather App',
        desc: `A weather application built with VueJS and WeatherAPI  providing real-time weather updates, forecasts, and location-based services.
                Users can search for weather information by city or state.`,
        src: 'https://net-weather.netlify.app/',
        src_code: 'https://github.com/Magdi-khaled/Net-Weather',
        image: weatherImage,
        hashtags: ['Vue', 'Typescript', 'pinia', 'tailwind', 'MapBox_API', 'weather_API'],
        isDeployed: true,
        category: ['vue']
    }, {
        name: 'E-commerce website',
        desc: `A dynamic e-commerce platform built with VueJS, featuring product listings, 
            a shopping cart, and user, admin authentication, styled with Tailwind.`,
        src: 'https://ystore-fashion.netlify.app',
        src_code: 'https://github.com/Magdi-khaled/E-commerce-Ystore',
        image: ystoreImage,
        hashtags: ['vue', 'vuex', 'tailwind', 'node', 'express', 'mongodb'],
        isDeployed: true,
        category: ['fullstack', 'vue', 'node']
    }, {
        name: 'darb system',
        desc: `Education Management System facilitates communication between the administration,
                many schools under its jurisdiction and students' parents.`,
        src: '',
        src_code: 'https://github.com/YoussefTarek80/Graduation_Project_2024',
        image: darbImage,
        hashtags: ['vue', 'vuex', 'tailwind', 'axios', 'php', 'Laravel', 'ML', 'phpMyAdmin'],
        isDeployed: false,
        category: ['fullstack', 'vue']
    },
    {
        name: 'Task Management',
        desc: `A powerful and intuitive task management system. Effortlessly create, update, and manage tasks 
                with a seamless user experience. High productivity with our single-page application.`,
        src: 'https://task-management-ts.netlify.app',
        src_code: 'https://github.com/Magdi-khaled/Task-Management-System',
        image: tsImage,
        hashtags: ['vue', 'pinia', 'tailwind', 'vee_validate'],
        isDeployed: true,
        category: ['vue']
    },
    {
        name: 'E-Scooter',
        desc: `E-Scooter product and it's features could include detailed descriptions 
                of each model, highlighting aspects such as motor power, battery life, top speed, and unique functionalities 
                dual motors or smart connectivity.`,
        src: 'https://e-scooter-mu.vercel.app/',
        src_code: 'https://github.com/Magdi-khaled/E-Scooter',
        image: escooterImage,
        hashtags: ['HTML', 'CSS', 'JavaScript', 'bootstrap'],
        isDeployed: true,
        category: ['html', 'css', 'js']
    },
    {
        name: 'Course Management - BE API',
        desc: `A backend API for course management, allowing users to add, update, or delete courses,
                while others can view course. role-based access control,
                enabling managers to assign roles [User, Admin, Manager].`,
        src: '',
        src_code: 'https://github.com/Magdi-khaled/Your-Course',
        image: ycourseImage,
        hashtags: ['node', 'express', 'JWT', 'mongodb', 'postman', 'vue', 'vuex', 'axios'],
        isDeployed: false,
        category: ['node']
    },
    {
        name: 'Portfolio Website',
        desc: `A responsive portfolio, showcasing about info, projects, skills, developer processes 
                and contact information with a clean and interactive design.`,
        src: 'https://portfolio-magdi-khaleds-projects.vercel.app/',
        src_code: 'https://github.com/Magdi-khaled/Portfolio-SGT',
        image: PortfolioSGTImage,
        hashtags: ['HTML', 'CSS', 'JavaScript'],
        isDeployed: true,
        category: ['html', 'css', 'js']
    },
    {
        name: 'CRUD System',
        desc: `CRUD system built with javascript. 
                system allow you create, view, update or delete 
                any products you have in your own stock.`,
        src: 'https://cruds-products-system.netlify.app/',
        src_code: 'https://github.com/Magdi-khaled/CRUD-SYSTEM',
        image: crudImage,
        hashtags: ['HTML', 'CSS', 'JavaScript'],
        isDeployed: true,
        category: ['html', 'css', 'js']
    }
]