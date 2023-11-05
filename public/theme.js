if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  theme = "dark"
} else {
  document.documentElement.classList.remove('dark');
  theme = "light"
}
