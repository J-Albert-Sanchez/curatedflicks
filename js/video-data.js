// VIDEO DATA STRUCTURE
// Add your curated YouTube videos here following this format

const videoDatabase = {
    // CLASSIC FILMS
    classicFilms: [
        {
            id: "cf001",
            title: "Metropolis",
            youtubeId: "_q25QpZXfoU",
            year: 1927,
            category: "classic-films",
            subcategory: "sci-fi",
            description: "Fritz Lang's groundbreaking silent sci-fi masterpiece depicting a futuristic city divided between wealthy industrialists and oppressed workers.",
            thumbnail: "https://img.youtube.com/vi/_q25QpZXfoU/maxresdefault.jpg",
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
            thumbnail: "https://img.youtube.com/vi/FC6jFoYm3xs/hqdefault.jpg",
            featured: false
        },

         {
            id: "h002",
            title: "Night of the Living Dead",
            youtubeId: "J7Yvhe5fKmM",
            year: 1968,
            category: "classic-films",
            subcategory: "horror",
            description: "A group of people hide from bloodthirsty zombies in a farmhouse.",
            thumbnail: "https://img.youtube.com/vi/J7Yvhe5fKmM/maxresdefault.jpg",
            featured: true
        },

            {
            id: "h003",
            title: "Carnival of Souls",
            youtubeId: "vNYg4YWkp0k", // Search: "Carnival of Souls 1962 full movie" (Runtime: 78 min)
            year: 1962,
            category: "horror",
            subcategory: "psychological",
            description: "After a traumatic accident, a young woman moves to Utah and takes a job as a church organist, but she's haunted by a ghoulish figure and drawn to an abandoned lakeside pavilion. Herk Harvey's atmospheric indie horror masterpiece influenced filmmakers like George Romero and David Lynch.",
            thumbnail: "https://img.youtube.com/vi/vNYg4YWkp0k/hqdefault.jpg",
            featured: true
        },


 	{
            id: "h004",
            title: "House on Haunted Hill | Vincent Price",
            youtubeId: "09w7isSx650",
            year: 1959,
            category: "horror",
            subcategory: "classic",
            description: "Vincent Price stars as an eccentric millionaire who offers guests $10,000 to spend the night in a haunted mansion.",
            thumbnail: "https://img.youtube.com/vi/09w7isSx650/maxresdefault.jpg",
            featured: true
	},
	{
            id: "h005",
            title: "VIY",
            youtubeId: "4YmQn6q36HQ",
            year: 1967,
            category: "horror",
            subcategory: "folk-horror",
            description: "Soviet folk horror classic based on Gogol's story about a student who must pray over a witch's corpse for three nights.",
            thumbnail: "https://img.youtube.com/vi/4YmQn6q36HQ/maxresdefault.jpg",
            featured: true
	}



        // Add more horror films here
    ],

    // DOCUMENTARIES
    documentaries: [
    {
        id: "d001",
        title: "The Corporation",
        youtubeId: "6v8e7dUwq_Q",
        year: 2003,
        category: "documentaries",
        subcategory: "business",
        description: "Documentary examining the modern-day corporation.",
        thumbnail: "https://img.youtube.com/vi/6v8e7dUwq_Q/hqdefault.jpg",
        featured: true
    },
    {
        id: "d002",
        title: "United States of Secrets, Part One",
        youtubeId: "kaUemcqIQ-k",
        year: 2014,
        category: "documentaries",
        subcategory: "surveillance",
        description: "FRONTLINE investigates the secret history of the unprecedented surveillance program that began in the wake of September 11th.",
        thumbnail: "https://img.youtube.com/vi/kaUemcqIQ-k/maxresdefault.jpg",
        featured: false
    },
    {
        id: "d003",
        title: "United States of Secrets, Part Two",
        youtubeId: "rs2iN0oVdt4",
        year: 2014,
        category: "documentaries",
        subcategory: "surveillance",
        description: "FRONTLINE continues the investigation into the secret history of government surveillance and privacy in the digital age.",
        thumbnail: "https://img.youtube.com/vi/rs2iN0oVdt4/maxresdefault.jpg",
        featured: false
    },
    {
        id: "d004",
        title: "Snowden: An Enemy of the State?",
        youtubeId: "i4eVRPwq-XI",
        year: 2016,
        category: "documentaries",
        subcategory: "surveillance",
        description: "Full documentary examining Edward Snowden's revelations about NSA surveillance programs and their impact.",
        thumbnail: "https://img.youtube.com/vi/i4eVRPwq-XI/maxresdefault.jpg",
        featured: true
    },
    {
        id: "d005",
        title: "A.I. Revolution",
        youtubeId: "-sB12gk9ESA",
        year: 2023,
        category: "documentaries",
        subcategory: "technology",
        description: "NOVA explores the revolutionary developments in artificial intelligence and their implications for society.",
        thumbnail: "https://img.youtube.com/vi/-sB12gk9ESA/maxresdefault.jpg",
        featured: true
    },
    {
        id: "d006",
        title: "Dark Sides of Artificial Intelligence",
        youtubeId: "LgUjLcxJxVg",
        year: 2024,
        category: "documentaries",
        subcategory: "technology",
        description: "60 Minutes investigates the potential dangers and ethical concerns surrounding artificial intelligence development.",
        thumbnail: "https://img.youtube.com/vi/LgUjLcxJxVg/maxresdefault.jpg",
        featured: false
    },
    {
        id: "d007",
        title: "OpenAI's Sam Altman Talks ChatGPT, AI Agents and Superintelligence",
        youtubeId: "5MWT_doo68k",
        year: 2025,
        category: "documentaries",
        subcategory: "technology",
        description: "Live at TED2025, Sam Altman discusses the future of AI, ChatGPT development, and the path to superintelligence.",
        thumbnail: "https://img.youtube.com/vi/5MWT_doo68k/maxresdefault.jpg",
        featured: false
    },
    {
        id: "d008",
        title: "Inside OpenAI's Stargate Megafactory with Sam Altman",
        youtubeId: "GhIJs4zbH0o",
        year: 2025,
        category: "documentaries",
        subcategory: "technology",
        description: "The Circuit takes you inside OpenAI's massive Stargate facility with CEO Sam Altman.",
        thumbnail: "https://img.youtube.com/vi/GhIJs4zbH0o/maxresdefault.jpg",
        featured: false
    },
    {
        id: "d009",
        title: "2000 Meters to Andriivka",
        youtubeId: "Nf4Cgy56slU",
        year: 2024,
        category: "documentaries",
        subcategory: "war",
        description: "FRONTLINE documentary providing an intimate look at the Ukrainian counteroffensive and the battle for Andriivka.",
        thumbnail: "https://img.youtube.com/vi/Nf4Cgy56slU/maxresdefault.jpg",
        featured: false
    },
    {
        id: "d010",
        title: "Antidote",
        youtubeId: "ZgDy0UMyieQ",
        year: 2024,
        category: "documentaries",
        subcategory: "health",
        description: "FRONTLINE explores innovative approaches to addressing the opioid crisis and addiction treatment.",
        thumbnail: "https://img.youtube.com/vi/ZgDy0UMyieQ/maxresdefault.jpg",
        featured: false
    },
    {
        id: "d011",
        title: "The Thinking Game",
        youtubeId: "d95J8yzvjbQ",
        year: 2023,
        category: "documentaries",
        subcategory: "education",
        description: "Tribeca Film Festival official selection exploring critical thinking and problem-solving in education.",
        thumbnail: "https://img.youtube.com/vi/d95J8yzvjbQ/maxresdefault.jpg",
        featured: false
    },
    {
        id: "d012",
        title: "Your Brain: Who's in Control?",
        youtubeId: "yQ6VOOd73MA",
        year: 2023,
        category: "documentaries",
        subcategory: "science",
        description: "NOVA investigates the latest neuroscience research revealing how our brains make decisions and who's really in control.",
        thumbnail: "https://img.youtube.com/vi/yQ6VOOd73MA/maxresdefault.jpg",
        featured: false
    },

        // Add more documentaries here
    ],

    // ANIME
    anime: [
    {
        id: "a001",
        title: "Interstella 5555",
        youtubeId: "FGBhQbmPwH8",
        year: 2003,
        category: "anime",
        subcategory: "music",
        description: "Daft Punk's animated musical film following an alien band kidnapped and brought to Earth.",
        thumbnail: "https://img.youtube.com/vi/FGBhQbmPwH8/maxresdefault.jpg",
        featured: true
    },
    {
        id: "a002",
        title: "Gachiakuta Episode 1 SUB/DUB | The Sphere",
        youtubeId: "D261aPLKOuk",
        year: 2025,
        category: "anime",
        subcategory: "action",
        description: "A boy cast into a trash-filled abyss discovers dark powers in this dystopian action series.",
        thumbnail: "https://img.youtube.com/vi/D261aPLKOuk/maxresdefault.jpg",
        featured: false
    },
    {
        id: "a003",
        title: "Gachiakuta Episode 2 SUB/DUB | The Inhabited",
        youtubeId: "RzEr05A7vqM",
        year: 2025,
        category: "anime",
        subcategory: "action",
        description: "The journey continues as secrets of the trash pit world begin to unfold.",
        thumbnail: "https://img.youtube.com/vi/RzEr05A7vqM/maxresdefault.jpg",
        featured: false
    },
    {
        id: "a004",
        title: "Gachiakuta Episode 3 SUB/DUB | The Ground",
        youtubeId: "ZrviaMNxnBk",
        year: 2025,
        category: "anime",
        subcategory: "action",
        description: "New allies and enemies emerge in the brutal world beneath the surface.",
        thumbnail: "https://img.youtube.com/vi/ZrviaMNxnBk/maxresdefault.jpg",
        featured: false
    },
    {
        id: "a005",
        title: "Nyaight of the Living Cat Episode 1 SUB/DUB | Everything Becomes Cat",
        youtubeId: "f-8ZaR61MUw",
        year: 2024,
        category: "anime",
        subcategory: "horror-comedy",
        description: "A zombie apocalypse with a twist—everyone turns into cats in this darkly comedic horror series.",
        thumbnail: "https://img.youtube.com/vi/f-8ZaR61MUw/maxresdefault.jpg",
        featured: false
    },
    {
        id: "a006",
        title: "Gleipnir Episode 1 | Something Inside of Me",
        youtubeId: "6J5frcleBhY",
        year: 2020,
        category: "anime",
        subcategory: "psychological-horror",
        description: "A high school student discovers he can transform into a monster mascot costume in this dark supernatural thriller.",
        thumbnail: "https://img.youtube.com/vi/6J5frcleBhY/maxresdefault.jpg",
        featured: true
    },
    {
        id: "a007",
        title: "PSYCHO-PASS Episode 1 | Crime Coefficient",
        youtubeId: "g6CrXYzbWXU",
        year: 2012,
        category: "anime",
        subcategory: "sci-fi",
        description: "In a dystopian future, a system can quantify criminal intent before crimes are committed.",
        thumbnail: "https://img.youtube.com/vi/g6CrXYzbWXU/maxresdefault.jpg",
        featured: true
    }
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
