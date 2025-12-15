// Language translations
const translations = {
    ru: {
        nav_name: "Ваше Имя",
        nav_about: "Обо Мне",
        nav_experience: "Опыт",
        nav_skills: "Навыки",
        nav_projects: "Проекты",
        nav_contact: "Контакты",
        hero_name: "Ваше Имя",
        hero_title: "Full Stack Разработчик | PHP, Go, Laravel, Vue.js",
        hero_desc: "6+ лет опыта | CRM, ERP, маркетплейсы и инновационные проекты",
        hero_contact: "Связаться",
        about_title: "Обо Мне",
        about_desc: "Я Full Stack разработчик с опытом работы более 6 лет. В 2016-2020 годах получил степень бакалавра и с 2018 года работал в 6 компаниях, успешно реализовав CRM, ERP, маркетплейсы и множество других проектов. Моя цель – создавать высококачественные, современные и эффективные решения для клиентов.",
        experience_title: "Образование и Опыт",
        education_title: "Образование",
        edu_degree: "Степень бакалавра",
        edu_university: "Название университета (добавьте свое)",
        edu_desc: "Завершил обучение по специальности компьютерные науки или смежной области. Получил обширные знания в программировании, управлении базами данных и управлении проектами.",
        edu_additional: "Дополнительное образование",
        edu_courses: "Онлайн-курсы и сертификаты",
        edu_courses_desc: "Получил сертификаты по PHP, Go и DevOps на платформах Coursera, Udemy и других, укрепив свои навыки практическими проектами.",
        work_title: "Опыт работы",
        job_1_title: "Full Stack Разработчик | Компания 1",
        job_1_desc: "Участвовал в разработке CRM и ERP систем, а также внутренних инструментов управления.",
        job_2_title: "Backend Разработчик | Компания 2",
        job_2_desc: "Работал над проектами маркетплейсов и интеграцией API.",
        job_3_title: "Старший разработчик | Компания 3",
        job_3_desc: "Внедрил микросервисы и процессы CI/CD.",
        job_4_title: "Full Stack Разработчик | Компания 4",
        job_4_desc: "Разработал пользовательские интерфейсы и серверные системы с использованием Laravel и Vue.js.",
        job_5_title: "Ведущий разработчик | Компания 5",
        job_5_desc: "Проектировал высоконагруженные системы с использованием Go и Docker.",
        job_6_title: "Фриланс-разработчик | Компания 6",
        job_6_desc: "Реализовал Telegram-боты и проекты маркетплейсов для различных клиентов.",
        skills_title: "Навыки",
        frontend_title: "Frontend",
        backend_title: "Backend",
        tools_title: "Инструменты и Принципы",
        projects_title: "Проекты",
        project_1_title: "CRM Система",
        project_1_desc: "CRM-система, разработанная с использованием Laravel и Vue.js, включающая управление пользователями, задачи и аналитику. Оптимизирована с PostgreSQL и Redis.",
        project_2_title: "ERP Платформа",
        project_2_desc: "ERP-система, разработанная с использованием Go (Echo, GORM) в архитектуре микросервисов. Эффективное управление данными с помощью Docker и RabbitMQ.",
        project_3_title: "Электронная коммерция (Маркетплейс)",
        project_3_desc: "Маркетплейс, разработанный на PHP (Yii2), с интеграцией платежей и интерактивностью через Livewire. Внедрены процессы CI/CD.",
        project_details: "Подробнее",
        contact_title: "Контакты",
        contact_desc: "Хотите работать вместе? Я готов к сотрудничеству!",
        contact_phone_ru: "+998 94 105 04 05",
        contact_linkedin: "Профиль LinkedIn",
        contact_github: "Профиль GitHub",
        contact_telegram: "Профиль Telegram",
        footer_text: "&copy; 2025 Ваше Имя. Все права защищены."
    },
    en: {
        nav_name: "Your Name",
        nav_about: "About Me",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_name: "Your Name",
        hero_title: "Full Stack Developer | PHP, Go, Laravel, Vue.js",
        hero_desc: "6+ years of experience | CRM, ERP, Marketplace, and innovative projects",
        hero_contact: "Contact Me",
        about_title: "About Me",
        about_desc: "I am a Full Stack Developer with over 6 years of experience. I completed my bachelor's degree between 2016-2020 and have worked in 6 companies since 2018, successfully delivering CRM, ERP, marketplace, and various other projects. My goal is to create high-quality, modern, and efficient solutions for clients.",
        experience_title: "Education & Experience",
        education_title: "Education",
        edu_degree: "Bachelor's Degree",
        edu_university: "University Name (Add your own)",
        edu_desc: "Completed a bachelor's degree in Computer Science or a related field. Gained extensive knowledge in programming, database management, and project management during my studies.",
        edu_additional: "Additional Education",
        edu_courses: "Online Courses and Certifications",
        edu_courses_desc: "Obtained certifications in PHP, Go, and DevOps from platforms like Coursera, Udemy, and others, strengthening my skills with practical projects.",
        work_title: "Work Experience",
        job_1_title: "Full Stack Developer | Company 1",
        job_1_desc: "Contributed to the development of CRM and ERP systems, as well as internal management tools.",
        job_2_title: "Backend Developer | Company 2",
        job_2_desc: "Worked on marketplace projects and API integrations.",
        job_3_title: "Senior Developer | Company 3",
        job_3_desc: "Introduced microservices and CI/CD processes.",
        job_4_title: "Full Stack Developer | Company 4",
        job_4_desc: "Developed user interfaces and backend systems using Laravel and Vue.js.",
        job_5_title: "Lead Developer | Company 5",
        job_5_desc: "Designed high-load systems using Go and Docker.",
        job_6_title: "Freelance Developer | Company 6",
        job_6_desc: "Built Telegram bots and marketplace projects for various clients.",
        skills_title: "Skills",
        frontend_title: "Frontend",
        backend_title: "Backend",
        tools_title: "Tools & Principles",
        projects_title: "Projects",
        project_1_title: "CRM System",
        project_1_desc: "A CRM system built with Laravel and Vue.js, including user management, tasks, and analytics. Optimized with PostgreSQL and Redis.",
        project_2_title: "ERP Platform",
        project_2_desc: "An ERP system developed using Go (Echo, GORM) with a microservices architecture. Efficient data management with Docker and RabbitMQ.",
        project_3_title: "E-commerce Marketplace",
        project_3_desc: "A marketplace built with PHP (Yii2), featuring payment integration and interactivity with Livewire. CI/CD pipelines implemented.",
        project_details: "View Details",
        contact_title: "Contact",
        contact_desc: "Interested in working together? I'm ready to collaborate!",
        contact_phone_ru: "+998 94 105 04 05",
        contact_linkedin: "LinkedIn Profile",
        contact_github: "GitHub Profile",
        contact_telegram: "Telegram Profile",
        footer_text: "&copy; 2025 Your Name. All rights reserved."
    }
};

// Language change function
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}

// JavaScript for other functionalities
// $(document).ready(function () {
//     // Smooth scroll
//     $('a[href*="#"]').on('click', function (e) {
//         e.preventDefault();
//         const target = $(this.hash);
//         $('html, body').animate({
//             scrollTop: target.offset().top - 100
//         }, 300); // Ускорена анимация с 800ms до 300ms
//         // Close mobile menu after clicking a link
//         if ($(window).width() < 992) {
//             $('.navbar-collapse').collapse('hide');
//         }
//     });

//     // Project card animation
//     $('.project-card').on('mouseenter', function () {
//         $(this).find('.btn-custom').addClass('animate__animated animate__pulse');
//     }).on('mouseleave', function () {
//         $(this).find('.btn-custom').removeClass('animate__animated animate__pulse');
//     });

//     // Fade in sections on scroll
//     $(window).scroll(function () {
//         $('.card, .skill-card, .experience-item, .education-item').each(function () {
//             const topOfElement = $(this).offset().top;
//             const bottomOfWindow = $(window).scrollTop() + $(window).height();
//             if (bottomOfWindow > topOfElement) {
//                 $(this).addClass('animate__animated animate__fadeInUp');
//             }
//         });
//     });

//     // Fast toggle for navbar
//     $('.navbar-toggler').on('click', function () {
//         $('#navbarNav').collapse('toggle');
//     });

//     // Ensure navbar is visible on resize
//     $(window).on('resize', function () {
//         if ($(window).width() >= 992) {
//             $('#navbarNav').collapse('show');
//         } else {
//             $('#navbarNav').collapse('hide');
//         }
//     });

//     // Initialize language
//     changeLanguage();
// });