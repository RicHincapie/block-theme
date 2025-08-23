document.addEventListener('DOMContentLoaded', () => {
    // Simple carousel for the Worldwide Context section.
    document.querySelectorAll('.wt-carousel').forEach((carousel) => {
        const slides = carousel.querySelectorAll('figure');
        let index = 0;
        function showSlide(i) {
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === i);
            });
        }
        if (slides.length) {
            showSlide(index);
            setInterval(() => {
                index = (index + 1) % slides.length;
                showSlide(index);
            }, 4000);
        }
    });

    // Animated statistics graph on the Latest Project page.
    const stats = document.querySelectorAll('.stats-graph .stat');
    if (stats.length) {
        const values = Array.from(stats).map((s) => parseInt(s.dataset.value, 10));
        const max = Math.max(...values);

        stats.forEach((stat) => {
            const value = parseInt(stat.dataset.value, 10);
            const bar = stat.querySelector('.bar');
            const numberEl = stat.querySelector('.stat-number');

            // Animate bar height.
            requestAnimationFrame(() => {
                bar.style.height = (value / max) * 100 + '%';
            });

            // Animate number count up.
            const target = parseInt(numberEl.dataset.target, 10);
            let count = 0;
            const step = target / 60;
            function update() {
                count += step;
                if (count < target) {
                    numberEl.textContent = Math.round(count);
                    requestAnimationFrame(update);
                } else {
                    numberEl.textContent = target.toLocaleString();
                }
            }
            update();
        });
    }
});
