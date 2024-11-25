// Select the elements
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const portfolioItems = document.querySelector('.portfolio-items');
const portfolioItemCount = portfolioItems.children.length; // Count of items
const itemWidth = portfolioItems.children[0].offsetWidth; // Width of one item including margin

let currentPosition = 0; // Tracks current scroll position

// Function to update arrow visibility
function updateArrowVisibility() {
    // Hide the left arrow if at the start
    leftArrow.style.display = currentPosition === 0 ? 'none' : 'block';
    // Hide the right arrow if at the end
    const maxScrollPosition = -(itemWidth * (portfolioItemCount - 1));
    rightArrow.style.display = currentPosition === maxScrollPosition ? 'none' : 'block';
}

// Initialize arrow visibility
updateArrowVisibility();

// Left arrow click handler
leftArrow.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += itemWidth;
        portfolioItems.style.transform = `translateX(${currentPosition}px)`;
        updateArrowVisibility();
    }
});

// Right arrow click handler
rightArrow.addEventListener('click', () => {
    const maxScrollPosition = -(itemWidth * (portfolioItemCount - 1));
    if (currentPosition > maxScrollPosition) {
        currentPosition -= itemWidth;
        portfolioItems.style.transform = `translateX(${currentPosition}px)`;
        updateArrowVisibility();
    }
});
