import { useTranslation } from '~/lib/i18n';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const form = document.getElementById('form') as HTMLFormElement;
    const result = document.getElementById('result')!;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('was-validated');
      const t = useTranslation(document.documentElement.lang as 'en' | 'ar');

      if (!form.checkValidity()) {
        (form.querySelectorAll(':invalid')[0] as any).focus();
        return;
      }
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result.classList.add('bg-primary');
      result.innerHTML = 'Sending...';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.classList.add('bg-secondary');
            result.innerHTML = t('form.sent');
          } else {
            result.classList.add('bg-red-400');
            result.innerHTML = json.message;
          }
        })
        .catch(() => {
          result.classList.add('bg-red-400');
          result.innerHTML = t('form.error');
        })
        .then(function () {
          form.reset();
          form.classList.remove('was-validated');
          setTimeout(() => {
            result.style.display = 'none';
          }, 5000);
        });
    });
  },
  { once: true },
);
