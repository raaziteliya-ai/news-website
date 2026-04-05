// Date aur Time dikhana
function showDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateStr = now.toLocaleDateString('hi-IN', options);
    const timeStr = now.toLocaleTimeString('hi-IN');
    
    const el = document.getElementById('date-time');
    if (el) {
        el.innerHTML = dateStr + '<br>' + timeStr;
    }
}

showDateTime();
setInterval(showDateTime, 1000);

// Navigation active link
const navLinks = document.querySelectorAll('.nav-inner a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// News card click
const newsCards = document.querySelectorAll('.news-card, .side-card, .hero-card');
newsCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
        alert('खबर जल्द उपलब्ध होगी!');
    });
});
