import { ref } from 'vue';

const isDarkTheme = ref(false);

const changeTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;

  const root = document.documentElement.style;

  if (!isDarkTheme.value) {
    root.setProperty('--primary', '#333333');
    root.setProperty('--bodyColor', '#FAFAFA');
  }
  else {
    root.setProperty('--primary', '#fff');
    root.setProperty('--bodyColor', '#171717');
  }
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
};

export { isDarkTheme, changeTheme };