const screens = Array.from(document.querySelectorAll("[data-screen]"));
const galleryGrid = document.getElementById("galleryGrid");
const hobbiesStage = document.getElementById("hobbiesStage");
const camera = document.querySelector(".camera");
const weather = document.getElementById("weather");
const petalBack = document.getElementById("petalBack");
const themeToggle = document.getElementById("themeToggle");
const friendsPiles = document.getElementById("friendsPiles");
const letterModal = document.getElementById("letterModal");
const letterTitle = document.getElementById("letterTitle");
const rateMessage = document.getElementById("rateMessage");
const radioWidget = document.getElementById("radioWidget");
const radioToggle = document.getElementById("radioToggle");
const radioPanel = document.getElementById("radioPanel");
const radioClose = document.getElementById("radioClose");
const radioRefresh = document.getElementById("radioRefresh");
const radioList = document.getElementById("radioList");
const radioControl = document.getElementById("radioControl");
const radioAudio = document.getElementById("radioAudio");
const avatarBox = document.getElementById("avatarBox");
const avatarImage = document.getElementById("avatarImage");
const bonfireSparks = document.getElementById("bonfireSparks");
const japanHut = document.querySelector(".japan-hut");
const topStrip = document.querySelector(".top-strip");

const themes = ["mint", "autumn", "winter", "japan", "sakura"];

const songExtensions = [".mp3"];
const photoExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
const avatarExtensions = [...photoExtensions, ".jfif", ".heic", ".heif", ".avif", ".bmp", ".svg"];
const githubBranches = ["main", "master"];
const fallbackFolderFiles = {
  avatar: ["7.jpeg"],
  pics: ["1.png", "2.jpeg", "3.png", "4.jpeg", "5.jpeg", "6.png", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.png"],
  songs: ["Nafrat.mp3", "kangana.mp3", "jeene lga hoon.mp3", "reflections.mp3", "retro.mp3"]
};

let songs = [];
let photos = [];

const hobbies = [
  "+ 43 more",
  "doomscrolling",
  "spilling tea",
  "lil coding",
  "sleeping at 2pm",
  "procastinating",
  "reading novels",
  "shopping ofc",
  "flexing my mac",

  
];

const hobbyColors = [
  "#bdf7d4",
  "#fff29a",
  "#a6dcff",
  "#d6ff78",
  "#ffb3c9",
  "#c9ffdf",
  "#ffc27a",
  "#a9f0c4",
  "#ffb3c9"
];

const hobbyOffsets = [-38, 24, -18, 36, -28, 12, -34, 28, 0];
const hobbyRotations = [-2.4, 1.6, -1.2, 2.1, -1.7, 1.1, -2.2, 1.8, 0];
const hobbyFallOffsets = [-130, 110, -80, 140, -100, 90, -150, 120, 0];

const friends = [
  "shanvi(mia cara)",
  "mashyat",
  "shambhavi",
  "prachi",
  "pratima",
  "sakshi",
  "9D wali ^^",
  "aditi",
  "pranitie",
  "eshal",
  "ruchita",
  "saachi",
  "priya",
  "akshara",
  "aaradhya"
];

const friendPileSizes = [5, 5, 5];
const friendBoxColors = [
  "#bdf7d4",
  "#fff29a",
  "#a6dcff",
  "#d6ff78",
  "#ffb3c9",
  "#c9ffdf",
  "#ffc27a",
  "#a9f0c4",
  "#ffd6e2",
  "#ffb3c9",
  "#d8f3dc",
  "#fff0b3",
  "#cfe8ff",
  "#e4d7ff",
  "#ffd9c7"
];

const rateReplies = {
  1: "bhaggggg jldi",
  2: "probably blind",
  3: "Lemme guess u wear glasess ryt?",
  4: "tysssm : )",
  5: "Aww! love u twin <3"
};

const leafColors = [
  { base: "#b56d35", dark: "#70401f", light: "#f0bd72" },
  { base: "#c89a3f", dark: "#7a5621", light: "#f2d689" },
  { base: "#7d9949", dark: "#4d6228", light: "#c3d588" },
  { base: "#a34b32", dark: "#68281d", light: "#dd8a62" },
  { base: "#d18a50", dark: "#825027", light: "#f5c28b" },
  { base: "#8c6636", dark: "#583c20", light: "#c59a64" }
];
const autumnLeafShapes = [
  {
    blade: "M32 3 L38 15 L52 9 L48 23 L62 26 L53 37 L59 49 L44 47 L40 60 L32 53 L24 60 L20 47 L5 49 L11 37 L2 26 L16 23 L12 9 L26 15 Z",
    veins: "M32 52 L32 8 M32 36 L15 19 M32 36 L49 19 M32 44 L12 40 M32 44 L52 40 M32 49 L24 56 M32 49 L40 56",
    stem: "M32 52 L36 66"
  },
  {
    blade: "M32 3 C38 7 41 12 39 17 C45 14 51 16 50 22 C49 27 46 29 43 30 C49 30 53 34 52 39 C51 44 47 46 43 46 C47 50 46 56 41 59 C38 61 34 59 32 56 C30 60 26 61 23 58 C19 55 19 49 23 46 C18 46 14 43 13 38 C12 33 16 30 21 30 C18 28 15 26 15 21 C15 16 20 14 25 17 C24 12 27 7 32 3 Z",
    veins: "M32 56 L32 7 M32 43 L18 23 M32 43 L47 23 M32 35 L17 34 M32 35 L47 34 M32 50 L23 52 M32 50 L41 52",
    stem: "M32 56 L36 66"
  },
  {
    blade: "M32 4 C43 9 54 20 54 33 C54 46 43 56 32 60 C21 56 10 46 10 33 C10 20 21 9 32 4 Z",
    veins: "M32 58 L32 8 M32 45 L16 27 M32 45 L48 27 M32 34 L13 33 M32 34 L51 33 M32 24 L22 15 M32 24 L42 15",
    stem: "M32 59 L35 66"
  }
];
const blossomColors = ["#ff7f9f", "#ffb3a7", "#ffd9dd", "#fff1f2"];
const sakuraLeafColors = ["#8f1d2c", "#b8323e", "#d8443a"];

let timers = [];
let selectedSongIndex = -1;
const mediaCache = {};
const mediaCacheTtl = 30000;

function random(min, max) {
  return min + Math.random() * (max - min);
}

function isGitHubPages() {
  return window.location.hostname.endsWith(".github.io");
}

function getRepoInfo() {
  const owner = window.location.hostname.split(".")[0];
  const parts = window.location.pathname.split("/").filter(Boolean);
  return { owner, repo: parts[0] || `${owner}.github.io` };
}

function naturalCompare(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function prettifyName(name) {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function hasExtension(name, extensions) {
  return extensions.some((extension) => name.toLowerCase().endsWith(extension));
}

function parseDirectoryListing(html, folder, extensions) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const names = Array.from(doc.querySelectorAll("a"))
    .map((link) => link.getAttribute("href") || "")
    .filter((href) => href && !href.startsWith("/") && !href.startsWith("../"))
    .map((href) => {
      let name = href.split(/[?#]/)[0];
      try {
        name = decodeURIComponent(name);
      } catch (error) {
        void error;
      }
      return name.split("/").filter(Boolean).pop() || "";
    })
    .filter((name) => name && !name.startsWith(".") && hasExtension(name, extensions))
    .sort(naturalCompare);

  return names.map((name) => ({
    name,
    url: `${folder}/${encodeURIComponent(name)}`
  }));
}

async function fetchLocalFolder(folder, extensions) {
  const response = await fetch(`${folder}/`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Local listing failed: ${response.status}`);
  return parseDirectoryListing(await response.text(), folder, extensions);
}

async function fetchGitHubFolder(folder, extensions) {
  const { owner, repo } = getRepoInfo();

  for (const branch of githubBranches) {
    const apiUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${folder}?ref=${branch}`;

    try {
      const response = await fetch(apiUrl, {
        cache: "no-store",
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!response.ok) continue;

      const items = await response.json();
      if (!Array.isArray(items)) continue;

      return items
        .filter((item) => item.type === "file" && hasExtension(item.name, extensions))
        .sort((a, b) => naturalCompare(a.name, b.name))
        .map((item) => ({
          name: item.name,
          url: item.download_url || `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${folder}/${encodeURIComponent(item.name)}`
        }));
    } catch (error) {
      void error;
    }
  }

  throw new Error("GitHub listing failed");
}

function fallbackFolder(folder, extensions) {
  return (fallbackFolderFiles[folder] || [])
    .filter((name) => hasExtension(name, extensions))
    .sort(naturalCompare)
    .map((name) => ({ name, url: `${folder}/${encodeURIComponent(name)}` }));
}

async function loadFolder(folder, extensions, force = false) {
  const cached = mediaCache[folder];
  if (!force && cached && Date.now() - cached.time < mediaCacheTtl) return cached.files;

  let files;
  try {
    files = isGitHubPages()
      ? await fetchGitHubFolder(folder, extensions)
      : await fetchLocalFolder(folder, extensions);
  } catch (error) {
    void error;
    files = fallbackFolder(folder, extensions);
  }

  mediaCache[folder] = { time: Date.now(), files };
  return files;
}

function clearTimers() {
  timers.forEach(window.clearTimeout);
  timers = [];
}

function flashCamera() {
  camera.classList.remove("is-shooting");
  void camera.offsetWidth;
  camera.classList.add("is-shooting");
}

async function buildGallery(force = false) {
  galleryGrid.innerHTML = '<p class="media-status">LOADING PHOTOS...</p>';

  try {
    const files = await loadFolder("pics", photoExtensions, force);
    photos = files.map((file) => ({ src: file.url, alt: prettifyName(file.name) }));
    renderGallery();
  } catch (error) {
    void error;
    clearTimers();
    galleryGrid.innerHTML = '<p class="media-status media-status--error">COULD NOT LOAD PHOTOS.</p>';
  }
}

function renderGallery() {
  clearTimers();
  galleryGrid.replaceChildren();

  if (!photos.length) {
    galleryGrid.innerHTML = '<p class="media-status">NO PHOTOS FOUND.</p>';
    return;
  }

  photos.forEach((photo, index) => {
    const number = String(index + 1).padStart(2, "0");
    const delay = 420 + index * 250;
    const card = document.createElement("button");

    card.type = "button";
    card.className = "photo-card";
    card.style.setProperty("--delay", `${delay}ms`);
    card.setAttribute("aria-label", `Flip photo ${number}`);
    card.setAttribute("aria-pressed", "false");
    card.innerHTML = `
      <span class="photo-card__inner">
        <span class="photo-card__face photo-card__face--back">
          <span class="photo-card__mark">PHOTO ${number}</span>
          <span class="photo-card__seal">${number}</span>
          <span class="photo-card__hint">CLICK TO FLIP</span>
        </span>
        <span class="photo-card__face photo-card__face--front">
          <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy">
          <span class="photo-card__id">NO. ${number}</span>
        </span>
      </span>
    `;

    card.addEventListener("click", () => {
      const isFlipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(isFlipped));
    });

    galleryGrid.appendChild(card);
    timers.push(window.setTimeout(flashCamera, delay));
  });
}

function clearAvatar() {
  avatarImage.hidden = true;
  avatarImage.removeAttribute("src");
  avatarBox.setAttribute("aria-label", "Uploaded portrait");
}

async function pickAvatarFile(files) {
  const preferred = files.find((file) => file.name.toLowerCase().startsWith("avatar"));
  if (preferred) return preferred;
  if (isGitHubPages()) return files[files.length - 1];

  const dated = await Promise.all(files.map(async (file) => {
    try {
      const response = await fetch(file.url, { method: "HEAD", cache: "no-store" });
      const modified = Date.parse(response.headers.get("Last-Modified") || "");
      return { file, modified: Number.isNaN(modified) ? 0 : modified };
    } catch (error) {
      void error;
      return { file, modified: 0 };
    }
  }));

  dated.sort((a, b) => b.modified - a.modified || naturalCompare(b.file.name, a.file.name));
  return dated[0].file;
}

async function buildAvatar(force = false) {
  try {
    const files = await loadFolder("avatar", avatarExtensions, force);
    if (!files.length) {
      clearAvatar();
      return;
    }

    const portrait = await pickAvatarFile(files);
    const label = `Portrait: ${prettifyName(portrait.name)}`;
    avatarImage.alt = label;
    avatarImage.onload = () => {
      avatarImage.hidden = false;
      avatarBox.setAttribute("aria-label", label);
    };
    avatarImage.onerror = clearAvatar;
    avatarImage.src = portrait.url;

    if (avatarImage.complete && avatarImage.naturalWidth > 0) {
      avatarImage.hidden = false;
      avatarBox.setAttribute("aria-label", label);
    }
  } catch (error) {
    void error;
    clearAvatar();
  }
}

function buildHobbies() {
  clearTimers();
  hobbiesStage.replaceChildren();

  hobbies.forEach((hobby, index) => {
    const number = String(index + 1).padStart(2, "0");
    const slot = document.createElement("div");
    const box = document.createElement("button");

    slot.className = "hobby-slot";
    slot.style.setProperty("--x", `${hobbyOffsets[index]}px`);
    slot.style.setProperty("--y", `${index * 46}px`);
    slot.style.setProperty("--rot", `${hobbyRotations[index]}deg`);
    slot.style.setProperty("--fall-x", `${hobbyFallOffsets[index]}px`);
    slot.style.setProperty("--drop-rot", `${hobbyRotations[index] * -4}deg`);
    slot.style.setProperty("--delay", `${index * 110}ms`);
    slot.style.zIndex = String(index + 1);

    box.type = "button";
    box.className = "hobby-box";
    box.setAttribute("aria-pressed", "false");
    box.innerHTML = `<span class="hobby-box__num">${number}</span>${hobby}`;

    box.addEventListener("click", () => {
      const shouldPick = !box.classList.contains("is-picked");
      box.classList.remove("is-picked");
      void box.offsetWidth;

      if (shouldPick) {
        box.classList.add("is-picked");
        slot.style.zIndex = "80";
      } else {
        slot.style.zIndex = String(index + 1);
      }

      box.setAttribute("aria-pressed", String(shouldPick));
    });

    slot.appendChild(box);
    hobbiesStage.appendChild(slot);
  });
}

function setFallVars(element, drift, duration, delay) {
  element.style.setProperty("--left", `${random(-5, 100)}vw`);
  element.style.setProperty("--delay", `${delay}s`);
  element.style.setProperty("--duration", `${duration}s`);
  element.style.setProperty("--drift", `${drift}px`);
  element.style.setProperty("--drift-neg", `${-drift * 0.7}px`);
}

function setFlightVars(element, top, duration, delay) {
  element.style.setProperty("--left", "-14vw");
  element.style.setProperty("--top", `${top}vh`);
  element.style.setProperty("--delay", `${delay}s`);
  element.style.setProperty("--duration", `${duration}s`);
  element.style.setProperty("--drift", `${random(-70, 70)}px`);
  element.style.setProperty("--drift-neg", `${random(-90, -20)}px`);
  element.style.setProperty("--bird-scale", `${random(0.55, 0.9)}`);
}

function buildBirdGif() {
  const bird = document.createElement("img");
  bird.className = "bird-gif";
  bird.src = "bird/bird.gif";
  bird.alt = "";
  bird.draggable = false;
  bird.decoding = "async";

  return bird;
}

function buildAutumnLeaf(index) {
  const shape = autumnLeafShapes[index % autumnLeafShapes.length];
  const leaf = document.createElement("span");
  leaf.className = "autumn-leaf";
  leaf.innerHTML = `
    <svg viewBox="0 0 64 68" aria-hidden="true">
      <path class="autumn-leaf__stem" d="${shape.stem}" />
      <path class="autumn-leaf__blade" d="${shape.blade}" />
      <path class="autumn-leaf__veins" d="${shape.veins}" />
      <path class="autumn-leaf__shine" d="M32 8 C26 22 27 42 32 54 C38 40 38 21 32 8 Z" />
    </svg>
  `;
  return leaf;
}

function buildFriends() {
  friendsPiles.replaceChildren();
  let cursor = 0;

  friendPileSizes.forEach((size, pileIndex) => {
    const pile = document.createElement("div");
    pile.className = "friend-pile";
    pile.style.setProperty("--pile-shift", `${(pileIndex - 1) * 14}px`);

    for (let level = 0; level < size; level += 1) {
      const name = friends[cursor];
      const box = document.createElement("button");
      const side = level % 2 === 0 ? -1 : 1;

      box.type = "button";
      box.className = "friend-box";
      box.style.setProperty("--box-color", friendBoxColors[cursor]);
      box.style.setProperty("--x", `${side * (5 + level * 3)}px`);
      box.style.setProperty("--rot", `${side * (1.5 + level * 0.7)}deg`);
      box.style.setProperty("--start-rot", `${-side * (8 + level * 2)}deg`);
      box.style.setProperty("--bounce-rot", `${side * (2 + level)}deg`);
      box.style.setProperty("--delay", `${level * 0.18 + pileIndex * 0.12}s`);
      box.style.setProperty("--duration", `${1.05 + level * 0.08}s`);
      box.style.zIndex = String(level + 1);
      box.setAttribute("aria-label", `Open letter for box ${cursor + 1}`);
      box.innerHTML = `
        <span class="friend-box__lid"></span>
        <span class="friend-box__face">?</span>
        <span class="friend-box__label">CLOSED LETTER</span>
      `;
      box.addEventListener("click", () => openLetter(name));

      pile.appendChild(box);
      cursor += 1;
    }

    friendsPiles.appendChild(pile);
  });
}

function openLetter(name) {
  letterTitle.textContent = name;
  letterModal.hidden = false;
  document.body.classList.add("modal-open");
  letterModal.querySelector(".letter__close").focus();
}

function closeLetter() {
  letterModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function buildWeather(theme) {
  weather.replaceChildren();
  petalBack.replaceChildren();

  if (theme === "autumn") {
    for (let index = 0; index < 24; index += 1) {
      const leaf = document.createElement("span");
      const color = leafColors[index % leafColors.length];
      leaf.className = "particle particle--autumn";
      leaf.appendChild(buildAutumnLeaf(index));
      setFallVars(leaf, random(-130, 130), random(10, 18), random(-18, 0));
      leaf.style.setProperty("--leaf-color", color.base);
      leaf.style.setProperty("--leaf-dark", color.dark);
      leaf.style.setProperty("--leaf-light", color.light);
      leaf.style.setProperty("--size", `${random(17, 29)}px`);
      leaf.style.setProperty("--leaf-tilt", `${random(-90, 90)}deg`);
      leaf.style.setProperty("--leaf-flip", `${random(0.7, 1.25)}`);
      weather.appendChild(leaf);
    }
  }

  if (theme === "winter") {
    for (let index = 0; index < 46; index += 1) {
      const frost = document.createElement("span");
      frost.className = "particle particle--frost";
      setFallVars(frost, random(-90, 90), random(9, 20), random(-20, 0));
      frost.style.setProperty("--size", `${random(4, 11)}px`);
      weather.appendChild(frost);
    }
  }

  if (theme === "japan") {
    for (let index = 0; index < 12; index += 1) {
      const bird = document.createElement("span");
      bird.className = "particle particle--bird particle--back";
      bird.appendChild(buildBirdGif());
      setFlightVars(bird, random(8, 40), random(18, 30), random(-30, 0));
      bird.style.setProperty("--bird-scale", `${random(0.42, 0.72)}`);
      petalBack.appendChild(bird);
    }

    for (let index = 0; index < 2; index += 1) {
      const bird = document.createElement("span");
      bird.className = "particle particle--bird";
      bird.appendChild(buildBirdGif());
      setFlightVars(bird, random(10, 36), random(14, 21), random(-20, 0));
      bird.style.setProperty("--bird-scale", `${random(0.7, 0.95)}`);
      weather.appendChild(bird);
    }
  }

  if (theme === "sakura") {
    for (let index = 0; index < 24; index += 1) {
      const blossom = document.createElement("span");
      blossom.className = "particle particle--blossom";
      setFallVars(blossom, random(-140, 140), random(9, 17), random(-18, 0));
      blossom.style.setProperty("--size", `${random(13, 21)}px`);
      blossom.style.setProperty("--leaf-color", blossomColors[index % blossomColors.length]);
      weather.appendChild(blossom);
    }

    for (let index = 0; index < 18; index += 1) {
      const leaf = document.createElement("span");
      leaf.className = "particle particle--sakura-leaf";
      setFallVars(leaf, random(-110, 110), random(10, 19), random(-20, 0));
      leaf.style.setProperty("--size", `${random(11, 17)}px`);
      leaf.style.setProperty("--leaf-color", sakuraLeafColors[index % sakuraLeafColors.length]);
      weather.appendChild(leaf);
    }
  }
}

function getStoredTheme() {
  try {
    const saved = window.localStorage.getItem("profile-theme");
    return themes.includes(saved) ? saved : "mint";
  } catch (error) {
    return "mint";
  }
}

function positionBonfireSparks() {
  if (!bonfireSparks || !japanHut || document.documentElement.dataset.theme !== "japan") return;

  const matrix = japanHut.getScreenCTM();
  if (!matrix) return;

  const point = japanHut.createSVGPoint();
  point.x = 358;
  point.y = 318;

  const fire = point.matrixTransform(matrix);
  const headerBottom = topStrip ? topStrip.getBoundingClientRect().bottom : 72;
  const targetY = Math.max(78, headerBottom + 4);
  const rise = Math.max(120, fire.y - targetY);

  bonfireSparks.style.setProperty("--spark-x", `${fire.x}px`);
  bonfireSparks.style.setProperty("--spark-y", `${fire.y}px`);
  bonfireSparks.style.setProperty("--spark-rise", `${-rise}px`);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", `Change theme, currently ${theme}`);
  themeToggle.title = theme.toUpperCase();
  buildWeather(theme);
  requestAnimationFrame(positionBonfireSparks);

  try {
    window.localStorage.setItem("profile-theme", theme);
  } catch (error) {
    void error;
  }
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  const next = themes[(themes.indexOf(current) + 1) % themes.length];
  applyTheme(next);
});

function openRadioPanel() {
  radioPanel.hidden = false;
  radioToggle.setAttribute("aria-expanded", "true");
  loadRadioSongs();
}

function closeRadioPanel() {
  radioPanel.hidden = true;
  radioToggle.setAttribute("aria-expanded", "false");
}

function updateRadioUI() {
  const isPlaying = !radioAudio.paused;
  radioWidget.classList.toggle("is-playing", isPlaying);
  radioControl.disabled = selectedSongIndex < 0;
  radioControl.textContent = isPlaying ? "■ STOP" : "▶ START";
  radioToggle.setAttribute("aria-label", isPlaying ? "Radio playing" : "Open radio");
  radioList.querySelectorAll(".radio-cassette").forEach((item, index) => {
    item.classList.toggle("is-active", index === selectedSongIndex);
  });
}

function selectSong(index) {
  const song = songs[index];
  if (!song) return;
  selectedSongIndex = index;
  radioAudio.src = song.file;
  radioAudio.currentTime = 0;
  radioAudio.play().catch(() => updateRadioUI());
  updateRadioUI();
}

async function loadRadioSongs(force = false) {
  radioList.innerHTML = '<p class="media-status">LOADING SONGS...</p>';

  try {
    const files = await loadFolder("songs", songExtensions, force);
    const previousFile = songs[selectedSongIndex] ? songs[selectedSongIndex].file : null;

    songs = files.map((file) => ({
      title: prettifyName(file.name),
      file: file.url
    }));

    const sameIndex = previousFile ? songs.findIndex((song) => song.file === previousFile) : -1;
    if (sameIndex >= 0) {
      selectedSongIndex = sameIndex;
    } else {
      selectedSongIndex = -1;
      if (!radioAudio.paused) radioAudio.pause();
    }

    renderRadioList();
  } catch (error) {
    void error;
    songs = [];
    selectedSongIndex = -1;
    if (!radioAudio.paused) radioAudio.pause();
    radioList.innerHTML = '<p class="media-status media-status--error">COULD NOT LOAD SONGS.</p>';
    updateRadioUI();
  }
}

function renderRadioList() {
  radioList.replaceChildren();

  if (!songs.length) {
    radioList.innerHTML = '<p class="media-status">NO CASSETTES FOUND.</p>';
    updateRadioUI();
    return;
  }

  songs.forEach((song, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "radio-cassette";
    button.innerHTML = `
      <span class="radio-cassette__disc" aria-hidden="true"></span>
      <span class="radio-cassette__title">${escapeHtml(song.title)}</span>
      <span class="radio-cassette__hint">PLAY</span>
    `;
    button.addEventListener("click", () => selectSong(index));
    radioList.appendChild(button);
  });

  updateRadioUI();
}

radioToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  if (radioPanel.hidden) openRadioPanel();
  else closeRadioPanel();
});

radioClose.addEventListener("click", closeRadioPanel);

radioRefresh.addEventListener("click", (event) => {
  event.stopPropagation();
  loadRadioSongs(true);
});

radioControl.addEventListener("click", () => {
  if (radioAudio.paused) {
    radioAudio.play().catch(() => updateRadioUI());
  } else {
    radioAudio.pause();
  }
  updateRadioUI();
});

radioAudio.addEventListener("play", updateRadioUI);
radioAudio.addEventListener("pause", updateRadioUI);
radioAudio.addEventListener("ended", updateRadioUI);

document.addEventListener("click", (event) => {
  if (!radioWidget.contains(event.target)) closeRadioPanel();
});

document.querySelectorAll("[data-rating]").forEach((button) => {
  button.addEventListener("click", () => {
    const rating = Number(button.dataset.rating);
    document.querySelectorAll("[data-rating]").forEach((star) => {
      star.classList.toggle("is-active", Number(star.dataset.rating) <= rating);
    });
    rateMessage.textContent = rateReplies[rating];
  });
});

document.querySelectorAll("[data-close-letter]").forEach((button) => {
  button.addEventListener("click", closeLetter);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!letterModal.hidden) closeLetter();
  if (!radioPanel.hidden) closeRadioPanel();
});

function getRoute() {
  const hash = window.location.hash.replace("#", "");
  return ["gallery", "hobbies", "friends", "rate"].includes(hash) ? hash : "home";
}

function showScreen(route) {
  screens.forEach((screen) => {
    const isActive = screen.dataset.screen === route;
    screen.classList.toggle("is-active", isActive);
    screen.hidden = !isActive;
  });

  document.body.dataset.route = route;

  if (route === "gallery") {
    buildGallery();
  } else if (route === "hobbies") {
    buildHobbies();
  } else if (route === "friends") {
    buildFriends();
  } else {
    clearTimers();
  }

  if (route !== "friends") closeLetter();

  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", () => showScreen(getRoute()));
window.addEventListener("resize", positionBonfireSparks);
window.addEventListener("scroll", positionBonfireSparks, { passive: true });
window.addEventListener("focus", () => buildAvatar(true));
buildAvatar();
loadRadioSongs();
applyTheme(getStoredTheme());
showScreen(getRoute());
