const app = document.getElementById("app");

/* ---------- AUTH SYSTEM ---------- */

function loginPage(){
  app.innerHTML = `
    <div class="header">Leosb App</div>
    <div class="content">
      <div class="card">
        <h3 class="center">Login</h3>
        <input id="email" placeholder="Email">
        <input id="password" type="password" placeholder="Password">
        <button onclick="login()">Login</button>
        <p class="center" onclick="registerPage()">No account? Register</p>
      </div>
    </div>
  `;
}

function registerPage(){
  app.innerHTML = `
    <div class="header">Create Account</div>
    <div class="content">
      <div class="card">
        <input id="email" placeholder="Email">
        <input id="password" type="password" placeholder="Password">
        <button onclick="register()">Register</button>
        <p class="center" onclick="loginPage()">Back to Login</p>
      </div>
    </div>
  `;
}

function register(){
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({email,password}));
  alert("Account Created");
  loginPage();
}

function login(){
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;

  const user=JSON.parse(localStorage.getItem("user"));

  if(user && user.email===email && user.password===password){
    localStorage.setItem("loggedIn","true");
    home();
  }else{
    alert("Invalid login");
  }
}

/* ---------- LAYOUT ---------- */

function layout(title,body,active){
  app.innerHTML=`
    <div class="header">${title}</div>
    <div class="content">${body}</div>
    <div class="bottom-nav">
      <div class="${active==='home'?'active':''}" onclick="home()">🏠<br>Home</div>
      <div class="${active==='market'?'active':''}" onclick="marketplace()">🛒<br>Market</div>
      <div class="${active==='wallet'?'active':''}" onclick="wallet()">💰<br>Wallet</div>
      <div class="${active==='settings'?'active':''}" onclick="settings()">⚙<br>Settings</div>
    </div>
  `;
}

/* ---------- HOME ---------- */

function home(){
  layout("Dashboard",`
    <div class="card">
      <h3>Welcome 👋</h3>
      <p>Your account is active.</p>
    </div>
    <div class="card" onclick="openPartnership()">
      <h3>🤝 Register Business</h3>
    </div>
  `,"home");
}

/* ---------- PARTNERSHIP ---------- */

function openPartnership(){
  layout("Register Business",`
    <div class="card">
      <input id="name" placeholder="Business Name">
      <select id="type">
        <option>Product</option>
        <option>Restaurant</option>
        <option>Hotel</option>
      </select>
      <input id="price" placeholder="Price">
      <textarea id="description" placeholder="Description"></textarea>
      <button onclick="saveBusiness()">Submit</button>
    </div>
  `,"");
}

function saveBusiness(){
  const name=document.getElementById("name").value;
  const type=document.getElementById("type").value;
  const price=document.getElementById("price").value;
  const description=document.getElementById("description").value;

  let data=JSON.parse(localStorage.getItem("market"))||[];
  data.push({name,type,price,description});
  localStorage.setItem("market",JSON.stringify(data));

  alert("Business Added");
  marketplace();
}

/* ---------- MARKETPLACE ---------- */

function marketplace(){
  let data=JSON.parse(localStorage.getItem("market"))||[];
  let list="";

  if(data.length===0){
    list="<p>No items yet</p>";
  }else{
    data.forEach(item=>{
      list+=`
        <div class="card">
          <h3>${item.name}</h3>
          <p>${item.type}</p>
          <p>${item.description}</p>
          <p>💲${item.price}</p>
        </div>
      `;
    });
  }

  layout("Marketplace",list,"market");
}

/* ---------- WALLET ---------- */

function wallet(){
  layout("Wallet",`
    <div class="card">
      <h3>Balance</h3>
      <p>1,234 Points</p>
    </div>
  `,"wallet");
}

/* ---------- SETTINGS ---------- */

function settings(){
  layout("Settings",`
    <div class="card">
      <p onclick="logout()">Logout</p>
      <p onclick="clearMarket()">Clear Marketplace</p>
    </div>
  `,"settings");
}

function logout(){
  localStorage.removeItem("loggedIn");
  loginPage();
}

function clearMarket(){
  localStorage.removeItem("market");
  alert("Marketplace cleared");
}

/* ---------- START ---------- */

if(localStorage.getItem("loggedIn")==="true"){
  home();
}else{
  loginPage();
}
