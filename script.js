document.addEventListener('click', (e) => {
    party.sparkles(e, {
        count: party.variation.range(20, 40),
        size: party.variation.range(0.8, 1),
        // ... and more!
    });
});

window.addEventListener('load', (e) => {
    let a = document.querySelectorAll('a');
    a.forEach((el) => {
        el.addEventListener('click', (e1) => {
            e1.preventDefault();
            setTimeout(() => {
                window.location = el.getAttribute("href");
            }, 750)
        });
    });
});