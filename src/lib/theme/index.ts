export const getThemePreference = () => {
  if (typeof localStorage !== undefined && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefer-color-schema: dark)').matches
    ? 'dark'
    : 'light';
};

export const toggleTheme = () => {
  const isDark = getThemePreference() !== 'dark';
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

export const initializeTheme = () => {
  const isDark = getThemePreference() === 'dark';
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  if (typeof localStorage !== undefined) {
    const observer = new MutationObserver(() => {
      const isDark = getThemePreference() === 'dark';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    });
  }
};
