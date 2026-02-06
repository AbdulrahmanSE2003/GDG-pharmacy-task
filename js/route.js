export const homePage = `<!-- Hero Section -->
          <section id="hero" class="hero-section h-full flex">
            <div class="container">
              <div class="grid grid-cols-2 hero-content w-full">
                <!-- Left side content -->
                <div class="h-full flex flex-col l-content gap-6">
                  <span class="text-brand">Secure &amp; Reliable</span>

                  <h1 class="">
                    Your Trusted Online Pharmacy, Delivered to Your Door
                  </h1>

                  <div class="w-full">
                    <p class="text-muted">
                      Get authentic medicines and healthcare products with fast,
                      reliable delivery. Expert pharmacists available for
                      consultation
                      <span class="text-brand">24/7</span>.
                    </p>
                  </div>

                  <button onclick"loadPage(productsPage)" class="transition btn">Show Now</button>

                  <!-- Stats -->
                  <div class="stat-container flex gap-6">
                    <div class="stat flex flex-col gap-2">
                      <span>+15K</span>
                      <p>Happy Customers</p>
                    </div>
                    <div class="stat flex flex-col gap-2">
                      <span>+2K</span>
                      <p>Licensed Products</p>
                    </div>
                  </div>
                </div>

                <!-- Right side Image -->
                <div class="r-content">
                  <div>
                    <img alt="Pharmacy delivery service" src="images/hero.png" class="hero-image w-full shadow-deep"/>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>

          <!-- Categories Section -->
          <section id="categories">
            <div class="container">
              <h3 class="section-heading">Categories</h3>
              <div class="categories grid grid-cols-3 gap-20">
                <div class="category-item flex flex-center flex-col shadow-deep transition gap-2">
                  <div class="icon-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pill-icon lucide-pill"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
                  </div>

                  <span class="transition">Medicines</span>
                </div>
                <div class="category-item flex flex-center flex-col shadow-deep transition gap-2">
                  <div class="icon-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope-icon lucide-stethoscope"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>
                  </div>

                  <span class="transition">Devices</span>
                </div>
                <div class="category-item flex flex-center flex-col shadow-deep transition gap-2 ">
                  <div class="icon-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby-icon lucide-baby"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/></svg>
                  </div>

                  <span class="transition">Baby Care</span>
                </div>
                
              </div>
              
            </div>
          </section>
          
          <!-- Why Us Section -->
          <section id="why-us">
            <div class="container flex flex-col gap-12">
              <h3 class="section-heading">Why choose PharmCare?</h3>
              <div class="why-us flex flex-col gap-12 ">

                <!-- Badges -->
                <div class="why-us-badges grid grid-cols-3 gap-16">
                  <div class="badge flex flex-col flex-center gap-6">
                    <div class="icon-circle bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check-icon lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>
                    <h5>Authentic Products</h5>
                    <p class="text-muted">Talk to our licensed pharmacists for dosage guidance and safety advice anytime.</p>
                  </div>
                  <div class="badge flex flex-col flex-center gap-6">
                    <div class="icon-circle bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                    </div>
                    <h5>Fast Delivery</h5>
                    <p class="text-muted">Express 2-hour delivery for essential medicines within city limits.</p>
                  </div>
                  <div class="badge flex flex-col flex-center gap-6">
                    <div class="icon-circle bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-question-mark-icon lucide-badge-question-mark"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                    </div>
                    <h5>Expert Consultation</h5>
                    <p class="text-muted">Direct sourcing from authorized distributors ensures 100% genuine medical supplies.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>`;

export const productsPage = `<section id="products">
            <div class="container">
              <div>
                <div class="flex products-header justify-between items-center">
                  <h3 class="section-heading">Explore Products</h3>
                </div>
                <div id="productsContainer" class="products grid grid-cols-4 gap-14">
                  <!-- Products Cards will be injected here by JS -->
              </div>
            </div>
          </section>`;

export const cartPage = `<section id="cart">
        <div class="container">
          <div class="flex justify-between items-center">
            <h3 class="section-heading">Your Cart</h3>
            <p class=""><span id="qty">...</span> items in your cart</p>
          </div>

          <div class="flex order-details">
            <div class="cart-list grid grid-cols-1 gap-6"></div>
            <div class="checkout shadow-deep flex flex-col gap-6">
              <h3>Order Summery</h3>

              <ul class="flex flex-col gap-4">
                <li class="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span class="subtotal">$60.47</span>
                </li>
                <li class="flex items-center justify-between">
                  <span>Shipping</span>
                  <span class="free">Free</span>
                </li>
                <hr />
                <li class="flex items-center justify-between total">
                  <span>Total</span>
                  <span class='total-price'>$60.47</span>
                </li>
              </ul>
              <button class="btn w-full transition flex flex-center gap-4 proceed-btn">Proceed To checkout <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f3f3f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg></span></button>
            </div>
          </div>
        </div>
      </section>`;

export const loginPage = `<div class="login-wrapper flex flex-center">
        <div class="login-card shadow-deep bg-white transition">
          <div class="login-header flex flex-col items-center gap-2">
            <div class="login-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#008080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
            </div>
            <h2>Welcome Back</h2>
            <p class="text-muted text-sm">Please enter your details to login</p>
          </div>

          <form class="login-form flex flex-col gap-4" id="loginForm">
            <div class="input-group flex flex-col gap-2">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                required
                class="transition"
              />
            </div>

            <div class="input-group flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                class="transition"
              />
            </div>

            <div class="flex justify-between items-center text-sm">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" class="text-brand font-semibold">Forgot Password?</a>
            </div>

            <button type="submit" class="login-btn transition">
              Login to Account
            </button>
          </form>

          <p class="text-center text-sm mt-6">
            Don't have an account?
            <a href="#" class="text-brand font-bold">Sign up for free</a>
          </p>
        </div>`;
