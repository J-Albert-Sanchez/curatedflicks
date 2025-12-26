// Main JavaScript for CuratedFlicks

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Populate Featured Section
function populateFeaturedSection() {
    const featuredGrid = document.getElementById('featuredGrid');
    const featuredVideos = getFeaturedVideos();
    
    if (featuredVideos.length === 0) {
        featuredGrid.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">No featured content available yet. Add featured videos to your database!</p>';
        return;
    }
    
    featuredGrid.innerHTML = featuredVideos.map(video => `
        <div class="featured-card" onclick="playVideo('${video.id}')">
            <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/640x360/1a1a1a/ff4757?text=${encodeURIComponent(video.title)}'">
            <div class="featured-card-overlay">
                <h3 class="featured-card-title">${video.title}</h3>
                <p class="featured-card-meta">${video.year} • ${video.category}</p>
            </div>
        </div>
    `).join('');
}

// Populate Category Rows
function populateCategoryRow(categoryKey, elementId) {
    const slider = document.getElementById(elementId);
    const videos = getVideosByCategory(categoryKey);
    
    if (videos.length === 0) {
        slider.innerHTML = '<p style="color: var(--text-secondary); padding: 2rem;">No content in this category yet.</p>';
        return;
    }
    
    slider.innerHTML = videos.map(video => `
        <div class="content-card" onclick="playVideo('${video.id}')">
            <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/480x270/1a1a1a/ff4757?text=${encodeURIComponent(video.title)}'">
            <div class="content-card-overlay">
                <h4 class="content-card-title">${video.title}</h4>
                <p class="content-card-year">${video.year}</p>
            </div>
        </div>
    `).join('');
}

// Play Video Function
function playVideo(videoId) {
    window.location.href = `watch.html?id=${videoId}`;
}

// Horizontal scroll for category rows
function initializeSliderScroll() {
    const sliders = document.querySelectorAll('.content-slider');
    
    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });
        
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Populate featured section
    populateFeaturedSection();
    
    // Populate all category rows
    populateCategoryRow('classicFilms', 'classicFilms');
    populateCategoryRow('horror', 'horror');
    populateCategoryRow('documentaries', 'documentaries');
    populateCategoryRow('anime', 'anime');
    populateCategoryRow('retro', 'retro');
    populateCategoryRow('indie', 'indie');
    
    // Initialize slider scroll functionality
    initializeSliderScroll();
    
    // Add grab cursor to sliders
    document.querySelectorAll('.content-slider').forEach(slider => {
        slider.style.cursor = 'grab';
    });
});

// Search button functionality (placeholder)
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = prompt('Search for content:');
        if (query) {
            const results = searchVideos(query);
            if (results.length > 0) {
                // For now, just go to the first result
                playVideo(results[0].id);
            } else {
                alert('No results found for "' + query + '"');
            }
        }
    });
}
