# Design Brief for Miro AI — Evolution Group Landing Page Redesign

## Project Overview

**Company:** Evolution Group  
**Industry:** AI Solutions & Software Development  
**Target Market:** Banks, Oil & Gas companies, Government organizations in Kyrgyzstan  
**Project Type:** Premium B2B Landing Page Redesign  
**Design Goal:** Create a sophisticated, conversion-optimized landing page that positions Evolution Group as the leading AI solutions provider in Central Asia

---

## Brand Identity & Visual Direction

### Brand Personality
- **Innovative**: Cutting-edge AI technology leader
- **Trustworthy**: Enterprise-grade reliability and security
- **Local**: Deep understanding of Kyrgyzstan market
- **Professional**: Premium service quality
- **Forward-thinking**: Future-ready solutions

### Visual Style References
**Primary Inspiration:** Apple's product pages (clean, premium, sophisticated)  
**Secondary Inspiration:** 
- Linear.app (smooth animations, dark theme)
- Stripe.com (clear value propositions, trust signals)
- OpenAI.com (AI-focused messaging, modern aesthetics)

### Color Palette
```
Primary Colors:
- Evolution Blue: #00A8FF (main brand color)
- Deep Navy: #1B2951 (dark backgrounds)
- Pure White: #FFFFFF (text on dark)

Accent Colors:
- Electric Purple: #6366f1 (highlights, CTAs)
- Emerald Green: #10b981 (success states, metrics)
- Gradient combinations of blue-to-purple

Background:
- Rich Black: #0a0a0a (main background)
- Glass White: rgba(255, 255, 255, 0.05) (cards, overlays)
```

### Typography
```
Primary Font: Inter (clean, modern, excellent readability)
Display Font: Poppins (for large headings, more character)

Hierarchy:
- Hero Title: 72px-96px, bold weight
- Section Headers: 48px-60px, semibold
- Subheadings: 24px-32px, medium weight
- Body Text: 16px-18px, regular weight
- UI Elements: 14px-16px, medium weight
```

---

## Page Structure & Layout Requirements

### 1. Header/Navigation
**Design Requirements:**
- Fixed header with glassmorphism effect (backdrop-blur)
- Evolution Group logo with company name
- Horizontal navigation for desktop: Solutions dropdown, Cases, Technology, Team, Contact
- Mobile hamburger menu with bottom navigation
- Primary CTA button: "Get Free Demo"
- Language switcher (RU/EN/KY)

**Visual Style:**
- Dark semi-transparent background
- Subtle border bottom
- Smooth hover animations on menu items

### 2. Hero Section
**Content Structure:**
- Pre-title badge: "EvoAI CRM Demo" with external link
- Main headline: "The future of business is AI-powered" (animated text rotation)
- Subtitle: Value proposition about transforming Kyrgyzstan companies
- Multiple CTAs: Primary "Get Free Demo", Secondary "Calculate ROI"
- Trust metrics: 3-4 key statistics in glassmorphism cards

**Visual Requirements:**
- Full viewport height
- Dark background with animated gradient orbs
- Premium glassmorphism elements
- Smooth parallax animations on scroll
- Video background option (abstract AI/tech visuals)

### 3. Partners Trust Marquee
**New Section to Add:**
- Infinite horizontal scroll of partner/client logos
- 15-20 company logos including: banks, government agencies, oil & gas companies
- Pause animation on hover
- Subtitle: "Trusted by industry leaders in Kyrgyzstan"

**Visual Style:**
- Semi-transparent logo treatment
- Smooth infinite scroll animation
- Subtle glow effects on hover

### 4. Solutions Overview
**Content:**
- Interactive 3-column grid showcasing main products:
  - EvoAI CRM (WhatsApp automation)
  - EvoPay (Payment processing)
  - CCE (Code review platform)
- Each solution card with icon, title, description, features list, pricing hint
- "Compare Solutions" interactive matrix button

**Visual Requirements:**
- Hover animations with elevation
- Icon system with consistent style
- Glassmorphism card design
- Smooth transitions between states

### 5. Interactive Case Studies
**Enhanced Design:**
- 2-column responsive grid layout
- Rich case study cards with:
  - Company logo/icon
  - Industry tag
  - Problem/solution accordion
  - Before/after metrics with animated counters
  - Client quote with photo
  - Instagram social proof link
  - "Discuss Project" CTA button
- Filter functionality by industry/solution type

**Visual Style:**
- Premium card design with subtle borders
- Color-coded by industry (green for beauty, blue for manufacturing)
- Micro-interactions on hover
- Expandable content with smooth animations

### 6. Team Showcase
**New Section:**
- 4-6 key team members in grid layout
- Professional photos with LinkedIn integration
- Expertise areas and achievements
- Previous company experience
- Speaking engagements/publications

**Design Requirements:**
- Sophisticated card layout
- Social links integration
- Hover effects revealing additional info
- Professional photography style

### 7. ROI Calculator
**Interactive Tool:**
- Step-by-step calculator interface
- Input fields: company size, monthly customer inquiries, current tools
- Real-time calculation display
- Lead capture form at the end
- Downloadable results PDF

**Visual Design:**
- Multi-step progress indicator
- Clean form design with validation
- Animated number displays
- Professional report-style output

### 8. Social Proof Section
**Elements:**
- Customer testimonials carousel
- Industry awards and certifications
- GitHub stats for open-source projects
- Live metrics: "Processing 10M+ requests monthly"
- Media mentions and press coverage

### 9. Contact/Demo Section
**Design:**
- Split layout: contact form + calendar booking widget
- Multiple contact methods
- Office location with map
- Response time guarantee
- Security certifications display

### 10. Footer
**Content:**
- Newsletter signup with value proposition
- Organized link sections: Company, Solutions, Support, Legal
- Social media links
- Copyright and "Made with ❤️ in Kyrgyzstan" tagline

---

## Design System Components

### Buttons
```
Primary Button:
- Background: Blue gradient (#00A8FF to #0088cc)
- Hover: Elevated with glow effect
- Border radius: 12px
- Height: 48px minimum (mobile touch targets)

Secondary Button:
- Transparent background with blue border
- Hover: Fill animation
- Same dimensions as primary

Tertiary Button:
- Text only with underline animation
- Used for less important actions
```

### Cards
```
Glassmorphism Cards:
- Background: rgba(255, 255, 255, 0.05)
- Border: rgba(255, 255, 255, 0.1)
- Backdrop-filter: blur(20px)
- Border radius: 24px
- Hover: Subtle elevation and border glow
```

### Forms
```
Input Fields:
- Dark theme with glass background
- Focus state: blue border glow
- Placeholder text in light gray
- Validation states with color coding
- Mobile-optimized spacing
```

### Icons
```
Style: Outline style, consistent stroke width
Library: Lucide React (already implemented)
Sizes: 16px, 20px, 24px, 32px
Colors: Inherit from parent or accent colors
```

---

## Animation & Interaction Guidelines

### Page Load Animations
- Staggered fade-in for sections (0.1s delay between elements)
- Slide-up animation for cards and content blocks
- Hero text animation with rotating highlighted words
- Statistics counters animate on scroll into view

### Hover Effects
- Subtle scale (1.02x) for interactive elements
- Glow effects for primary CTAs
- Border color transitions for cards
- Icon scale animations

### Scroll Animations
- Parallax effect for background elements
- Progressive blur for hero background on scroll
- Sticky navigation with backdrop blur
- Scroll progress indicator

### Micro-interactions
- Button press feedback (scale 0.95x)
- Form field focus animations
- Loading states for form submissions
- Success/error message animations

---

## Mobile Responsiveness Requirements

### Breakpoints
```
Mobile: 375px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+
```

### Mobile-Specific Features
- Bottom navigation bar for key sections
- Collapsible header navigation
- Touch-optimized button sizes (minimum 44px)
- Swipeable case studies carousel
- Mobile-optimized form layouts
- Horizontal scroll for partner logos

### Typography Scaling
```
Mobile Hero: 36px-48px
Mobile Headers: 28px-32px
Mobile Body: 16px
Mobile UI: 14px
```

---

## Content Requirements

### Copywriting Tone
- **Professional** but approachable
- **Technical** without being overwhelming  
- **Results-focused** with specific metrics
- **Local relevance** mentioning Kyrgyzstan market
- **Confidence** in AI capabilities without overselling

### Image Requirements
- **Hero Background:** Abstract AI/technology visualization (video preferred)
- **Team Photos:** Professional headshots with consistent lighting
- **Case Study Images:** Screenshots of actual solutions in use
- **Partner Logos:** High-resolution SVG formats, monochrome treatment
- **Icons:** Consistent outline style, scalable SVG format

### Video Content
- **Hero Background Video:** 30-second loop of abstract tech animation
- **Product Demos:** 60-90 second solution overviews
- **Customer Testimonials:** 30-45 second client interviews
- **Team Introductions:** Brief personal/professional highlights

---

## Conversion Optimization Elements

### Primary Conversion Goals
1. **Demo Requests:** Main objective, multiple touchpoints
2. **ROI Calculator Usage:** Lead qualification tool
3. **Case Study Downloads:** Nurture lead magnets
4. **Newsletter Signups:** Long-term relationship building

### CTA Strategy
```
Primary CTAs (Blue, prominent):
- "Get Free Demo"
- "Calculate Your ROI"
- "Start Free Trial"

Secondary CTAs (Outline style):
- "Download Case Study"
- "Compare Solutions"  
- "Meet the Team"

Tertiary CTAs (Text links):
- "Learn More"
- "View All Cases"
- "See Pricing"
```

### Trust Elements
- Client logos marquee
- Security certifications badges
- Team credentials and experience
- Industry awards display
- Real-time usage statistics
- Customer testimonial quotes

---

## Technical Specifications

### Performance Requirements
- **Page Load Time:** Under 2 seconds
- **Lighthouse Score:** 90+ across all categories
- **Mobile PageSpeed:** 85+ score
- **Accessibility:** WCAG 2.1 AA compliance

### Animation Performance
- **60fps animations** using transform and opacity only
- **Hardware acceleration** for all animations
- **Reduced motion** support for accessibility
- **Intersection Observer** for scroll-triggered animations

### Image Optimization
- **WebP format** with JPEG fallbacks
- **Responsive images** with srcset
- **Lazy loading** for below-fold content
- **Blur placeholders** during loading

---

## Accessibility Requirements

### Visual Accessibility
- **Color contrast ratio:** 4.5:1 minimum for text
- **Focus indicators:** Visible keyboard navigation
- **Color independence:** No information conveyed by color alone
- **Text scaling:** Supports up to 200% zoom

### Screen Reader Support
- **Alt text** for all images and icons
- **ARIA labels** for interactive elements
- **Semantic HTML** structure
- **Skip navigation** links

### Keyboard Navigation
- **Tab order** follows visual flow
- **Focus management** for modals and dropdowns
- **Escape key** closes overlays
- **Enter/Space** activates buttons

---

## Competitive Differentiation

### Unique Value Propositions to Highlight
1. **Local Market Expertise:** Only AI company with deep Kyrgyzstan knowledge
2. **Government Partnerships:** Official integrations with state systems
3. **Rapid Implementation:** 2-week demo vs. competitors' months-long processes
4. **Multi-language Support:** Native support for Russian, Kyrgyz, English
5. **Industry Specialization:** Focused expertise in banking, oil & gas, government

### Visual Differentiation
- **Kyrgyzstan Cultural Elements:** Subtle traditional patterns in backgrounds
- **Local Photography:** Team photos showing Bishkek/local environment
- **Regional Success Stories:** Prominently featuring local company case studies
- **Government Seal Integration:** Official partnership badges where applicable

---

## Success Metrics for Design

### Quantitative Metrics
- **Conversion Rate:** Demo request form completions
- **Engagement:** Average time on page (target: 4+ minutes)
- **Bounce Rate:** Percentage leaving immediately (target: <35%)
- **Mobile Usage:** Percentage of traffic from mobile devices
- **Form Completion:** ROI calculator usage and completion rates

### Qualitative Metrics
- **User Feedback:** Post-interaction surveys
- **Heatmap Analysis:** Click patterns and scroll behavior  
- **Session Recordings:** User journey analysis
- **A/B Testing:** Design variant performance comparison

---

## Implementation Notes for Miro AI

### Design Priorities (In Order)
1. **Hero Section:** Must create immediate impact and trust
2. **Partners Marquee:** Critical for B2B credibility
3. **Solutions Overview:** Clear product differentiation
4. **Case Studies:** Social proof and results demonstration
5. **ROI Calculator:** Lead generation and qualification
6. **Contact/Demo Section:** Conversion optimization

### File Organization Requests
```
Deliverable Structure:
├── Landing Page Design (Full)
├── Component Library
│   ├── Buttons (All variants)
│   ├── Cards (Glassmorphism styles)
│   ├── Forms (Contact, demo request, calculator)
│   └── Navigation (Header, footer, mobile)
├── Mobile Responsive Views
│   ├── Mobile Portrait
│   ├── Mobile Landscape  
│   └── Tablet Views
└── Interaction Specifications
    ├── Animation Guidelines
    ├── Hover States
    └── Loading States
```

### Brand Asset Requirements
- **Logo variations:** Light and dark versions
- **Icon library:** Consistent style guide  
- **Photography style guide:** Team and product shots
- **Illustration style:** Technical diagrams and graphics

---

## Final Notes

This landing page should position Evolution Group as the definitive AI solutions provider in Central Asia, combining cutting-edge technology with deep local market understanding. The design should inspire confidence in enterprise decision-makers while being accessible to technical and non-technical audiences.

The visual design should feel premium and sophisticated—comparable to international tech leaders—while maintaining clear Kyrgyzstan identity and cultural relevance.

**Key Design Philosophy:** "Local expertise, global standards, future-ready solutions."