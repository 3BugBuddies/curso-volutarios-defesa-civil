document.addEventListener("DOMContentLoaded", () => {
  const moduleGrid = document.getElementById("module-grid");
  if (!moduleGrid) return;

  courseData.modules.forEach((module) => {
    const card = document.createElement("div");
    card.className = "module-card";
    card.innerHTML = `
       <div class="module-image">
          <img src=${module.image} alt="Defesa Civil Logo">
       </div>
      <div class="module-content">
        <h4 class="module-title">${module.title}</h4>
        <p class="module-description">${module.description}</p>
        <div class="module-footer">
          <span class="module-lessons">${module.lessons.length}. Lições </span>
          <button class="module-button" data-module-id="${module.id}">
            INICIAR MÓDULO
          </button>
        </div>
      </div>
    `;

    moduleGrid.appendChild(card);

    card.querySelector(".module-button").addEventListener("click", () => {
      window.location.href = `lesson.html?moduleId=${module.id}&lessonId=1`;
    });
  });
});
