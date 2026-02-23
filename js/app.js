const app = document.getElementById("app");

// Replace with your real Base44 API endpoints
const API_BASE = "https://your-base44-api.com/businesses";

// Render SPA
function render(){
  let content = "";
  if(State.currentPage === "home") content = homePage();
  if(State.currentPage === "add") content = addBusinessPage();
  if(State.currentPage === "market") content = marketPage();
  if(State.currentPage === "wallet") content = walletPage();
  if(State.currentPage === "settings") content = settingsPage();

  app.innerHTML = layout("Leosb App", content);

  if(State.currentPage === "market") loadMarket();
}

// Save business to Base44
function saveBusiness(){
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;

  fetch(API_BASE, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({name,type})
  })
  .then(res=>res.json())
  .then(data=>{
    alert("Business saved!");
    navigate("market");
  })
  .catch(err=>alert("Error saving business"));
}

// Load businesses from Base44
function loadMarket(){
  fetch(API_BASE)
  .then(res=>res.json())
  .then(data=>{
    let html = "";
    data.forEach(b=>{
      html += `<div class="card"><h3>${b.name}</h3><p>${b.type}</p></div>`;
    });
    document.getElementById("market-list").innerHTML = html;
  })
  .catch(err=>{
    document.getElementById("market-list").innerHTML = "<p>Error loading data</p>";
  });
}

// Initial render
render();
