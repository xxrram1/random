// ===== MENU DATA =====
const menuData = [
  // Starters
  {
    id: 1,
    name: "Truffle Arancini",
    description: "Crispy risotto balls filled with truffle and parmesan, served with marinara sauce",
    price: 18,
    category: "starters",
    image: "🍄",
    spiceLevel: "mild",
    dietary: ["vegetarian"],
    tags: ["truffle", "risotto", "crispy"]
  },
  {
    id: 2,
    name: "Tuna Tartare",
    description: "Fresh yellowfin tuna with avocado, citrus, and sesame oil on crispy wonton",
    price: 22,
    category: "starters",
    image: "🐟",
    spiceLevel: "mild",
    dietary: [],
    tags: ["fresh", "citrus", "seafood"]
  },
  {
    id: 3,
    name: "Spicy Chorizo Bruschetta",
    description: "Grilled sourdough topped with chorizo, cherry tomatoes, and chili oil",
    price: 16,
    category: "starters",
    image: "🍞",
    spiceLevel: "medium",
    dietary: [],
    tags: ["spicy", "chorizo", "tomatoes"]
  },
  {
    id: 4,
    name: "Burrata Caprese",
    description: "Creamy burrata with heirloom tomatoes, basil oil, and balsamic reduction",
    price: 19,
    category: "starters",
    image: "🧀",
    spiceLevel: "mild",
    dietary: ["vegetarian"],
    tags: ["creamy", "fresh", "basil"]
  },

  // Mains
  {
    id: 5,
    name: "Wagyu Ribeye",
    description: "12oz premium wagyu ribeye with roasted vegetables and red wine jus",
    price: 85,
    category: "mains",
    image: "🥩",
    spiceLevel: "mild",
    dietary: [],
    tags: ["premium", "wagyu", "wine"]
  },
  {
    id: 6,
    name: "Lobster Thermidor",
    description: "Fresh Maine lobster in cognac cream sauce, gratinated with Gruyère",
    price: 68,
    category: "mains",
    image: "🦞",
    spiceLevel: "mild",
    dietary: [],
    tags: ["luxury", "lobster", "cream"]
  },
  {
    id: 7,
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry gastrique and potato gratin",
    price: 42,
    category: "mains",
    image: "🦆",
    spiceLevel: "mild",
    dietary: [],
    tags: ["slow-cooked", "cherry", "rich"]
  },
  {
    id: 8,
    name: "Vegan Buddha Bowl",
    description: "Quinoa, roasted vegetables, tahini dressing, and hemp seeds",
    price: 28,
    category: "mains",
    image: "🥗",
    spiceLevel: "mild",
    dietary: ["vegan", "gluten-free"],
    tags: ["healthy", "quinoa", "tahini"]
  },
  {
    id: 9,
    name: "Spicy Lamb Curry",
    description: "Tender lamb in aromatic spices with basmati rice and naan",
    price: 38,
    category: "mains",
    image: "🍛",
    spiceLevel: "hot",
    dietary: [],
    tags: ["spicy", "aromatic", "traditional"]
  },

  // Desserts
  {
    id: 10,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, vanilla ice cream",
    price: 14,
    category: "desserts",
    image: "🍰",
    spiceLevel: "mild",
    dietary: ["vegetarian"],
    tags: ["chocolate", "warm", "molten"]
  },
  {
    id: 11,
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar and fresh berries",
    price: 12,
    category: "desserts",
    image: "🍮",
    spiceLevel: "mild",
    dietary: ["vegetarian"],
    tags: ["classic", "vanilla", "berries"]
  },
  {
    id: 12,
    name: "Tiramisu",
    description: "Traditional Italian dessert with espresso, mascarpone, and cocoa",
    price: 13,
    category: "desserts",
    image: "☕",
    spiceLevel: "mild",
    dietary: ["vegetarian"],
    tags: ["traditional", "espresso", "mascarpone"]
  },
  {
    id: 13,
    name: "Lemon Tart",
    description: "Tangy lemon curd in crispy pastry with meringue and mint",
    price: 11,
    category: "desserts",
    image: "🍋",
    spiceLevel: "mild",
    dietary: ["vegetarian"],
    tags: ["tangy", "crispy", "meringue"]
  },

  // Drinks
  {
    id: 14,
    name: "Signature Cocktail",
    description: "House special with gin, elderflower, cucumber, and lime",
    price: 16,
    category: "drinks",
    image: "🍸",
    spiceLevel: "mild",
    dietary: ["vegan"],
    tags: ["signature", "refreshing", "gin"]
  },
  {
    id: 15,
    name: "Craft Beer Selection",
    description: "Rotating selection of local craft beers on tap",
    price: 8,
    category: "drinks",
    image: "🍺",
    spiceLevel: "mild",
    dietary: ["vegan"],
    tags: ["craft", "local", "rotating"]
  },
  {
    id: 16,
    name: "Wine Pairing",
    description: "Curated wine selection paired with your meal",
    price: 25,
    category: "drinks",
    image: "🍷",
    spiceLevel: "mild",
    dietary: ["vegan"],
    tags: ["curated", "pairing", "premium"]
  },
  {
    id: 17,
    name: "Fresh Juice Blend",
    description: "Daily blend of seasonal fruits and vegetables",
    price: 9,
    category: "drinks",
    image: "🥤",
    spiceLevel: "mild",
    dietary: ["vegan", "gluten-free"],
    tags: ["fresh", "seasonal", "healthy"]
  },
  {
    id: 18,
    name: "Spicy Bloody Mary",
    description: "Premium vodka with spicy tomato mix and garnishes",
    price: 14,
    category: "drinks",
    image: "🍅",
    spiceLevel: "hot",
    dietary: ["vegan"],
    tags: ["spicy", "vodka", "garnished"]
  }
];

// ===== GLOBAL VARIABLES =====
let currentFilter = 'all';
let currentSpiceFilter = 'all';
let currentDietaryFilter = 'all';
let isAccessibilityMode = false;
let isDarkMode = false;

// ===== DOM ELEMENTS =====
const elements = {
  loadingOverlay: document.getElementById('loading-overlay'),
  accessibilityIndicator: document.getElementById('accessibility-indicator'),
  accessibilityToggle: document.getElementById('accessibility-toggle'),
  themeToggle: document.getElementById('theme-toggle'),
  mobileToggle: document.getElementById('mobile-toggle'),
  navMenu: document.getElementById('nav-menu'),
  menuGrid: document.getElementById('menu-grid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  spiceFilter: document.getElementById('spice-filter'),
  dietaryFilter: document.getElementById('dietary-filter'),
  backToTop: document.getElementById('back-to-top'),
  navLinks: document.querySelectorAll('.nav-link')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Hide loading overlay after a short delay
  setTimeout(() => {
    elements.loadingOverlay.classList.add('hidden');
  }, 1000);

  // Initialize all functionality
  initializeTheme();
  initializeNavigation();
  initializeMenuFilters();
  initializeScrollEffects();
  initializeAnimations();
  renderMenuItems();
  
  // Set up event listeners
  setupEventListeners();
  
  console.log('MenuMorph initialized successfully! 🍽️');
}

// ===== THEME MANAGEMENT =====
function initializeTheme() {
  // Check localStorage for saved theme
  const savedTheme = localStorage.getItem('menumorph-theme');
  if (savedTheme) {
    isDarkMode = savedTheme === 'dark';
    applyTheme();
  }
  
  // Check localStorage for accessibility mode
  const savedAccessibility = localStorage.getItem('menumorph-accessibility');
  if (savedAccessibility === 'true') {
    toggleAccessibilityMode();
  }
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  applyTheme();
  localStorage.setItem('menumorph-theme', isDarkMode ? 'dark' : 'light');
  
  // Animate theme transition
  gsap.to(document.body, {
    duration: 0.3,
    ease: "power2.inOut",
    onComplete: () => {
      // Update theme icon
      const icon = elements.themeToggle.querySelector('i');
      icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
  });
}

function applyTheme() {
  if (isDarkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

function toggleAccessibilityMode() {
  isAccessibilityMode = !isAccessibilityMode;
  
  if (isAccessibilityMode) {
    document.body.classList.add('accessibility-mode');
    elements.accessibilityIndicator.classList.remove('hidden');
    
    // Announce to screen readers
    announceToScreenReader('Accessibility mode activated. High contrast enabled, font size increased.');
  } else {
    document.body.classList.remove('accessibility-mode');
    elements.accessibilityIndicator.classList.add('hidden');
    
    announceToScreenReader('Accessibility mode deactivated.');
  }
  
  localStorage.setItem('menumorph-accessibility', isAccessibilityMode);
}

function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// ===== NAVIGATION =====
function initializeNavigation() {
  // Set active nav link based on scroll position
  window.addEventListener('scroll', updateActiveNavLink);
}

function toggleMobileMenu() {
  const isActive = elements.navMenu.classList.contains('active');
  
  if (isActive) {
    elements.navMenu.classList.remove('active');
    elements.mobileToggle.setAttribute('aria-expanded', 'false');
  } else {
    elements.navMenu.classList.add('active');
    elements.mobileToggle.setAttribute('aria-expanded', 'true');
  }
  
  // Animate mobile toggle button
  gsap.to(elements.mobileToggle.children, {
    duration: 0.3,
    rotation: isActive ? 0 : 45,
    transformOrigin: "center center",
    stagger: 0.1
  });
}

function updateActiveNavLink() {
  const scrollPosition = window.scrollY + 100;
  
  elements.navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const elementTop = targetElement.offsetTop;
      const elementBottom = elementTop + targetElement.offsetHeight;
      
      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        // Remove active class from all links
        elements.navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to current link
        link.classList.add('active');
      }
    }
  });
}

// ===== MENU FILTERING =====
function initializeMenuFilters() {
  // Set up filter button listeners
  elements.filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      setActiveFilter(button, category);
    });
  });
  
  // Set up dropdown filter listeners
  elements.spiceFilter.addEventListener('change', filterMenuItems);
  elements.dietaryFilter.addEventListener('change', filterMenuItems);
}

function setActiveFilter(activeButton, category) {
  // Update active filter button
  elements.filterButtons.forEach(btn => btn.classList.remove('active'));
  activeButton.classList.add('active');
  
  // Update current filter
  currentFilter = category;
  
  // Animate filter change
  gsap.to(elements.menuGrid.children, {
    duration: 0.3,
    opacity: 0,
    y: 20,
    stagger: 0.05,
    onComplete: () => {
      filterMenuItems();
      animateMenuItems();
    }
  });
  
  announceToScreenReader(`Showing ${category === 'all' ? 'all items' : category}`);
}

function filterMenuItems() {
  currentSpiceFilter = elements.spiceFilter.value;
  currentDietaryFilter = elements.dietaryFilter.value;
  
  const filteredItems = menuData.filter(item => {
    const categoryMatch = currentFilter === 'all' || item.category === currentFilter;
    const spiceMatch = currentSpiceFilter === 'all' || item.spiceLevel === currentSpiceFilter;
    const dietaryMatch = currentDietaryFilter === 'all' || item.dietary.includes(currentDietaryFilter);
    
    return categoryMatch && spiceMatch && dietaryMatch;
  });
  
  renderMenuItems(filteredItems);
}

// ===== MENU RENDERING =====
function renderMenuItems(items = menuData) {
  elements.menuGrid.innerHTML = '';
  
  items.forEach((item, index) => {
    const menuItemElement = createMenuItemElement(item, index);
    elements.menuGrid.appendChild(menuItemElement);
  });
  
  // Animate new items
  setTimeout(() => {
    animateMenuItems();
  }, 100);
}

function createMenuItemElement(item, index) {
  const menuItem = document.createElement('div');
  menuItem.className = 'menu-item';
  menuItem.setAttribute('role', 'article');
  menuItem.setAttribute('tabindex', '0');
  menuItem.setAttribute('aria-label', `${item.name}, ${item.price} dollars, ${item.description}`);
  
  // Create spice level indicator
  const spiceClass = `spice-${item.spiceLevel}`;
  
  // Create dietary tags
  const dietaryTags = item.dietary.map(diet => 
    `<span class="menu-tag ${diet}" aria-label="${diet}">${diet}</span>`
  ).join('');
  
  // Create spice level tag
  const spiceTag = `<span class="menu-tag ${spiceClass}" aria-label="Spice level: ${item.spiceLevel}">${item.spiceLevel}</span>`;
  
  menuItem.innerHTML = `
    <div class="menu-item-image" aria-hidden="true">
      ${item.image}
    </div>
    <div class="menu-item-content">
      <div class="menu-item-header">
        <div>
          <h3 class="menu-item-title">${item.name}</h3>
        </div>
        <div class="menu-item-price" aria-label="Price: ${item.price} dollars">
          $${item.price}
        </div>
      </div>
      <p class="menu-item-description">${item.description}</p>
      <div class="menu-item-tags" aria-label="Item tags">
        ${spiceTag}
        ${dietaryTags}
      </div>
      <div class="menu-item-footer">
        <button class="add-to-cart" 
                aria-label="Add ${item.name} to cart"
                onclick="addToCart(${item.id})">
          <i class="fas fa-plus" aria-hidden="true"></i>
          Add to Cart
        </button>
      </div>
    </div>
  `;
  
  // Add hover effects
  menuItem.addEventListener('mouseenter', () => {
    gsap.to(menuItem, {
      duration: 0.3,
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      ease: "power2.out"
    });
  });
  
  menuItem.addEventListener('mouseleave', () => {
    gsap.to(menuItem, {
      duration: 0.3,
      y: 0,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      ease: "power2.out"
    });
  });
  
  // Add focus effects for accessibility
  menuItem.addEventListener('focus', () => {
    gsap.to(menuItem, {
      duration: 0.2,
      scale: 1.02,
      ease: "power2.out"
    });
  });
  
  menuItem.addEventListener('blur', () => {
    gsap.to(menuItem, {
      duration: 0.2,
      scale: 1,
      ease: "power2.out"
    });
  });
  
  return menuItem;
}

// ===== ANIMATIONS =====
function initializeAnimations() {
  // Animate hero elements on load
  gsap.timeline()
    .from('.hero-title-main', {
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power2.out"
    })
    .from('.hero-title-brand', {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out"
    }, "-=0.5")
    .from('.hero-title-sub', {
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power2.out"
    }, "-=0.3")
    .from('.hero-description', {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power2.out"
    }, "-=0.2")
    .from('.hero-btn', {
      duration: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.2");
  
  // Animate navbar on scroll
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down - hide navbar
      gsap.to('.navbar', {
        duration: 0.3,
        y: -100,
        ease: "power2.inOut"
      });
    } else {
      // Scrolling up - show navbar
      gsap.to('.navbar', {
        duration: 0.3,
        y: 0,
        ease: "power2.inOut"
      });
    }
    
    lastScrollY = currentScrollY;
  });
}

function animateMenuItems() {
  gsap.from(elements.menuGrid.children, {
    duration: 0.6,
    opacity: 0,
    y: 30,
    stagger: 0.1,
    ease: "power2.out",
    clearProps: "all"
  });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
  // Back to top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      elements.backToTop.classList.add('visible');
    } else {
      elements.backToTop.classList.remove('visible');
    }
  });
  
  // Smooth scroll for navigation links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetElement,
            offsetY: 80
          },
          ease: "power2.inOut"
        });
        
        // Close mobile menu if open
        if (elements.navMenu.classList.contains('active')) {
          toggleMobileMenu();
        }
      }
    });
  });
}

// ===== UTILITY FUNCTIONS =====
function scrollToMenu() {
  const menuSection = document.getElementById('menu');
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: menuSection,
      offsetY: 80
    },
    ease: "power2.inOut"
  });
}

function openReservation() {
  // Placeholder for reservation functionality
  announceToScreenReader('Reservation system would open here');
  
  // Simple animation for now
  gsap.to('.hero-btn.secondary', {
    duration: 0.2,
    scale: 0.95,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut"
  });
  
  // In a real app, this would open a reservation modal or redirect
  alert('Reservation system coming soon! 📅');
}

function addToCart(itemId) {
  const item = menuData.find(i => i.id === itemId);
  if (item) {
    announceToScreenReader(`${item.name} added to cart`);
    
    // Visual feedback
    const button = event.target.closest('.add-to-cart');
    const originalText = button.innerHTML;
    
    gsap.to(button, {
      duration: 0.2,
      scale: 0.95,
      ease: "power2.inOut",
      onComplete: () => {
        button.innerHTML = '<i class="fas fa-check"></i> Added!';
        gsap.to(button, {
          duration: 0.2,
          scale: 1,
          ease: "power2.inOut",
          onComplete: () => {
            setTimeout(() => {
              button.innerHTML = originalText;
            }, 1000);
          }
        });
      }
    });
  }
}

function scrollToTop() {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: 0 },
    ease: "power2.inOut"
  });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  // Theme and accessibility toggles
  elements.themeToggle.addEventListener('click', toggleTheme);
  elements.accessibilityToggle.addEventListener('click', toggleAccessibilityMode);
  
  // Mobile navigation
  elements.mobileToggle.addEventListener('click', toggleMobileMenu);
  
  // Back to top button
  elements.backToTop.addEventListener('click', scrollToTop);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && elements.navMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
    
    // Space bar on focused menu items acts like click
    if (e.key === ' ' && e.target.classList.contains('menu-item')) {
      e.preventDefault();
      const addButton = e.target.querySelector('.add-to-cart');
      if (addButton) {
        addButton.click();
      }
    }
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (elements.navMenu.classList.contains('active') && 
        !elements.navMenu.contains(e.target) && 
        !elements.mobileToggle.contains(e.target)) {
      toggleMobileMenu();
    }
  });
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Observe section headers
  document.querySelectorAll('.section-header').forEach(header => {
    observer.observe(header);
  });
}

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
  updateActiveNavLink();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
  console.error('MenuMorph Error:', e.error);
  
  // Show user-friendly error message if needed
  if (e.error.message.includes('gsap')) {
    console.warn('GSAP animation library not loaded properly');
  }
});

// ===== ANALYTICS & PERFORMANCE =====
// Simple performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach(entry => {
    console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
  });
});

if (typeof PerformanceObserver !== 'undefined') {
  performanceObserver.observe({ entryTypes: ['measure', 'navigation'] });
}

// Mark important performance milestones
performance.mark('menumorph-start');

window.addEventListener('load', () => {
  performance.mark('menumorph-loaded');
  performance.measure('menumorph-load-time', 'menumorph-start', 'menumorph-loaded');
});

// ===== PWA SUPPORT =====
// Service worker registration (if available)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Add to home screen prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  
  // Show install button/banner if desired
  console.log('MenuMorph can be installed as PWA');
});

console.log('🍽️ MenuMorph script loaded successfully!');
