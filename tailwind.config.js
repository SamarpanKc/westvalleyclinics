/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Override Tailwind defaults where needed
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      // ─── Brand colour palette (source of truth) ───────────────────────
      colors: {
        // Brand guideline primaries
        "brand-black": "#000000",
        "brand-navy":  "#1D2C40", // gradient anchor / deep
        "brand-brown": "#5C4735", // gradient anchor / warm
        "brand-sand":  "#B48B68", // warm gold accent
        "brand-mist":  "#ABC1D8", // soft blue

        // Semantic design tokens (optional / suggestd)
        canvas:          "#F7F7F2", // main page background
        surface:         "#FFFFFF", // forms and card surfaces
        primary:         "#1D2C40", // CTAs, links, active elements (= brand-navy)
        "primary-hover": "#162130", // hover / pressed
        ink:             "#202C28", // headings + body copy
        "ink-muted":     "#5B6861", // supporting / secondary text
        sage:            "#E8EEE7", // section backgrounds
        border:          "#D8DFD7", // decorative separators
        "control-border":"#7A8980", // input / control outlines
        clay:            "#B48B68", // small decorative accents (= brand-sand)
        error:           "#B42318", // error text and indicators
      },

      // ─── Spacing scale (per spec: 4 8 12 16 24 32 48 64 88 104) ───────
      spacing: {
        "4.5": "18px",
        "13":  "52px",  // button height target
        "22":  "88px",  // section rhythm (mobile)
        "26":  "104px", // section rhythm (desktop)
      },

      // ─── Max widths ────────────────────────────────────────────────────
      maxWidth: {
        container: "1200px",
      },

      // ─── Border radius (controls 8px; images/panels 12–16px) ──────────
      borderRadius: {
        control: "8px",
        panel:   "12px",
        card:    "16px",
      },

      // ─── Font families (CSS vars set in globals.css / _app.jsx) ─────────
      fontFamily: {
        sans:      ["var(--font-primary)",   "'Zalando Sans Variable'", "'Zalando Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        primary:   ["var(--font-primary)",   "'Zalando Sans Variable'", "'Zalando Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        serif:     ["var(--font-editorial)", "'Instrument Serif'", "Georgia", "serif"],
        editorial: ["var(--font-editorial)", "'Instrument Serif'", "Georgia", "serif"],
        display:   ["var(--font-editorial)", "'Instrument Serif'", "Georgia", "serif"],
      },

      // ─── Letter Spacing (per typography specification) ─────────────────
      letterSpacing: {
        display: "-0.02em", // Display (H1)
        tighter: "-0.02em", // -1.28px
        heading: "-0.01em", // Heading Large (H2)
        tight:   "-0.01em", // -0.4px
        normal:  "0",       // H3, H4, Body
        lead:    "+0.01em", // Subheading / Lead (+0.18px)
        wide:    "+0.01em",
        label:   "+0.02em", // UI Labels / Small (+0.28px)
        wider:   "+0.02em",
        cta:     "+0.06em", // CTA / All-Caps (+0.84px)
        widest:  "+0.06em",
      },

      // ─── Line Heights (per typography specification) ───────────────────
      lineHeight: {
        display: "1.1",  // 110%
        h1:      "1.1",  // 110%
        h2:      "1.15", // 115%
        h3:      "1.3",  // 130%
        h4:      "1.4",  // 140%
        lead:    "1.6",  // 160%
        body:    "1.6",  // 160%
        label:   "1.4",  // 140%
        cta:     "1.2",  // 120%
      },

      // ─── Font sizes ───────────────────────────────────────────────────
      fontSize: {
        "2xs":  ["12px",  { lineHeight: "1.5"  }],
        xs:     ["14px",  { lineHeight: "1.4", letterSpacing: "+0.02em" }], // UI Labels / CTA
        sm:     ["15px",  { lineHeight: "1.55" }],
        base:   ["16px",  { lineHeight: "1.6", letterSpacing: "0" }],       // Body Paragraph
        lg:     ["18px",  { lineHeight: "1.6", letterSpacing: "+0.01em" }], // Subheading / Lead
        xl:     ["20px",  { lineHeight: "1.4", letterSpacing: "0" }],       // Heading Small (H4)
        "2xl":  ["24px",  { lineHeight: "1.3", letterSpacing: "0" }],       // Heading Medium (H3)
        "3xl":  ["32px",  { lineHeight: "1.2" }],
        "4xl":  ["40px",  { lineHeight: "1.15", letterSpacing: "-0.01em" }], // Heading Large (H2)
        "5xl":  ["48px",  { lineHeight: "1.12" }],
        "6xl":  ["56px",  { lineHeight: "1.1"  }],
        "7xl":  ["64px",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }], // Display (H1)
      },

      // ─── Transition durations (spec: 150–200ms) ────────────────────────
      transitionDuration: {
        fast:   "150ms",
        normal: "200ms",
      },

      // ─── Brand gradients ───────────────────────────────────────────────
      backgroundImage: {
        "gradient-brand-cool":
          "linear-gradient(135deg, #ABC1D8 0%, #1D2C40 100%)",
        "gradient-brand-warm":
          "linear-gradient(135deg, #5C4735 0%, #B48B68 100%)",
        "gradient-ink":
          "linear-gradient(180deg, #1D2C40 0%, #202C28 100%)",
      },

      // ─── Legacy keyframe (preserved) ──────────────────────────────────
      keyframes: {
        slide: {
          "0%":   { transform: "translateX(10%)"  },
          "50%":  { transform: "translateX(-0%)"  },
          "100%": { transform: "translateX(10%)"  },
        },
        "fade-in": {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)"   },
        },
      },

      animation: {
        "slide-in-right": "slide 2s linear infinite",
        "fade-in":         "fade-in 200ms ease-out both",
      },
    },
  },
  plugins: [],
};

