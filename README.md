# 📣 Shrbtn

Лёгкие и стильные кнопки для публикации ссылок в соцсетях и копирования URL. Подходит для любых веб-проектов — блогов, лендингов, портфолио и т.д.

---

## 🚀 Установка

Вы можете установить пакет удобным для вас способом: через npm, Bower или подключить напрямую через CDN.

### 📦 Установка через NPM

```bash
npm install @devstarter/shrbtn
```

> Используйте, если вы подключаете скрипты и стили через сборщики (например, Webpack, Vite, Parcel).

### 📦 Установка через Bower

```bash
bower install DevStarter-Technology/shrbtn --save
```

> Подходит для проектов, где используется Bower в качестве менеджера зависимостей.

### 🌐 Подключение через CDN

Если вы не используете сборщики, просто вставьте эти строки в ваш HTML:

#### jsDelivr

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@devstarter/shrbtn@latest/dist/css/shrbtn.min.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@devstarter/shrbtn@latest/dist/js/shrbtn.min.js"></script>
```

#### unpkg

```html
<link rel="stylesheet" href="https://unpkg.com/@devstarter/shrbtn@latest/dist/css/shrbtn.min.css">
<script type="text/javascript" src="https://unpkg.com/@devstarter/shrbtn@latest/dist/js/shrbtn.min.js"></script>
```

---

## ⚙️ Использование

Добавьте элемент с классами `share-container share` и укажите, какие сервисы нужно отобразить, через атрибут `data-services`.

### Пример:

```html
<div class="share-container share" data-services="telegram,vkontakte,copy"></div>
```

Поддерживаемые значения в `data-services`:
- `telegram`
- `vkontakte`
- `facebook`
- `twitter`
- `linkedin`
- `whatsapp`
- `copy` — кнопка копирования текущей ссылки

> Вы можете указать любые комбинации, разделённые запятыми.

---

## 📌 Преимущества

- ✅ Простое подключение
- 🎨 Лёгкий и адаптивный дизайн
- ⚡ Без зависимостей
- 🔗 Поддержка популярных соцсетей и копирования ссылки

---

## 💬 Обратная связь

Если у вас есть предложения, замечания или баг-репорты — создайте issue или pull request в [репозитории на GitHub](https://github.com/DevStarter-Technology/shrbtn).