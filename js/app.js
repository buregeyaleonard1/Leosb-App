function openPage(title) {
  const content = document.getElementById("content");

  let pageData = "";

  if (title === "cars") {
    pageData = `
      <p>🚗 Toyota - $5000</p>
      <p>🚙 BMW - $12000</p>
      <p>🚕 Honda - $7000</p>
    `;
  }

  if (title === "clothes") {
    pageData = `
      <p>👕 T-Shirt - $10</p>
      <p>👖 Jeans - $25</p>
      <p>👟 Shoes - $40</p>
    `;
  }

  if (title === "Electronics") {
    pageData = `
      <p>📱 Phone - $300</p>
      <p>💻 Laptop - $800</p>
      <p>🎧 Headphones - $50</p>
    `;
  }

  if (title === "Hotel") {
    pageData = `
      <p>🏨 VIP Room - $100/night</p>
      <p>🛏 Standard Room - $50/night</p>
    `;
  }

  if (title === "Restaurant VIP") {
    pageData = `
      <p>🍗 Chicken - $8</p>
      <p>🍕 Pizza - $12</p>
      <p>🥤 Juice - $3</p>
    `;
  }

  content.innerHTML = `
    <div class="page">
      <button onclick="showDashboard()" class="back-btn">⬅ Back</button>
      <h2>${title}</h2>
      <div class="items">
        ${pageData}
      </div>
    </div>
  `;
}

function showDashboard() {
  location.reload(); // ushobora kubikura mu nyuma
}
