document.addEventListener("DOMContentLoaded", () => {
  const moduleId = parseInt(ui.getUrlParam("moduleId"));
  const lessonId = parseInt(ui.getUrlParam("lessonId"));

  if (isNaN(moduleId) || isNaN(lessonId)) {
    window.location.href = "index.html";
    return;
  }

  const module = courseData.modules.find((m) => m.id === moduleId);
  const lesson = module?.lessons.find((l) => l.id === lessonId);

  if (!module || !lesson) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById(
    "module-title"
  ).textContent = `${module.title}: ${lesson.title}`;

  const videoFrame = document.getElementById("lesson-video");

  if (lesson.videoId) { 
    videoFrame.src = `https://www.youtube.com/embed/${lesson.videoId}?enablejsapi=1`;

    // Adiciona o tratamento de erro para o iframe
    videoFrame.onerror = () => {
      videoFrame.style.display = 'none';
      const errorMessage = document.createElement('div');
      errorMessage.className = 'video-error';
      errorMessage.innerHTML = `
        <p>Desculpe, o vídeo não pôde ser carregado. Por favor, tente novamente mais tarde.</p>
        <a href="https://www.youtube.com/watch?v=${lesson.videoId}" target="_blank" class="btn secondary">
          Assistir no YouTube
        </a>
      `;
      videoFrame.parentElement.appendChild(errorMessage);
    };
  } else {
    videoFrame.style.display = 'none';
    const noVideoMessage = document.createElement('div');
    noVideoMessage.innerHTML = `<p>Nenhum vídeo disponível para esta lição.</p>`;
    videoFrame.parentElement.appendChild(noVideoMessage);
  }

  document.getElementById("lesson-text").innerHTML = lesson.content;

  const prevButton = document.getElementById("previous-lesson");
  const nextButton = document.getElementById("next-lesson");

  prevButton.disabled = lessonId <= 1;
  prevButton.addEventListener("click", () => {
    if (lessonId > 1) {
      window.location.href = `lesson.html?moduleId=${moduleId}&lessonId=${
        lessonId - 1
      }`;
    }
  });

  if (lessonId < module.lessons.length) {
    nextButton.addEventListener("click", () => {
      window.location.href = `lesson.html?moduleId=${moduleId}&lessonId=${
        lessonId + 1
      }`;
    });
  } else {
    nextButton.textContent = "Fazer Teste";
    nextButton.addEventListener("click", () => {
      window.location.href = `quiz.html?moduleId=${moduleId}`;
    });
  }
});