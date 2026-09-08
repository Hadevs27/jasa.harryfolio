# Design System

## 1. Warna (Color Palette)
- **Primary Background**: Warm editorial paper off-white (\#FAF9F6\)
- **Surface**: Crisp surface (\#FFFFFF\)
- **Subtle Fill**: Neutral subtle fill (\#F1F3F5\)
- **Dark Navy**: Slate deep navy (\#0F172A\)
- **Dark Surface**: Slate card fill (\#1E293B\)
- **Main Text**: Charcoal main body (\#0F172A\)
- **Muted Text**: Reader secondary text (\#475569\)
- **Tertiary Text**: Muted captions (\#94A3B8\)
- **Light Text**: White for dark backgrounds (\#F8FAFC\)
- **Accent/Border**: \#E2E8F0\, \#EEF2F6\, dll.

## 2. Tipografi
- **Primary Font**: Inter (Google Fonts)
- **Heading Section**: clamp(2rem, 3.5vw, 2.75rem), weight: 700
- **Lead Text**: clamp(1.05rem, 1.8vw, 1.2rem), weight: 400

## 3. Spacing & Container
- Menggunakan CSS Custom Properties untuk sistem spacing (md, lg, xl, 2xl).
- **Container Max-Width**: Responsif dan fluid menyesuaikan viewport.

## 4. Interaksi
- **Hover**: Subtle translation (\	ranslateY(-1px)\) pada buttons.
- **Animation**: Scroll reveal menggunakan IntersectionObserver.
