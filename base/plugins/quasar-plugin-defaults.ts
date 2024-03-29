import { Notify, LoadingBar } from 'quasar';

export default defineNuxtPlugin(() => {
  Notify.setDefaults({
    progress: true,
    position: 'top',
    timeout: 3000,
  });

  LoadingBar.setDefaults({
    color: 'primary',
    size: '2.5px',
    position: 'top',
  });
});
