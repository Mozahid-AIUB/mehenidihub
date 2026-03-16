/* ================================================
   app.js — MehendiHub Enhanced
================================================ */

/* ══ HAMBURGER ══ */
var hamburger = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobileMenu");
if (hamburger) {
    hamburger.addEventListener("click", function () { mobileMenu.classList.toggle("open"); });
}

/* ══ FAVORITE COUNT ══ */
function updateFavCount() {
    var favIds = JSON.parse(localStorage.getItem("favorites") || "[]");
    var badge = document.getElementById("favCount");
    if (badge) { badge.textContent = favIds.length; badge.style.display = favIds.length === 0 ? "none" : "flex"; }
}
updateFavCount();

/* ══ COUNTER ANIMATION ══ */
function animateCounter(el, target, duration) {
    var start = 0;
    var step = Math.ceil(target / (duration / 30));
    var timer = setInterval(function () {
        start += step;
        if (start >= target) { start = target; clearInterval(timer); }
        el.textContent = start + (el.dataset.suffix || "");
    }, 30);
}

var heroStats = document.querySelector(".hero-stats");
if (heroStats) {
    var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            document.querySelectorAll(".counter-num").forEach(function (el) {
                animateCounter(el, parseInt(el.dataset.target), 1200);
            });
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    observer.observe(heroStats);
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

/* ══ DESIGN OF THE DAY ══ */
function loadDesignOfTheDay() {
    var d = designs[new Date().getDate() % designs.length];
    var nameEl = document.getElementById("dotdName");
    var imgEl = document.getElementById("dotdImg");
    var catEl = document.getElementById("dotdCategory");
    if (nameEl) nameEl.textContent = d.name;
    if (imgEl) { imgEl.src = d.image; imgEl.alt = d.name; }
    if (catEl) catEl.textContent = d.category;
    var downloadBtn = document.getElementById("dotdDownload");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            var a = document.createElement("a"); a.href = d.image; a.download = d.name + ".jpg"; a.click();
        });
    }
}
loadDesignOfTheDay();

/* ══ WHATSAPP SHARE ══ */
function shareWhatsApp(name) {
    var text = "Check out this beautiful Mehendi design: " + name + " 🌿 Find more at MehendiHub!";
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
}

/* ══ COPY LINK ══ */
function copyLink(name) {
    var text = "MehendiHub — " + name + " | " + window.location.origin;
    navigator.clipboard.writeText(text).then(function () {
        showToast("Link copied! 🔗", "success");
    });
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

/* ══ FEATURED GRID ══ */
function loadFeaturedDesigns() {
    var grid = document.getElementById("featuredGrid");
    if (!grid) return;
    var featured = designs.filter(function (d) { return d.featured; }).slice(0, 6);
    featured.forEach(function (d, i) {
        var isFav = isFavorite(d.id);
        var views = getViewCount(d.id);
        var card = document.createElement("div");
        card.className = "design-card animate-fadeIn animate-delay-" + (i + 1);
        card.innerHTML =
            '<div class="card-img-wrap">' +
            '<img src="' + d.image + '" alt="' + d.name + '" loading="lazy" />' +
            '<div class="card-overlay"><a href="pages/gallery.html" class="card-overlay-btn">View All</a></div>' +
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
            '<button onclick="shareWhatsApp(\'' + d.name + '\')" style="background:#25d366;color:white;border:none;padding:7px 12px;border-radius:8px;font-size:13px;cursor:pointer;">📲</button>' +
            '</div>' +
            '</div>';
        grid.appendChild(card);
    });
}
loadFeaturedDesigns();

/* ══ SURPRISE ME MODAL ══ */
document.body.insertAdjacentHTML("beforeend",
    '<div id="surpriseModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;align-items:center;justify-content:center;">' +
    '<div style="background:var(--bg-card);border-radius:20px;max-width:480px;width:90%;overflow:hidden;position:relative;">' +
    '<button onclick="closeSurprise()" style="position:absolute;top:12px;right:16px;font-size:22px;background:none;border:none;cursor:pointer;color:var(--text-primary);">✕</button>' +
    '<img id="sModalImg" src="" style="width:100%;height:300px;object-fit:cover;" />' +
    '<div style="padding:20px 24px 24px;">' +
    '<span id="sModalCat" class="badge badge-primary" style="margin-bottom:8px;display:inline-block;"></span>' +
    '<h2 id="sModalName" style="font-family:var(--font-heading);font-size:20px;margin-bottom:16px;"></h2>' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
    '<a id="sModalDownload" class="download-btn" href="#" download="">⬇ Download</a>' +
    '<button onclick="loadSurprise()" class="btn btn-primary btn-sm">🎲 Another!</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
);

function loadSurprise() {
    var d = designs[Math.floor(Math.random() * designs.length)];
    document.getElementById("sModalImg").src = d.image;
    document.getElementById("sModalName").textContent = d.name;
    document.getElementById("sModalCat").textContent = d.category;
    document.getElementById("sModalDownload").href = d.image;
    document.getElementById("sModalDownload").download = d.name;
    document.getElementById("surpriseModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeSurprise() {
    document.getElementById("surpriseModal").style.display = "none";
    document.body.style.overflow = "";
}

var surpriseBtn = document.getElementById("surpriseBtn");
if (surpriseBtn) surpriseBtn.addEventListener("click", loadSurprise);

document.getElementById("surpriseModal").addEventListener("click", function (e) {
    if (e.target === this) closeSurprise();
});

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

/* ══ BACK TO TOP ══ */
var backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function () {
    if (backToTop) backToTop.style.display = window.scrollY > 400 ? "flex" : "none";
});
if (backToTop) {
    backToTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
}