// Player Page JavaScript

// Get video ID from URL
function getVideoIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load and display video
function loadVideo() {
    const videoId = getVideoIdFromURL();
    
    if (!videoId) {
        showError('No video specified');
        return;
    }
    
    const video = getVideoById(videoId);
    
    if (!video) {
        showError('Video not found');
        return;
    }
    
    // Update page title
    document.title = `${video.title} - CuratedFlicks`;
    
    // Create YouTube iframe
    const videoWrapper = document.getElementById('videoWrapper');
    videoWrapper.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${video.youtubeId}?rel=0" 
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
        </iframe>
    `;
    
    // Update video info
    document.getElementById('videoTitle').textContent = video.title;
    document.getElementById('videoDescription').textContent = video.description;
    
    const metaHtml = `
        <span class="video-year">${video.year}</span>
        <span class="video-category">${formatCategory(video.category)}</span>
    `;
    document.getElementById('videoMeta').innerHTML = metaHtml;
    
    // Update YouTube link
    const youtubeLink = document.getElementById('watchOnYouTube');
    youtubeLink.href = `https://www.youtube.com/watch?v=${video.youtubeId}`;
    
    // Load related content
    loadRelatedContent(video.category, video.id);
}

// Format category name
function formatCategory(category) {
    const categoryMap = {
        'classicFilms': 'Classic Films',
        'horror': 'Horror',
        'documentaries': 'Documentaries',
        'anime': 'Anime',
        'retro': 'Retro Programming',
        'indie': 'Indie Films',
        'sciFi': 'Sci-Fi',
        'fantasy': 'Fantasy',
        'comedy': 'Comedy',
        'action': 'Action'
    };
    return categoryMap[category] || category;
}

// Load related content
function loadRelatedContent(category, currentVideoId) {
    const relatedContainer = document.getElementById('relatedContent');
    const videos = getVideosByCategory(category);
    
    // Filter out current video and limit to 10
    const relatedVideos = videos
        .filter(v => v.id !== currentVideoId)
        .slice(0, 10);
    
    if (relatedVideos.length === 0) {
        relatedContainer.innerHTML = '<p style="color: var(--text-secondary); padding: 2rem;">No related content available.</p>';
        return;
    }
    
    relatedContainer.innerHTML = relatedVideos.map(video => `
        <div class="content-card" onclick="navigateToVideo('${video.id}')">
            <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/480x270/1a1a1a/ff4757?text=${encodeURIComponent(video.title)}'">
            <div class="content-card-overlay">
                <h4 class="content-card-title">${video.title}</h4>
                <p class="content-card-year">${video.year}</p>
            </div>
        </div>
    `).join('');
    
    // Make slider scrollable
    relatedContainer.style.cursor = 'grab';
}

// Navigate to another video
function navigateToVideo(videoId) {
    window.location.href = `watch.html?id=${videoId}`;
}

// Show error message
function showError(message) {
    const videoWrapper = document.getElementById('videoWrapper');
    const container = document.querySelector('.player-container');
    
    container.innerHTML = `
        <div class="error-message">
            <h2>Oops!</h2>
            <p>${message}</p>
            <a href="browse.html" class="btn btn-primary">Browse Content</a>
        </div>
    `;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadVideo();
    
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = prompt('Search for content:');
            if (query) {
                const results = searchVideos(query);
                if (results.length > 0) {
                    navigateToVideo(results[0].id);
                } else {
                    alert('No results found for "' + query + '"');
                }
            }
        });
    }
});
