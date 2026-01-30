tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'ride-lightest': '#D8F3DC',
                        'ride-light': '#B7E4C7',
                        'ride-mint': '#95D5B2',
                        'ride-sage': '#74C69D',
                        'ride-primary': '#52B788',
                        'ride-sea': '#40916C',
                        'ride-forest': '#2D6A4F',
                        'ride-dark': '#1B4332',
                        'ride-darkest': '#081C15',
                    },
                    fontFamily: {
                        'display': ['Space Grotesk', 'sans-serif'],
                        'body': ['Inter', 'sans-serif'],
                    }
                }
            }
        }

// Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Navbar Background on Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-ride-darkest/90', 'shadow-lg');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-ride-darkest/90', 'shadow-lg');
                navbar.classList.add('bg-transparent');
            }
        });

        // Hero Animations
        gsap.from('.hero-content > *', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        gsap.from('.hero-image', {
            x: 50,
            opacity: 0,
            duration: 1.2,
            delay: 0.5,
            ease: "power3.out"
        });

        // Stats Counter Animation
        const stats = document.querySelectorAll('.counter');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            gsap.to(stat, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
            // Add '+' or 'M' after animation if needed based on context
            if (target === 50) {
                setTimeout(() => { stat.innerHTML = target + '+'; }, 2000);
            } else if (target === 2) {
                setTimeout(() => { stat.innerHTML = target + 'M'; }, 2000);
            }
        });

        // Features Animation
        gsap.from('.features-header', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: '.features-header',
                start: "top 85%",
            }
        });

        gsap.from('.feature-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#features',
                start: "top 70%",
            }
        });

        // How it Works Animation
        gsap.from('.step-card', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#how-it-works',
                start: "top 70%",
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                mobileMenu.classList.add('hidden');
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Parallax effect for hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.wave-bg');
            if (parallax) {
                parallax.style.transform = `rotate(${scrolled * 0.1}deg)`;
            }
        });
