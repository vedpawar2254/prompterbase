// Sample prompts data for PrompterBase
// Categories: website, image, video

export const prompts = [
    // ===== WEBSITE PROMPTS =====
    {
        id: "web-001",
        title: "Modern SaaS Landing Page",
        category: "website",
        tool: "v0",
        prompt: `Create a modern SaaS landing page for a project management tool called "Flowline". Include:
- Hero section with gradient background, headline, subheadline, and CTA button
- Features grid with 6 key features using icons
- Pricing section with 3 tiers (Starter, Pro, Enterprise)
- Testimonials carousel with 3 customer quotes
- Footer with links and newsletter signup
Use a purple and blue color scheme, modern typography, and subtle animations.`,
        tags: ["saas", "landing", "startup", "pricing"],
        quality: 5,
        author: "community",
    },
    {
        id: "web-002",
        title: "E-commerce Product Page",
        category: "website",
        tool: "v0",
        prompt: `Build a premium e-commerce product page for a high-end wireless headphone. Include:
- Large product image gallery with zoom functionality
- Product title, price (with discount display), and ratings
- Color/size selectors with visual feedback
- Add to cart button with quantity selector
- Tabbed section for Description, Specifications, Reviews
- Related products carousel
Dark mode design with gold accents. Luxury aesthetic.`,
        tags: ["ecommerce", "product", "luxury", "shop"],
        quality: 5,
        author: "community",
    },
    {
        id: "web-003",
        title: "Developer Portfolio",
        category: "website",
        tool: "lovable",
        prompt: `Create a minimal developer portfolio website with:
- Animated hero with name, title, and typewriter effect for skills
- About section with profile photo and bio
- Projects grid with hover effects showing tech stack and links
- Skills section with animated progress bars
- Contact form with validation
- Dark theme with neon green accents (#00FF88)
Make it feel modern, clean, and impressive for recruiters.`,
        tags: ["portfolio", "developer", "minimal", "dark"],
        quality: 5,
        author: "community",
    },
    {
        id: "web-004",
        title: "Restaurant Booking System",
        category: "website",
        tool: "v0",
        prompt: `Design a restaurant website with online booking for "Sakura Gardens" Japanese restaurant:
- Hero with full-width food photography and reservation CTA
- Menu section with categories (Sushi, Ramen, Appetizers) and prices
- Gallery with masonry layout
- Booking form: date picker, time selector, party size, special requests
- Location map and contact info
- Warm, elegant color palette with red and cream accents.`,
        tags: ["restaurant", "booking", "food", "elegant"],
        quality: 4,
        author: "community",
    },
    {
        id: "web-005",
        title: "Fitness Dashboard",
        category: "website",
        tool: "v0",
        prompt: `Create a fitness tracking dashboard with:
- Sidebar navigation (Dashboard, Workouts, Nutrition, Progress, Settings)
- Stats cards showing calories, steps, active minutes, heart rate
- Weekly activity chart (bar chart)
- Today's workout plan with exercise list
- Recent achievements/badges section
- Dark mode with vibrant orange and teal accents
Focus on clean data visualization and motivational design.`,
        tags: ["dashboard", "fitness", "health", "charts"],
        quality: 5,
        author: "community",
    },
    {
        id: "web-006",
        title: "Event Landing Page",
        category: "website",
        tool: "lovable",
        prompt: `Build a landing page for a tech conference "DevCon 2025":
- Countdown timer to event date
- Hero with event title, date, location, and register button
- Speakers section with photos and bios
- Schedule/agenda with collapsible day sections
- Sponsors logo grid
- Ticket pricing with early bird discount
- FAQ accordion
Futuristic design with dark background and neon blue gradients.`,
        tags: ["event", "conference", "tech", "countdown"],
        quality: 4,
        author: "community",
    },
    {
        id: "web-007",
        title: "Real Estate Listings",
        category: "website",
        tool: "v0",
        prompt: `Create a real estate property listings page with:
- Search bar with filters (location, price range, bedrooms, property type)
- Map view toggle
- Property cards with image, price, bedrooms/baths, square footage
- Saved/favorite functionality icons
- Pagination or infinite scroll
- Property detail modal with full gallery
Clean, professional design with blue and white color scheme.`,
        tags: ["realestate", "listings", "property", "search"],
        quality: 4,
        author: "community",
    },
    {
        id: "web-008",
        title: "Podcast Website",
        category: "website",
        tool: "lovable",
        prompt: `Design a podcast website for "The Creative Mind":
- Hero with podcast artwork, title, and subscribe buttons (Apple, Spotify)
- Latest episode player with waveform visualization
- Episode list with thumbnails, dates, durations, and play buttons
- Host bio section with social links
- Newsletter signup
- Reviews/ratings display
Warm, creative aesthetic with orange and purple gradients.`,
        tags: ["podcast", "audio", "creative", "media"],
        quality: 4,
        author: "community",
    },
    {
        id: "web-009",
        title: "NFT Marketplace",
        category: "website",
        tool: "v0",
        prompt: `Create an NFT marketplace homepage:
- Hero with featured collection showcase
- Trending NFTs grid with hover flip animation
- Top collections leaderboard with 24h volume
- Categories filter (Art, Music, Gaming, Photography)
- Create/Sell CTA section
- Live auction timer cards
Dark cyberpunk aesthetic with gradient neon borders and glow effects.`,
        tags: ["nft", "crypto", "marketplace", "web3"],
        quality: 5,
        author: "community",
    },
    {
        id: "web-010",
        title: "Learning Platform Dashboard",
        category: "website",
        tool: "v0",
        prompt: `Build an online learning platform student dashboard:
- Progress overview with courses in progress
- Course cards with thumbnails, progress bars, and continue button
- Weekly learning streak calendar
- Achievements and certificates section
- Recommended courses based on interests
- Sidebar with navigation and user profile
Clean, educational design with teal and white colors.`,
        tags: ["education", "dashboard", "learning", "courses"],
        quality: 4,
        author: "community",
    },
    {
        id: "web-011",
        title: "Startup Waitlist Page",
        category: "website",
        tool: "lovable",
        prompt: `Create a pre-launch waitlist page for an AI startup:
- Centered hero with logo, tagline, and animated gradient background
- Email input with "Join Waitlist" button
- Social proof: "1,234 people already waiting"
- 3 key features/benefits with icons
- FAQ section
- Footer with social links
Minimal, premium design with smooth animations.`,
        tags: ["waitlist", "startup", "prelaunch", "minimal"],
        quality: 5,
        author: "community",
    },
    {
        id: "web-012",
        title: "Blog Magazine Layout",
        category: "website",
        tool: "v0",
        prompt: `Design a modern blog/magazine homepage:
- Featured article hero with large image and overlay text
- Grid of recent articles with thumbnails and excerpts
- Category sidebar with popular tags
- Newsletter subscription card
- Author spotlight section
- Infinite scroll for article loading
Clean editorial design with elegant typography and white space.`,
        tags: ["blog", "magazine", "editorial", "articles"],
        quality: 4,
        author: "community",
    },

    // ===== IMAGE PROMPTS =====
    {
        id: "img-001",
        title: "Cyberpunk City Portrait",
        category: "image",
        tool: "midjourney",
        prompt: `Portrait of a young woman with short silver hair, wearing a futuristic leather jacket with neon blue LED strips, standing on a rainy rooftop at night. Tokyo-style cyberpunk city in the background with holographic billboards and flying cars. Dramatic lighting with neon pink and cyan reflections on wet surfaces. Cinematic composition, 8K, hyperrealistic, blade runner aesthetic --ar 2:3 --v 6`,
        tags: ["cyberpunk", "portrait", "futuristic", "neon"],
        quality: 5,
        author: "community",
    },
    {
        id: "img-002",
        title: "Minimalist Product Shot",
        category: "image",
        tool: "midjourney",
        prompt: `Minimalist product photography of a luxury perfume bottle on a white marble pedestal. Soft morning light from the left, subtle shadows. The bottle is made of frosted glass with gold accents. A single fresh white rose petal in the foreground. Clean white studio background with subtle gradient. Ultra high-end advertising quality --ar 4:5 --v 6`,
        tags: ["product", "minimal", "luxury", "advertising"],
        quality: 5,
        author: "community",
    },
    {
        id: "img-003",
        title: "Fantasy Landscape",
        category: "image",
        tool: "midjourney",
        prompt: `Epic fantasy landscape of floating islands connected by ancient stone bridges. Waterfalls cascading into clouds below. Massive ancient trees with glowing blue leaves growing on the islands. A lone traveler in a red cloak walking on a bridge in the distance. Golden hour lighting with dramatic god rays. Studio Ghibli meets Lord of the Rings aesthetic, matte painting style --ar 16:9 --v 6`,
        tags: ["fantasy", "landscape", "magical", "epic"],
        quality: 5,
        author: "community",
    },
    {
        id: "img-004",
        title: "3D Isometric Room",
        category: "image",
        tool: "dalle",
        prompt: `3D isometric view of a cozy home office room. Include a desk with a MacBook, mechanical keyboard, monitor with code on screen, and a steaming coffee mug. Bookshelves with plants, a comfortable ergonomic chair, and warm pendant lighting. Large window showing a city view at dusk. Soft pastel color palette with peach and mint accents. Cute, detailed, Pixar-style rendering.`,
        tags: ["3d", "isometric", "office", "cozy"],
        quality: 4,
        author: "community",
    },
    {
        id: "img-005",
        title: "AI Tech Abstract",
        category: "image",
        tool: "midjourney",
        prompt: `Abstract visualization of artificial intelligence and neural networks. Interconnected glowing nodes forming a human brain silhouette. Data streams flowing like rivers of light. Deep blue and violet color palette with electric cyan highlights. Sleek, futuristic, corporate tech aesthetic suitable for a website hero image. 8K resolution, clean design --ar 16:9 --v 6`,
        tags: ["abstract", "ai", "tech", "neural"],
        quality: 4,
        author: "community",
    },
    {
        id: "img-006",
        title: "Vintage Film Photography",
        category: "image",
        tool: "midjourney",
        prompt: `Candid street photography of a young couple walking through autumn leaves in Central Park. Shot on Kodak Portra 400 film with a vintage 50mm lens. Natural golden hour lighting, soft bokeh background. Warm color grading with slight film grain and subtle light leaks. Nostalgic, romantic mood. 35mm film aesthetic --ar 3:2 --v 6`,
        tags: ["vintage", "film", "romantic", "photography"],
        quality: 5,
        author: "community",
    },
    {
        id: "img-007",
        title: "Logo Icon Design",
        category: "image",
        tool: "dalle",
        prompt: `Modern minimalist logo icon for a cloud storage startup. Abstract geometric design combining a cloud shape with an upward arrow. Single gradient from purple (#8B5CF6) to cyan (#06B6D4). Clean vector style suitable for app icon and favicon. White background. Simple, memorable, scalable design.`,
        tags: ["logo", "icon", "startup", "minimal"],
        quality: 4,
        author: "community",
    },
    {
        id: "img-008",
        title: "Anime Character Design",
        category: "image",
        tool: "midjourney",
        prompt: `Full body character design of a magical girl warrior in anime style. She has long flowing pink hair with star accessories, wearing an elegant battle dress with white and gold colors. Holding a crystalline staff with a floating orb. Dynamic pose as if casting a spell. Sparkles and magical particles around her. Clean white background for reference sheet. Detailed anime art style --ar 2:3 --niji 5`,
        tags: ["anime", "character", "magical", "design"],
        quality: 5,
        author: "community",
    },
    {
        id: "img-009",
        title: "Food Photography",
        category: "image",
        tool: "midjourney",
        prompt: `Professional food photography of a gourmet burger on a rustic wooden board. Juicy beef patty with melted cheese, fresh lettuce, tomato, and special sauce dripping. Sesame seed brioche bun. Sweet potato fries scattered around. Moody dark background with dramatic side lighting. Steam rising from the burger. Ultra-detailed, appetizing, restaurant menu quality --ar 4:5 --v 6`,
        tags: ["food", "burger", "photography", "gourmet"],
        quality: 5,
        author: "community",
    },
    {
        id: "img-010",
        title: "App UI Mockup",
        category: "image",
        tool: "dalle",
        prompt: `Floating iPhone 15 Pro mockup displaying a meditation app interface. The app shows a calm purple gradient background with a minimal timer display, play button, and nature sounds options. Two additional phones floating behind at angles showing other screens. Soft studio lighting on white background with subtle shadows. Clean, professional product shot for App Store marketing.`,
        tags: ["mockup", "app", "ui", "phone"],
        quality: 4,
        author: "community",
    },

    // ===== VIDEO PROMPTS =====
    {
        id: "vid-001",
        title: "Logo Animation Intro",
        category: "video",
        tool: "runway",
        prompt: `Create a 5-second logo reveal animation for a tech startup. Start with particles of light converging from all directions into the center of the frame. The particles form the logo shape in an explosion of energy. Logo settles with a subtle glow effect. Dark background with electric blue (#06B6D4) and purple (#8B5CF6) color scheme. Smooth, professional motion. 4K quality.`,
        tags: ["logo", "animation", "intro", "particles"],
        quality: 5,
        author: "community",
    },
    {
        id: "vid-002",
        title: "Product Showcase 360",
        category: "video",
        tool: "runway",
        prompt: `Generate a 10-second 360-degree rotating product showcase of a pair of premium wireless earbuds. Start with the charging case closed, then it opens automatically revealing the earbuds. One earbud levitates out and rotates to show all angles. Soft gradient background shifting from white to light gray. Professional studio lighting with reflections. Smooth, slow motion.`,
        tags: ["product", "360", "showcase", "tech"],
        quality: 4,
        author: "community",
    },
    {
        id: "vid-003",
        title: "App Demo Animation",
        category: "video",
        tool: "sora",
        prompt: `Create a 15-second app demo video for a fitness tracking app. Show a 3D phone floating in space with the app open. Demonstrate: user opening the app, viewing their daily stats, logging a workout, and receiving a congratulations animation. Smooth transitions between screens. Colorful abstract shapes floating in the background. Upbeat, modern aesthetic. Phone rotates slightly to show depth.`,
        tags: ["app", "demo", "fitness", "3d"],
        quality: 4,
        author: "community",
    },
    {
        id: "vid-004",
        title: "Nature Timer Background",
        category: "video",
        tool: "runway",
        prompt: `Create a seamless 30-second looping video of a peaceful forest stream. Crystal clear water flowing over smooth rocks with gentle ripples. Dappled sunlight filtering through the leaves above, creating moving light patterns on the water. Soft breeze making leaves sway gently. Photorealistic quality, perfect for focus/meditation app backgrounds. 4K, 60fps for smooth looping.`,
        tags: ["nature", "loop", "meditation", "calm"],
        quality: 5,
        author: "community",
    },
    {
        id: "vid-005",
        title: "Social Media Ad",
        category: "video",
        tool: "runway",
        prompt: `Generate a 6-second social media ad for a coffee subscription service. Start with coffee beans falling in slow motion. Transition to a pour-over brewing shot with steam rising. End with a person's hands holding a warm coffee mug with the logo visible, smiling face slightly blurred in background. Warm, cozy color grading. Text overlay space at the end for CTA. Vertical 9:16 format.`,
        tags: ["ad", "social", "coffee", "marketing"],
        quality: 4,
        author: "community",
    },
    {
        id: "vid-006",
        title: "Abstract Background Loop",
        category: "video",
        tool: "runway",
        prompt: `Create a 20-second seamless looping abstract background video. Flowing liquid gradients morphing between deep purple, electric blue, and pink colors. Smooth organic motion like mixing paint or northern lights. Subtle particle effects floating across. Dark base color. Perfect for website hero backgrounds or presentation slides. 4K resolution, 60fps.`,
        tags: ["abstract", "loop", "gradient", "background"],
        quality: 5,
        author: "community",
    },
    {
        id: "vid-007",
        title: "Cinematic Title Sequence",
        category: "video",
        tool: "sora",
        prompt: `Generate a 10-second cinematic title sequence for a thriller film. Camera flies through a dark, foggy cityscape at night. Rain is falling. Neon signs blur past. Camera eventually focuses on a wet window where the movie title "MIDNIGHT PURSUIT" appears letter by letter in a sleek sans-serif font. Lightning flash illuminates the scene. Atmospheric, tense mood.`,
        tags: ["cinematic", "title", "thriller", "film"],
        quality: 5,
        author: "community",
    },
    {
        id: "vid-008",
        title: "Explainer Animation",
        category: "video",
        tool: "runway",
        prompt: `Create a 20-second animated explainer video segment showing how cloud syncing works. Use flat design style with a laptop, phone, and cloud icon. Show files uploading from laptop to cloud (with progress animation), then syncing down to phone. Use smooth 2D motion graphics. Color palette: white background, blue (#3B82F6) primary, gray accents. Clean, corporate-friendly style.`,
        tags: ["explainer", "animation", "cloud", "tech"],
        quality: 4,
        author: "community",
    },
];

// Helper functions
export const getPromptsByCategory = (category) => {
    if (category === 'all') return prompts;
    return prompts.filter(p => p.category === category);
};

export const getPromptsByTool = (tool) => {
    return prompts.filter(p => p.tool.toLowerCase() === tool.toLowerCase());
};

export const searchPrompts = (query, category = 'all') => {
    const lowerQuery = query.toLowerCase();
    let filtered = category === 'all' ? prompts : prompts.filter(p => p.category === category);

    return filtered.filter(p =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.prompt.toLowerCase().includes(lowerQuery) ||
        p.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        p.tool.toLowerCase().includes(lowerQuery)
    );
};

export const categories = [
    { id: 'all', label: 'All' },
    { id: 'website', label: 'Website' },
    { id: 'image', label: 'Image' },
    { id: 'video', label: 'Video' },
];

export const getStats = () => ({
    totalPrompts: prompts.length,
    categories: 3,
    contributors: 1,
});
