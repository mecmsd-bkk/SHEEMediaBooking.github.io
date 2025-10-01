document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const currentItem = this.parentElement;
            const isActive = currentItem.classList.contains('active');

            const activeItems = document.querySelectorAll('.accordion-item.active');
            activeItems.forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                    item.querySelector('.icon').textContent = '+';
                }
            });

            if (isActive) {
                currentItem.classList.remove('active');
                this.nextElementSibling.style.maxHeight = null;
                this.querySelector('.icon').textContent = '+';
            } else {
                currentItem.classList.add('active');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
                this.querySelector('.icon').textContent = '-';
            }
        });
    });

    const initiallyActiveItem = document.querySelector('.accordion-item.active');
    if (initiallyActiveItem) {
        const content = initiallyActiveItem.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + "px";
    }
});