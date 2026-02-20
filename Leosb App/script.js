const app = document.getElementById("app");

function dashboard() {
  app.innerHTML = `
    <div class="header-card">
      <h2>Welcome back!</h2>
      <p>Explore Marketplace</p>
      <h3>1,234 Points</h3>
    </div>

    <div class="grid">
      <div class="card" onclick="openMarketplace()">Marketplace</div>
      <div class="card" onclick="openPartnership()">Partnership</div>
    </div>

    ${bottomNav()}
  `;
}

function bottomNav() {
  return `
    <div class="bottom-nav">
      <div onclick="dashboard()">🏠</div>
      <div onclick="openMarketplace()">🛒</div>
      <div onclick="openPartnership()">🤝</div>
    </div>
  `;
}

function openPartnership() {
  app.innerHTML = `
    <div class="form-container">
      <h2>Register Business</h2>

      <input id="name" placeholder="Company / Business Name">
      
      <select id="type">
        <option value="Product">Product</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Hotel">Hotel</option>
      </select>

      <textarea id="description" placeholder="Description"></textarea>

      <button onclick="saveBusiness()">Submit</button>
    </div>

    ${bottomNav()}
  `;
}

function saveBusiness() {
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;

  let businesses = JSON.parse(localStorage.getItem("businesses")) || [];

  businesses.push({ name, type, description });

  localStorage.setItem("businesses", JSON.stringify(businesses));

  alert("Business Registered Successfully!");
  openMarketplace();
}

function openMarketplace() {
  let businesses = JSON.parse(localStorage.getItem("businesses")) || "";

  let list = "";

  if (businesses.length > 0) {
    businesses.forEach(b => {
      list += `
        <div class="card">
          <h3>${b.name}</h3>
          <p>${b.type}</p>
          <p>${b.description}</p>
        </div>
      `;
    });
  } else {
    list = "<p style='padding:20px'>No businesses yet</p>";
  }

  app.innerHTML = `
    <h2 style="padding:15px">Marketplace</h2>
    ${list}
    ${bottomNav()}
  `;
}

dashboard();
