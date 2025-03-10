document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            nav.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });

    // Close mobile menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });
});

// Close sort menu when clicking outside
document.addEventListener('click', (e) => {
    const sortMenu = document.getElementById('sortMenu');
    const sortButton = document.querySelector('.sort-button');
    
    if (!sortButton.contains(e.target)) {
        sortMenu.classList.remove('active');
    }
});


// img card

function viewMore() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
    `;

    modalContent.innerHTML = `
        <h2 style="color: #333;">Diamond Apartment Details</h2>
        <p><strong>Location:</strong> Prime City Center</p>
        <p><strong>Price:</strong> $1,500/month</p>
        <p><strong>Bedrooms:</strong> 2</p>
        <p><strong>Bathrooms:</strong> 2</p>
        <p><strong>Square Feet:</strong> 1,200</p>
        <p><strong>Features:</strong> Modern kitchen, balcony, parking space</p>
        <button style="
            background-color: orange;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            position: absolute;
            top: 10px;
            right: 10px;
        " onclick="closeModal(this)">Close</button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function closeModal(button) {
    button.closest('div').parentElement.remove();
} // scroll start
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// scroll End


