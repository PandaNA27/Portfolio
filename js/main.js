/* Builds the page from js/content.js. You shouldn't need to edit this file. */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = n => String(n).padStart(2, "0");
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- text ---------- */
  $("#brand").textContent = SITE.alias;
  $("#shroudName").textContent = SITE.alias;
  $("#chinBrand").textContent = SITE.alias;
  $("#footAlias").textContent = SITE.alias;
  $("#kicker").textContent = SITE.tagline;
  $("#yearText").textContent = SITE.year;
  $("#yearText2").textContent = SITE.year;
  $("#aboutIntro").textContent = ABOUT.intro;
  $("#currently").innerHTML = ABOUT.currently.map(c => `<div><dt>${esc(c.k)}</dt><dd>${esc(c.v)}</dd></div>`).join("");
  $("#facts").innerHTML = ABOUT.facts.map(f => `<li>${esc(f)}</li>`).join("");

  /* ---------- data: games + fields share one screen ---------- */
  const groups = {
    game: GAMES.map((g, i) => ({
      type: "game", id: slug(g.title), num: pad(i + 1), title: g.title, hue: g.hue,
      blurb: g.desc, role: g.role, year: g.year,
      chips: [...(g.role || "").split(" · "), g.team, g.platform, g.year].filter(Boolean),
      projects: g.projects || [], link: g.link, logo: g.logo, cover: g.cover, pixel: g.pixel,
      facts: [["My role", g.role], ["Project", g.team], ["Platform & engine", g.platform], ["Year", g.year]]
        .filter(([, v]) => v),
    })),
    field: SECTIONS.map((s, i) => ({
      type: "field", id: s.id, num: pad(i + 1), title: s.title,
      blurb: s.blurb, chips: s.tools, projects: s.projects || [],
    })),
  };

  /* ---------- summary section ---------- */
  if (typeof SUMMARY !== "undefined") {
    $("#sumHead").textContent = SUMMARY.heading;
    $("#sumIntro").textContent = SUMMARY.intro;
    $("#sumStats").innerHTML = SUMMARY.stats.map((s, i) => `
      <div class="stat reveal" style="--d:${i * 90}ms">
        <span class="stat__n" data-n="${+s.n || 0}">${esc(String(s.n))}</span>
        <span class="stat__label">${esc(s.label)}</span>
        ${s.note ? `<span class="stat__note">${esc(s.note)}</span>` : ""}
      </div>`).join("");
    // the strip is drawn twice so it can loop without a gap
    const strip = SUMMARY.strip.map(src => `<img src="${esc(src)}" alt="" loading="lazy"${/cheryls-choice/.test(src) ? ' class="is-pixel"' : ""}>`).join("");
    $("#sumMarquee").innerHTML = strip + strip;
    $("#sumHighlights").innerHTML = SUMMARY.highlights.map((h, i) => `
      <a class="hl reveal" href="${esc(h.link)}" style="--d:${i * 90}ms">
        <span class="hl__art">${h.img
          ? `<img src="${esc(h.img)}" alt="" loading="lazy"${h.pixel ? ' class="is-pixel"' : ""}>`
          : `<span class="hl__icon">▶</span>`}</span>
        <span class="hl__title">${esc(h.title)}</span>
        <span class="hl__text">${esc(h.text)}</span>
        <span class="hl__more">See more →</span>
      </a>`).join("");
    // field tools first, then any game engine not already listed (so "Unity" doesn't repeat "Unity (C#)")
    const tools = [...new Set(SECTIONS.flatMap(s => s.tools))];
    GAMES.map(g => (g.platform || "").split(" · ").pop()).forEach(e => {
      if (e && !tools.some(t => t.toLowerCase().startsWith(e.toLowerCase()))) tools.push(e);
    });
    $("#sumTools").innerHTML = tools.map(t => `<span class="chip">${esc(t)}</span>`).join("");
  }

  /* ---------- rails ---------- */
  // simple line icons for the field cards, matched by section id
  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICONS = {
    "technical-art": svg('<path d="M4 20 14 10"/><path d="m14 10 2-2"/><path d="M17 3v3M15.5 4.5h3M20 9v2M19 10h2M10 3v2M9 4h2"/>'),
    "3d-modelling": svg('<path d="M12 3 20 7.5v9L12 21l-8-4.5v-9z"/><path d="M12 12 20 7.5M12 12v9M12 12 4 7.5"/>'),
    "programming": svg('<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>'),
    "motion-video": svg('<circle cx="12" cy="12" r="8.5"/><path d="m10 8.5 5 3.5-5 3.5z"/>'),
  };
  const fallbackIcon = svg('<path d="M12 4l2.2 5 5.3.4-4 3.5 1.2 5.2L12 15.4 7.3 18.1l1.2-5.2-4-3.5 5.3-.4z"/>');
  $("#gamesRail").innerHTML = groups.game.map((g, i) => `
    <button class="cart" data-type="game" data-i="${i}" style="--i:${i}" aria-label="Open ${esc(g.title)}">
      <span class="cart__logo">
        <span class="art" style="--h:${g.hue ?? 140}"></span>
        ${g.cover ? `<img class="cart__cover${g.pixel ? " is-pixel" : ""}" src="${esc(g.cover)}" alt="${esc(g.title)} cover art" loading="lazy">`
          : g.logo ? `<img src="${esc(g.logo)}" alt="${esc(g.title)} logo">`
          : `<span class="cart__ph">${esc(g.title)}</span>`}
      </span>
      <span class="cart__name">${esc(g.title)}</span>
      <span class="cart__role">${esc([g.year, g.role].filter(Boolean).join(" · "))}</span>
    </button>`).join("");

  $("#fieldsRail").innerHTML = groups.field.map((f, i) => `
    <button class="gpu" data-type="field" data-i="${i}" style="--i:${i + groups.game.length}" aria-label="Open ${esc(f.title)}">
      <span>
        <span class="gpu__num">${f.num} / ${pad(groups.field.length)}</span>
        <span class="gpu__title">${esc(f.title)}</span>
        <span class="gpu__tools">${esc(f.chips.slice(0, 4).join(" · "))}</span>
      </span>
      <span class="gpu__icon">${ICONS[f.id] || fallbackIcon}</span>
      <span class="gpu__open">open ↗</span>
    </button>`).join("");

  document.querySelectorAll(".rail").forEach(rail => {
    // drag to scroll (mouse); touch already scrolls natively
    let startX = 0, startScroll = 0, dragging = false, moved = 0;
    rail.addEventListener("pointerdown", e => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragging = true; moved = 0; startX = e.clientX; startScroll = rail.scrollLeft;
    });
    addEventListener("pointermove", e => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      if (moved > 5) rail.classList.add("is-dragging");
      rail.scrollLeft = startScroll - dx;
    });
    addEventListener("pointerup", () => {
      if (!dragging) return;
      dragging = false;
      setTimeout(() => rail.classList.remove("is-dragging"), 0);
    });
    rail.addEventListener("click", e => { if (moved > 5) { e.preventDefault(); e.stopPropagation(); } }, true);

    // mouse wheel scrolls the row sideways while it still has room
    rail.addEventListener("wheel", e => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      const max = rail.scrollWidth - rail.clientWidth;
      if (max <= 0) return;
      const atStart = rail.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = rail.scrollLeft >= max - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      rail.scrollLeft += e.deltaY;
    }, { passive: false });
  });

  document.querySelectorAll(".bay__arrows button").forEach(b => b.addEventListener("click", () => {
    const rail = b.closest(".bay").querySelector(".rail");
    rail.scrollBy({ left: +b.dataset.dir * rail.clientWidth * 0.75, behavior: reduced ? "auto" : "smooth" });
  }));

  /* ---------- monitor: power-on, clock, tilt ---------- */
  const monitor = $("#monitor");
  if (!reduced) {
    monitor.classList.add("is-booting");
    setTimeout(() => monitor.classList.remove("is-booting"), 1600);
  }

  const clock = $("#clock");
  const tick = () => { clock.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); };
  tick(); setInterval(tick, 15000);

  if (!reduced && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    // the whole monitor leans a little toward the mouse
    addEventListener("pointermove", e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      monitor.style.setProperty("--my", `${x * 4}deg`);
      monitor.style.setProperty("--mx", `${-y * 3}deg`);
      monitor.style.setProperty("--shine", `${x * 60}px`);
    });
    // cards tilt toward the cursor
    document.addEventListener("pointermove", e => {
      const card = e.target.closest(".cart, .gpu");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - .5) * 10}deg`);
      card.style.setProperty("--rx", `${-((e.clientY - r.top) / r.height - .5) * 10}deg`);
    });
    document.addEventListener("pointerout", e => {
      const card = e.target.closest(".cart, .gpu");
      if (card && !card.contains(e.relatedTarget)) { card.style.removeProperty("--rx"); card.style.removeProperty("--ry"); }
    });
  }

  /* ---------- full-screen detail ---------- */
  const screen = $("#screen");
  let currentType = null, currentIndex = 0, lastFocus = null;

  function mediaHtml(p) {
    const v = p.video;
    if (v) {
      if (/\.(mp4|webm)$/i.test(v)) return `<video src="${esc(v)}" controls playsinline preload="metadata"${p.thumb ? ` poster="${esc(p.thumb)}"` : ""}></video>`;
      if (v.startsWith("vimeo:")) return `<iframe src="https://player.vimeo.com/video/${esc(v.slice(6))}" allow="fullscreen" allowfullscreen loading="lazy"></iframe>`;
      if (v.startsWith("gdrive:")) return `<iframe src="https://drive.google.com/file/d/${esc(v.slice(7))}/preview" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>`;
      if (v.startsWith("tiktok:")) return `<iframe class="is-vertical" src="https://www.tiktok.com/embed/v2/${esc(v.slice(7))}" allow="fullscreen; encrypted-media" allowfullscreen loading="lazy"></iframe>`;
      return `<iframe src="https://www.youtube-nocookie.com/embed/${esc(v)}?rel=0" allow="fullscreen; encrypted-media" allowfullscreen loading="lazy"></iframe>`;
    }
    // real screenshots keep their own shape; logos and placeholders sit in the pastel box
    if (p.thumb && p.fit !== "contain") return `<img class="proj__img${p.pixel ? " is-pixel" : ""}" src="${esc(p.thumb)}" alt="${esc(p.title)}" loading="lazy">`;
    const cls = [p.fit === "contain" && "is-contain", p.pixel && "is-pixel"].filter(Boolean).join(" ");
    return `<span class="art" style="--h:${p.hue ?? 200}">${p.thumb ? `<img src="${esc(p.thumb)}" alt="${esc(p.title)}" loading="lazy"${cls ? ` class="${cls}"` : ""}>` : ""}</span>
      ${p.thumb ? "" : p.placeholder
        ? `<span class="proj__cta">${p.placeholderIcon ? `<span class="proj__cta-icon">${p.placeholderIcon}</span>` : ""}${esc(p.placeholder)}</span>`
        : `<span class="proj__ph">image / video placeholder</span>`}`;
  }

  function render(item) {
    $("#screenPath").textContent = `${item.type === "game" ? "games" : "fields"} / ${item.id}`;
    $("#screenNum").textContent = `${item.type === "game" ? "game" : "field"} ${item.num}`;
    $("#screenTitle").textContent = item.title;
    $("#screenBlurb").textContent = item.blurb || "";
    const isGame = item.type === "game";
    // games show a fact strip instead of tag chips; fields keep their tool chips
    $("#screenChips").innerHTML = isGame ? "" : item.chips.map(c => `<span class="chip">${esc(c)}</span>`).join("");
    $("#screenCover").innerHTML = item.cover
      ? `<img src="${esc(item.cover)}" alt="${esc(item.title)} cover art"${item.pixel ? ' class="is-pixel"' : ""}>`
      : !isGame && ICONS[item.id] ? `<span class="screen__icon">${ICONS[item.id]}</span>` : "";
    $("#screenFacts").innerHTML = (item.facts || []).map(([k, v]) =>
      `<div><dt>${esc(k)}</dt><dd>${k === "My role" ? esc(v).replace(/ · /g, "<br>") : esc(v)}</dd></div>`).join("");
    $("#screenGridHead").textContent = isGame ? "Screenshots" : "Projects";
    const isItch = /itch\.io/.test(item.link || "");
    $("#screenCta").innerHTML = item.link ? `
      <a class="screen__cta" href="${esc(item.link)}" target="_blank" rel="noopener">
        <span class="screen__cta-icon" aria-hidden="true">▶</span>
        <span>${isItch ? "Play on itch.io" : "View project"}</span>
        <span class="screen__cta-arrow" aria-hidden="true">↗</span>
      </a>` : "";

    const projects = item.projects.length ? item.projects : [
      { title: "Placeholder", tags: ["coming soon"], hue: item.hue ?? 160, desc: "Screenshots, clips and breakdowns will go here." },
      { title: "Placeholder", tags: ["coming soon"], hue: (item.hue ?? 160) + 50 },
      { title: "Placeholder", tags: ["coming soon"], hue: (item.hue ?? 160) + 100 },
    ];
    // an odd number of screenshots: let the first one run full width
    $("#screenGrid").classList.toggle("is-feature", isGame && projects.length % 2 === 1 && projects.length > 1);
    $("#screenGrid").innerHTML = projects.map(p => `
      <article class="proj">
        ${p.link && !p.thumb && !p.video
          ? `<a class="proj__media is-link" href="${esc(p.link)}" target="_blank" rel="noopener" aria-label="${esc(p.placeholder || p.title)}">${mediaHtml(p)}</a>`
          : `<div class="proj__media">${mediaHtml(p)}</div>`}
        <div class="proj__meta">
          <div>
            <h3 class="proj__title">${esc(p.title)}</h3>
            <p class="mono proj__tags">${esc((p.tags || []).join(" · "))}</p>
          </div>
          <span class="mono">${esc(p.year || "")}</span>
        </div>
        ${p.desc ? `<p class="proj__desc">${esc(p.desc)}</p>` : ""}
        ${(p.images || []).length ? `<div class="proj__gallery">${p.images.map(s => `<img src="${esc(s)}" alt="" loading="lazy">`).join("")}</div>` : ""}
        ${p.link ? `<a class="proj__link" href="${esc(p.link)}" target="_blank" rel="noopener">view project ↗</a>` : ""}
      </article>`).join("");

    // "next" card at the bottom so the page never dead-ends
    const list = groups[item.type];
    const next = list[(currentIndex + 1) % list.length];
    const nextArt = next.cover
      ? `<img src="${esc(next.cover)}" alt=""${next.pixel ? ' class="is-pixel"' : ""}>`
      : `<span class="screen__icon">${ICONS[next.id] || fallbackIcon}</span>`;
    $("#screenAfter").innerHTML = list.length > 1 ? `
      <button class="next-card" id="nextCard">
        <span class="next-card__art">${nextArt}</span>
        <span class="next-card__text">
          <span class="next-card__label">Next ${isGame ? "game" : "field"}</span>
          <span class="next-card__title">${esc(next.title)}</span>
        </span>
        <span class="next-card__arrow" aria-hidden="true">→</span>
      </button>` : "";
    $("#nextCard")?.addEventListener("click", () => open(currentType, currentIndex + 1));
    $("#screenScroll").scrollTop = 0;
  }

  function open(type, i, origin) {
    const list = groups[type];
    currentType = type;
    currentIndex = (i + list.length) % list.length;
    render(list[currentIndex]);
    if (screen.hidden) {
      lastFocus = document.activeElement;
      const r = origin?.getBoundingClientRect();
      screen.style.setProperty("--x", r ? `${r.left + r.width / 2}px` : "50%");
      screen.style.setProperty("--y", r ? `${r.top + r.height / 2}px` : "50%");
      screen.hidden = false;
      document.body.classList.add("is-locked");
      screen.offsetWidth; // start the opening transition
      screen.classList.add("is-open");
      $("#screenBack").focus({ preventScroll: true });
    }
    const hash = `#/${type}/${list[currentIndex].id}`;
    if (location.hash !== hash) history.pushState(null, "", hash);
  }

  function close(fromHistory = false) {
    if (screen.hidden) return;
    screen.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    const done = () => { screen.hidden = true; $("#screenGrid").innerHTML = ""; };
    reduced ? done() : setTimeout(done, 700);
    if (!fromHistory && location.hash.startsWith("#/")) history.pushState(null, "", location.pathname + location.search);
    lastFocus?.focus({ preventScroll: true });
  }

  document.addEventListener("click", e => {
    const card = e.target.closest(".cart, .gpu");
    if (card) open(card.dataset.type, +card.dataset.i, card);
  });
  $("#screenBack").addEventListener("click", () => close());
  $("#screenPrev").addEventListener("click", () => open(currentType, currentIndex - 1));
  $("#screenNext").addEventListener("click", () => open(currentType, currentIndex + 1));
  // click any screenshot to see it full size
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.hidden = true;
  lightbox.innerHTML = `<img alt=""><span class="lightbox__hint">click anywhere to close</span>`;
  document.body.append(lightbox);
  const closeLightbox = () => { lightbox.hidden = true; lightbox.firstChild.removeAttribute("src"); };
  lightbox.addEventListener("click", closeLightbox);
  $("#screenGrid").addEventListener("click", e => {
    const img = e.target.closest(".proj__img, .proj__gallery img, .art img");
    if (!img) return;
    const big = lightbox.firstChild;
    big.src = img.src; big.alt = img.alt;
    big.classList.toggle("is-pixel", img.classList.contains("is-pixel"));
    lightbox.hidden = false;
  });

  addEventListener("keydown", e => {
    if (!lightbox.hidden) { if (e.key === "Escape") closeLightbox(); return; }
    if (screen.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") open(currentType, currentIndex + 1);
    if (e.key === "ArrowLeft") open(currentType, currentIndex - 1);
  });

  // links like yoursite/#/field/programming open straight to that screen
  function fromHash() {
    const m = location.hash.match(/^#\/(game|field)\/(.+)$/);
    if (!m) return close(true);
    const i = groups[m[1]].findIndex(x => x.id === m[2]);
    if (i >= 0) open(m[1], i);
  }
  addEventListener("popstate", fromHash);
  addEventListener("hashchange", fromHash);
  fromHash();

  /* ---------- scroll reveal + counting stats ---------- */
  const countUp = el => {
    const end = +el.dataset.n; if (!end || reduced) return;
    const t0 = performance.now(), dur = 900;
    const step = t => { const k = Math.min(1, (t - t0) / dur); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    el.textContent = "0"; requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("is-in");
    en.target.querySelectorAll?.(".stat__n").forEach(countUp);
    if (en.target.matches(".stat")) countUp(en.target.querySelector(".stat__n"));
    io.unobserve(en.target);
  }), { threshold: .15 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();
