# Halle Properties Website

A modern, responsive estate agency website for Halle Properties - trusted estate agents in Wolverhampton and Willenhall.

## 🏠 About

This website was designed in Figma and implemented using HTML, CSS, and JavaScript. It showcases properties for sale and rent, company services, client testimonials, and more.

## 📁 Project Structure

```
Halle Properties/
├── index.html          # Main HTML file with complete page structure
├── styles.css          # CSS styling matching Figma design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🎨 Design Features

- **Hero Section** with property search filters
- **Featured Properties** showcase with 3 property cards
- **About Us** section highlighting company strengths
- **Services** section with 4 key services
- **Testimonials** from satisfied clients
- **Call-to-Action** for instant property valuation
- **Blog Section** with articles and insights
- **FAQ** section with expandable questions
- **Footer** with company info and links

## 🚀 Getting Started

1. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server for better experience:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

2. **View in browser:**
   - Navigate to `http://localhost:8000` if using a local server
   - Or double-click `index.html` to open directly

## 🎨 Design System

### Colors
- **Brand Blue:** `#82c7be` - Primary accent color
- **Brand Black:** `#2a363a` - Dark backgrounds and text
- **Brand White:** `#ffffff` - Light backgrounds and text
- **Brand Grey:** `#dadddc` - Secondary backgrounds
- **Text Dark:** `#1e1e1e` - Body text
- **Text Light:** `#969696` - Placeholder text

### Typography
- **Primary Font:** Poppins (Google Fonts)
  - Regular (400) - Body text
  - Medium (500) - Navigation
  - SemiBold (600) - Headings
  - Bold (700) - Major headings
- **Secondary Font:** Plus Jakarta Sans (Google Fonts)

### Layout
- Max width: 1440px
- Content padding: 80px horizontal
- Sections use consistent spacing
- Border radius: 20px for cards, 50px for search bar

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop:** 1440px and above
- **Laptop:** 1024px - 1440px
- **Tablet:** 768px - 1024px
- **Mobile:** Below 768px

## ✨ Features

### Interactive Elements
- ✅ Smooth scroll navigation
- ✅ FAQ accordion functionality
- ✅ Property favorite buttons
- ✅ Hover effects on buttons and links
- ✅ Scroll-based animations
- ✅ Active navigation highlighting

### Sections

#### 1. Navigation Bar
- Logo and branding
- Main navigation menu (Buying, Selling, Letting, Properties, Contact)
- Call-to-action button for booking valuations

#### 2. Hero Section
- Large hero image with overlay
- Prominent headline and description
- Property search filter with:
  - Payment type
  - Location
  - Property type
  - Keyword search
  - Price range
- Partner logos (Prime Location, Zoopla, On The Market)

#### 3. Featured Properties
- 3 property cards displaying:
  - Property images
  - Price
  - Location
  - Square footage
  - Number of bedrooms and bathrooms
  - Favorite button
- "View More Properties" button

#### 4. About Us
- Company image
- Key reasons to choose Halle:
  1. Years of Experience
  2. Trusted by Thousands
  3. Wide Range of Properties
  4. Exceptional Customer Support

#### 5. Services
- 4 key services with icons:
  - Book a Valuation
  - Renting & Letting
  - Buying a Property
  - Selling a Property

#### 6. Testimonials
- 3 client testimonials
- 5-star ratings
- Client names

#### 7. CTA Section
- Background image with overlay
- "Instant Valuation" call-to-action

#### 8. Blog
- Featured blog post with image
- 2 smaller blog cards
- "Read More" buttons

#### 9. FAQ
- Expandable FAQ items
- First item open by default
- Toggle arrows for expand/collapse

#### 10. Footer
- Company description
- Social media links (Instagram, Facebook, YouTube, TikTok)
- Quick Links
- Resources
- Legal information
- Copyright notice

## 🖼️ Images

All images are hosted on Figma's CDN and will be available for 7 days from generation. For production use, you should:

1. Download all images from the URLs in the HTML
2. Store them in a local `images/` or `assets/` folder
3. Update all image `src` attributes to point to local files

Example image URLs in the code:
```html
<img src="https://www.figma.com/api/mcp/asset/..." alt="...">
```

Should be updated to:
```html
<img src="images/logo.png" alt="...">
```

## 🔧 Customization

### Update Content
- Edit text directly in `index.html`
- Replace placeholder content (marked with "__")
- Update property prices, descriptions, and details

### Modify Styles
- Colors: Update CSS variables in `styles.css` `:root` section
- Fonts: Change font-family in CSS or update Google Fonts link
- Layout: Adjust padding, margins, and widths in respective sections

### Add Functionality
- Form submissions: Add backend integration
- Property search: Connect to property database/API
- Blog: Integrate with CMS (WordPress, Contentful, etc.)
- Booking system: Connect to scheduling software

## 📋 To-Do / Future Enhancements

- [ ] Download and store images locally
- [ ] Add backend for property search functionality
- [ ] Implement property filtering
- [ ] Add booking/contact forms
- [ ] Integrate with property management system
- [ ] Add more pages (Property Details, About, Contact, etc.)
- [ ] Implement blog CMS integration
- [ ] Add Google Maps integration for locations
- [ ] Optimize images for web (compression, WebP format)
- [ ] Add meta tags for SEO
- [ ] Implement analytics tracking
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

All design assets are from Figma design file: `Halle-UK-Website`
Implementation by Halle Properties development team.

## 📞 Support

For questions or support, contact the Halle Properties team.

---

**Built with ❤️ for Halle Properties**
