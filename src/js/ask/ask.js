async function renderAccordion(containerId) {
    try {
      const res = await fetch("https://negar1919.github.io/json-server/db.json");
      const data = await res.json();
  
      const container = document.getElementById(containerId);
      container.innerHTML = "";
  
      let activeQuestion = null;
  
      data.accordionItems.forEach((item) => {
        const q = document.createElement("div");
        q.className = "accordion-question";
        q.textContent = item.question;
  
        const a = document.createElement("div");
        a.className = "accordion-answer";
        a.textContent = item.answer;
  
        q.addEventListener("click", () => {
          if (activeQuestion && activeQuestion !== q) {
            activeQuestion.classList.remove("active");
            activeQuestion.nextElementSibling.style.display = "none";
          }
  
          const isOpen = q.classList.contains("active");
          q.classList.toggle("active");
          a.style.display = isOpen ? "none" : "block";
  
          activeQuestion = q.classList.contains("active") ? q : null;
        });
  
        container.appendChild(q);
        container.appendChild(a);
      });
    } catch (err) {
      console.error("خطا در دریافت آکاردئون:", err);
    }
  }
  
  export { renderAccordion };