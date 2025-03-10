

        // swiper js
        const swiper = new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });

        // =====================================================================================================================================================
        document.addEventListener('DOMContentLoaded', function () {
            // ===== TOP PROPERTIES CAROUSEL =====
            const topPropertiesCarousel = function () {
                const container = document.querySelector('.top_pro_container');
                if (!container) return;

                const carousel = container.querySelector('.carousel-inner');
                const cards = container.querySelectorAll('.property-card');
                const prevBtn = container.querySelector('.prev');
                const nextBtn = container.querySelector('.next');

                if (!carousel || !cards.length || !prevBtn || !nextBtn) return;

                let currentIndex = 0;

                // Get number of cards to show based on viewport width
                function getVisibleCards() {
                    const width = window.innerWidth;
                    if (width < 480) return 1;
                    if (width < 768) return 2;
                    return 3;
                }

                function updateCarousel() {
                    // Calculate card width including gap
                    const cardWidth = cards[0].offsetWidth;
                    const gap = 20; // Gap between cards in pixels
                    const totalWidth = cardWidth + gap;

                    // Apply transform to move carousel
                    carousel.style.transition = 'transform 0.3s ease';
                    carousel.style.transform = `translateX(-${currentIndex * totalWidth}px)`;

                    // Update button states
                    const maxVisibleCards = getVisibleCards();
                    const maxIndex = cards.length - maxVisibleCards;

                    prevBtn.disabled = currentIndex <= 0;
                    prevBtn.style.opacity = currentIndex <= 0 ? '0.5' : '1';

                    nextBtn.disabled = currentIndex >= maxIndex;
                    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
                }

                // Event listeners for buttons
                prevBtn.addEventListener('click', function () {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateCarousel();
                    }
                });

                nextBtn.addEventListener('click', function () {
                    const maxVisibleCards = getVisibleCards();
                    const maxIndex = cards.length - maxVisibleCards;

                    if (currentIndex < maxIndex) {
                        currentIndex++;
                        updateCarousel();
                    }
                });

                // Handle window resize
                window.addEventListener('resize', function () {
                    // Check if current index is now invalid after resize
                    const maxVisibleCards = getVisibleCards();
                    const maxIndex = cards.length - maxVisibleCards;

                    if (currentIndex > maxIndex) {
                        currentIndex = maxIndex;
                    }

                    updateCarousel();
                });

                // Initialize carousel
                updateCarousel();
            };

            // ===== TESTIMONIALS CAROUSEL =====
            const testimonialsCarousel = function () {
                const container = document.querySelector('.testimonials');
                if (!container) return;

                const wrapper = container.querySelector('.testimonial-wrapper');
                const cards = container.querySelectorAll('.testimonial-card');
                const prevBtn = container.querySelector('.prev-btn');
                const nextBtn = container.querySelector('.next-btn');

                if (!wrapper || !cards.length || !prevBtn || !nextBtn) return;

                let currentIndex = 0;
                let isAnimating = false;

                // Get number of cards to show based on viewport width
                function getVisibleCards() {
                    const width = window.innerWidth;
                    if (width < 480) return 1;
                    if (width < 768) return 2;
                    return 3;
                }

                // Calculate card width including gap
                function getCardWidth() {
                    const card = cards[0];
                    const cardStyle = window.getComputedStyle(card);
                    const cardWidth = card.offsetWidth;

                    // Get gap from style or use default
                    const wrapperStyle = window.getComputedStyle(wrapper);
                    const gapString = wrapperStyle.getPropertyValue('gap') || '24px';
                    const gap = parseInt(gapString, 10) || 24;

                    return cardWidth + gap;
                }

                function updateCarousel() {
                    if (isAnimating) return;

                    isAnimating = true;
                    const cardWidth = getCardWidth();
                    const scrollPosition = currentIndex * cardWidth;

                    // Use scrollTo with smooth behavior for better performance
                    wrapper.scrollTo({
                        left: scrollPosition,
                        behavior: 'smooth'
                    });

                    // Update button states
                    const maxVisibleCards = getVisibleCards();
                    const maxIndex = Math.max(0, cards.length - maxVisibleCards);

                    prevBtn.disabled = currentIndex <= 0;
                    prevBtn.style.opacity = currentIndex <= 0 ? '0.5' : '1';
                    prevBtn.style.cursor = currentIndex <= 0 ? 'not-allowed' : 'pointer';

                    nextBtn.disabled = currentIndex >= maxIndex;
                    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
                    nextBtn.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';

                    // Reset animation flag after transition completes
                    setTimeout(() => {
                        isAnimating = false;
                    }, 300);
                }

                // Event listeners for buttons
                prevBtn.addEventListener('click', function () {
                    if (currentIndex > 0 && !isAnimating) {
                        currentIndex--;
                        updateCarousel();
                    }
                });

                nextBtn.addEventListener('click', function () {
                    const maxVisibleCards = getVisibleCards();
                    const maxIndex = Math.max(0, cards.length - maxVisibleCards);

                    if (currentIndex < maxIndex && !isAnimating) {
                        currentIndex++;
                        updateCarousel();
                    }
                });

                // Handle touch events for mobile swipe
                let touchStartX = 0;
                let touchEndX = 0;

                wrapper.addEventListener('touchstart', function (e) {
                    touchStartX = e.changedTouches[0].screenX;
                }, { passive: true });

                wrapper.addEventListener('touchend', function (e) {
                    touchEndX = e.changedTouches[0].screenX;

                    // Calculate swipe distance
                    const swipeDistance = touchStartX - touchEndX;
                    const swipeThreshold = 50;

                    if (Math.abs(swipeDistance) > swipeThreshold && !isAnimating) {
                        if (swipeDistance > 0) {
                            // Swipe left (next)
                            const maxVisibleCards = getVisibleCards();
                            const maxIndex = Math.max(0, cards.length - maxVisibleCards);

                            if (currentIndex < maxIndex) {
                                currentIndex++;
                                updateCarousel();
                            }
                        } else {
                            // Swipe right (prev)
                            if (currentIndex > 0) {
                                currentIndex--;
                                updateCarousel();
                            }
                        }
                    }
                }, { passive: true });

                // Handle window resize
                window.addEventListener('resize', function () {
                    // Check if current index is now invalid after resize
                    const maxVisibleCards = getVisibleCards();
                    const maxIndex = Math.max(0, cards.length - maxVisibleCards);

                    if (currentIndex > maxIndex) {
                        currentIndex = maxIndex;
                    }

                    // Force immediate update without animation on resize
                    const cardWidth = getCardWidth();
                    const scrollPosition = currentIndex * cardWidth;
                    wrapper.scrollLeft = scrollPosition;

                    // Update button states
                    prevBtn.disabled = currentIndex <= 0;
                    prevBtn.style.opacity = currentIndex <= 0 ? '0.5' : '1';

                    nextBtn.disabled = currentIndex >= maxIndex;
                    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
                });

                // Initialize carousel
                updateCarousel();

                // Make sure wrapper has proper styling for horizontal scrolling
                wrapper.style.display = 'flex';
                wrapper.style.overflowX = 'hidden';
                wrapper.style.scrollBehavior = 'smooth';
                wrapper.style.scrollSnapType = 'x mandatory';

                // Make cards snap properly
                cards.forEach(card => {
                    card.style.scrollSnapAlign = 'start';
                    card.style.flexShrink = '0';
                });
            };

            // Initialize both carousels
            topPropertiesCarousel();
            testimonialsCarousel();

            // ===== OTHER FUNCTIONALITY =====

            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
            const navLinks = document.querySelector(".nav-links");

            if (mobileMenuBtn && navLinks) {
                mobileMenuBtn.addEventListener("click", function () {
                    navLinks.classList.toggle("active");

                    // Animate hamburger to X
                    const spans = this.querySelectorAll("span");
                    this.classList.toggle("active");

                    if (this.classList.contains("active")) {
                        spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
                        spans[1].style.opacity = "0";
                        spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
                    } else {
                        spans[0].style.transform = "none";
                        spans[1].style.opacity = "1";
                        spans[2].style.transform = "none";
                    }
                });

                // Close mobile menu when clicking outside
                document.addEventListener("click", function (event) {
                    if (!event.target.closest("nav") && navLinks.classList.contains("active")) {
                        navLinks.classList.remove("active");
                        mobileMenuBtn.classList.remove("active");
                        const spans = mobileMenuBtn.querySelectorAll("span");
                        spans[0].style.transform = "none";
                        spans[1].style.opacity = "1";
                        spans[2].style.transform = "none";
                    }
                });
            }

            // Sticky header on scroll
            window.addEventListener("scroll", function () {
                const header = document.querySelector("header");
                if (header) {
                    header.classList.toggle("sticky", window.scrollY > 0);
                }
            });

            // Property type buttons toggle
            const propertyBtns = document.querySelectorAll(".property-type-btns button");
            propertyBtns.forEach((btn) => {
                btn.addEventListener("click", function () {
                    propertyBtns.forEach((b) => b.classList.remove("active"));
                    this.classList.add("active");
                });
            });

            // Form submission
            const searchForm = document.querySelector(".search-form");
            if (searchForm) {
                searchForm.addEventListener("submit", function (e) {
                    e.preventDefault();
                    console.log("Search form submitted");
                });
            }

            // Explore cities image scaling functions
            window.scaleImage = function (card) {
                const img = card.querySelector("img");
                if (img) {
                    img.style.transform = "scale(1.1)";
                }
            };

            window.resetScale = function (card) {
                const img = card.querySelector("img");
                if (img) {
                    img.style.transform = "scale(1)";
                }
            };
        });


