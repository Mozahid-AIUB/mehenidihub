/* ================================================
   gallery.js — MehendiHub Enhanced
   Features: Filter, Search, Quick View Modal,
   WhatsApp Share, Copy Link, View Count,
   Back to Top, Favorites
================================================ */

var currentFilter = "all";

var urlParams = new URLSearchParams(window.location.search);
var urlFilter = urlParams.get("filter");
if (urlFilter) {
    currentFilter = urlFilter;
    var buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(function (btn) {
        btn.classList.remove("active");
        if (btn.textContent.toLowerCase().includes(urlFilter)) btn.classList.add("active");
    });
}

/* ══ VIEW COUNT ══ */
function getViewCount(id) {
    var stored = localStorage.getItem("vc_" + id);
    if (!stored) {
        var base = Math.floor(Math.random() * 900) + 100;
        localStorage.setItem("vc_" + id, base);
        return base;
    }
    return parseInt(stored);
}

/* ══ QUICK VIEW MODAL ══ */
document.body.insertAdjacentHTML("beforeend",
    '<div id="quickModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;align-items:center;justify-content:center;">' +
    '<div style="background:var(--bg-card);border-radius:20px;max-width:520px;width:90%;overflow:hidden;position:relative;">' +
    '<button onclick="closeModal()" style="position:absolute;top:12px;right:16px;font-size:22px;background:none;border:none;cursor:pointer;color:var(--text-primary);z-index:1;">✕</button>' +
    '<img id="modalImg" src="" alt="" style="width:100%;height:320px;object-fit:cover;" />' +
    '<div style="padding:20px 24px 24px;">' +
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">' +
    '<span class="badge badge-primary" id="modalCategory"></span>' +
    '<span id="modalViews" style="font-size:12px;color:var(--text-muted);"></span>' +
    '</div>' +
    '<h2 id="modalName" style="font-family:var(--font-heading);font-size:22px;margin:8px 0 16px;"></h2>' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
    '<button class="heart-btn" id="modalHeart" onclick="modalToggleFav()">🤍 Save</button>' +
    '<a id="modalDownload" class="download-btn" href="#" download="">⬇ Download</a>' +
    '<button onclick="modalShareWhatsApp()" style="background:#25d366;color:white;border:none;padding:8px 14px;border-radius:8px;font-size:13px;cursor:pointer;font-weight:600;">📲 Share</button>' +
    '<button onclick="modalCopyLink()" style="background:var(--color-primary-light);color:var(--color-primary-dark);border:1.5px solid var(--border-light);padding:8px 14px;border-radius:8px;font-size:13px;cursor:pointer;font-weight:600;">🔗 Copy</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
);

var currentModalId = null;

function openModal(id) {
    var d = designs.find(function (x) { return x.id === id; });
    if (!d) return;
    currentModalId = id;
    document.getElementById("modalImg").src = d.image;
    document.getElementById("modalImg").alt = d.name;
    document.getElementById("modalName").textContent = d.name;
    document.getElementById("modalCategory").textContent = d.category;
    document.getElementById("modalDownload").href = d.image;
    document.getElementById("modalDownload").download = d.name;
    document.getElementById("modalViews").textContent = "👁 " + getViewCount(id) + " views";
    var heart = document.getElementById("modalHeart");
    if (isFavorite(id)) { heart.innerHTML = "❤️ Saved"; heart.classList.add("saved"); }
    else { heart.innerHTML = "🤍 Save"; heart.classList.remove("saved"); }
    document.getElementById("quickModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("quickModal").style.display = "none";
    document.body.style.overflow = "";
}

function modalToggleFav() {
    if (!currentModalId) return;
    toggleFav(currentModalId);
    var heart = document.getElementById("modalHeart");
    if (isFavorite(currentModalId)) { heart.innerHTML = "❤️ Saved"; heart.classList.add("saved"); }
    else { heart.innerHTML = "🤍 Save"; heart.classList.remove("saved"); }
}

function modalShareWhatsApp() {
    if (!currentModalId) return;
    var d = designs.find(function (x) { return x.id === currentModalId; });
    var text = "Check out this beautiful Mehendi design: " + d.name + " 🌿 Find more at MehendiHub!";
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
}

function modalCopyLink() {
    if (!currentModalId) return;
    var d = designs.find(function (x) { return x.id === currentModalId; });
    var text = "MehendiHub — " + d.name;
    navigator.clipboard.writeText(text).then(function () { showToast("Link copied! 🔗", "success"); });
}

document.getElementById("quickModal").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
});
document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

/* ══ RENDER CARDS ══ */
function renderCards(list) {
    var grid = document.getElementById("galleryGrid");
    var noResult = document.getElementById("noResult");
    var countEl = document.getElementById("resultCount");
    grid.innerHTML = "";
    if (countEl) countEl.textContent = list.length;
    if (list.length === 0) { noResult.style.display = "block"; return; }
    noResult.style.display = "none";
    list.forEach(function (d, i) {
        var isFav = isFavorite(d.id);
        var views = getViewCount(d.id);
        var card = document.createElement("div");
        card.className = "design-card animate-fadeIn animate-delay-" + Math.min(i + 1, 6);
        card.innerHTML =
            '<div class="card-img-wrap">' +
            '<img src="' + d.image + '" alt="' + d.name + '" loading="lazy" />' +
            '<div class="card-overlay"><span class="card-overlay-btn" onclick="openModal(\'' + d.id + '\')">Quick View</span></div>' +
            '</div>' +
            '<div class="card-body">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;">' +
            '<span class="badge badge-' + d.category + '">' + d.category + '</span>' +
            '<span style="font-size:11px;color:var(--text-muted);">👁 ' + views + '</span>' +
            '</div>' +
            '<h3>' + d.name + '</h3>' +
            '<div class="card-actions">' +
            '<button class="heart-btn ' + (isFav ? "saved" : "") + '" id="heart-' + d.id + '" onclick="toggleFav(\'' + d.id + '\')">' +
            '<span class="heart-icon">' + (isFav ? "❤️" : "🤍") + '</span>' + (isFav ? " Saved" : " Save") +
            '</button>' +
            '<a class="download-btn" href="' + d.image + '" download="' + d.name + '">⬇ Download</a>' +
            '<button onclick="shareWhatsApp(\'' + d.name + '\')" style="background:#25d366;color:white;border:none;padding:7px 10px;border-radius:8px;font-size:13px;cursor:pointer;">📲</button>' +
            '</div>' +
            '</div>';
        grid.appendChild(card);
    });
}

/* ══ FILTER + SEARCH ══ */
function setFilter(category, btn) {
    currentFilter = category;
    document.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    filterDesigns();
}

function filterDesigns() {
    var searchText = document.getElementById("searchInput").value.toLowerCase().trim();
    var filtered = designs.filter(function (d) {
        var matchCategory = (currentFilter === "all") || (d.category === currentFilter);
        var matchSearch = d.name.toLowerCase().includes(searchText) || d.category.toLowerCase().includes(searchText);
        return matchCategory && matchSearch;
    });
    renderCards(filtered);
}

function resetSearch() {
    document.getElementById("searchInput").value = "";
    currentFilter = "all";
    var buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(function (b) { b.classList.remove("active"); });
    buttons[0].classList.add("active");
    renderCards(designs);
}

/* ══ FAVORITES ══ */
function isFavorite(id) {
    return JSON.parse(localStorage.getItem("favorites") || "[]").includes(id);
}

function toggleFav(id) {
    var favIds = JSON.parse(localStorage.getItem("favorites") || "[]");
    var btn = document.getElementById("heart-" + id);
    if (favIds.includes(id)) {
        favIds = favIds.filter(function (x) { return x !== id; });
        if (btn) { btn.innerHTML = '<span class="heart-icon">🤍</span> Save'; btn.classList.remove("saved"); }
        showToast("Removed from favorites");
    } else {
        favIds.push(id);
        if (btn) { btn.innerHTML = '<span class="heart-icon">❤️</span> Saved'; btn.classList.add("saved"); }
        showToast("Saved! ❤️", "success");
    }
    localStorage.setItem("favorites", JSON.stringify(favIds));
    updateFavCount();
}

function updateFavCount() {
    var favIds = JSON.parse(localStorage.getItem("favorites") || "[]");
    var badge = document.getElementById("favCount");
    if (badge) { badge.textContent = favIds.length; badge.style.display = favIds.length === 0 ? "none" : "flex"; }
}

/* ══ WHATSAPP SHARE ══ */
function shareWhatsApp(name) {
    var text = "Check out this beautiful Mehendi design: " + name + " 🌿 Find more at MehendiHub!";
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
}

/* ══ TOAST ══ */
function showToast(message, type) {
    var old = document.querySelector(".toast");
    if (old) old.remove();
    var toast = document.createElement("div");
    toast.className = "toast " + (type || "");
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function () {
        toast.style.animation = "toastOut 0.3s ease forwards";
        setTimeout(function () { toast.remove(); }, 300);
    }, 2500);
}

/* ══ HAMBURGER ══ */
var hamburger = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobileMenu");
if (hamburger) hamburger.addEventListener("click", function () { mobileMenu.classList.toggle("open"); });

/* ══ BACK TO TOP ══ */
document.body.insertAdjacentHTML("beforeend",
    '<button id="backToTop" title="Back to top" style="display:none;position:fixed;bottom:24px;right:24px;background:#7a2b10;color:white;border:none;border-radius:50%;width:46px;height:46px;font-size:20px;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,0.25);z-index:999;align-items:center;justify-content:center;">↑</button>'
);
var backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function () {
    if (backToTop) backToTop.style.display = window.scrollY > 400 ? "flex" : "none";
});
if (backToTop) backToTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

/* ══ INIT ══ */
updateFavCount();
filterDesigns();