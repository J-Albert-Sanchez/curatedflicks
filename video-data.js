// VIDEO DATA STRUCTURE
// Add your curated YouTube videos here following this format

const videoDatabase = {
    // CLASSIC FILMS
    classicFilms: [
        {
            id: "cf001",
            title: "Night of the Living Dead",
            youtubeId: "H9H2X6MTG1I",
            year: 1968,
            category: "classic-films",
            subcategory: "horror",
            description: "A group of people hide from bloodthirsty zombies in a farmhouse.",
            thumbnail: "https://img.youtube.com/vi/H9H2X6MTG1I/maxresdefault.jpg",
            featured: true
        },
        {
            id: "cf002",
            title: "The General",
            youtubeId: "xOrgY3qMzuU",
            year: 1926,
            category: "classic-films",
            subcategory: "comedy",
            description: "Buster Keaton's masterpiece about a train engineer during the Civil War.",
            thumbnail: "https://img.youtube.com/vi/xOrgY3qMzuU/maxresdefault.jpg",
            featured: false
        },
        // Add more classic films here
    ],

    // HORROR
    horror: [
        {
            id: "h001",
            title: "Nosferatu",
            youtubeId: "FC6jFoYm3xs",
            year: 1922,
            category: "horror",
            subcategory: "vampire",
            description: "The classic silent vampire film.",
            thumbnail: "https://img.youtube.com/vi/FC6jFoYm3xs/maxresdefault.jpg",
            featured: false
        },
        // Add more horror films here
    ],

    // DOCUMENTARIES
    documentaries: [
        {
            id: "d001",
            title: "The Corporation",
            youtubeId: "zpQYsk-8dWg",
            year: 2003,
            category: "documentaries",
            subcategory: "business",
            description: "Documentary examining the modern-day corporation.",
            thumbnail: "https://img.youtube.com/vi/zpQYsk-8dWg/maxresdefault.jpg",
            featured: true
        },
        // Add more documentaries here
    ],

    // ANIME
    anime: [
        {
            id: "a001",
            title: "Interstella 5555",
            youtubeId: "3Qxe-QOp_-s",
            year: 2003,
            category: "anime",
            subcategory: "music",
            description: "Daft Punk's animated musical film.",
            thumbnail: "https://img.youtube.com/vi/3Qxe-QOp_-s/maxresdefault.jpg",
            featured: false
        },
        // Add more anime here
    ],

    // RETRO PROGRAMMING
    retro: [
        {
            id: "r001",
            title: "80s Commercials Compilation",
            youtubeId: "example123",
            year: 1985,
            category: "retro",
            subcategory: "commercials",
            description: "Nostalgic collection of 1980s TV commercials.",
            thumbnail: "https://img.youtube.com/vi/example123/maxresdefault.jpg",
            featured: false
        },
        // Add more retro content here
    ],

    // INDIE FILMS
    indie: [
        {
            id: "i001",
            title: "Example Indie Film",
            youtubeId: "example456",
            year: 2020,
            category: "indie",
            subcategory: "drama",
            description: "An independent film available on YouTube.",
            thumbnail: "https://img.youtube.com/vi/example456/maxresdefault.jpg",
            featured: false
        },
        // Add more indie films here
    ]
};

// ADDITIONAL CATEGORIES TO IMPLEMENT
// You can add these following the same structure:
// - sciFi: []
// - fantasy: []
// - comedy: []
// - action: []
// - westerns: []
// - crime: []
// - webSeries: []
// - musicVideos: []
// - shortFilms: []

// Helper function to get all featured videos
function getFeaturedVideos() {
    const allVideos = Object.values(videoDatabase).flat();
    return allVideos.filter(video => video.featured);
}

// Helper function to get videos by category
function getVideosByCategory(category) {
    return videoDatabase[category] || [];
}

// Helper function to get video by ID
function getVideoById(id) {
    const allVideos = Object.values(videoDatabase).flat();
    return allVideos.find(video => video.id === id);
}

// Helper function to search videos
function searchVideos(query) {
    const allVideos = Object.values(videoDatabase).flat();
    const searchTerm = query.toLowerCase();
    return allVideos.filter(video => 
        video.title.toLowerCase().includes(searchTerm) ||
        video.description.toLowerCase().includes(searchTerm) ||
        video.category.toLowerCase().includes(searchTerm)
    );
}
