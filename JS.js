<script>
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.scroll-effect');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add('show');
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
</script>