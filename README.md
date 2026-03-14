# Free European Youth e.V. — Website

**A modern, professional website for the NGO Free European Youth e.V.**
Easily editable by non-technical users using AI tools like Claude or ChatGPT.

---

## 📁 Folder Structure

```
site/
├── index.html          ← Home page
├── about.html          ← About page
├── projects.html       ← Erasmus+ projects
├── events.html         ← Events listing page
├── team.html           ← Team members
├── gallery.html        ← Photo gallery
├── contact.html        ← Contact page & form
│
├── events/
│   ├── event-template.html   ← COPY THIS to create new events
│   ├── event1.html           ← Example event: Digital Futures
│   └── event2.html           ← Example event: Green Workshop
│
├── images/
│   ├── gallery/              ← Add gallery photos here
│   ├── events/               ← Add event photos here
│   ├── team/                 ← Add team member photos here
│   └── favicon.ico           ← Add your favicon
│
├── css/
│   └── style.css             ← All styles (edit colors here)
│
└── js/
    └── script.js             ← All functionality
```

---

## 🚀 How to Add a New Event

### Step 1 — Copy the template
```
Copy:  events/event-template.html
Paste: events/event3.html  (or any name you want)
```

### Step 2 — Edit the new file (look for these comments)
| Comment | What to edit |
|---|---|
| `<!-- EDIT EVENT TITLE HERE -->` | Title in page header & breadcrumb |
| `<!-- EDIT DATE HERE -->` | Event date in meta bar |
| `<!-- EDIT LOCATION HERE -->` | Event location |
| `<!-- EDIT EVENT META HERE -->` | Participants, countries, type |
| `<!-- EDIT INTRO PARAGRAPH HERE -->` | Opening description |
| `<!-- EDIT SECTION HEADINGS ... -->` | Body text, activities list |
| `<!-- EDIT: Replace with event photo -->` | Replace placeholder with `<img>` |

### Step 3 — Add the event to the events page
Open `events.html` and find the comment:
```
<!-- ADD NEW EVENT CARD HERE -->
```
Copy an existing `.card` div above it and edit the title, date, location, and link.

---

## 🖼️ How to Add Photos

### Gallery photos
1. Save your photo in the `images/gallery/` folder (JPG recommended, max 1200px wide)
2. Open `gallery.html`
3. Find any gallery item with a placeholder
4. Replace the placeholder div:
```html
<!-- BEFORE (placeholder): -->
<div class="gallery-img-placeholder">🌍<span>Caption</span></div>

<!-- AFTER (real photo): -->
<img src="images/gallery/your-photo.jpg" alt="Describe the photo here">
```
5. Delete the `.gallery-overlay` div inside if not using lightbox

### Event photos
1. Save photo in `images/events/`
2. In the event HTML file, find the placeholder div and replace with:
```html
<img src="../images/events/your-photo.jpg" alt="Event description" class="event-hero-image">
```

### Team photos
1. Save a square photo in `images/team/`
2. In `team.html`, find the team member card
3. Replace the initials div with:
```html
<img src="images/team/firstname-lastname.jpg" alt="Person Name">
```

---

## 🎨 How to Change Colors

Open `css/style.css` and edit the CSS variables at the top of the file:

```css
:root {
  --blue:        #003399;   /* Main EU blue */
  --blue-light:  #1a4fc4;   /* Lighter blue */
  --green:       #2e8b57;   /* Sustainability green */
  --gold:        #f5c518;   /* Star gold accent */
  /* ... */
}
```

---

## 🧑‍💼 How to Add/Edit Team Members

Open `team.html` and find the team grid section.
To add a new member, copy any `.team-card` div and edit:
- Initials inside `.team-avatar`
- Name in `<h3>`
- Role in `.team-role`
- Bio in `.team-bio`

Look for: `<!-- ADD NEW TEAM MEMBER HERE -->`

---

## ✉️ How to Make the Contact Form Work

The form currently shows a "thank you" message but doesn't send emails.

### Option A — Formspree (free, easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint URL
3. In `contact.html`, change the form tag to:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_CODE" method="POST">
```

### Option B — Netlify Forms (if hosting on Netlify)
Add `netlify` attribute to the form:
```html
<form id="contactForm" netlify>
```

---

## 🌐 How to Host on GitHub Pages

1. Create a free GitHub account at github.com
2. Create a new repository named `freeeuropeanyouth` (or any name)
3. Upload all files from the `site/` folder
4. Go to Settings → Pages → select `main` branch
5. Your site will be live at: `https://yourusername.github.io/freeeuropeanyouth/`

---

## 💡 AI Editing Tips

When using Claude or ChatGPT to help edit the site, paste the HTML file content and say:

- **"Add a new event card for [event name] on [date] in [location]"**
- **"Update the team section to add a new member: [name], [role]"**
- **"Change the hero headline to: [new text]"**
- **"Add a new gallery image showing [description]"**
- **"Translate the About page to German"**

The comments in the code (lines starting with `<!-- EDIT ... -->`) help AI tools find exactly what to change.

---

## 📞 Organisation Details

| | |
|---|---|
| **Name** | Free European Youth e.V. |
| **OID** | E10307717 |
| **Legal Rep** | Asaf Kaya |
| **Project Manager** | Siyar Kaya |
| **YouTube** | @FreeEuropeanYouth |
| **Instagram** | @freeeuropeanyouth |
| **Facebook** | Free European Youth |

---

*Website built with HTML, CSS, and vanilla JavaScript. No frameworks required.*
