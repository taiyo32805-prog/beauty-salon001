document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('.section');

    // Header scroll background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
    }

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // .revealクラスを持つすべての要素、および.sectionクラスを監視対象にする
    const revealElements = document.querySelectorAll('.reveal, .section');
    revealElements.forEach(el => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
        observer.observe(el);
    });
});
