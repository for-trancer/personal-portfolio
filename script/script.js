let isScrolling = false;

document.addEventListener('wheel',function(e){
    if(isScrolling) return;

    e.preventDefault();
    isScrolling = true;

    const delta = e.deltaY;
    const scrollSpeed = 0.1;
    const targetScroll = window.pageXOffset + (delta * scrollSpeed);

    window.scrollTo({
        top:targetScroll,
        behavior: 'smooth'
    });
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Function to reset and hide all animated elements initially
    function hideAnimatedElements() {
        // Hero section elements (except header which should always show)
        const heroElements = document.querySelectorAll('.hero-left, .hero-center img, .eclipse-stroke, .hero-right-wrapper');
        heroElements.forEach(el => {
            el.style.animation = 'none';
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
        });

        // About section elements
        const aboutElements = document.querySelectorAll('#about-section .heading-text,.about-header, .about-left, .about-right');
        aboutElements.forEach(el => {
            el.style.animation = 'none';
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
        });

        // Skills section elements
        const skillElements = document.querySelectorAll('.skill-header, .skill-name');
        skillElements.forEach(el => {
            el.style.animation = 'none';
            el.style.opacity = '0';
            el.style.transform = 'translateX(-50px)';
        });

        // Reset skill bars to 0%
        const skillBars = document.querySelectorAll('.skill-per');
        skillBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.animation = 'none';
        });

        // Projects section elements
        const projectElements = document.querySelectorAll('.projects-header, .project-title-wrapper, .project-left, .project-right, .project-quote, .project-subtitle');
        projectElements.forEach(el => {
            el.style.animation = 'none';
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
        });

        // Portfolio section elements
        const portfolioElements = document.querySelectorAll('.portfolio-header, .portfolio-card, .portfolio-image-wrapper');
        portfolioElements.forEach(el => {
            el.style.animation = 'none';
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
        });

        // Contact section elements
        const contactElements = document.querySelectorAll('.contact-header, .contact-card-wrapper, .contact-img-wrapper');
        contactElements.forEach(el => {
            el.style.animation = 'none';
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
        });
    }

    // Function to animate hero section
    function animateHeroSection() {
        setTimeout(() => {
            const heroLeft = document.querySelector('.hero-left');
            if (heroLeft) {
                heroLeft.style.animation = 'slideRight 1.8s ease forwards';
                heroLeft.style.opacity = '1';
                heroLeft.style.transform = 'none';
            }
        }, 100);

        setTimeout(() => {
            const heroImg = document.querySelector('.hero-center img');
            if (heroImg) {
                heroImg.style.animation = 'slideUp 2.5s ease forwards';
                heroImg.style.opacity = '1';
                heroImg.style.transform = 'none';
            }
        }, 300);

        setTimeout(() => {
            const eclipse = document.querySelector('.eclipse-stroke');
            if (eclipse) {
                eclipse.style.animation = 'zoomIn 2s ease forwards';
                eclipse.style.opacity = '1';
                eclipse.style.transform = 'none';
            }
        }, 200);

        setTimeout(() => {
            const heroRight = document.querySelector('.hero-right-wrapper');
            if (heroRight) {
                heroRight.style.animation = 'slideLeft 2.2s ease forwards';
                heroRight.style.opacity = '1';
                heroRight.style.transform = 'none';
            }
        }, 400);
    }

    // Function to animate about section
    function animateAboutSection() {
        setTimeout(() => {
            const heading = document.querySelector('#about-section .heading-text');
            if (heading) {
                heading.style.animation = 'slideDown .7s ease forwards';
                heading.style.opacity = '1';
                heading.style.transform = 'none';
            }
        }, 100);

        setTimeout(() => {
            const heading = document.querySelector('.about-header');
            if (heading) {
                heading.style.animation = 'slideDown .7s ease forwards';
                heading.style.opacity = '1';
                heading.style.transform = 'none';
            }
        }, 100);

        setTimeout(() => {
            const aboutLeft = document.querySelector('.about-left');
            if (aboutLeft) {
                aboutLeft.style.animation = 'zoomIn 1.2s ease forwards';
                aboutLeft.style.opacity = '1';
                aboutLeft.style.transform = 'none';
            }
        }, 500);

        setTimeout(() => {
            const aboutRight = document.querySelector('.about-right');
            if (aboutRight) {
                aboutRight.style.animation = 'slideLeft 1.4s ease forwards';
                aboutRight.style.opacity = '1';
                aboutRight.style.transform = 'none';
            }
        }, 700);
    }

    // Function to animate skills section
    function animateSkillSection() {
        setTimeout(() => {
            const heading = document.querySelector('.skill-header');
            if (heading) {
                heading.style.animation = 'slideUp .7s ease forwards';
                heading.style.opacity = '1';
                heading.style.transform = 'none';
            }
        }, 100);

        // Animate skill names
        const skillNames = document.querySelectorAll('.skill-name');
        skillNames.forEach((name, index) => {
            setTimeout(() => {
                name.style.animation = 'slideRight .8s ease forwards';
                name.style.opacity = '1';
                name.style.transform = 'none';
            }, 300 + (index * 100));
        });

        // Animate skill bars
        const skillBars = document.querySelectorAll('.skill-per');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const maxWidth = bar.style.maxWidth;
                bar.style.animation = 'fillBars 1.7s ease forwards';
                bar.style.width = maxWidth;
            }, 600 + (index * 200));
        });
    }

    // Function to animate projects section
    function animateProjectsSection() {
        setTimeout(() => {
            const heading = document.querySelector('.projects-header');
            if (heading) {
                heading.style.animation = 'slideDown .8s ease forwards';
                heading.style.opacity = '1';
                heading.style.transform = 'none';
            }
        }, 100);

        setTimeout(() => {
            const titleWrappers = document.querySelectorAll('.project-title-wrapper');
            titleWrappers.forEach((wrapper, index) => {
                setTimeout(() => {
                    wrapper.style.animation = 'slideRight 1.2s ease forwards';
                    wrapper.style.opacity = '1';
                    wrapper.style.transform = 'none';
                }, index * 200);
            });
        }, 300);

        setTimeout(() => {
            const projectLefts = document.querySelectorAll('.project-left');
            projectLefts.forEach((left, index) => {
                setTimeout(() => {
                    left.style.animation = 'slideRight 2s ease forwards';
                    left.style.opacity = '1';
                    left.style.transform = 'none';
                }, index * 200);
            });
        }, 500);

        setTimeout(() => {
            const projectRights = document.querySelectorAll('.project-right');
            projectRights.forEach((right, index) => {
                setTimeout(() => {
                    right.style.animation = 'slideLeft 3s ease forwards';
                    right.style.opacity = '1';
                    right.style.transform = 'none';
                }, index * 200);
            });
        }, 700);

        setTimeout(() => {
            const quotes = document.querySelectorAll('.project-quote');
            quotes.forEach((quote, index) => {
                setTimeout(() => {
                    quote.style.animation = 'slideDown 2s ease forwards';
                    quote.style.opacity = '1';
                    quote.style.transform = 'none';
                }, index * 200);
            });
        }, 900);

        setTimeout(() => {
            const subtitles = document.querySelectorAll('.project-subtitle');
            subtitles.forEach((subtitle, index) => {
                setTimeout(() => {
                    subtitle.style.animation = 'slideUp 2.5s ease forwards';
                    subtitle.style.opacity = '1';
                    subtitle.style.transform = 'none';
                }, index * 200);
            });
        }, 1100);

    }

    // Function to animate portfolio section
    function animatePortfolioSection() {
        setTimeout(() => {
            const header = document.querySelector('.portfolio-header');
            if (header) {
                header.style.animation = 'slideDown .8s ease forwards';
                header.style.opacity = '1';
                header.style.transform = 'none';
            }
        }, 100);

        setTimeout(() => {
            const cards = document.querySelectorAll('.portfolio-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.animation = 'slideRight 0.8s ease forwards';
                    card.style.opacity = '1';
                    card.style.transform = 'none';
                }, index * 200);
            });
        }, 300);

        setTimeout(() => {
            const images = document.querySelectorAll('.portfolio-image-wrapper');
            images.forEach((img, index) => {
                setTimeout(() => {
                    img.style.animation = 'zoomIn 2s ease forwards';
                    img.style.opacity = '1';
                    img.style.transform = 'none';
                }, index * 100);
            });
        }, 500);
    }

    // Function to animate contact section
    function animateContactSection() {
        setTimeout(() => {
            const header = document.querySelector('.contact-header');
            if (header) {
                header.style.animation = 'slideDown 1s ease forwards';
                header.style.opacity = '1';
                header.style.transform = 'none';
            }
        }, 100);

        setTimeout(() => {
            const wrapper = document.querySelector('.contact-card-wrapper');
            if (wrapper) {
                wrapper.style.animation = 'slideUp .8s ease forwards';
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'none';
            }
        }, 300);

        setTimeout(() => {
            const images = document.querySelectorAll('.contact-img-wrapper');
            images.forEach((img, index) => {
                setTimeout(() => {
                    img.style.animation = 'zoomIn 1.2s ease forwards';
                    img.style.opacity = '1';
                    img.style.transform = 'none';
                }, index * 100);
            });
        }, 600);
    }

    // Initialize by hiding all elements
    hideAnimatedElements();

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = '#' + entry.target.id;
                
                // Trigger animations based on section
                switch(sectionId) {
                    case '#head-section':
                        animateHeroSection();
                        break;
                    case '#about-section':
                        animateAboutSection();
                        break;
                    case '#skill-section':
                        animateSkillSection();
                        break;
                    case '#projects-section':
                        animateProjectsSection();
                        break;
                    case '#portfolio-section':
                        animatePortfolioSection();
                        break;
                    case '#contact-section':
                        animateContactSection();
                        break;
                }
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '-10% 0px -10% 0px'
    });

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Ensure header is always visible since it's fixed
    setTimeout(() => {
        const header = document.querySelector('.header');
        if (header) {
            header.style.opacity = '1';
            header.style.transform = 'none';
        }
    }, 100);
});