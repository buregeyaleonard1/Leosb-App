function showSection(sectionId){
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => s.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// Default: show Home
showSection('home');
function changeLanguage(){
  const lang = document.getElementById('languageSelect').value;
  const headerTitle = document.querySelector('.header h1');
  const headerSub = document.querySelector('.header p');
  
  switch(lang){
    case 'en':
      headerTitle.textContent = '🚀 Leosb App';
      headerSub.textContent = 'Welcome to Leosb App';
      break;
    case 'fr':
      headerTitle.textContent = '🚀 Application Leosb';
      headerSub.textContent = 'Bienvenue sur l’application Leosb';
      break;
    case 'rn':
      headerTitle.textContent = '🚀 Leosb App';
      headerSub.textContent = 'Ikaze muri Leosb App';
      break;
    case 'sw':
      headerTitle.textContent = '🚀 Programu ya Leosb';
      headerSub.textContent = 'Karibu kwenye Leosb App';
      break;
    default:
      headerTitle.textContent = '🚀 Leosb App';
      headerSub.textContent = 'Welcome to Leosb App';
  }
}
