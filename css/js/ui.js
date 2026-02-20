function layout(title, content){
  return `
    <div class="header">${title}</div>
    <div class="content">${content}</div>
    <div class="bottom-nav">
      <div onclick="navigate('home')">🏠<br>Home</div>
      <div onclick="navigate('market')">🛒<br>Market</div>
      <div onclick="navigate('wallet')">💰<br>Wallet</div>
      <div onclick="navigate('settings')">⚙<br>Settings</div>
    </div>
  `;
}

function homePage(){
  return `
    <div class="card">
      <h3>Welcome</h3>
      <p>Leosb startup app clean version.</p>
    </div>
  `;
}

function marketPage(){
  return `
    <div class="card">
      <p>No businesses yet</p>
    </div>
  `;
}

function walletPage(){
  return `
    <div class="card">
      <h3>Wallet</h3>
      <p>Balance: 0</p>
    </div>
  `;
}

function settingsPage(){
  return `
    <div class="card">
      <p>Settings</p>
    </div>
  `;
}
