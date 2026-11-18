# Портфоліо ssanqk

Односторінкове портфоліо: AI-агенти, чат-боти, лендинги та вебзастосунки.
Чистий HTML + CSS + JS без збірки, хоститься на GitHub Pages.

**Сайт:** https://ssanqk.github.io/portfolio/

## Структура

```
index.html      розмітка, мета-теги
style.css       дизайн-токени (на початку файлу) і стилі
script.js       КОНТЕНТ (блок CONTENT угорі) + рендер і анімації
assets/         favicon, og-прев'ю, assets/projects/ для скриншотів робіт
```

## Як додати проєкт

1. Покладіть скриншот у `assets/projects/` (краще `.webp`, ~1600×1000).
2. У `script.js` знайдіть масив `projects` і додайте/змініть об'єкт:

```js
{
  type: "Лендинг",
  title: "Кав'ярня Brew",
  description: "Лендинг з онлайн-меню та бронюванням столиків.",
  stack: ["Next.js", "Vercel"],
  url: "https://brew.example.com",
  image: "assets/projects/brew.webp",
  placeholder: "landing",
  soon: false,
},
```

3. Закомітьте й запуште, GitHub Pages оновиться за хвилину.


## Локальний перегляд

```bash
python -m http.server 5600
```

Відкрийте http://localhost:5600
