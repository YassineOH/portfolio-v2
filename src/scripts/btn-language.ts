document.addEventListener('astro:page-load', () => {
  const btn = document.querySelector('#btn-language')!;
  const menu = document.querySelector('#language-list')!;
  menu.classList.remove('flex');
  menu.classList.add('hidden');
  btn.addEventListener('click', () => {
    const isClose = menu.classList.contains('hidden');
    if (isClose) {
      menu.classList.remove('hidden');
      menu.classList.add('flex');
    } else {
      menu.classList.remove('flex');
      menu.classList.add('hidden');
    }
  });
});
