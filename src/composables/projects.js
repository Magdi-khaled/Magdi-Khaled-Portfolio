
import darbImage from '@/assets/media/projects/darb.webp';
import ystoreImage from '@/assets/media/projects/ystore.webp';
import dashboardImage from '@/assets/media/projects/dashboard.webp';
import escooterImage from '@/assets/media/projects/escooter.webp';
import tsImage from '@/assets/media/projects/ts-management.webp';
import ycourseImage from '@/assets/media/projects/ycourse.webp';
import PortfolioSGTImage from '@/assets/media/projects/portfolio-sgt.webp';
import crudImage from '@/assets/media/projects/cruds-system.webp';
import paymentImage from '@/assets/media/projects/fawry.webp';

export const projects = [

    {
        name: 'E-commerce website',
        desc: `A dynamic e-commerce platform built with VueJS, featuring product listings, 
            a shopping cart, and user, admin authentication, styled with Tailwind.`,
        src: 'https://ystore-fashion.netlify.app',
        src_code: 'https://github.com/Magdi-khaled/E-commerce-Ystore',
        image: ystoreImage,
        hashtags: ['vue', 'vuex', 'tailwind', 'node', 'express', 'mongodb'],
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
        hashtags: ['nuxtJS', 'pinia', 'tailwind'],
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
        hashtags: ['vue', 'pinia', 'tailwind', 'veevalidate '],
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
    },
    {
        name: 'Payment System (Fawry)',
        desc: `Each user can pay for any available service in the system, such as internet recharge or landline bill.
                Payment with the user's wallet or credit card, and making discounts for users.`,
        src: 'https://github.com/YoussefTarek80/FawryPay-Project',
        src_code: 'https://github.com/YoussefTarek80/FawryPay-Project',
        image: paymentImage,
        hashtags: ['java', 'spring_Boot', 'postman', 'design_patterns'],
        isDeployed: false,
        category: ['all']
    },
]