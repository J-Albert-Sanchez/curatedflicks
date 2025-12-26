# CuratedFlicks - Free Streaming, Handpicked

A Netflix-style curated streaming website showcasing handpicked free content from YouTube. No piracy, no ripping—just embedded YouTube videos presented in a beautiful, discoverable interface.

## 🎬 Features

- **Netflix-Style Interface**: Beautiful, responsive design inspired by modern streaming platforms
- **Curated Content**: Handpicked videos organized by category
- **YouTube Embeds**: All content uses official YouTube embed API
- **Mobile Responsive**: Works perfectly on desktop, tablet, and mobile
- **AdSense Ready**: Placeholder sections for monetization
- **Easy to Customize**: Simple data structure for adding content

## 📁 File Structure

```
curatedflicks/
├── index.html              # Homepage
├── browse.html             # Browse all categories
├── watch.html              # Video player page
├── about.html              # About page
├── css/
│   ├── style.css           # Main styles
│   ├── video-player.css    # Player-specific styles
│   └── responsive.css      # Mobile/tablet responsive styles
├── js/
│   ├── video-data.js       # YOUR VIDEO DATABASE (edit this!)
│   ├── main.js             # Homepage functionality
│   ├── browse.js           # Browse page functionality
│   └── player.js           # Video player functionality
└── README.md               # This file
```

## 🚀 Getting Started

### 1. Add Your Curated Videos

Open `js/video-data.js` and add your YouTube videos following this format:

```javascript
{
    id: "unique-id-001",
    title: "Video Title",
    youtubeId: "YouTube_Video_ID",  // From the YouTube URL
    year: 2020,
    category: "horror",             // Must match category key
    subcategory: "psychological",
    description: "Video description",
    thumbnail: "https://img.youtube.com/vi/YouTube_Video_ID/maxresdefault.jpg",
    featured: false  // Set to true to feature on homepage
}
```

**How to get YouTube Video ID:**
- From URL: `https://www.youtube.com/watch?v=H9H2X6MTG1I` 
- The ID is: `H9H2X6MTG1I`

**Available Categories:**
- `classicFilms`
- `horror`
- `documentaries`
- `anime`
- `retro`
- `indie`

You can add more categories by following the existing pattern.

### 2. Customize Your Site

**Change Site Name/Branding:**
- Edit the logo text in the navbar (`<a href="index.html" class="logo">CuratedFlicks</a>`)
- Update the hero title in `index.html`
- Update footer branding
- Update page titles in `<title>` tags

**Change Colors:**
Edit CSS variables in `css/style.css`:
```css
:root {
    --accent-primary: #ff4757;      /* Main accent color */
    --accent-secondary: #ffa502;    /* Secondary accent */
    /* ... other colors */
}
```

**Add New Categories:**
1. Add category data to `js/video-data.js`
2. Add category row to `index.html`
3. Add filter button to `browse.html`
4. Add category to the arrays in `browse.js`

### 3. Deploy Your Site

**Option 1: Netlify (Recommended)**
1. Push your code to GitHub
2. Connect to Netlify
3. Deploy (it's automatic!)
4. Free SSL included

**Option 2: GitHub Pages**
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Site will be live at `username.github.io/repo-name`

**Option 3: Vercel**
1. Import from GitHub
2. Deploy with one click
3. Free hosting and SSL

### 4. Add AdSense

Replace the ad placeholder sections with your actual AdSense code:

```html
<!-- Find this in HTML files: -->
<div class="ad-placeholder">
    <!-- Replace with your AdSense code -->
    <p>Advertisement</p>
</div>

<!-- Replace with: -->
<div class="ad-placeholder">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- Your ad unit -->
    <ins class="adsbygoogle" ...></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

## 🎨 Customization Tips

### Adding More Categories

To add a new category like "Sci-Fi":

1. **In `video-data.js`:**
```javascript
sciFi: [
    {
        id: "sf001",
        title: "Example Sci-Fi Film",
        // ... rest of video data
    }
]
```

2. **In `index.html`:** Add a new category row section

3. **In `browse.html`:** Add filter button and update browse.js category array

### Changing Fonts

Current fonts:
- Display (titles): Bebas Neue
- Body: Crimson Pro

To change, update the Google Fonts link and CSS variables in the HTML files.

### Custom Thumbnails

By default, thumbnails are pulled from YouTube. To use custom thumbnails:
1. Create an `assets/images/thumbnails/` folder
2. Upload custom images
3. Update the `thumbnail` field in video data

## 📝 Content Guidelines

### Legal & Ethical
- Only embed videos using YouTube's official embed feature
- Ensure content is legitimately available (public domain, creative commons, or official uploads)
- Always credit original creators
- Don't embed videos that disable embedding

### Quality Curation
- Focus on quality over quantity
- Write descriptive, accurate descriptions
- Organize thoughtfully by category
- Test videos to ensure they play properly

### Best Practices
- Check for broken videos periodically
- Update descriptions with accurate information
- Feature your best content on the homepage
- Keep categories balanced (don't overload one category)

## 🔧 Technical Notes

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

### Performance
- Lazy loading for images
- Minimal JavaScript for fast load times
- CSS-only animations where possible

### SEO
- Semantic HTML structure
- Meta descriptions on all pages
- Proper heading hierarchy
- Alt text for images

## 📱 Mobile Optimization

The site is fully responsive with:
- Touch-friendly interface
- Optimized layouts for all screen sizes
- Mobile-first approach
- Fast load times on cellular connections

## ❓ FAQ

**Q: Can I monetize this site?**
A: Yes! The site includes AdSense placeholders. Just add your AdSense code.

**Q: Is this legal?**
A: Yes! You're using YouTube's official embed API, which is completely legitimate.

**Q: How many videos should I add?**
A: Start with 20-30 quality videos across categories, then grow organically.

**Q: Can I add user accounts?**
A: This is a front-end only site. User accounts would require backend development.

**Q: What if a video gets taken down?**
A: YouTube embeds will show an error. Check and remove broken videos periodically.

## 🎯 Next Steps

1. **Add your content** - Start curating quality YouTube videos
2. **Customize the design** - Make it your own with colors, fonts, branding
3. **Deploy the site** - Get it live on Netlify, Vercel, or GitHub Pages
4. **Add AdSense** - Start monetizing (after you have content and traffic)
5. **Promote** - Share your curated collection with the world!

## 📄 License

This is a template for your use. Customize freely!

All YouTube content remains the property of original creators.

---

**Built with ❤️ for content curators everywhere**
