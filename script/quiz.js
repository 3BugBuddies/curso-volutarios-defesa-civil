document.addEventListener('DOMContentLoaded', () => {
  const moduleId = parseInt(ui.getUrlParam('moduleId'));
  
  if (isNaN(moduleId)) {
    window.location.href = 'index.html';
    return;
  }
  
  const module = courseData.modules.find(m => m.id === moduleId);
  if (!module) {
    window.location.href = 'index.html';
    return;
  }
  
  document.getElementById('quiz-title').textContent = `${module.title} - Avaliação`;
  document.getElementById('start-quiz').addEventListener('click', () => loadQuiz(moduleId));
});

function loadQuiz(moduleId) {
  const module = courseData.modules.find(m => m.id === moduleId);
  const quizContainer = document.getElementById('quiz-container');
  
  document.getElementById('quiz-instructions').classList.add('hidden');
  quizContainer.classList.remove('hidden');
  
  quizContainer.innerHTML = module.quiz.map((question, index) => `
    <div class="question">
      <p class="question-text">${index + 1}. ${question.question}</p>
      <ul class="options">
        ${question.options.map((option, optionIndex) => `
          <li class="option">
            <label>
              <input type="radio" name="question-${index}" value="${optionIndex}">
              ${option}
            </label>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('') + `
    <div class="quiz-actions">
      <button onclick="submitQuiz(${moduleId})" class="btn primary">Enviar Teste</button>
    </div>
  `;
}

function submitQuiz(moduleId) {
  const module = courseData.modules.find(m => m.id === moduleId);
  const answers = module.quiz.map((_, index) => {
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    return selected ? parseInt(selected.value) : -1;
  });
  
  if (answers.includes(-1)) {
    alert('Por favor, responda o teste.');
    return;
  }
  
  const correct = answers.reduce((sum, answer, index) => 
    sum + (answer === module.quiz[index].correctAnswer ? 1 : 0), 0);
  
  const score = Math.round((correct / module.quiz.length) * 100);
  const passed = score >= 70;
  
  storage.set('quizResult', { moduleId, score, passed });
  
  document.getElementById('quiz-container').classList.add('hidden');
  document.getElementById('quiz-results').classList.remove('hidden');
  
  const scoreCircle = document.querySelector('.score-circle');
  scoreCircle.classList.add(passed ? 'pass' : 'fail');
  
  document.getElementById('score-percentage').textContent = `${score}%`;
  document.getElementById('score-text').textContent = `${correct}/${module.quiz.length}`;
  
  if (passed) {
    document.getElementById('pass-message').classList.remove('hidden');
    document.getElementById('view-certificate').addEventListener('click', () => {
      window.location.href = `certificate.html?moduleId=${moduleId}`;
    });
  } else {
    document.getElementById('fail-message').classList.remove('hidden');
    document.getElementById('retry-quiz').addEventListener('click', () => loadQuiz(moduleId));
    document.getElementById('back-to-module').addEventListener('click', () => {
      window.location.href = `lesson.html?moduleId=${moduleId}&lessonId=1`;
    });
  }
}