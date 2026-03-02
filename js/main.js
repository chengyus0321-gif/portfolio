const modal = document.getElementById("modal");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.getElementById("closeBtn");

function openModal(){ modal.classList.remove("hidden"); }
function closeModal(){ modal.classList.add("hidden"); }

if(contactBtn) contactBtn.addEventListener("click", openModal);
if(closeBtn) closeBtn.addEventListener("click", closeModal);

if(modal){
  modal.addEventListener("click", (e) => {
    if(e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeModal();
  });
}

document.querySelectorAll(".copy").forEach(btn=>{
  btn.addEventListener("click", async ()=>{
    const text = btn.getAttribute("data-copy");
    try{
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(()=>btn.textContent = old, 1200);
    }catch{
      alert("Copy failed. Please copy manually.");
    }
  });
});

// ===== Build page interactions (safe to include on all pages) =====
(function () {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Read more buttons toggle the nearest <details>
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-readmore]");
    if (!btn) return;

    const details = btn.closest("details");
    if (!details) return;

    // Prevent summary toggle quirks if click lands inside <summary>
    e.preventDefault();
    details.open = !details.open;

    btn.textContent = details.open ? "Collapse" : "Read more";
  });

  // Toolbar actions
  document.addEventListener("click", (e) => {
    const actionBtn = e.target.closest("[data-action]");
    if (!actionBtn) return;

    const action = actionBtn.getAttribute("data-action");
    const allDetails = document.querySelectorAll("article[data-project] details.project");
    if (!allDetails.length) return;

    if (action === "expand-all") {
      allDetails.forEach((d) => (d.open = true));
      document.querySelectorAll("[data-readmore]").forEach((b) => (b.textContent = "Collapse"));
    }

    if (action === "collapse-all") {
      allDetails.forEach((d) => (d.open = false));
      document.querySelectorAll("[data-readmore]").forEach((b) => (b.textContent = "Read more"));
    }
  });
})();
