// Effet scroll sur la navbar
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Scroll smooth pour l'indicateur
    document.querySelector('.scroll-indicator').addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });

    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Animation au scroll - Intersection Observer
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          // Retire la classe quand l'élément sort du viewport
          entry.target.classList.remove('animate-in');
        }
      });
    }, observerOptions);

    // Observer tous les éléments animables
    const animateElements = document.querySelectorAll('.text, .media, .media_2, .players, .tier, .goals-text');
    animateElements.forEach(el => {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });
