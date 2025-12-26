// Browse Page JavaScript

let currentFilter = 'all';

// Get URL parameter for category
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
}

// Render category section
function renderCategorySection(categoryKey, categoryName) {
    const videos = getVideosByCategory(categoryKey);
    
    if (videos.length === 0) return '';
    
    return `
        <div class="category-section" data-category="${categoryKey}">
            <div class="category-full-header">
                <h2 class="category-full-title">${categoryName}</h2>
            </div>
            <div class="browse-grid">
                ${videos.map(video => `
                    <div class="featured-card" onclick="playVideo('${video.id}')">
                        <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/640x360/1a1a1a/ff4757?text=${encodeURIComponent(video.title)}'">
                        <div class="featured-card-overlay">
                            <h3 class="featured-card-title">${video.title}</h3>
                            <p class="featured-card-meta">${video.year} • ${video.category}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render all categories
function renderAllCategories() {
    const container = document.getElementById('browseContainer');
    
    const categories = [
        { key: 'classicFilms', name: 'Classic Films' },
        { key: 'horror', name: 'Horror' },
        { key: 'documentaries', name: 'Documentaries' },
        { key: 'anime', name: 'Anime' },
        { key: 'retro', name: 'Retro Programming' },
        { key: 'indie', name: 'Indie Films' }
    ];
    
    const html = categories.map(cat => renderCategorySection(cat.key, cat.name)).join('');
    
    if (html === '') {
        container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 3rem;">No content available yet. Add videos to your database!</p>';
    } else {
        container.innerHTML = html;
    }
}

// Filter content by category
function filterByCategory(category) {
    currentFilter = category;
    const sections = document.querySelectorAll('.category-section');
    
    sections.forEach(section => {
        if (category === 'all') {
            section.style.display = 'block';
        } else {
            section.style.display = section.dataset.category === category ? 'block' : 'none';
        }
    });
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Play video function
function playVideo(videoId) {
    window.location.href = `watch.html?id=${videoId}`;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a category in the URL
    const categoryFromURL = getCategoryFromURL();
    
    // Render all categories
    renderAllCategories();
    
    // Apply filter if category in URL
    if (categoryFromURL && categoryFromURL !== 'all') {
        filterByCategory(categoryFromURL);
    }
    
    // Setup filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            filterByCategory(category);
            
            // Update URL without reload
            const newUrl = category === 'all' 
                ? 'browse.html' 
                : `browse.html?category=${category}`;
            window.history.pushState({}, '', newUrl);
        });
    });
    
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = prompt('Search for content:');
            if (query) {
                const results = searchVideos(query);
                if (results.length > 0) {
                    playVideo(results[0].id);
                } else {
                    alert('No results found for "' + query + '"');
                }
            }
        });
    }
});
