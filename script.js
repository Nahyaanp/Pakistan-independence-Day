document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const handleScroll = () => {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.classList.add('in-view');
            } else {
                item.classList.remove('in-view'); // Optional: remove the class when out of view
            }
        });
    };

    const debounce = (func, delay) => {
        let timeout;
        return () => {
            clearTimeout(timeout);
            timeout = setTimeout(func, delay);
        };
    };

    window.addEventListener('scroll', debounce(handleScroll, 20));
    handleScroll(); // Run on page load
});
