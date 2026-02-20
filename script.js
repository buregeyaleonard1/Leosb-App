const app = document.getElementById("app");

function layout(title, bodyContent, activeTab) {
  app.innerHTML = `
    <div class="header">${title}</div>

    <div class="content">
      ${bodyContent}
    </div>

    <div class="bottom-nav">
      <div class="${activeTab==='home'?'active':''}" onclick="home()">🏠<br>Home</div>
      <div class="${activeTab==='wallet'?'active':''}" onclick="wallet()">💰<br>Wallet</div>
      <div class="${activeTab==='settings'?'active':''}" onclick="settings()">⚙<br>Settings</div>
    </div>
  `;
}

function home() {
  layout(
    "Leosb Dashboard",
    `
    <div class="card">
      <h3>Welcome Back 👋</h3>
      <p>Your marketplace is active.</p>
    </div>

    <div class="card">
      <h3>Marketplace</h3>
      <p>Explore products and services.</p>
    </div>
    `,
    "home"
  );
}

function wallet() {
  layout(
    "My Wallet",
    `
    <div class="card">
      <h3>Balance</h3>
      <p>1,234 Points</p>
    </div>

    <div class="card">
      <p>Send</p>
      <p>Receive</p>
    </div>
    `,
    "wallet"
  );
}

function settings() {
  layout(
    "Settings",
    `
    <div class="card">
      <p>Profile</p>
      <p>Security</p>
      <p>Logout</p>
    </div>
    `,
    "settings"
  );
}

home();
