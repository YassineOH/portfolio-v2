document.addEventListener('astro:page-load', () => {
  const links = document
    .querySelectorAll('#nav-links > li > a')
    .forEach((a) => {
      if (a.classList.contains('bg-primary')) {
        a.classList.remove('bg-primary');
        a.classList.remove('font-bold');
        a.classList.remove('opacity-100');
        a.classList.remove('text-background');
      }
      if (a.getAttribute('href') === window.location.pathname) {
        a.classList.add('bg-primary');
        a.classList.add('font-bold');
        a.classList.add('opacity-100');
        a.classList.add('text-background');
      }
    });
});
