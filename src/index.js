document.querySelectorAll('.share-container').forEach(container => {
  const services = container.dataset.services?.split(',') || ['copy'];
  const icons = {
    vkontakte: '<svg fill="none" viewBox="0 0 48 48"><path d="M0 23.04C0 12.179 0 6.748 3.374 3.374S12.18 0 23.04 0h1.92c10.861 0 16.292 0 19.666 3.374C48 6.748 48 12.18 48 23.04v1.92c0 10.861 0 16.292-3.374 19.666C41.252 48 35.82 48 24.96 48h-1.92c-10.861 0-16.292 0-19.666-3.374C0 41.252 0 35.82 0 24.96z" fill="#0077FF"></path><path d="M25.54 34.58c-10.94 0-17.18-7.5-17.44-19.98h5.48c.18 9.16 4.22 13.04 7.42 13.84V14.6h5.16v7.9c3.16-.34 6.48-3.94 7.6-7.9h5.16c-.86 4.88-4.46 8.48-7.02 9.96 2.56 1.2 6.66 4.34 8.22 10.02h-5.68c-1.22-3.8-4.26-6.74-8.28-7.14v7.14z" fill="#FFFFFF"></path></svg>',
    odnoklassniki: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#EE8208" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 6c1.9 0 3.7.8 5 2.1l-1.4 1.4c-1-.9-2.3-1.5-3.6-1.5s-2.6.5-3.6 1.5L7 15.6c1.3-1.3 3.1-2.1 5-2.1z"/></svg>',
    telegram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0088CC" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.4 6.6l-1.9 9c-.1.5-.4.6-.8.4l-3.2-2.4-1.5 1.4c-.2.2-.3.2-.5.2l.2-3.1 6-5.4c.2-.2 0-.3-.3-.1l-7.4 4.6-3.1-1c-.5-.2-.5-.5.1-.7l12.1-4.6c.4-.1.7.1.6.6z"/></svg>',
    whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#666" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>',
  };
  const labels = {
    vkontakte: 'ВКонтакте',
    odnoklassniki: 'Одноклассники',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    copy: 'Скопировать ссылку',
  };

  // Удаляем всё, что внутри (на всякий случай)
  container.innerHTML = '';
  container.classList.add('shrbtn'); // добавляем основной класс

  // Кнопка
  const button = document.createElement('button');
  button.className = 'shrbtn__button';
  button.setAttribute('aria-label', 'Поделиться');
  button.innerHTML = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.375 6.22925L8.625 9.58342M8.625 13.4167L14.375 16.7709M17.25 7.66675C15.6621 7.66675 14.375 6.37956 14.375 4.79175C14.375 3.20393 15.6621 1.91675 17.25 1.91675C18.8379 1.91675 20.125 3.20393 20.125 4.79175C20.125 6.37956 18.8379 7.66675 17.25 7.66675ZM17.25 21.0834C15.6621 21.0834 14.375 19.7963 14.375 18.2084C14.375 16.6206 15.6621 15.3334 17.25 15.3334C18.8379 15.3334 20.125 16.6206 20.125 18.2084C20.125 19.7963 18.8379 21.0834 17.25 21.0834ZM5.75 14.3751C4.16219 14.3751 2.875 13.0879 2.875 11.5001C2.875 9.91222 4.16219 8.62508 5.75 8.62508C7.33781 8.62508 8.625 9.91222 8.625 11.5001C8.625 13.0879 7.33781 14.3751 5.75 14.3751Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  container.appendChild(button);

  // Панель
  const panel = document.createElement('div');
  panel.className = 'shrbtn__panel';
  container.appendChild(panel);

  // Кнопки соцсетей
  services.forEach(service => {
    const option = document.createElement('div');
    option.className = 'shrbtn__option';
    option.innerHTML = `
      ${icons[service] || ''}
      <span class="shrbtn__tooltip">${labels[service]}</span>
    `;

    option.addEventListener('click', () => {
      const url = encodeURIComponent(window.location.href);

      switch (service) {
        case 'vkontakte':
          window.open(`https://vk.com/share.php?url=${url}`, '_blank');
          break;
        case 'odnoklassniki':
          window.open(`https://connect.ok.ru/offer?url=${url}`, '_blank');
          break;
        case 'telegram':
          window.open(`https://t.me/share/url?url=${url}`, '_blank');
          break;
        case 'whatsapp':
          window.open(`https://wa.me/?text=${url}`, '_blank');
          break;
        case 'copy':
          navigator.clipboard.writeText(window.location.href).then(() => {
            option.querySelector('.shrbtn__tooltip').textContent = 'Скопировано!';
            setTimeout(() => {
              option.querySelector('.shrbtn__tooltip').textContent = labels[service];
            }, 1500);
          });
          break;
      }
    });

    panel.appendChild(option);
  });

  // Переключение панели
  button.addEventListener('click', () => {
    panel.classList.toggle('shrbtn__panel--visible');
  });

  // Закрытие при клике вне
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      panel.classList.remove('shrbtn__panel--visible');
    }
  });
});