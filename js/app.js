function openPage(title) {
  const content = document.getElementById("content");

  content.innerHTML = `
    <div class="page">
      <button onclick="goBack()" class="back-btn">⬅ Back</button>
      <h2>${title}</h2>
      <div id="pageContent"></div>
    </div>
  `;

  const pageContent = document.getElementById("pageContent");

  // Shiramwo ibintu vyihariye kuri buri category
  if (title === "Imodoka") {
    pageContent.innerHTML = `
      <p>🚗 Toyota - $5000</p>
      <p>🚙 BMW - $12000</p>
      <p>🚕 Honda - $7000</p>
    `;
  }

  if (title === "Impuzu") {
    pageContent.innerHTML = `
      <p>👕 T-Shirt - $10</p>
      <p>👖 Jeans - $25</p>
      <p>👟 Shoes - $40</p>
    `;
  }

  if (title === "Electronics") {
    pageContent.innerHTML = `
      <p>📱 Phone - $300</p>
      <p>💻 Laptop - $800</p>
      <p>🎧 Headphones - $50</p>
    `;
  }

  if (title === "Hotel") {
    pageContent.innerHTML = `
      <p>🏨 VIP Room - $100/night</p>
      <p>🛏 Standard Room - $50/night</p>
    `;
  }

  if (title === "Restaurant VIP") {
    pageContent.innerHTML = `
      <p>🍗 Chicken - $8</p>
      <p>🍕 Pizza - $12</p>
      <p>🥤 Juice - $3</p>
    `;
  }
}

function goBack() {
  location.reload();
}
