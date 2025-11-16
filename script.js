// --- DATA MODEL ---------------------------------------------------

const gadgets = [];

// Helper to add a gadget
function addGadget(item) {
  gadgets.push({
    id: item.id,
    name: item.name,
    category: item.category,
    price: item.price,
    description: item.description,
    stock: item.stock ?? 10,
    warehouse: item.warehouse ?? "Main",
    isNew: !!item.isNew,
    featured: !!item.featured,
    image: item.image
  });
}

// Core, more realistic gadgets (a sample set)
const baseGadgets = [
  {
    id: "phone-nebula-x1",
    name: "Nebula X1 5G Smartphone",
    category: "Smartphones",
    price: 899,
    description:
      "6.7\" AMOLED display, 256GB storage, triple AI camera, 5G-ready performance for everyday power users.",
    stock: 14,
    warehouse: "Main",
    isNew: true,
    featured: true,
    image:
      "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "phone-aurora-mini",
    name: "Aurora Mini 5G",
    category: "Smartphones",
    price: 629,
    description:
      "Compact 5.9\" device with outstanding battery life and ultra-wide camera for creators.",
    stock: 20,
    warehouse: "Main",
    isNew: true,
    featured: false,
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "laptop-orbit-15",
    name: "OrbitBook Pro 15",
    category: "Laptops",
    price: 1399,
    description:
      "15\" QHD display, 16GB RAM, 1TB SSD, ideal for developers, creators and power users.",
    stock: 8,
    warehouse: "Warehouse A",
    isNew: false,
    featured: true,
    image:
      "https://images.pexels.com/photos/3746311/pexels-photo-3746311.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "laptop-slim-13",
    name: "AirLite Slim 13",
    category: "Laptops",
    price: 1099,
    description:
      "Ultra-thin 13\" laptop weighing under 1kg with all-day battery life and fast charging.",
    stock: 12,
    warehouse: "Warehouse B",
    isNew: true,
    featured: false,
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "watch-pulse-gt",
    name: "Pulse GT Smartwatch",
    category: "Smartwatches",
    price: 259,
    description:
      "AMOLED smartwatch with advanced health tracking, GPS, NFC payments and 5-day battery.",
    stock: 40,
    warehouse: "Main",
    isNew: true,
    featured: true,
    image:
      "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "watch-core-lite",
    name: "Core Lite Fitness Band",
    category: "Wearables",
    price: 79,
    description:
      "Lightweight fitness band for steps, sleep and notifications with 10-day battery life.",
    stock: 60,
    warehouse: "Warehouse B",
    isNew: false,
    featured: false,
    image:
      "https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "buds-sonic-air",
    name: "Sonic Air Pro Buds",
    category: "Audio",
    price: 199,
    description:
      "True wireless earbuds with ANC, wireless charging case and crystal-clear voice calls.",
    stock: 35,
    warehouse: "Main",
    isNew: true,
    featured: true,
    image:
      "https://images.pexels.com/photos/159643/earpods-earphones-earpiece-hearing-159643.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "buds-bass-max",
    name: "BassMax Studio Headphones",
    category: "Audio",
    price: 249,
    description:
      "Over-ear wireless headphones with deep bass, multi-device pairing and 35h battery.",
    stock: 15,
    warehouse: "Warehouse A",
    isNew: false,
    featured: false,
    image:
      "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "game-console-orbit",
    name: "OrbitStation Next Gen Console",
    category: "Gaming",
    price: 599,
    description:
      "Next-gen 4K gaming console with ray tracing and 2TB SSD for your digital library.",
    stock: 10,
    warehouse: "Main",
    isNew: true,
    featured: true,
    image:
      "https://images.pexels.com/photos/845268/pexels-photo-845268.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "game-controller-x",
    name: "HyperX Wireless Controller",
    category: "Gaming Accessories",
    price: 89,
    description:
      "Lag-free wireless controller with hall effect sticks and remappable buttons.",
    stock: 45,
    warehouse: "Warehouse C",
    isNew: false,
    featured: false,
    image:
      "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "tab-vista-11",
    name: "VistaTab 11\" Tablet",
    category: "Tablets",
    price: 549,
    description:
      "11\" tablet with stylus support and desktop mode for productivity on the go.",
    stock: 18,
    warehouse: "Main",
    isNew: true,
    featured: false,
    image:
      "https://images.pexels.com/photos/5081385/pexels-photo-5081385.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "monitor-4k-27",
    name: "Crystal 4K 27\" Monitor",
    category: "Monitors",
    price: 399,
    description:
      "4K IPS display with 99% sRGB, perfect for design, coding and multimedia.",
    stock: 22,
    warehouse: "Warehouse A",
    isNew: false,
    featured: false,
    image:
      "https://images.pexels.com/photos/5203826/pexels-photo-5203826.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "kb-mech-neo",
    name: "NeoMech RGB Keyboard",
    category: "Keyboards",
    price: 129,
    description:
      "Hot-swappable mechanical keyboard with per-key RGB and low-latency wireless.",
    stock: 30,
    warehouse: "Warehouse C",
    isNew: true,
    featured: false,
    image:
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "mouse-precision-x",
    name: "Precision X Wireless Mouse",
    category: "Mice",
    price: 79,
    description:
      "Ergonomic wireless mouse with multi-device pairing and adjustable DPI.",
    stock: 50,
    warehouse: "Main",
    isNew: true,
    featured: false,
    image:
      "https://images.pexels.com/photos/2047910/pexels-photo-2047910.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "dock-usbc-pro",
    name: "USB-C Pro Dock",
    category: "Accessories",
    price: 99,
    description:
      "10-in-1 USB-C dock with HDMI, Ethernet, SD card and fast charging support.",
    stock: 70,
    warehouse: "Warehouse B",
    isNew: false,
    featured: false,
    image:
      "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "charger-gan65",
    name: "GaN 65W Fast Charger",
    category: "Accessories",
    price: 49,
    description:
      "Compact GaN charger with dual USB-C ports for phones, tablets and laptops.",
    stock: 80,
    warehouse: "Warehouse C",
    isNew: true,
    featured: false,
    image:
      "https://images.pexels.com/photos/3945663/pexels-photo-3945663.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "powerbank-20k",
    name: "PowerGo 20,000mAh Bank",
    category: "Power",
    price: 69,
    description:
      "High-capacity power bank with 45W PD output and battery health protection.",
    stock: 44,
    warehouse: "Warehouse B",
    isNew: false,
    featured: false,
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "cam-4k-web",
    name: "Clarity 4K Webcam",
    category: "Webcams",
    price: 159,
    description:
      "Auto-focus 4K webcam with dual mics and adjustable field of view for streaming.",
    stock: 26,
    warehouse: "Main",
    isNew: true,
    featured: false,
    image:
      "https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "router-wifi6",
    name: "SkyLink Wi-Fi 6 Router",
    category: "Networking",
    price: 189,
    description:
      "Dual-band Wi-Fi 6 router with mesh-ready support and app-based management.",
    stock: 32,
    warehouse: "Warehouse A",
    isNew: false,
    featured: false,
    image:
      "https://images.pexels.com/photos/5082554/pexels-photo-5082554.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "ssd-1tb",
    name: "FlashWave 1TB NVMe SSD",
    category: "Storage",
    price: 129,
    description:
      "PCIe NVMe SSD with read speeds up to 3500MB/s to boost any laptop or desktop.",
    stock: 60,
    warehouse: "Warehouse C",
    isNew: false,
    featured: false,
    image:
      "https://images.pexels.com/photos/4491609/pexels-photo-4491609.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

// Add base gadgets
baseGadgets.forEach(addGadget);

// Auto-generate extra gadgets to exceed 100 items
const extraCategories = [
  "Smartphones",
  "Laptops",
  "Smartwatches",
  "Audio",
  "Gaming",
  "Accessories",
  "Power",
  "Monitors",
  "Keyboards",
  "Mice",
  "Networking",
  "Storage"
];

let autoIdCounter = 1;

for (let i = 0; i < 90; i++) {
  const cat = extraCategories[i % extraCategories.length];
  const price = 29 + (i % 20) * 10;
  addGadget({
    id: `auto-gadget-${autoIdCounter++}`,
    name: `${cat} Gadget Model ${100 + i}`,
    category: cat,
    price,
    description: `Reliable ${cat.toLowerCase()} gadget with balanced performance and value, model ${100 +
      i}.`,
    stock: 5 + (i % 15),
    warehouse: i % 2 === 0 ? "Warehouse A" : "Warehouse B",
    isNew: i % 3 === 0,
    featured: false,
    image:
      "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=800"
  });
}

// --- STATE --------------------------------------------------------

let currentSection = "home";
let cart = []; // {id, quantity}
let authMode = "login"; // 'login' | 'signup'
let currentUser = null; // { email }

// --- HELPERS ------------------------------------------------------

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

function findGadget(id) {
  return gadgets.find((g) => g.id === id);
}

function getCartQuantity(id) {
  const item = cart.find((c) => c.id === id);
  return item ? item.quantity : 0;
}

function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.background =
    type === "success"
      ? "var(--success)"
      : type === "error"
      ? "var(--danger)"
      : "var(--accent-strong)";
  toast.classList.remove("hidden");
  clearTimeout(showToast._timeout);
  showToast._timeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2600);
}

// --- NAVIGATION ---------------------------------------------------

function switchSection(sectionId) {
  if (sectionId === currentSection) return;
  document.querySelectorAll(".page-section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === sectionId);
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    const target = link.getAttribute("data-section");
    link.classList.toggle("active", target === sectionId);
  });
  currentSection = sectionId;
}

function setupNavigation() {
  // Header & footer nav
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-section]");
    if (!link) return;
    const sectionId = link.getAttribute("data-section");
    if (!sectionId) return;
    e.preventDefault();
    switchSection(sectionId);
    // Close mobile nav if open
    const nav = document.querySelector(".main-nav");
    nav?.classList.remove("open");
  });

  // Hero buttons
  document.querySelectorAll(".hero-actions .btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sectionId = btn.getAttribute("data-section");
      if (sectionId) switchSection(sectionId);
    });
  });

  // Mobile nav toggle
  const toggle = document.getElementById("mobile-menu-toggle");
  const nav = document.querySelector(".main-nav");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// --- RENDERING: HERO & STATS --------------------------------------

function renderHeroHighlight() {
  const featured = gadgets.find((g) => g.featured) || gadgets[0];
  const nameEl = document.getElementById("hero-product-name");
  const priceEl = document.getElementById("hero-product-price");
  const stockEl = document.getElementById("hero-product-stock");
  const summaryEl = document.getElementById("hero-stock-summary");
  const totalStock = gadgets.reduce((sum, g) => sum + g.stock, 0);

  nameEl.textContent = featured.name;
  priceEl.textContent = formatPrice(featured.price);
  stockEl.textContent = `${featured.stock} left in stock (${featured.warehouse})`;
  summaryEl.textContent = `${totalStock} total items across all warehouses.`;

  const heroButton = document.getElementById("hero-add-to-cart");
  heroButton.dataset.productId = featured.id;
}

function renderStats() {
  const statGadgets = document.getElementById("stat-total-gadgets");
  statGadgets.textContent = `${gadgets.length}+`;
}

// --- RENDERING: CATEGORIES ----------------------------------------

function renderTopCategories() {
  const grid = document.getElementById("top-category-grid");
  grid.innerHTML = "";

  const categoryMap = new Map();
  for (const g of gadgets) {
    categoryMap.set(g.category, (categoryMap.get(g.category) || 0) + 1);
  }
  const categoriesArr = Array.from(categoryMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  categoriesArr.forEach(([category, count]) => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `
      <div class="category-card-title">${category}</div>
      <div class="category-card-count">${count} gadgets</div>
      <div class="category-card-extra">Tap to view in Categories</div>
    `;
    card.addEventListener("click", () => {
      switchSection("categories");
      activateCategoryFilter(category);
    });
    grid.appendChild(card);
  });
}

function renderCategoryChips() {
  const container = document.getElementById("dynamic-category-chips");
  container.innerHTML = "";

  const categories = Array.from(new Set(gadgets.map((g) => g.category))).sort();

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "filter-chip";
    btn.textContent = category;
    btn.dataset.category = category;
    container.appendChild(btn);
  });
}

function activateCategoryFilter(categoryName) {
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const cat = chip.dataset.category;
    chip.classList.toggle(
      "active",
      (categoryName === "all" && cat === "all") || cat === categoryName
    );
  });
  renderCategoryProducts(categoryName);
}

// --- RENDERING: PRODUCTS ------------------------------------------

function createProductCard(gadget) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.productId = gadget.id;

  const inCart = getCartQuantity(gadget.id);
  const effectiveStock = Math.max(gadget.stock - inCart, 0);

  let stockClass = "product-stock";
  let stockLabel = `${effectiveStock} left in stock`;
  if (effectiveStock === 0) {
    stockClass += " zero";
    stockLabel = "Out of stock";
  } else if (effectiveStock <= 3) {
    stockClass += " low";
    stockLabel = `Only ${effectiveStock} left`;
  }

  const pillLabel = gadget.isNew ? "New" : "In stock";

  card.innerHTML = `
    <div class="product-media">
      <img src="${gadget.image}" alt="${gadget.name}" loading="lazy" />
      <div class="product-pill ${gadget.isNew ? "new" : ""}">${pillLabel}</div>
    </div>
    <div class="product-body">
      <div class="product-title">${gadget.name}</div>
      <div class="product-category">${gadget.category}</div>
      <div class="product-description">${gadget.description}</div>
      <div class="product-meta">
        <div class="product-price">${formatPrice(gadget.price)}</div>
        <div class="${stockClass}" data-product-stock="${gadget.id}">
          ${stockLabel}
        </div>
      </div>
    </div>
    <div class="product-actions">
      <button class="btn outline-btn view-details-btn" data-product-id="${
        gadget.id
      }">Details</button>
      <button class="btn primary-btn add-to-cart-btn" data-product-id="${gadget.id}" ${
    effectiveStock === 0 ? "disabled" : ""
  }>
        Add to Cart
      </button>
    </div>
  `;

  return card;
}

function renderCategoryProducts(categoryFilter = "all") {
  const grid = document.getElementById("category-product-grid");
  grid.innerHTML = "";

  const products = gadgets.filter((g) =>
    categoryFilter === "all" ? true : g.category === categoryFilter
  );

  products.forEach((g) => grid.appendChild(createProductCard(g)));
}

function renderNewArrivals() {
  const grid = document.getElementById("new-arrivals-grid");
  grid.innerHTML = "";

  const arrivals = gadgets.filter((g) => g.isNew).slice(0, 24);
  arrivals.forEach((g) => grid.appendChild(createProductCard(g)));
}

// Updates visible stock labels on product cards
function refreshStockDisplay() {
  gadgets.forEach((g) => {
    const inCart = getCartQuantity(g.id);
    const effectiveStock = Math.max(g.stock - inCart, 0);

    document
      .querySelectorAll(`[data-product-stock="${g.id}"]`)
      .forEach((el) => {
        let stockClass = "product-stock";
        let stockLabel = `${effectiveStock} left in stock`;
        if (effectiveStock === 0) {
          stockClass += " zero";
          stockLabel = "Out of stock";
        } else if (effectiveStock <= 3) {
          stockClass += " low";
          stockLabel = `Only ${effectiveStock} left`;
        }
        el.className = stockClass;
        el.textContent = stockLabel;
      });

    document
      .querySelectorAll(`.add-to-cart-btn[data-product-id="${g.id}"]`)
      .forEach((btn) => {
        btn.disabled = effectiveStock === 0;
      });
  });

  // hero stock
  renderHeroHighlight();
}

// --- CART ---------------------------------------------------------

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-items-count").textContent = count;
}

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<p class="cart-empty">Your cart is empty. Start adding your favourite gadgets from Home, Categories or New Arrivals.</p>`;
    document.getElementById("cart-subtotal").textContent = "$0.00";
    document.getElementById("cart-tax").textContent = "$0.00";
    document.getElementById("cart-total").textContent = "$0.00";
    updateCartBadge();
    refreshStockDisplay();
    return;
  }

  let subtotal = 0;

  cart.forEach((item) => {
    const g = findGadget(item.id);
    if (!g) return;
    const line = g.price * item.quantity;
    subtotal += line;

    const node = document.createElement("div");
    node.className = "cart-item";
    node.dataset.productId = g.id;
    node.innerHTML = `
      <img src="${g.image}" alt="${g.name}" />
      <div>
        <div class="cart-item-title">${g.name}</div>
        <div class="cart-item-meta">
          ${g.category} &middot; ${formatPrice(g.price)} each
          <br />
          Warehouse: ${g.warehouse}
        </div>
      </div>
      <div class="cart-item-actions">
        <div>Line total: <strong>${formatPrice(line)}</strong></div>
        <div class="qty-control">
          <button class="qty-btn" data-action="dec">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" data-action="inc">+</button>
        </div>
        <button class="remove-btn">Remove</button>
      </div>
    `;
    container.appendChild(node);
  });

  const tax = subtotal * 0.12; // demo tax
  const total = subtotal + tax;
  document.getElementById("cart-subtotal").textContent = formatPrice(subtotal);
  document.getElementById("cart-tax").textContent = formatPrice(tax);
  document.getElementById("cart-total").textContent = formatPrice(total);

  updateCartBadge();
  refreshStockDisplay();
}

function addToCart(productId) {
  const g = findGadget(productId);
  if (!g) return;

  const currentQty = getCartQuantity(productId);
  if (currentQty >= g.stock) {
    showToast("No more stock available for this gadget.", "error");
    return;
  }

  const existing = cart.find((c) => c.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  showToast(`${g.name} added to cart.`, "success");
  renderCart();
}

function handleCartClick(e) {
  const itemNode = e.target.closest(".cart-item");
  if (!itemNode) return;
  const productId = itemNode.dataset.productId;
  const g = findGadget(productId);
  if (!g) return;

  const cartItem = cart.find((c) => c.id === productId);
  if (!cartItem) return;

  if (e.target.classList.contains("qty-btn")) {
    const action = e.target.dataset.action;
    if (action === "inc") {
      if (cartItem.quantity < g.stock) {
        cartItem.quantity += 1;
      } else {
        showToast("Reached available stock limit.", "error");
      }
    } else if (action === "dec") {
      cartItem.quantity -= 1;
      if (cartItem.quantity <= 0) {
        cart = cart.filter((c) => c.id !== productId);
      }
    }
    renderCart();
    return;
  }

  if (e.target.classList.contains("remove-btn")) {
    cart = cart.filter((c) => c.id !== productId);
    renderCart();
  }
}

function handleCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty.", "error");
    return;
  }

  // In real app: verify login, send to backend, process payment, etc.
  if (!currentUser) {
    showToast("Please login or sign up before placing an order.", "error");
    return;
  }

  // Deduct from stock
  cart.forEach((item) => {
    const g = findGadget(item.id);
    if (g) {
      g.stock = Math.max(g.stock - item.quantity, 0);
    }
  });

  const orderItems = cart.length;
  cart = [];
  renderCart();
  refreshStockDisplay();
  showToast(
    `Order placed for ${orderItems} item(s). Warehouse stock updated.`,
    "success"
  );
}

// --- AUTH (front-end demo only) -----------------------------------

function openAuthModal(mode = "login") {
  authMode = mode;
  document.getElementById("auth-overlay").classList.remove("hidden");
  document.getElementById("auth-modal").classList.remove("hidden");
  updateAuthUI();
}

function closeAuthModal() {
  document.getElementById("auth-overlay").classList.add("hidden");
  document.getElementById("auth-modal").classList.add("hidden");
}

function updateAuthUI() {
  document
    .querySelectorAll(".auth-tab")
    .forEach((tab) =>
      tab.classList.toggle("active", tab.dataset.authMode === authMode)
    );
  const submitBtn = document.getElementById("auth-submit-btn");
  const hint = document.getElementById("auth-hint-text");
  if (authMode === "login") {
    submitBtn.textContent = "Login";
    hint.textContent =
      'Don\'t have an account yet? Click "Sign Up" to create one.';
  } else {
    submitBtn.textContent = "Create Account";
    hint.textContent =
      "Passwords are stored only in your browser for this demo. Use a test password.";
  }
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById("auth-email");
  const passwordInput = document.getElementById("auth-password");
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) return;

  const usersRaw = localStorage.getItem("fm_users") || "{}";
  const users = JSON.parse(usersRaw);

  if (authMode === "signup") {
    if (users[email]) {
      showToast("Account already exists. Try logging in.", "error");
      return;
    }
    users[email] = { password };
    localStorage.setItem("fm_users", JSON.stringify(users));
    currentUser = { email };
    localStorage.setItem("fm_current_user", email);
    showToast("Account created. Logged in.", "success");
  } else {
    if (!users[email] || users[email].password !== password) {
      showToast("Invalid email or password.", "error");
      return;
    }
    currentUser = { email };
    localStorage.setItem("fm_current_user", email);
    showToast("Logged in successfully.", "success");
  }

  closeAuthModal();
  updateAccountButton();
}

function loadCurrentUser() {
  const email = localStorage.getItem("fm_current_user");
  if (!email) return;
  currentUser = { email };
  updateAccountButton();
}

function updateAccountButton() {
  const btn = document.getElementById("account-btn");
  const footerBtn = document.getElementById("footer-account-btn");
  if (currentUser) {
    btn.textContent = `Hi, ${currentUser.email.split("@")[0]}`;
    btn.onclick = () => {
      // simple logout
      localStorage.removeItem("fm_current_user");
      currentUser = null;
      updateAccountButton();
      showToast("Logged out.", "info");
    };
    if (footerBtn) {
      footerBtn.textContent = "Logout";
      footerBtn.onclick = btn.onclick;
    }
  } else {
    btn.textContent = "Login / Sign Up";
    btn.onclick = () => openAuthModal("login");
    if (footerBtn) {
      footerBtn.textContent = "Login / Sign Up";
      footerBtn.onclick = () => openAuthModal("login");
    }
  }
}

// --- SUPPORT FORM (demo only) -------------------------------------

function handleSupportSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("support-email").value;
  const topic = document.getElementById("support-topic").value;
  const message = document.getElementById("support-message").value;

  if (!email || !topic || !message) return;
  showToast("Support request submitted. (Demo)", "success");
  e.target.reset();
}

// --- PRODUCT DETAILS (simple) -------------------------------------

function showProductDetails(gadget) {
  const msg = `${gadget.name}\n\n${gadget.description}\n\nCategory: ${
    gadget.category
  }\nPrice: ${formatPrice(gadget.price)}\nStock: ${gadget.stock} in ${
    gadget.warehouse
  }`;
  alert(msg); // you can later replace this with a custom modal
}

// --- INIT ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Copy year to footer
  document.getElementById("year").textContent = new Date().getFullYear();

  setupNavigation();
  renderHeroHighlight();
  renderStats();
  renderTopCategories();
  renderCategoryChips();
  renderCategoryProducts("all");
  renderNewArrivals();
  renderCart();
  loadCurrentUser();

  // Product grid interactions (delegated)
  document.body.addEventListener("click", (e) => {
    // Add to cart
    const addBtn = e.target.closest(".add-to-cart-btn");
    if (addBtn) {
      const productId = addBtn.dataset.productId;
      addToCart(productId);
    }

    // View details
    const detailsBtn = e.target.closest(".view-details-btn");
    if (detailsBtn) {
      const productId = detailsBtn.dataset.productId;
      const g = findGadget(productId);
      if (g) showProductDetails(g);
    }

    // Category chips
    const chip = e.target.closest(".filter-chip");
    if (chip) {
      const category = chip.dataset.category;
      activateCategoryFilter(category);
    }
  });

  // Hero add to cart
  document
    .getElementById("hero-add-to-cart")
    .addEventListener("click", (e) => {
      const id = e.target.dataset.productId;
      if (id) addToCart(id);
    });

  // Cart events
  document
    .getElementById("cart-items")
    .addEventListener("click", handleCartClick);
  document
    .getElementById("checkout-btn")
    .addEventListener("click", handleCheckout);

  // Auth handlers
  document
    .getElementById("auth-form")
    .addEventListener("submit", handleAuthSubmit);
  document.getElementById("close-auth").addEventListener("click", closeAuthModal);
  document.getElementById("auth-overlay").addEventListener("click", closeAuthModal);
  document.querySelectorAll(".auth-tab").forEach((tab) =>
    tab.addEventListener("click", () => {
      authMode = tab.dataset.authMode;
      updateAuthUI();
    })
  );

  // Account buttons (header & footer)
  document.getElementById("account-btn").onclick = () => openAuthModal("login");
  const footerAccountBtn = document.getElementById("footer-account-btn");
  if (footerAccountBtn) {
    footerAccountBtn.onclick = () => openAuthModal("login");
  }

  // Support form
  document
    .getElementById("support-form")
    .addEventListener("submit", handleSupportSubmit);
});
