document.addEventListener('DOMContentLoaded', () => {
  const moduleId = parseInt(ui.getUrlParam('moduleId'));
  
  if (isNaN(moduleId)) {
    window.location.href = 'index.html';
    return;
  }
  
  const quizResult = storage.get('quizResult');
  if (!quizResult || !quizResult.passed || quizResult.moduleId !== moduleId) {
    document.getElementById('access-error').classList.remove('hidden');
    document.getElementById('certificate-container').classList.add('hidden');
    return;
  }
  
  const module = courseData.modules.find(m => m.id === moduleId);
  if (!module) return;
  
  const userName = storage.get('userName') || 'Seu Nome Aqui';
  
  document.getElementById('certificate-module').textContent = module.title;
  document.getElementById('certificate-name').textContent = userName;
  document.getElementById('certificate-date').textContent = ui.formatDate(new Date());
  document.getElementById('user-name').value = userName;
  
  document.getElementById('update-name').addEventListener('click', () => {
    const newName = document.getElementById('user-name').value.trim();
    if (newName) {
      document.getElementById('certificate-name').textContent = newName;
      storage.set('userName', newName);
    }
  });
  
  document.getElementById('download-certificate').addEventListener('click', () => {
    window.print();
  });
});