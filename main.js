const projects = [
  {
    id: "norisle",
    index: "01",
    title: "Norisle",
    titleEn: "Nail brand",
    subtitle: "美甲品牌视觉",
    subtitleEn: "Brand identity",
    category: "brand",
    categoryZh: "品牌视觉",
    categoryEn: "Brand",
    year: "",
    award: "",
    awardEn: "",
    count: 13,
    summary:
      "Norisle 的品牌视觉。包括标志、产品背景，以及一套植物香气指缘油礼盒，四支香气是晚汀、赤檐、霜杉、露川，规格 5ml × 4。同一组里还有店铺名的场景、公众号发布、课程介绍和短片。",
    summaryEn:
      "Brand identity for Norisle. It includes the mark, product backgrounds, and a botanical cuticle-oil set in four scents — 晚汀, 赤檐, 霜杉 and 露川 — at 5 ml × 4. The same set holds the shop-name scene, a WeChat post, a course introduction, and short films.",
    clips: [
      { file: "产品试色视频.MOV", zh: "产品试色", en: "Color try-on", w: 1080, h: 1920, poster: "images/norisle/posters/tryon.jpg" },
      { file: "品类发布视频 1.MOV", zh: "品类发布 1", en: "Category film 1", w: 1080, h: 1800, poster: "images/norisle/posters/cat-1.jpg" },
      { file: "品类发布视频 2.MOV", zh: "品类发布 2", en: "Category film 2", w: 1080, h: 1920, poster: "images/norisle/posters/cat-2.jpg" },
      { file: "品类发布视频 3.MOV", zh: "品类发布 3", en: "Category film 3", w: 1080, h: 1776, poster: "images/norisle/posters/cat-3.jpg" },
      { file: "品类发布视频 4.MOV", zh: "品类发布 4", en: "Category film 4", w: 1080, h: 1624, poster: "images/norisle/posters/cat-4.jpg" },
      { file: "品类发布视频 5.MOV", zh: "品类发布 5", en: "Category film 5", w: 1080, h: 1440, poster: "images/norisle/posters/cat-5.jpg" },
    ],
  },
  {
    id: "na",
    index: "02",
    title: "嗱",
    titleEn: "Na",
    subtitle: "粤语区后疫情时代生活方式",
    subtitleEn: "Post-pandemic life in the Cantonese-speaking region",
    category: "book",
    categoryZh: "书籍设计",
    categoryEn: "Book",
    year: "2021",
    award: "第三届台湾大学生国际年度艺术奖 · 铜奖",
    awardEn: "Bronze, 3rd Taiwan International Annual Art Award for University Students",
    count: 8,
    summary:
      "一本关于粤语的小册子。疫情之后，粤语区的生活和语言都慢了下来，作品把这种状态做成阅读本身：半透明的纸，八个单元，两组粤语上下叠印。翻开一页，底下一层的图和字会透上来。展板上注明尺寸 103×210mm，硫酸纸，骑马钉。",
    summaryEn:
      "A small book about Cantonese. After the pandemic, life and language in the Cantonese-speaking region slowed down, and the work turns that condition into the act of reading: translucent paper, eight sections, two layers of Cantonese printed over each other. Turn a page and the picture and words underneath come through. The board notes the size as 103×210 mm, on tracing paper, saddle-stitched.",
  },
  {
    id: "ink",
    index: "03",
    title: "水墨展",
    titleEn: "Ink Exhibition",
    subtitle: "策展与展览视觉",
    subtitleEn: "Exhibition graphics",
    category: "exhibition",
    categoryZh: "策展视觉",
    categoryEn: "Exhibition",
    year: "",
    award: "",
    awardEn: "",
    count: 7,
    summary: "以传统山水为对象的展览视觉。从写生和笔墨结构出发，整理成展览主视觉，让“怎么看一座山”成为展陈的一部分。",
    summaryEn:
      "Exhibition graphics built around traditional landscape painting. Studies and the structure of brush and ink become the main visual, so that how one looks at a mountain is part of the display.",
  },
  {
    id: "zaohua",
    index: "04",
    title: "造化于手",
    titleEn: "Made by Hand",
    subtitle: "肇庆美术馆 · 展览视觉",
    subtitleEn: "Zhaoqing Art Museum · exhibition graphics",
    category: "exhibition",
    categoryZh: "策展视觉",
    categoryEn: "Exhibition",
    year: "",
    award: "",
    awardEn: "",
    count: 3,
    summary:
      "肇庆美术馆「造化于手 / 首届肇庆风物青年美术作品展」的主视觉。海报以两只手为形象，标题竖排，展览时间为 12/14–12/24，地点肇庆美术馆。同一组里还有另一版海报和现场实拍。",
    summaryEn:
      "Main graphics for Zhaoqing Art Museum’s Made by Hand, the first Zhaoqing Scenic Scenery Youth Art Exhibition. The poster is built around two hands and a vertical title. It runs 12/14–12/24 at Zhaoqing Art Museum. The set also holds a second poster and a photograph of the piece in place.",
  },
  {
    id: "sea",
    index: "05",
    title: "讨海",
    titleEn: "Taohai",
    subtitle: "温岭石塘 · 品牌与包装",
    subtitleEn: "Shitang, Wenling · brand and packaging",
    category: "packaging",
    categoryZh: "品牌包装",
    categoryEn: "Packaging",
    year: "",
    award: "",
    awardEn: "",
    count: 7,
    summary:
      "浙江温岭石塘的土产品牌。闽南语里，出海打鱼叫“讨海”：向大海讨生活，也向大海索取。视觉从渔港的鱼和一抹蓝出发，给当地物产一套自己的形象。",
    summaryEn:
      "A local-product brand for Shitang, Wenling, Zhejiang. In Southern Min, going out to fish is called taohai: asking the sea for a living, and taking from it. The visuals start from the harbor’s fish and a field of blue, and give the local goods a face of their own.",
  },
  {
    id: "zong",
    index: "06",
    title: "裹香皇",
    titleEn: "Guoxianghuang",
    subtitle: "肇庆裹蒸 · 包装迭代",
    subtitleEn: "Zhaoqing rice dumplings · packaging",
    category: "packaging",
    categoryZh: "品牌包装",
    categoryEn: "Packaging",
    year: "",
    award: "",
    awardEn: "",
    count: 5,
    summary: "肇庆裹蒸粽的包装。裹蒸用本地冬叶包裹，样子和常见的粽子不一样。这套设计把旧印、纸感和食物本身的形状留在盒子上。",
    summaryEn:
      "Packaging for Zhaoqing’s guozheng rice dumplings. They are wrapped in local winter leaves and do not look like the usual zongzi. The design keeps old seals, the feel of paper, and the shape of the food on the box.",
  },
  {
    id: "paint",
    index: "07",
    title: "绘画",
    titleEn: "Painting",
    subtitle: "水彩 · 白描 · 山水",
    subtitleEn: "Acrylic, line, and landscape",
    category: "painting",
    categoryZh: "绘画",
    categoryEn: "Painting",
    year: "2014–2019",
    award: "",
    awardEn: "",
    count: 6,
    summary: "品牌和书籍之外的手绘。展板里有水彩、白描和中国山水，其中水彩标注的创作年份为 2014 与 2019。末页把三幅手绘稿排在同一张上。",
    summaryEn:
      "Drawings apart from the brand and book work. The boards include acrylic, line drawing, and Chinese landscape, with acrylics dated 2014 and 2019. The last board places three drawings on one sheet.",
  },
];

const filters = [
  { id: "all", zh: "全部", en: "All" },
  { id: "brand", zh: "品牌视觉", en: "Brand" },
  { id: "book", zh: "书籍设计", en: "Book" },
  { id: "exhibition", zh: "策展视觉", en: "Exhibition" },
  { id: "packaging", zh: "品牌包装", en: "Packaging" },
  { id: "painting", zh: "绘画", en: "Painting" },
];

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
let mode = "hero";
let projectId = "norisle";
let filterId = "all";
let query = "";
let imageIndex = 1;

function pad(n) {
  return String(n).padStart(2, "0");
}
function current() {
  return projects.find((item) => item.id === projectId) || projects[0];
}
function imageSrc(project, n) {
  return `images/${project.id}/${pad(n)}.jpg`;
}
function matchesQuery(item) {
  if (!query) return true;
  const hay = [item.title, item.titleEn, item.subtitle, item.subtitleEn, item.categoryZh, item.categoryEn, item.summary]
    .join(" ")
    .toLowerCase();
  return hay.includes(query.toLowerCase());
}
function visibleProjects() {
  return projects.filter((item) => (filterId === "all" || item.category === filterId) && matchesQuery(item));
}

const ratios = {
  norisle: [1920 / 3200, 933 / 1228, 1, 933 / 1228, 1242 / 1660, 1242 / 1660, 1242 / 1660, 1242 / 1660, 2000 / 2673, 2000 / 1333, 2000 / 1333, 624 / 3200, 2000 / 1305],
};
const frameFit = document.getElementById("frame-fit");
const frameImgs = [document.getElementById("frame-img"), document.getElementById("frame-img-next")];
const frameVideo = document.getElementById("frame-video");
let frameLayer = 0;
let frameToken = 0;
let view = "image";
let clipIndex = -1;
let spreadOpen = false;
let stillCursor = 0;
let stills = [];

const norisleGroups = [
  {
    zh: "产品背景卡",
    en: "Product backgrounds",
    max: "31%",
    height: "22vh",
    items: [
      { n: 2, alt: "产品背景卡 1" },
      { n: 3, alt: "产品背景卡 2" },
      { n: 4, alt: "产品背景卡 3" },
    ],
  },
  {
    zh: "店铺名设计",
    en: "Shop name in place",
    max: "46%",
    height: "20vh",
    items: [
      { n: 10, alt: "店铺名设计场景展示 1" },
      { n: 11, alt: "店铺名设计场景展示 2" },
    ],
  },
  {
    zh: "指缘油礼盒",
    en: "Cuticle oil set",
    max: "23%",
    height: "24vh",
    items: [
      { n: 8, alt: "露川" },
      { n: 7, alt: "霜杉" },
      { n: 5, alt: "晚汀" },
      { n: 6, alt: "赤檐" },
    ],
  },
  {
    zh: "标志与预告",
    en: "Mark and announcement",
    max: "42%",
    height: "30vh",
    items: [
      { n: 9, alt: "指缘油预告" },
      { n: 1, alt: "logo 全" },
    ],
  },
  {
    zh: "课程与发布",
    en: "Course and post",
    max: "58%",
    height: "24vh",
    items: [
      { n: 13, alt: "课程介绍设计", max: "62%" },
      { n: 12, alt: "店铺作品公众号概念发布", max: "24%" },
    ],
  },
];

function ratioFor(project, n) {
  const list = ratios[project.id];
  return list && list[n - 1] ? list[n - 1] : 2400 / 1350;
}
function coverSrc(project) {
  return project.id === "norisle" ? "images/norisle/cover.jpg" : imageSrc(project, 1);
}
function dissolve(outgoing, incoming, src) {
  const token = ++frameToken;
  const still = () => token === frameToken;
  const begin = () => {
    if (!still()) return;
    incoming.classList.remove("is-on", "is-leave");
    incoming.style.transition = "none";
    incoming.style.opacity = "0";
    incoming.style.transform = "translate3d(8%,0,0)";
    requestAnimationFrame(() => {
      if (!still()) return;
      incoming.style.transition = "";
      incoming.style.opacity = "";
      incoming.style.transform = "";
      incoming.classList.add("is-on");
      if (outgoing && outgoing !== incoming) {
        outgoing.classList.remove("is-on");
        outgoing.classList.add("is-leave");
      }
      if (frameImgs.includes(incoming)) {
        frameLayer = frameImgs.indexOf(incoming);
        capStageImage(incoming);
      }
    });
  };
  incoming.alt = outgoing ? outgoing.alt : incoming.alt;
  if (incoming.getAttribute("src") === src && incoming.complete && incoming.naturalWidth) begin();
  else {
    incoming.onload = () => {
      incoming.onload = null;
      begin();
    };
    incoming.src = src;
  }
}

function railScrollMode() {
  return window.matchMedia("(max-width: 768px)").matches;
}

const railEase = (() => {
  const p1x = 0.45;
  const p1y = 0.02;
  const p2x = 0.55;
  const p2y = 0.98;
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;
  const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t) => ((ay * t + by) * t + cy) * t;
  const sampleDX = (t) => (3 * ax * t + 2 * bx) * t + cx;
  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 6; i += 1) {
      const dx = sampleX(t) - x;
      const slope = sampleDX(t);
      if (Math.abs(dx) < 1e-4 || Math.abs(slope) < 1e-4) break;
      t -= dx / slope;
    }
    return sampleY(Math.min(1, Math.max(0, t)));
  };
})();

let railAnim = 0;
let railBoxLeft = 0;

function stopRailAnim() {
  if (railAnim) cancelAnimationFrame(railAnim);
  railAnim = 0;
}

function poseRail(card, s, x) {
  card._s = s;
  card._x = x;
  card.style.transform = `translate3d(${x}px,0,0) scaleX(${s})`;
  const fit = card._fit || (card._fit = card.querySelector(".rail-card__fit"));
  if (fit) fit.style.transform = `scaleX(${1 / s})`;
}

function clearRailPose(card) {
  card.style.transform = "";
  card.style.width = "";
  card.style.removeProperty("--open");
  const fit = card._fit || card.querySelector(".rail-card__fit");
  if (fit) fit.style.transform = "";
}

function layoutRail(index, animate) {
  const rail = document.getElementById("work-rail");
  const cards = [...rail.querySelectorAll(".rail-card")];
  if (!cards.length) return;
  const active = Math.max(0, Math.min(index, cards.length - 1));
  stopRailAnim();
  if (railScrollMode()) {
    cards.forEach((card, i) => {
      card.classList.toggle("is-on", i === active);
      clearRailPose(card);
    });
    return;
  }
  const width = rail.clientWidth;
  if (width < 40) return;
  const gap = 10;
  const count = cards.length;
  const inner = width - gap * (count - 1);
  const open = inner * (6.5 / (6.5 + count - 1));
  const rest = (inner - open) / (count - 1);
  const from = [];
  const to = [];
  let cursor = 0;
  cards.forEach((card, i) => {
    const span = i === active ? open : rest;
    const s = Math.max(0.08, span / open);
    const x = cursor - (open * (1 - s)) / 2;
    from.push({ s: card._s ?? s, x: card._x ?? x });
    to.push({ s, x });
    card._hitLeft = cursor;
    card._hitRight = cursor + span;
    card.style.setProperty("--open", `${open}px`);
    card.classList.toggle("is-on", i === active);
    cursor += span + gap;
  });
  railBoxLeft = rail.getBoundingClientRect().left;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!animate || reduced || from.every((pose, i) => pose.s === to[i].s && pose.x === to[i].x)) {
    cards.forEach((card, i) => poseRail(card, to[i].s, to[i].x));
    return;
  }
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / 1150);
    const e = railEase(t);
    cards.forEach((card, i) => {
      poseRail(
        card,
        from[i].s + (to[i].s - from[i].s) * e,
        from[i].x + (to[i].x - from[i].x) * e
      );
    });
    railAnim = t < 1 ? requestAnimationFrame(tick) : 0;
  };
  railAnim = requestAnimationFrame(tick);
}

function setRailActive(card) {
  const rail = document.getElementById("work-rail");
  const cards = [...rail.querySelectorAll(".rail-card")];
  layoutRail(Math.max(0, cards.indexOf(card)), true);
}

function renderRail() {
  const rail = document.getElementById("work-rail");
  const list = projects.filter(matchesQuery);
  rail.innerHTML = list.length
    ? list
        .map(
          (item) => `<button class="rail-card" type="button" data-project="${item.id}" aria-label="${item.title} ${item.titleEn}">
        <span class="rail-card__fit">
          <img src="${coverSrc(item)}" alt="${item.title} ${item.titleEn}" />
          <span class="rail-card__side"><span class="rail-card__vertical">${item.title}</span></span>
          <span class="rail-card__face">
            <span class="rail-card__title">${item.title}<br />${item.subtitle}</span>
            <span class="rail-card__count"><span class="num">${item.count}</span><span class="label">${item.categoryZh}</span></span>
          </span>
        </span>
      </button>`
        )
        .join("")
    : `<p class="rail-empty">没有对应作品<span class="en">No matching work</span></p>`;
  layoutRail(0, false);
}

function renderLists() {
  renderRail();
  document.getElementById("filters").innerHTML = filters
    .map(
      (item) =>
        `<button type="button" data-filter="${item.id}" class="${item.id === filterId ? "on" : ""}">${item.zh}<span class="en">${item.en}</span></button>`
    )
    .join("");
  document.getElementById("work-list").innerHTML = visibleProjects()
    .map(
      (item) =>
        `<li><button type="button" data-project="${item.id}" class="${item.id === projectId ? "on" : ""}"><span class="zh">${item.index} ${item.title}</span><span class="en">${item.categoryZh} · ${item.categoryEn}</span></button></li>`
    )
    .join("");
}

function fitWithin(maxW, maxH, natW, natH) {
  const dpr = window.devicePixelRatio || 1;
  const srcW = natW / dpr;
  const srcH = natH / dpr;
  const scale = Math.min(1, maxW / srcW, maxH / srcH);
  return {
    w: Math.max(1, Math.round(srcW * scale)),
    h: Math.max(1, Math.round(srcH * scale)),
  };
}

function stageLimit() {
  const stage = document.querySelector(".lightbox-stage");
  const style = getComputedStyle(stage);
  return {
    w: stage.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight),
    h: stage.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom),
  };
}

function capLightbox() {
  const w = lightboxImg.naturalWidth;
  const h = lightboxImg.naturalHeight;
  if (!w || !h) return;
  const limit = stageLimit();
  const box = fitWithin(limit.w, limit.h, w, h);
  lightboxImg.style.width = `${box.w}px`;
  lightboxImg.style.height = `${box.h}px`;
}

function presentLightbox(src, alt, caption) {
  lightboxCaption.textContent = caption;
  lightboxImg.alt = alt;
  lightboxImg.style.width = "";
  lightboxImg.style.height = "";
  lightbox.hidden = false;
  if (lightboxImg.getAttribute("src") === src && lightboxImg.complete && lightboxImg.naturalWidth) capLightbox();
  else {
    lightboxImg.onload = () => {
      lightboxImg.onload = null;
      capLightbox();
    };
    lightboxImg.src = src;
  }
}

function capStageImage(img) {
  if (!img.naturalWidth || !img.classList.contains("is-on")) return;
  const maxW = frameFit.parentElement.clientWidth || window.innerWidth;
  const maxH = window.innerHeight * 0.62;
  const box = fitWithin(maxW, maxH, img.naturalWidth, img.naturalHeight);
  frameFit.style.width = `${box.w}px`;
  frameFit.style.height = `${box.h}px`;
  frameFit.style.maxHeight = `${box.h}px`;
  frameFit.style.setProperty("--ar", String(img.naturalWidth / img.naturalHeight));
}

function hideVideo() {
  frameVideo.pause();
  frameVideo.classList.remove("is-on", "is-leave");
  frameVideo.hidden = true;
  frameVideo.removeAttribute("src");
}

function showFrame(animate) {
  const project = current();
  view = "image";
  clipIndex = -1;
  hideVideo();
  frameFit.style.setProperty("--ar", String(ratioFor(project, imageIndex)));
  const src = imageSrc(project, imageIndex);
  const outgoing = frameImgs[frameLayer];
  const incoming = frameImgs[frameLayer ^ 1];
  const alt = `${project.title} ${project.titleEn} ${imageIndex}`;
  outgoing.alt = alt;
  incoming.alt = alt;
  document.getElementById("frame-count").textContent = `${imageIndex} / ${project.count}`;
  const paint = () => {
    if (outgoing.complete && outgoing.naturalWidth) capStageImage(outgoing);
  };
  if (!animate) {
    outgoing.onload = () => {
      outgoing.onload = null;
      capStageImage(outgoing);
    };
    outgoing.src = src;
    outgoing.classList.add("is-on");
    outgoing.classList.remove("is-leave");
    incoming.classList.remove("is-on", "is-leave");
    paint();
    return;
  }
  dissolve(outgoing, incoming, src);
}

function renderFilms() {
  const films = document.getElementById("films");
  films.hidden = true;
  films.innerHTML = "";
}

function stopFilms() {
  document.querySelectorAll(".film__frame video").forEach((video) => {
    video.pause();
    video.remove();
  });
}

function renderSpread() {
  const spread = document.getElementById("spread");
  stills = [];
  const groups = norisleGroups
    .map((group) => {
      const pieces = group.items
        .map((item) => {
          const index = stills.length;
          stills.push({ src: imageSrc(current(), item.n), alt: item.alt });
          const max = item.max || group.max;
          return `<button class="piece" type="button" data-still="${index}" style="--piece-max:${max};--piece-h:${group.height}"><img src="${imageSrc(current(), item.n)}" alt="${item.alt}" /></button>`;
        })
        .join("");
      return `<section class="cluster">
        <header class="cluster__head"><h3>${group.zh}</h3><p class="en">${group.en}</p></header>
        <div class="cluster__row">${pieces}</div>
      </section>`;
    })
    .join("");
  const clips = current().clips || [];
  const films = clips
    .map((clip, i) => {
      const ar = clip.w / clip.h;
      return `<button class="film" type="button" data-film="${i}">
        <span class="film__frame" style="--ar:${ar}" data-nat-w="${clip.w}" data-nat-h="${clip.h}">
          <img src="${clip.poster}" alt="${clip.zh} ${clip.en}" />
          <span class="film__play" aria-hidden="true"></span>
        </span>
        <span class="zh">${clip.zh}</span>
        <span class="en">${clip.en}</span>
      </button>`;
    })
    .join("");
  spread.innerHTML = `${groups}<section class="cluster">
    <header class="cluster__head"><h3>短片</h3><p class="en">Films</p></header>
    <div class="film-grid">${films}</div>
  </section>`;
  spread.querySelectorAll(".film__frame img").forEach((img) => {
    img.addEventListener("load", () => capFilmFrame(img.closest(".film__frame"), img.naturalWidth, img.naturalHeight));
    if (img.complete && img.naturalWidth) capFilmFrame(img.closest(".film__frame"), img.naturalWidth, img.naturalHeight);
  });
}

function capFilmFrame(frame, natW, natH) {
  if (!frame || !natW || !natH) return;
  const maxW = frame.parentElement.clientWidth || window.innerWidth;
  const maxH = window.innerHeight * 0.28;
  const box = fitWithin(maxW, maxH, natW, natH);
  frame.style.width = `${box.w}px`;
  frame.style.height = `${box.h}px`;
  frame.style.aspectRatio = "auto";
}

function renderProject(animateFrame) {
  const project = current();
  const stage = document.querySelector(".stage");
  const spread = document.getElementById("spread");
  if (imageIndex > project.count) imageIndex = 1;
  if (project.id === "norisle") {
    stage.classList.add("is-spread");
    spread.hidden = false;
    hideVideo();
    renderSpread();
  } else {
    stage.classList.remove("is-spread");
    spread.hidden = true;
    spread.innerHTML = "";
    stills = [];
    showFrame(Boolean(animateFrame));
  }
  document.getElementById("project-copy").innerHTML = `
    <p class="copy-kicker">${project.index} / 07</p>
    <h2 class="copy-title">${project.title}</h2>
    <p class="copy-name-en">${project.titleEn}</p>
    <p class="copy-sub">${project.subtitle}<span class="en">${project.subtitleEn}</span></p>
    <p class="copy-summary">${project.summary}<span class="en">${project.summaryEn}</span></p>
    <p class="copy-meta">${project.categoryZh}${project.year ? " · " + project.year : ""}<span class="en">${project.categoryEn}${project.year ? " · " + project.year : ""}</span></p>
    ${project.award ? `<p class="copy-award">${project.award}<span class="en">${project.awardEn}</span></p>` : ""}
  `;
  renderFilms(project);
  renderLists();
}

function playFilm(index) {
  const clip = (current().clips || [])[index];
  if (!clip) return;
  const button = document.querySelector(`[data-film="${index}"]`);
  const frame = button && button.querySelector(".film__frame");
  if (!frame || frame.querySelector("video")) return;
  stopFilms();
  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.poster = clip.poster;
  video.src = `images/norisle/clips/${encodeURIComponent(clip.file)}`;
  video.addEventListener("loadedmetadata", () => {
    capFilmFrame(frame, video.videoWidth, video.videoHeight);
  });
  frame.appendChild(video);
  video.play().catch(() => {});
}

function openStill(index) {
  const item = stills[index];
  if (!item) return;
  spreadOpen = true;
  stillCursor = index;
  presentLightbox(item.src, item.alt, item.alt);
}

function go(next) {
  mode = next;
  const target = document.getElementById(next === "signal" ? "work" : "top");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openProject(id) {
  projectId = id;
  imageIndex = 1;
  filterId = "all";
  renderProject(false);
  go("signal");
}

function stepImage(step) {
  const project = current();
  imageIndex = ((imageIndex - 1 + step + project.count) % project.count) + 1;
  renderProject(true);
}

function openLightbox() {
  const project = current();
  spreadOpen = false;
  presentLightbox(
    imageSrc(project, imageIndex),
    `${project.title} ${imageIndex}`,
    `${project.title} ${project.titleEn}  ${imageIndex} / ${project.count}`
  );
}
function closeLightbox() {
  if (lightbox.hidden) return;
  lightbox.hidden = true;
  lightboxImg.removeAttribute("src");
}

document.getElementById("filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  filterId = button.dataset.filter;
  const list = visibleProjects();
  if (list.length && !list.some((item) => item.id === projectId)) {
    projectId = list[0].id;
    imageIndex = 1;
  }
  renderProject();
});

document.getElementById("work-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;
  projectId = button.dataset.project;
  imageIndex = 1;
  renderProject(true);
});

const workRail = document.getElementById("work-rail");
workRail.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;
  openProject(button.dataset.project);
});
workRail.addEventListener("pointerenter", () => {
  railBoxLeft = workRail.getBoundingClientRect().left;
});
workRail.addEventListener("pointermove", (event) => {
  if (railScrollMode()) return;
  const cards = workRail.querySelectorAll(".rail-card");
  if (!cards.length) return;
  const x = event.clientX - railBoxLeft;
  let chosen = cards[0];
  let nearest = Infinity;
  for (const card of cards) {
    const left = card._hitLeft ?? 0;
    const right = card._hitRight ?? 0;
    if (x >= left && x <= right) {
      chosen = card;
      nearest = 0;
      break;
    }
    const dist = x < left ? left - x : x - right;
    if (dist < nearest) {
      chosen = card;
      nearest = dist;
    }
  }
  if (!chosen.classList.contains("is-on")) setRailActive(chosen);
});

document.getElementById("spread").addEventListener("click", (event) => {
  const still = event.target.closest("[data-still]");
  if (still) {
    openStill(Number(still.dataset.still));
    return;
  }
  const film = event.target.closest("[data-film]");
  if (film && !event.target.closest("video")) playFilm(Number(film.dataset.film));
});

document.getElementById("frame-prev").addEventListener("click", () => stepImage(-1));
document.getElementById("frame-next").addEventListener("click", () => stepImage(1));
document.getElementById("frame-open").addEventListener("click", (event) => {
  if (view !== "image" || event.target.closest("video")) return;
  openLightbox();
});
frameVideo.addEventListener("loadedmetadata", () => {
  if (view === "video" && frameVideo.videoWidth) {
    frameFit.style.setProperty("--ar", String(frameVideo.videoWidth / frameVideo.videoHeight));
  }
});
document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev").addEventListener("click", () => {
  if (spreadOpen && stills.length) {
    openStill((stillCursor - 1 + stills.length) % stills.length);
    return;
  }
  stepImage(-1);
  openLightbox();
});
document.getElementById("lightbox-next").addEventListener("click", () => {
  if (spreadOpen && stills.length) {
    openStill((stillCursor + 1) % stills.length);
    return;
  }
  stepImage(1);
  openLightbox();
});
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target.classList.contains("lightbox-stage")) closeLightbox();
});

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.getElementById("mobile-nav");
function setMenu(open) {
  mobileNav.classList.toggle("open", open);
  hamburger.classList.toggle("active", open);
  hamburger.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}
hamburger.addEventListener("click", () => setMenu(!mobileNav.classList.contains("open")));
mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("[data-close]")) setMenu(false);
});
window.addEventListener("resize", () => {
  const activeCard = workRail.querySelector(".rail-card.is-on");
  const cards = [...workRail.querySelectorAll(".rail-card")];
  layoutRail(Math.max(0, cards.indexOf(activeCard)), false);
  if (window.innerWidth > 768) setMenu(false);
  if (!lightbox.hidden) capLightbox();
  const on = frameImgs.find((img) => img.classList.contains("is-on"));
  if (on) capStageImage(on);
  document.querySelectorAll(".film__frame").forEach((frame) => {
    const video = frame.querySelector("video");
    if (video && video.videoWidth) capFilmFrame(frame, video.videoWidth, video.videoHeight);
    else {
      const img = frame.querySelector("img");
      if (img && img.naturalWidth) capFilmFrame(frame, img.naturalWidth, img.naturalHeight);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!lightbox.hidden) closeLightbox();
    else go("hero");
    return;
  }
  if (!lightbox.hidden) {
    if (event.key === "ArrowLeft") document.getElementById("lightbox-prev").click();
    if (event.key === "ArrowRight") document.getElementById("lightbox-next").click();
  }
});

renderProject(false);
if (location.hash === "#norisle" || location.hash === "#work") openProject("norisle");
