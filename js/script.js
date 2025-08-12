// DOM Elements
const cartCount = document.querySelector('.cart-count');
const cartItems = document.getElementById('cart-items');
const productGrids = document.querySelectorAll('.product-grid');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const orderItems = document.getElementById('order-items');
const orderSubtotal = document.getElementById('order-subtotal');
const orderTotal = document.getElementById('order-total');
const orderShipping = document.getElementById('order-shipping');

// Product Data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 2499,
        oldPrice: 3299,
        image: "https://www.startech.com.bd/image/cache/catalog/headphone/fantech/wh01/wh01-01-500x500.jpg",
        rating: 4.5,
        reviews: 24,
        description: "Premium wireless Bluetooth headphones with noise cancellation feature. Enjoy crystal clear sound quality with deep bass.",
        details: {
            brand: "SoundMaster",
            model: "BT-Pro-2023",
            color: "Black",
            connectivity: "Bluetooth 5.0, 3.5mm Audio Jack",
            battery: "500mAh Lithium-ion (up to 30 hours)",
            weight: "250g",
            warranty: "1 Year"
        }
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        category: "electronics",
        price: 3999,
        oldPrice: 4999,
        image: "https://istarmax.com/wp-content/uploads/2024/01/gts7-pro-smart-watch-view-6-en-jpg.webp",
        rating: 5,
        reviews: 36,
        description: "Track your fitness and stay connected with this feature-packed smartwatch.",
        details: {
            brand: "TechWear",
            model: "SW-2023",
            color: "Black/Silver",
            connectivity: "Bluetooth 5.1",
            battery: "7 days standby",
            weight: "50g",
            warranty: "2 Years"
        }
    },
    {
        id: 3,
        name: "Wireless Keyboard and Mouse",
        category: "electronics",
        price: 1799,
        oldPrice: 2199,
        image: "https://gadgetnmusic.com/wp-content/uploads/2023/11/Wireless-Keyboard-and-Mouse-Combo-with-Phone-Tablet-Holder-1.jpg",
        rating: 4,
        reviews: 18,
        description: "Ergonomic wireless keyboard and mouse combo for comfortable typing and navigation.",
        details: {
            brand: "KeyTech",
            model: "KM-Wireless",
            color: "Black",
            connectivity: "USB Receiver",
            battery: "Keyboard: 12 months, Mouse: 6 months",
            weight: "800g",
            warranty: "1 Year"
        }
    },
    {
        id: 4,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 1599,
        oldPrice: 1999,
        image: "https://gadgetnmusic.com/wp-content/uploads/2023/06/Untitled-design-2023-06-03T135643.468.jpg",
        rating: 4.2,
        reviews: 42,
        description: "Take your music anywhere with this compact yet powerful Bluetooth speaker.",
        details: {
            brand: "SoundWave",
            model: "PBS-2023",
            color: "Blue",
            connectivity: "Bluetooth 5.0, AUX",
            battery: "10 hours playtime",
            weight: "400g",
            warranty: "1 Year"
        }
    },
    {
        id: 5,
        name: "Men's Casual T-Shirt",
        category: "fashion",
        price: 499,
        oldPrice: 799,
        image: "https://fabrilife.com/products/660a8ca543346-square.jpg",
        rating: 4.7,
        reviews: 65,
        description: "Comfortable and stylish casual t-shirt made from premium cotton.",
        details: {
            brand: "UrbanStyle",
            model: "MCT-001",
            color: "Navy Blue",
            material: "100% Cotton",
            sizes: "S, M, L, XL, XXL",
            care: "Machine wash cold"
        }
    },
    {
        id: 6,
        name: "Women's Running Shoes",
        category: "fashion",
        price: 2299,
        oldPrice: 2999,
        image: "https://i5.walmartimages.com/seo/CAICJ98-Womens-Shoes-Womens-Walking-Tennis-Shoes-Lightweight-Breathable-Mesh-Running-Shoes-Casual-Sneakers-for-Sport-Purple_d2584a4e-df9a-41f2-b30c-5dec7cb099de.468b6871ae67e9ddc0f14a5726d85b80.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        rating: 4.8,
        reviews: 38,
        description: "Lightweight running shoes with cushioned soles for maximum comfort.",
        details: {
            brand: "RunFast",
            model: "WRS-2023",
            color: "Pink/White",
            material: "Mesh upper, rubber sole",
            sizes: "5, 6, 7, 8, 9",
            warranty: "6 Months"
        }
    },
    {
        id: 7,
        name: "Ceramic Coffee Mug Set",
        category: "home",
        price: 799,
        oldPrice: 999,
        image: "https://www.smarteshopbd.com/wp-content/uploads/2022/12/electric-ceramic-coffee-mug-and-saucer-1200x1200.jpg",
        rating: 4.3,
        reviews: 27,
        description: "Set of 4 elegant ceramic coffee mugs with comfortable handles.",
        details: {
            brand: "HomeStyle",
            model: "CMS-4P",
            color: "White",
            material: "Ceramic",
            capacity: "350ml each",
            care: "Dishwasher safe"
        }
    },
    {
        id: 8,
        name: "Non-Stick Cooking Pan",
        category: "home",
        price: 1299,
        oldPrice: 1599,
        image: "https://images-cdn.ubuy.co.in/63bef815d75547625641dce3-sensarte-12-inch-nonstick-deep-frying.jpg",
        rating: 4.6,
        reviews: 31,
        description: "Premium non-stick cooking pan for healthy and easy cooking.",
        details: {
            brand: "CookPro",
            model: "NSCP-26",
            color: "Black",
            material: "Aluminum body with ceramic coating",
            size: "26cm diameter",
            warranty: "2 Years"
        }
    },
    {
        id: 9,
        name: "Yoga Mat",
        category: "sports",
        price: 899,
        oldPrice: 1199,
        image: "https://m.media-amazon.com/images/I/81Ks1unc9GL._AC_SL1500_.jpg",
        rating: 4.4,
        reviews: 22,
        description: "Eco-friendly yoga mat with excellent grip and cushioning.",
        details: {
            brand: "FitLife",
            model: "YM-001",
            color: "Purple",
            material: "TPE (Thermoplastic Elastomer)",
            size: "183cm x 61cm x 6mm",
            weight: "1.2kg"
        }
    },
    {
        id: 10,
        name: "Dumbbell Set 5kg-25kg",
        category: "sports",
        price: 4999,
        oldPrice: 5999,
        image: "https://leewarehouse.co.nz/wp-content/uploads/2023/10/dumbbellset.png",
        rating: 4.9,
        reviews: 47,
        description: "Adjustable dumbbell set for home workouts with multiple weight options.",
        details: {
            brand: "PowerGym",
            model: "ADB-20",
            color: "Black/Chrome",
            material: "Cast iron with vinyl coating",
            weights: "5kg, 10kg, 15kg, 20kg",
            warranty: "1 Year"
        }
    },
    {
        id: 11,
        name: "Graphic Calculator",
        category: "education",
        price: 3499,
        oldPrice: 3999,
        image: "https://i5.walmartimages.com/seo/Casio-FX-CG50-Color-Graphing-Calculator-Natural-Textbook-Display-Black_aaba61b8-d320-4685-a02b-be2538a10041_1.ad8363f7280a411a6f0bf3330e6cd9b6.jpeg",
        rating: 4.7,
        reviews: 19,
        description: "Advanced graphic calculator for engineering and scientific calculations.",
        details: {
            brand: "CalcPro",
            model: "GC-2023",
            color: "Blue",
            display: "High-resolution LCD",
            power: "Solar with battery backup",
            warranty: "3 Years"
        }
    },
    {
        id: 12,
        name: "Hardcover Notebook Set",
        category: "education",
        price: 699,
        oldPrice: 899,
        image: "https://m.media-amazon.com/images/I/61eqjYBHVfL.jpg",
        rating: 4.5,
        reviews: 28,
        description: "Set of 3 premium hardcover notebooks with ruled pages.",
        details: {
            brand: "NoteWorthy",
            model: "HNS-3",
            color: "Assorted",
            pages: "200 pages each",
            size: "A5 (14.8 x 21 cm)",
            paper: "80gsm acid-free"
        }
    },
    {
        id: 13,
        name: "Cordless Drill Machine",
        category: "hardware",
        price: 3599,
        oldPrice: 4299,
        image: "https://images.othoba.com/images/thumbs/0535586_cordless-drill-machine-cd144v.jpeg",
        rating: 4.8,
        reviews: 33,
        description: "Powerful cordless drill with lithium-ion battery and multiple torque settings.",
        details: {
            brand: "DrillMaster",
            model: "CD-20V",
            color: "Black/Orange",
            battery: "20V Lithium-ion",
            chuckSize: "10mm",
            warranty: "2 Years"
        }
    },
    {
        id: 14,
        name: "Tool Kit Set",
        category: "hardware",
        price: 1999,
        oldPrice: 2499,
        image: "https://m.media-amazon.com/images/I/713FaO78oBL._AC_SL1500_.jpg",
        rating: 4.6,
        reviews: 41,
        description: "Complete tool kit set with 32 pieces for all your household repair needs.",
        details: {
            brand: "FixIt",
            model: "TKS-32",
            color: "Red",
            material: "Chrome vanadium steel",
            case: "Plastic toolbox",
            warranty: "1 Year"
        }
    }
];

// Cart Data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Load products on shop and home pages
    if (document.querySelector('.product-grid')) {
        loadProducts();
    }

    // Load product details if on product page
    if (document.querySelector('.product-details-content')) {
        loadProductDetails();
    }

    // Load cart items if on cart page
    if (document.getElementById('cart-items')) {
        loadCartItems();
    }

    // Load order summary if on checkout page
    if (document.getElementById('order-items')) {
        loadOrderSummary();
    }

    // Update cart count
    updateCartCount();

    // Initialize slider
    if (document.querySelector('.hero-slider')) {
        initSlider();
    }

    // Initialize testimonial slider
    if (document.querySelector('.testimonial-slider')) {
        initTestimonialSlider();
    }

    // Initialize product tabs
    if (document.querySelector('.product-tabs')) {
        initProductTabs();
    }

    // Initialize thumbnail image switching
    if (document.querySelector('.thumbnail-images')) {
        initThumbnailImages();
    }

    // Initialize quantity controls
    if (document.querySelector('.quantity')) {
        initQuantityControls();
    }

    // Search functionality
    if (document.querySelector('.search-box')) {
        initSearch();
    }
});

// Load Products
function loadProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const brand = urlParams.get('brand');
    const search = urlParams.get('search');

    let filteredProducts = [...products];

    // Filter by category if specified
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Filter by brand if specified (mock filter for demo)
    if (brand) {
        filteredProducts = filteredProducts.filter(product => product.details.brand.toLowerCase().includes(brand.toLowerCase()));
    }

    // Filter by search term if specified
    if (search) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Display products in all product grids on the page
    document.querySelectorAll('.product-grid').forEach(grid => {
        grid.innerHTML = '';

        if (filteredProducts.length === 0) {
            grid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="product-badge">${discount}% OFF</span>
                </div>
                <div class="product-info">
                    <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">৳${product.price.toLocaleString()}</span>
                        <span class="old-price">৳${product.oldPrice.toLocaleString()}</span>
                    </div>
                    <div class="product-rating">
                        ${getRatingStars(product.rating)} (${product.reviews})
                    </div>
                    <div class="product-actions">
                        <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
                        <button class="btn view-details" data-id="${product.id}">Details</button>
                    </div>
                </div>
            `;

            grid.appendChild(productElement);
        });
    });

    // Add event listeners to buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            window.location.href = `product-details.html?id=${productId}`;
        });
    });
}

// Load Product Details
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const product = products.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'shop.html';
        return;
    }

    const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

    // Set main product details
    document.getElementById('product-title').textContent = product.name;
    document.querySelector('.rating').innerHTML = `
        ${getRatingStars(product.rating)}
        <span>(${product.reviews} reviews)</span>
    `;

    document.querySelector('.current-price').textContent = `৳${product.price.toLocaleString()}`;
    document.querySelector('.old-price').textContent = `৳${product.oldPrice.toLocaleString()}`;
    document.querySelector('.discount').textContent = `${discount}% off`;

    document.querySelector('.product-description p').textContent = product.description;

    // Set product images
    document.getElementById('main-image').src = product.image;
    document.getElementById('main-image').alt = product.name;

    const thumbnailsContainer = document.querySelector('.thumbnail-images');
    thumbnailsContainer.innerHTML = '';

    // Add main image as first thumbnail
    const mainThumbnail = document.createElement('img');
    mainThumbnail.src = product.image;
    mainThumbnail.alt = 'Thumbnail';
    mainThumbnail.className = 'active';
    thumbnailsContainer.appendChild(mainThumbnail);

    // Add additional thumbnails (mock data for demo)
    for (let i = 1; i <= 3; i++) {
        const thumbnail = document.createElement('img');
        thumbnail.src = `images/product${productId}-${i + 1}.jpg`;
        thumbnail.alt = 'Thumbnail';
        thumbnailsContainer.appendChild(thumbnail);
    }

    // Set product details in tabs
    document.querySelector('.tab-panel p').textContent = product.description;

    const detailsTable = document.querySelector('.tab-panel:nth-child(2) table');
    detailsTable.innerHTML = '';

    for (const [key, value] of Object.entries(product.details)) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th>${key.charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').toLowerCase()}</th>
            <td>${value}</td>
        `;
        detailsTable.appendChild(row);
    }

    // Load related products
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    const relatedGrid = document.querySelector('.related-products .product-grid');
    relatedGrid.innerHTML = '';

    if (relatedProducts.length === 0) {
        relatedGrid.innerHTML = '<p>No related products found.</p>';
    } else {
        relatedProducts.forEach(product => {
            const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="product-badge">${discount}% OFF</span>
                </div>
                <div class="product-info">
                    <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">৳${product.price.toLocaleString()}</span>
                        <span class="old-price">৳${product.oldPrice.toLocaleString()}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
                        <button class="btn view-details" data-id="${product.id}">Details</button>
                    </div>
                </div>
            `;

            relatedGrid.appendChild(productElement);
        });

        // Add event listeners to related product buttons
        relatedGrid.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });

        relatedGrid.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                window.location.href = `product-details.html?id=${productId}`;
            });
        });
    }

    // Add event listener to add to cart button
    document.querySelector('.add-to-cart').addEventListener('click', function () {
        const quantity = parseInt(document.querySelector('.quantity input').value);
        addToCart(productId, quantity);
    });
}

// Load Cart Items
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr class="empty-cart"><td colspan="5">Your cart is currently empty.</td></tr>';
        document.querySelector('.cart-totals').style.display = 'none';
        document.querySelector('.checkout-btn').style.display = 'none';
        return;
    }

    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement('tr');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <td>
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="cart-item-info">
                        <h4>${product.name}</h4>
                        <p>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    </div>
                </div>
            </td>
            <td>৳${product.price.toLocaleString()}</td>
            <td>
                <div class="quantity-control">
                    <button class="decrease">-</button>
                    <input type="number" value="${item.quantity}" min="1">
                    <button class="increase">+</button>
                </div>
            </td>
            <td>৳${itemTotal.toLocaleString()}</td>
            <td><i class="fas fa-times remove-item" data-id="${product.id}"></i></td>
        `;

        cartItemsContainer.appendChild(row);
    });

    // Calculate shipping (free for orders over 1000)
    const shipping = subtotal >= 1000 ? 0 : 60;
    const total = subtotal + shipping;

    // Update totals
    document.getElementById('cart-subtotal').textContent = `৳${subtotal.toLocaleString()}`;
    document.getElementById('cart-total').textContent = `৳${total.toLocaleString()}`;

    // Add event listeners to quantity controls
    document.querySelectorAll('.quantity-control .decrease').forEach(button => {
        button.addEventListener('click', function () {
            const input = this.nextElementSibling;
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateCartItem(this);
            }
        });
    });

    document.querySelectorAll('.quantity-control .increase').forEach(button => {
        button.addEventListener('click', function () {
            const input = this.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateCartItem(this);
        });
    });

    document.querySelectorAll('.quantity-control input').forEach(input => {
        input.addEventListener('change', function () {
            if (parseInt(this.value) < 1) this.value = 1;
            updateCartItem(this);
        });
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });

    // Update cart button
    document.querySelector('.update-cart').addEventListener('click', function () {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('Cart updated successfully!');
    });

    // Shipping method change
    document.querySelectorAll('input[name="shipping"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const shipping = this.id === 'free-shipping' ? 0 :
                this.id === 'local-pickup' ? 0 : 60;

            const subtotal = calculateSubtotal();
            const total = subtotal + shipping;

            document.getElementById('cart-total').textContent = `৳${total.toLocaleString()}`;
        });
    });
}

// Load Order Summary
function loadOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<tr class="empty-order"><td colspan="2">Your cart is empty.</td></tr>';
        document.querySelector('.place-order').style.display = 'none';
        return;
    }

    orderItemsContainer.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name} × ${item.quantity}</td>
            <td>৳${itemTotal.toLocaleString()}</td>
        `;

        orderItemsContainer.appendChild(row);
    });

    // Calculate shipping (free for orders over 1000)
    const shipping = subtotal >= 1000 ? 0 : 60;
    const total = subtotal + shipping;

    // Update totals
    document.getElementById('order-subtotal').textContent = `৳${subtotal.toLocaleString()}`;
    document.getElementById('order-shipping').textContent = `৳${shipping.toLocaleString()}`;
    document.getElementById('order-total').textContent = `৳${total.toLocaleString()}`;

    // Place order button
    document.querySelector('.place-order').addEventListener('click', function (e) {
        e.preventDefault();

        if (!document.getElementById('terms').checked) {
            alert('Please agree to the terms and conditions');
            return;
        }

        // In a real application, you would process the payment here
        alert('Order placed successfully! Thank you for your purchase.');

        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();

        // Redirect to thank you page
        window.location.href = 'index.html';
    });
}

// Add to Cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);

    if (!product) return;

    // Check if product already in cart
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Show success message
    alert(`${quantity} ${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}

// Update Cart Item
function updateCartItem(element) {
    const row = element.closest('tr');
    const productId = parseInt(row.querySelector('.remove-item').getAttribute('data-id'));
    const quantity = parseInt(row.querySelector('input').value);

    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = quantity;
    }

    // Recalculate totals
    const subtotal = calculateSubtotal();
    const shipping = document.getElementById('flat-rate').checked ? 60 : 0;
    const total = subtotal + shipping;

    document.getElementById('cart-subtotal').textContent = `৳${subtotal.toLocaleString()}`;
    document.getElementById('cart-total').textContent = `৳${total.toLocaleString()}`;
}

// Calculate Subtotal
function calculateSubtotal() {
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);

    document.querySelectorAll('.cart-count').forEach(element => {
        element.textContent = count;
    });
}

// Initialize Slider
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-controls .prev');
    const nextBtn = document.querySelector('.slider-controls .next');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    const slider = document.querySelector('.hero-slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));

    // Navigation buttons
    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Show first slide
    showSlide(currentSlide);
}

// Initialize Testimonial Slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Auto slide
    let testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
            testimonialInterval = setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 5000);
        });
    });

    // Show first testimonial
    showTestimonial(currentTestimonial);
}

// Initialize Product Tabs
function initProductTabs() {
    const tabNavs = document.querySelectorAll('.tabs-nav li');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabNavs.forEach((nav, index) => {
        nav.addEventListener('click', () => {
            tabNavs.forEach(n => n.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            nav.classList.add('active');
            tabPanels[index].classList.add('active');
        });
    });
}

// Initialize Thumbnail Images
function initThumbnailImages() {
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const mainImage = document.getElementById('main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.src;
        });
    });
}

// Initialize Quantity Controls
function initQuantityControls() {
    const minusBtn = document.querySelector('.quantity .minus');
    const plusBtn = document.querySelector('.quantity .plus');
    const quantityInput = document.querySelector('.quantity input');

    minusBtn.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    quantityInput.addEventListener('change', function () {
        if (parseInt(this.value) < 1) this.value = 1;
    });
}

// Initialize Search
function initSearch() {
    const searchBox = document.querySelector('.search-box');
    const searchInput = searchBox.querySelector('input');
    const searchButton = searchBox.querySelector('button');

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
        }
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Helper function to generate rating stars
function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}