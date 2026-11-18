/* ==========================================================================
   КОНТЕНТ САЙТУ — редагуйте тільки цей блок
   --------------------------------------------------------------------------
   Щоб додати проєкт: скопіюйте один об'єкт у масиві `projects`,
   змініть поля й збережіть. Порядок у масиві = порядок на сторінці.
   ========================================================================== */
const CONTENT = {
  hero: {
    badge: "Приймаю замовлення",
    title: "Вебзастосунки, сайти та лендинги, AI-агенти та чат-боти",
    titleAccent: "Вебзастосунки", // частина заголовка, виділена яскравішим кольором
    lead: "Розробка продуктів і зручна інтеграція сервісів для легкості роботи зі складними системами.",
  },

  // Рядок технологій під hero. icon — ключ з ICONS нижче (або "" без іконки)
  stack: [
    { name: "Python", icon: "python" },
    { name: "Telegram", icon: "telegram" },
    { name: "Claude API", icon: "spark" },
    { name: "Next.js", icon: "next" },
    { name: "Vercel", icon: "vercel" },
    { name: "PostgreSQL", icon: "database" },
    { name: "GitHub", icon: "github" },
  ],

  servicesLead: "Від ідеї до робочого продукту: дизайн, розробка, запуск і підтримка.",
  services: [
    {
      icon: "bot",
      title: "Чат-боти та AI-агенти",
      text: "Telegram-боти, асистенти на Claude API та агенти, що виконують задачі за вас: відповідають клієнтам, збирають заявки, працюють з даними.",
      tags: ["Telegram", "Claude API", "Python"],
    },
    {
      icon: "app",
      title: "Вебзастосунки",
      text: "Кабінети, панелі керування, Telegram Mini Apps і внутрішні сервіси з базою даних, авторизацією та інтеграціями.",
      tags: ["Next.js", "PostgreSQL", "API"],
    },
    {
      icon: "layout",
      title: "Лендинги та сайти",
      text: "Швидкі адаптивні сторінки з чистою версткою, анімаціями та SEO, що добре виглядають на будь-якому екрані.",
      tags: ["HTML / CSS", "Next.js", "Vercel"],
    },
  ],

  projectsLead: "Тут з'являтимуться завершені проєкти. Незабаром буде більше.",

  /* Поля проєкту:
     type        — підпис над назвою (Лендинг, Вебзастосунок, Mini App, Сайт…)
     title       — назва
     description — 1–2 речення
     stack       — масив технологій
     url         — посилання на живий проєкт ("" — без посилання)
     image       — прев'ю, напр. "assets/projects/my-shop.webp" ("" — абстрактна заглушка)
     placeholder — вигляд заглушки, якщо немає image: "landing" | "app" | "miniapp" | "site"
     soon        — true показує мітку «Скоро» */
  projects: [
    {
      type: "Лендинг",
      title: "Назва лендингу",
      description: "Короткий опис: для кого сторінка і який результат вона дала клієнту.",
      stack: ["HTML", "CSS", "JS"],
      url: "",
      image: "",
      placeholder: "landing",
      soon: true,
    },
    {
      type: "Вебзастосунок",
      title: "Назва застосунку",
      description: "Яку задачу вирішує сервіс і що в ньому найцікавіше.",
      stack: ["Next.js", "PostgreSQL"],
      url: "",
      image: "",
      placeholder: "app",
      soon: true,
    },
    {
      type: "Telegram Mini App",
      title: "Назва міні-апки",
      description: "Застосунок усередині Telegram: каталог, запис або оплата в кілька дотиків.",
      stack: ["Telegram", "Python"],
      url: "",
      image: "",
      placeholder: "miniapp",
      soon: true,
    },
    {
      type: "Сайт",
      title: "Назва сайту",
      description: "Багатосторінковий сайт для бізнесу з адаптивом і базовим SEO.",
      stack: ["Next.js", "Vercel"],
      url: "",
      image: "",
      placeholder: "site",
      soon: true,
    },
  ],
};

/* ==========================================================================
   Іконки (власні лінійні гліфи, stroke = currentColor)
   ========================================================================== */
const svg = (body, vb = "0 0 24 24") =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

const ICONS = {
  python: svg('<path d="M12 3c-4 0-4 1.6-4 3v2h4.5"/><path d="M8 8H5.5C4 8 3 9.2 3 12s1 4 2.5 4H8"/><path d="M12 21c4 0 4-1.6 4-3v-2h-4.5"/><path d="M16 16h2.5c1.5 0 2.5-1.2 2.5-4s-1-4-2.5-4H16"/><path d="M8 8v3.5c0 1 .8 1.5 1.5 1.5h5c.7 0 1.5.5 1.5 1.5V16"/><circle cx="10.2" cy="5.4" r=".4" fill="currentColor"/><circle cx="13.8" cy="18.6" r=".4" fill="currentColor"/>'),
  telegram: svg('<path d="M21 4 3 11.2l6 2.3L19 7l-7.6 8.2.1 4.8 3.2-3.4 4 3.4z"/>'),
  spark: svg('<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/>'),
  next: svg('<circle cx="12" cy="12" r="9"/><path d="M9 16V8l7.5 10"/><path d="M15 8v5"/>'),
  vercel: svg('<path d="M12 4 21 20H3z"/>'),
  database: svg('<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>'),
  github: svg('<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 7v10"/><path d="M18 10c0 4-6 3-12 7"/>'),
  bot: svg('<rect x="4" y="7" width="16" height="12" rx="4"/><path d="M12 7V4"/><circle cx="12" cy="3.5" r=".6" fill="currentColor"/><path d="M9 12.5v1M15 12.5v1"/><path d="M2 12v3M22 12v3"/>'),
  app: svg('<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18"/><path d="M9 9v11"/><circle cx="6" cy="6.5" r=".5" fill="currentColor"/>'),
  layout: svg('<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 9h10"/><path d="M9 12.5h6"/><rect x="9.5" y="15" width="5" height="2" rx="1"/>'),
  arrow: svg('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
};

/* ==========================================================================
   Рендер
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
const isExternal = (url) => /^https?:\/\//.test(url);
const linkAttrs = (url) => (isExternal(url) ? ' target="_blank" rel="noopener noreferrer"' : "");

function render() {
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const value = get(CONTENT, el.dataset.bind);
    if (value != null) el.textContent = value;
  });

  // Акцент у заголовку hero: виділяємо задану частину (перше слово)
  // Слова з дефісом (AI-агенти, чат-боти) не розриваються на два рядки
  const { title, titleAccent } = CONTENT.hero;
  const nowrap = (s) => esc(s).replace(/\S+-\S+/g, (w) => `<span class="nowrap">${w}</span>`);
  const i = titleAccent ? title.indexOf(titleAccent) : -1;
  $("#hero-title").innerHTML =
    i < 0
      ? nowrap(title)
      : nowrap(title.slice(0, i)) +
        `<span class="hero__accent">${esc(titleAccent)}</span>` +
        nowrap(title.slice(i + titleAccent.length));

  $("#stack-list").innerHTML = CONTENT.stack
    .map((t) => `<li class="stack__item">${ICONS[t.icon] || ""}<span>${esc(t.name)}</span></li>`)
    .join("");

  $("#services-list").innerHTML = CONTENT.services
    .map(
      (s, i) => `
      <article class="card service reveal" style="--delay:${i * 0.08}s">
        <div class="service__icon">${ICONS[s.icon] || ""}</div>
        <h3 class="service__title">${esc(s.title)}</h3>
        <p class="service__text">${esc(s.text)}</p>
        <ul class="tags">${s.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  $("#projects-list").innerHTML = CONTENT.projects.map(projectCard).join("");

  $("#year").textContent = new Date().getFullYear();
}

function projectCard(p, i) {
  const frame = p.placeholder === "miniapp" ? "phone" : "wide";
  const media = p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" decoding="async">`
    : `<div class="ph ph--${esc(p.placeholder || "site")}"><div class="ph__frame ph__frame--${frame}"><i></i><i></i><i></i><i></i></div></div>`;
  const title = p.url ? `<a href="${esc(p.url)}"${linkAttrs(p.url)}>${esc(p.title)}</a>` : esc(p.title);
  const link = p.url
    ? `<span class="project__link" aria-hidden="true">${ICONS.arrow}</span>`
    : "";

  return `
    <article class="card project reveal${p.url ? " project--linked" : ""}" style="--delay:${(i % 2) * 0.08}s">
      <div class="project__media">
        ${media}
        ${p.soon ? '<span class="project__soon">Скоро</span>' : ""}
      </div>
      <div class="project__body">
        <p class="project__type">${esc(p.type)}</p>
        <h3 class="project__title">${title}</h3>
        <p class="project__text">${esc(p.description)}</p>
        <div class="project__foot">
          <ul class="tags">${(p.stack || []).map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
          ${link}
        </div>
      </div>
    </article>`;
}

/* ==========================================================================
   Взаємодія
   ========================================================================== */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

function initNav() {
  const nav = $("#nav");
  const update = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

// Світіння картки слідує за курсором
function initCardGlow() {
  if (!window.matchMedia("(hover: hover)").matches) return;
  document.addEventListener(
    "pointermove",
    (e) => {
      const card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    },
    { passive: true }
  );
}

/* ==========================================================================
   Hero-візуал: 3D-поверхня з ліній на canvas (без бібліотек)
   Лінії малюються від дальніх до ближніх; кожна заливається кольором фону
   під собою, тож ближчі перекривають дальші — виходить об'ємний рельєф.
   ========================================================================== */
function initWave() {
  const canvas = $("#wave");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  // Кольори беруться з CSS-токенів поточної теми
  let BG = "#060606", INK = "255,255,255", alphaK = 1;
  function readColors() {
    const cs = getComputedStyle(document.documentElement);
    BG = cs.getPropertyValue("--bg").trim() || BG;
    INK = (cs.getPropertyValue("--ink").trim() || INK).replace(/\s/g, "");
    alphaK = document.documentElement.dataset.theme === "light" ? 0.8 : 1;
  }
  readColors();

  let w = 0, h = 0, dpr = 1, rows = 0, cols = 0;
  let running = false, visible = true, raf = 0, t = 0, last = 0;
  const mouse = { x: 0, tx: 0, y: 0, ty: 0 };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const small = w < 640;
    rows = small ? 26 : 38;
    cols = small ? 56 : 96;
    if (!running) draw();
  }

  // Висота поверхні в точці (x, z) у момент часу t
  function height(x, z, time) {
    const ridge = Math.exp(-((x - mouse.x * 1.2) ** 2) * 0.9);
    return (
      0.22 * Math.sin(x * 1.1 + time * 0.35 + z * 0.55) * Math.cos(z * 0.8 - time * 0.2) +
      0.09 * Math.sin(x * 2.6 - time * 0.45 + z * 1.6) +
      ridge * (0.38 + mouse.y * 0.12) * (0.6 + 0.4 * Math.sin(z * 1.15 - time * 0.55))
    );
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2;
    const F = Math.max(h * 0.62, 240);
    const horizon = h * 0.12;
    const camY = 1.15;
    const zNear = 1.15, zFar = 7.5;

    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, `rgba(${INK},0)`);
    grad.addColorStop(0.5, `rgba(${INK},1)`);
    grad.addColorStop(1, `rgba(${INK},0)`);

    for (let r = 0; r < rows; r++) {
      const k = r / (rows - 1); // 0 — далеко, 1 — близько
      const z = zFar + (zNear - zFar) * Math.pow(k, 0.85);
      // кожен ряд ширший за екран — без видимих бічних країв поверхні
      const xSpan = (w / 2 / F) * z * 1.1 + 0.3;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        const x = -xSpan + (2 * xSpan * c) / cols;
        const y = height(x, z, t);
        const sx = cx + (x / z) * F;
        const sy = horizon + ((camY - y) / z) * F;
        c === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
      }
      // заливка під лінією (приховує дальші лінії)
      ctx.save();
      ctx.lineTo(w + 20, h + 20);
      ctx.lineTo(-20, h + 20);
      ctx.closePath();
      ctx.fillStyle = BG;
      ctx.fill();
      ctx.restore();

      ctx.globalAlpha = (0.07 + 0.55 * Math.pow(k, 1.6)) * alphaK;
      ctx.lineWidth = 0.6 + k * 0.6;
      ctx.strokeStyle = grad;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    t += dt;
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    draw();
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (running || reduceMotion || !visible || document.hidden) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  resize();
  window.addEventListener("resize", () => { resize(); }, { passive: true });

  if (!reduceMotion) {
    window.addEventListener(
      "pointermove",
      (e) => {
        mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
      },
      { passive: true }
    );
  }

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    visible ? start() : stop();
  }).observe(canvas);

  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  document.addEventListener("themechange", () => { readColors(); if (!running) draw(); });
  start();
}

/* ==========================================================================
   Тема: світла / темна
   За замовчуванням — як у системі відвідувача (і змінюється разом з нею).
   Вибір перемикачем зберігається; якщо він збігається з системним —
   збережене скидається, і сторінка знову слідує за системою.
   ========================================================================== */
function initTheme() {
  const root = document.documentElement;
  const btn = $("#theme-toggle");
  const meta = document.querySelector('meta[name="theme-color"]');
  const mq = window.matchMedia("(prefers-color-scheme: light)");
  const systemTheme = () => (mq.matches ? "light" : "dark");
  const store = {
    get() { try { return localStorage.getItem("theme"); } catch (e) { return null; } },
    set(v) { try { v ? localStorage.setItem("theme", v) : localStorage.removeItem("theme"); } catch (e) {} },
  };

  function apply(theme) {
    root.dataset.theme = theme;
    if (meta) meta.content = getComputedStyle(root).getPropertyValue("--bg").trim();
    if (btn) btn.setAttribute("aria-label", theme === "light" ? "Увімкнути темну тему" : "Увімкнути світлу тему");
    document.dispatchEvent(new Event("themechange"));
  }

  function change(theme) {
    // плавна зміна через View Transitions, якщо браузер підтримує
    if (document.startViewTransition && !reduceMotion) document.startViewTransition(() => apply(theme));
    else apply(theme);
  }

  apply(root.dataset.theme || store.get() || systemTheme());

  btn && btn.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    store.set(next === systemTheme() ? null : next);
    change(next);
  });

  mq.addEventListener("change", () => {
    if (!store.get()) change(systemTheme());
  });
}

/* ========================================================================== */
initTheme();
render();
initReveal();
initNav();
initCardGlow();
initWave();
