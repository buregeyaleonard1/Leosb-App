function openSection(id){
  document.querySelectorAll('.section').forEach(section=>{
    section.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

function goHome(){
  document.querySelectorAll('.section').forEach(section=>{
    section.classList.remove('active');
  });

  document.getElementById('home').classList.add('active');
}

window.onload = function(){
  goHome();
}
