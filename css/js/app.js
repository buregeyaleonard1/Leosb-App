const app = document.getElementById("app");

function render(){
  let content = "";

  if(State.currentPage === "home"){
    content = homePage();
  }
  if(State.currentPage === "market"){
    content = marketPage();
  }
  if(State.currentPage === "wallet"){
    content = walletPage();
  }
  if(State.currentPage === "settings"){
    content = settingsPage();
  }

  app.innerHTML = layout("Leosb App", content);
}

render();
