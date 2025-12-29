// Sticky navbar
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const scrollThreshold = 46;
  
    if (window.scrollY > scrollThreshold) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
  });
  
  
  // mousemove parallax effect
  document.querySelectorAll('.img-container').forEach(container => {
    const img = container.querySelector('img');
    
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = ((x - centerX) / centerX) * -100;
      const moveY = ((y - centerY) / centerY) * -100;
      img.style.transform = `scale(3) translate(${moveX}px, ${moveY}px)`;
    });
  
    container.addEventListener('mouseleave', () => {
      img.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      img.style.transform = 'scale(1) translate(0, 0)';
      img.style.opacity = '1';
  
      setTimeout(() => {
        img.style.transition = '';
      }, 300);
    });
  });
  
  
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.header-center-nav');
  const homeDropdownToggle = document.querySelector('.has-dropdown');
  const homeDropdownMenu = document.querySelector('.home-menu');
  const menuIcon = menuToggle.querySelector('i');
  
  if (menuToggle && mobileMenu && menuIcon) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
  
      // Toggle icon class between fa-bars and fa-times
      if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
      } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      }
    });
  }
  
  
  document.querySelectorAll('.image-card').forEach(card => {
    const defaultImg = card.querySelector('.default-image');
    const hoverImg = card.querySelector('.hover-image');
    const overlay = card.querySelector('.overlay');
  
    // Set initial state (optional but safe)
    defaultImg.style.opacity = '1';
    defaultImg.style.transform = 'scale(1)';
    defaultImg.style.zIndex = '2';
  
    hoverImg.style.opacity = '0';
    hoverImg.style.zIndex = '0';
  
    overlay.classList.remove('show');
  
    card.addEventListener('mouseenter', () => {
      defaultImg.style.opacity = '0';
      defaultImg.style.transform = 'scale(1.07)';
      defaultImg.style.zIndex = '1';
  
      hoverImg.style.opacity = '1';
      hoverImg.style.zIndex = '3';
  
      overlay.classList.add('show');
    });
  
    card.addEventListener('mouseleave', () => {
      defaultImg.style.opacity = '1';
      defaultImg.style.transform = 'scale(1)';
      defaultImg.style.zIndex = '2';
  
      hoverImg.style.opacity = '0';
      hoverImg.style.zIndex = '0';
  
      overlay.classList.remove('show');
    });
  });
  
  