document.addEventListener("DOMContentLoaded", () => {
    // Fade in animation saat halaman dibuka
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s ease-in";
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

    // Hover effect untuk kartu
    const cards = document.querySelectorAll('.card, .about-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translateY(-10px)";
            card.style.transition = "0.3s";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "translateY(0)";
        });
    });
});