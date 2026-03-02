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
