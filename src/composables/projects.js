
import darbLogo from '../assets/media/projects/darb.png';
import ystoreLogo from '../assets/media/projects/ystore.png';
import escooterLogo from '../assets/media/projects/escooter.png';
import tsLogo from '../assets/media/projects/ts-management.png';
import ycourseLogo from '../assets/media/projects/ycourse.png';
import paymentLogo from '../assets/media/projects/fawry.png';

export const projects = [
    {
        name: 'Darb - دَربْ',
        desc: `Education Management System facilitates communication between the administration,
                many schools under its jurisdiction and students' parents.`,
        src: '',
        src_code: 'https://github.com/YoussefTarek80/Graduation_Project_2024',
        logo: darbLogo,
        isDeployed: false
    },
    {
        name: 'E-commerce - Ystore',
        desc: `Online Fashion store that view sellers’ fashion products for sell.
                Admin can add or update products for sell. User can view his Orders, returns, Pay Cards, Monthly discount QRCode and order any product.`,
        src: '',
        src_code: 'https://github.com/YoussefTarek80/Graduation_Project_2024',
        logo: ystoreLogo,
        isDeployed: false
    },
    {
        name: 'Task Management',
        desc: `A powerful and intuitive task management system. Effortlessly create, update, and manage tasks 
                with a seamless user experience. High productivity with our single-page application.`,
        src: 'https://task-management-ts.netlify.app',
        src_code: 'https://github.com/Magdi-khaled/Task-Management-System',
        logo: tsLogo,
        isDeployed: true
    },
    {
        name: 'E-Scooter',
        desc: `E-Scooter product and it's features could include detailed descriptions 
                of each model, highlighting aspects such as motor power, battery life, top speed, and unique functionalities 
                dual motors or smart connectivity.`,
        src: 'https://e-scooter-mu.vercel.app/',
        src_code: 'https://github.com/Magdi-khaled/E-Scooter',
        logo: escooterLogo,
        isDeployed: true
    },
    {
        name: 'Your Course',
        desc: `A backend API for course management, allowing users to add, update, or delete courses,
                while others can view course. It features role-based access control,
                enabling managers to assign roles [User, Admin, Manager].`,
        src: '',
        src_code: 'https://github.com/Magdi-khaled/E-Scooter',
        logo: ycourseLogo,
        isDeployed: false
    },
    {
        name: 'Payment System (Fawry)',
        desc: `Each user can pay for any available service in the system, such as internet recharge or landline bill.
                Payment with the user's wallet or credit card, and making discounts for users.`,
        src: 'https://github.com/YoussefTarek80/FawryPay-Project',
        src_code: 'https://github.com/Magdi-khaled/E-Scooter',
        logo: paymentLogo,
        isDeployed: false
    },
]