import { ref } from 'vue';

const activeSection = ref('home');

const updateActiveSection = (sections) => {
    const scrollPos = window.scrollY + 150;
    for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
            activeSection.value = id;
        }
    }
};

export { activeSection, updateActiveSection }