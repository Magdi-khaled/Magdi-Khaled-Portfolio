import htmlcssLogo from '../assets/media/skills/html&css.png';
import JavaScriptLogo from '../assets/media/skills/js.png';
import typescriptLogo from '../assets/media/skills/ts.png';
import jQueryLogo from '../assets/media/skills/jquery.png';
import tailwindLogo from '../assets/media/skills/tailwindcss.png';
import bootstrapLogo from '../assets/media/skills/bootstrap.png';
import sassLogo from '../assets/media/skills/sass.png';
import vuejsLogo from '../assets/media/skills/vuejs.png';
import nuxtjsLogo from '../assets/media/skills/nuxtjs.svg';
import vuexLogo from '../assets/media/skills/vuex.png';
import piniaLogo from '../assets/media/skills/pinia.png';
import nodejsLogo from '../assets/media/skills/nodejs.png';
import expressjsLogo from '../assets/media/skills/expressjs.png';
import mongoLogo from '../assets/media/skills/mongoDB.svg';
import ajaxLogo from '../assets/media/skills/ajax.png';
import pythonLogo from '../assets/media/skills/python.png';
import javaLogo from '../assets/media/skills/java.webp';
import cppLogo from '../assets/media/skills/cpp.png';
import csharpLogo from '../assets/media/skills/c-sharp.png';
import gitLogo from '../assets/media/skills/git.png';
import figmaLogo from '../assets/media/skills/figma.png';
import { reactive } from 'vue';

export const skills = reactive([
    { label: 'html5 & css3', icon: htmlcssLogo, clicked: false },
    { label: 'javaScript', icon: JavaScriptLogo, clicked: false },
    { label: 'Vue.js', icon: vuejsLogo, clicked: false },
    { label: 'vuex', icon: vuexLogo, clicked: false },
    { label: 'pinia', icon: piniaLogo, clicked: false },
    { label: 'nuxt.js', icon: nuxtjsLogo, clicked: false },
    { label: 'typeScript', icon: typescriptLogo, clicked: false },
    { label: 'tailwind Css', icon: tailwindLogo, clicked: false },
    { label: 'bootstrap', icon: bootstrapLogo, clicked: false },
    { label: 'sass', icon: sassLogo, clicked: false },
    { label: 'jQuery', icon: jQueryLogo, clicked: false },
    { label: 'ajax', icon: ajaxLogo, clicked: false },
    { label: 'node.js', icon: nodejsLogo, clicked: false },
    { label: 'express.js', icon: expressjsLogo, clicked: false },
    { label: 'mongoDB', icon: mongoLogo, clicked: false },
    { label: 'git & gitHub', icon: gitLogo, clicked: false },
    { label: 'figma', icon: figmaLogo, clicked: false },
    { label: 'cpp', icon: cppLogo, clicked: false },
    { label: 'c-sharp/ c#', icon: csharpLogo, clicked: false },
    { label: 'java', icon: javaLogo, clicked: false },
    { label: 'python', icon: pythonLogo, clicked: false }
]);