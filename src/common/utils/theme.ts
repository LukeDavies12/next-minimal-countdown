// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export const checkTheme = () => {
  let theme = ""

  if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      theme = "dark"
  } else {
      document.documentElement.classList.remove('dark');
      theme = "light"
  }

  return theme
};

// set the theme to light
export const setLightTheme = () => {
  document.documentElement.classList.remove('dark');
  window.localStorage.theme = 'light';
};

// set the theme to dark
export const setDarkTheme = () => {
  document.documentElement.classList.add('dark');
  window.localStorage.theme = 'dark';
};

// remove the theme from local storage to use the OS theme
export const removeTheme = () => {
  window.localStorage.removeItem('theme');
  checkTheme();
};