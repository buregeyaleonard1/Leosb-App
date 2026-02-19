function showSection(sectionId){
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => s.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// Default: show Home
showSection('home');
