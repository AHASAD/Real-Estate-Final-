// function toggleFilter(filterId) {
//     const filterContent = document.getElementById(filterId);
//     const arrow = filterContent.previousElementSibling.querySelector('.arrow');
    
//     if (filterContent.style.display === 'none') {
//         filterContent.style.display = 'flex';
//         arrow.style.transform = 'rotate(180deg)';
//     } else {
//         filterContent.style.display = 'none';
//         arrow.style.transform = 'rotate(0)';
//     }
// }

// function toggleSort() {
//     const sortMenu = document.getElementById('sortMenu');
//     sortMenu.classList.toggle('active');
// }

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

// Initialize filters
document.addEventListener('DOMContentLoaded', () => {
    // Show city filter by default
    document.getElementById('city-filter').style.display = 'flex';
    // Hide property type filter by default
    document.getElementById('property-type-filter').style.display = 'none';
});


function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const header = content.previousElementSibling;
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        header.classList.remove('collapsed');
    } else {
        content.style.display = 'none';
        header.classList.add('collapsed');
    }
}

// BHK chip selection
document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        chip.classList.toggle('active');
    });
});

// Initialize budget slider
const budgetSlider = document.getElementById('budgetSlider');
if (budgetSlider) {
    budgetSlider.addEventListener('input', function() {
        // Add any custom slider logic here
    });
}

 // scroll start
 window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // scroll End