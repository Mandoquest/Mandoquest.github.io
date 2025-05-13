document.addEventListener("DOMContentLoaded", () => {
    const Gallerie = document.getElementById('Gallerie');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Div ist im Bild!');
            scrollNachRechts();
        }   
        });
    }, {
        threshold: 0.7
    });

    if (Gallerie) {
        observer.observe(Gallerie);
    }
    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

    
    async function scrollNachRechts() {
        Gallerie.scrollBy({ left: 500, behavior: 'smooth' });
        await sleep(1000)
        Gallerie.scrollBy({ left: -500, behavior: 'smooth' });
    }
});