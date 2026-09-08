# Harnad Technologies

Harnad Technologies adalah penyedia solusi digital dan bantuan akademik profesional.
Website ini adalah static landing page yang dibangun menggunakan fundamental web (HTML, CSS, JS) tanpa framework, untuk memastikan performa maksimal dan maintenance yang mudah.

## 🚀 Fitur & Layanan

- **Academic Assistance**: Makalah, laporan, skripsi, dan presentasi.
- **Web Development**: Landing page, company profile, custom web app.
- **Mobile Development**: Android, iOS, Flutter.
- **Technical Assistance**: Debugging, dokumentasi, integrasi.

## 🛠️ Teknologi & Arsitektur Codebase

Website ini menggunakan pendekatan arsitektur Modular Vanilla Web:

- **HTML5**: Semantic document structure.
- **CSS3**: Modular CSS (Variables, Base, Components, Responsive).
- **ES6+ JavaScript**: Modular behavior (Main, Navigation, FAQ, Interactions).

Tidak menggunakan framework apapun (seperti React, Vue, Tailwind, atau Bootstrap). Tidak membutuhkan build process.

## 📁 Struktur Direktori

\\\
jasa.harryfolio/
├── index.html          # Entry point (struktur dan konten HTML)
├── css/                # Stylesheet modular
│   ├── variables.css   # CSS Custom Properties (Design Tokens)
│   ├── base.css        # CSS Reset, Typography Defaults, Base Element Styles
│   ├── components.css  # Layout, Components & Animations
│   └── responsive.css  # Media Queries
├── js/                 # JavaScript modules
│   ├── main.js         # Entry point JS dan inisialisasi
│   ├── navigation.js   # Logic navigasi & mobile drawer
│   ├── faq.js          # Logic accordion FAQ
│   └── interactions.js # Scroll reveal & Observer
├── assets/             # Direktori aset (images, icons, certificates, favicon)
├── docs/               # Dokumentasi teknis
└── README.md
\\\

## 🔧 Panduan Pengembangan (Local Development)

Karena website ini menggunakan ES Modules (\	ype="module"\), Anda perlu menjalankannya menggunakan local server. Anda tidak bisa sekadar klik kanan dan "Open in Browser".

1. **Gunakan Python**:
   \\\ash
   python -m http.server 8000
   \\\
   Buka \http://localhost:8000\ di browser.

2. **Atau gunakan Node.js / npx**:
   \\\ash
   npx serve .
   \\\

## 📈 Deployment

Website dapat dideploy secara langsung sebagai static site ke platform seperti:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

Tidak perlu konfigurasi build command. Root directory adalah output direktori.
