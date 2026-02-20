<script>
function openSection(id){
  // Hisha sections zose
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = "none";
  });

  // Erekana iyatoranyijwe
  document.getElementById(id).style.display = "block";

  logActivity("Opened: " + id);
}

function goHome(){
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById('home').style.display = "block";

  logActivity("Returned Home");
}

function logActivity(message){
  const time = new Date().toLocaleString();
  const log = "["+time+"] "+message;

  let logs = JSON.parse(localStorage.getItem("logs")) || [];
  logs.push(log);
  localStorage.setItem("logs", JSON.stringify(logs));
}

// Ibi bituma Home ari yo yonyine igaragara mu ntango
window.onload = function(){
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById('home').style.display = "block";
};
</script>
