import Head from "next/head";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import FormField from "../components/ui/FormField";
import SectionHeading from "../components/ui/SectionHeading";
import TextLink from "../components/ui/TextLink";
import Image from "next/image";

// ─── Colour swatches data ──────────────────────────────────────────────────
const BRAND_COLOURS = [
  { name: "Brand Black",  hex: "#000000", text: "text-white"         },
  { name: "Brand Navy",   hex: "#1D2C40", text: "text-white"         },
  { name: "Brand Brown",  hex: "#5C4735", text: "text-white"         },
  { name: "Brand Sand",   hex: "#B48B68", text: "text-white"         },
  { name: "Brand Mist",   hex: "#ABC1D8", text: "text-brand-navy"    },
  { name: "White",        hex: "#FFFFFF", text: "text-brand-navy border border-border" },
];

const SEMANTIC_COLOURS = [
  { name: "Canvas",         hex: "#F7F7F2", text: "text-ink border border-border"     },
  { name: "Surface",        hex: "#FFFFFF", text: "text-ink border border-border"     },
  { name: "Primary",        hex: "#1D2C40", text: "text-white"                        },
  { name: "Primary Hover",  hex: "#162130", text: "text-white"                        },
  { name: "Ink",            hex: "#202C28", text: "text-white"                        },
  { name: "Ink Muted",      hex: "#5B6861", text: "text-white"                        },
  { name: "Sage",           hex: "#E8EEE7", text: "text-ink border border-border"     },
  { name: "Border",         hex: "#D8DFD7", text: "text-ink"                          },
  { name: "Control Border", hex: "#7A8980", text: "text-white"                        },
  { name: "Clay",           hex: "#B48B68", text: "text-white"                        },
  { name: "Error",          hex: "#B42318", text: "text-white"                        },
];

const GRADIENTS = [
  { name: "Brand Cool (Mist → Navy)", bg: "bg-gradient-brand-cool" },
  { name: "Brand Warm (Brown → Sand)", bg: "bg-gradient-brand-warm" },
  { name: "Ink Gradient",              bg: "bg-gradient-ink"        },
];

// ─── Swatch component ─────────────────────────────────────────────────────
function Swatch({ name, hex, text = "text-white" }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className={"h-16 rounded-panel flex items-end p-3 " + text}
        style={{ backgroundColor: hex }}
      >
        <span className="text-xs font-mono opacity-80">{hex}</span>
      </div>
      <p className="text-xs text-ink-muted">{name}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function DesignSystem() {
  return (
    <>
      <Head>
        <title>Design System Preview — West Valley (Internal)</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="bg-canvas min-h-screen">

        {/* ── Page title ─────────────────────────────────────────────── */}
        <div className="bg-brand-navy text-white py-10">
          <Container>
            <p className="wv-eyebrow text-brand-mist mb-2">Internal / Non-Indexable</p>
            <h1 className="wv-h1 text-white">West Valley Design System</h1>
            <p className="wv-body-muted text-white/60 mt-3">
              Token reference, typography scale, components, and colour system.
              Do not share this URL publicly.
            </p>
          </Container>
        </div>

        {/* ── Logos ──────────────────────────────────────────────────── */}
        <Section id="logos">
          <Container>
            <SectionHeading eyebrow="Brand Identity">Logos</SectionHeading>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface rounded-card p-8 border border-border flex items-center justify-center">
                <Image
                  src="/rebranding/logoSVGs/westvalleyBlack_logo_no_bg.svg"
                  alt="West Valley — black on light background"
                  width={200} height={68}
                  className="h-16 w-auto"
                />
              </div>
              <div className="bg-brand-navy rounded-card p-8 flex items-center justify-center">
                <Image
                  src="/rebranding/logoSVGs/westvalleywhite_logo_nobg.svg"
                  alt="West Valley — white on dark background"
                  width={200} height={68}
                  className="h-16 w-auto"
                />
              </div>
              <div className="bg-surface rounded-card p-8 border border-border flex items-center justify-center">
                <Image
                  src="/rebranding/logoSVGs/westvalleyCapsule_logo_whitebg.svg"
                  alt="West Valley — capsule on white"
                  width={200} height={68}
                  className="h-16 w-auto"
                />
              </div>
              <div className="bg-brand-black rounded-card p-8 flex items-center justify-center">
                <Image
                  src="/rebranding/logoSVGs/westvalleyCapsule_logo_blackbg.svg"
                  alt="West Valley — capsule on black"
                  width={200} height={68}
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* ── Brand colours ──────────────────────────────────────────── */}
        <Section id="brand-colours" bg="sage">
          <Container>
            <SectionHeading eyebrow="Brand System">Brand Colour Palette</SectionHeading>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {BRAND_COLOURS.map((c) => <Swatch key={c.hex} {...c} />)}
            </div>

            <SectionHeading eyebrow="Semantic Tokens" className="mt-14">
              Design Tokens
            </SectionHeading>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {SEMANTIC_COLOURS.map((c) => <Swatch key={c.name} {...c} />)}
            </div>

            <SectionHeading eyebrow="Gradients" className="mt-14">
              Brand Gradients
            </SectionHeading>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {GRADIENTS.map((g) => (
                <div key={g.name} className="flex flex-col gap-1.5">
                  <div className={"h-20 rounded-panel " + g.bg} />
                  <p className="text-xs text-ink-muted">{g.name}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── Typography ─────────────────────────────────────────────── */}
        {/* ── Typography ─────────────────────────────────────────────── */}
        <Section id="typography">
          <Container>
            <SectionHeading eyebrow="Typography System">Typographic Hierarchy &amp; Ratio</SectionHeading>
            <p className="wv-body-muted mt-3">
              <strong>Zalando Sans</strong> is the primary workhorse font across 85–90% of the site with varied weights (Regular 400, Medium 500, SemiBold 600, Bold 700). 
              <strong> Instrument Serif Italic</strong> is applied selectively (10–15%) for sophisticated editorial accents, pull-quotes, and highlight flourishes.
            </p>

            {/* Spec Table */}
            <div className="mt-8 overflow-x-auto rounded-panel border border-border bg-surface">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-canvas border-b border-border text-xs uppercase tracking-wider text-ink-muted">
                    <th className="p-4">Role / Tag</th>
                    <th className="p-4">Font Family</th>
                    <th className="p-4">Size (px / rem)</th>
                    <th className="p-4">Weight</th>
                    <th className="p-4">Line Height</th>
                    <th className="p-4">Ideal Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-semibold text-ink">Main Heading (H1)</td>
                    <td className="p-4 font-primary text-ink">Zalando Sans</td>
                    <td className="p-4 font-mono text-xs">56px / 3.5rem</td>
                    <td className="p-4">700 (Bold)</td>
                    <td className="p-4">1.12</td>
                    <td className="p-4 text-ink-muted">Hero titles, primary page headers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-ink">Section Heading (H2)</td>
                    <td className="p-4 font-primary text-ink">Zalando Sans</td>
                    <td className="p-4 font-mono text-xs">36px / 2.25rem</td>
                    <td className="p-4">600 (SemiBold)</td>
                    <td className="p-4">1.2</td>
                    <td className="p-4 text-ink-muted">Major section titles (&quot;Our Specialties&quot;, &quot;Why West Valley&quot;)</td>
                  </tr>
                  <tr className="bg-sage/40">
                    <td className="p-4 font-semibold text-ink">Aesthetic Accent (10–15%)</td>
                    <td className="p-4 font-serif text-brand-navy italic font-normal">Instrument Serif Italic</td>
                    <td className="p-4 font-mono text-xs">24–32px</td>
                    <td className="p-4">400 (Italic)</td>
                    <td className="p-4">1.35</td>
                    <td className="p-4 text-ink-muted">Editorial flourishes, pull quotes, highlight words in slogans</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-ink">Sub-Section (H3)</td>
                    <td className="p-4 font-primary text-ink">Zalando Sans</td>
                    <td className="p-4 font-mono text-xs">24px / 1.5rem</td>
                    <td className="p-4">600 (SemiBold)</td>
                    <td className="p-4">1.3</td>
                    <td className="p-4 text-ink-muted">Treatment names, card titles, sub-blocks</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-ink">Block Title (H4)</td>
                    <td className="p-4 font-primary text-ink">Zalando Sans</td>
                    <td className="p-4 font-mono text-xs">20px / 1.25rem</td>
                    <td className="p-4">600 (SemiBold)</td>
                    <td className="p-4">1.4</td>
                    <td className="p-4 text-ink-muted">Doctor names, feature block headings</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-ink">Subheading / Lead</td>
                    <td className="p-4 font-primary text-ink">Zalando Sans</td>
                    <td className="p-4 font-mono text-xs">18px / 1.125rem</td>
                    <td className="p-4">400 (Regular)</td>
                    <td className="p-4">1.6</td>
                    <td className="p-4 text-ink-muted">Introductory paragraphs directly below section headers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-ink">Body Paragraph</td>
                    <td className="p-4 font-primary text-ink">Zalando Sans</td>
                    <td className="p-4 font-mono text-xs">16px / 1.0rem</td>
                    <td className="p-4">400 (Regular)</td>
                    <td className="p-4">1.6</td>
                    <td className="p-4 text-ink-muted">General reading content, medical explanations</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-ink">UI Labels / Small</td>
                    <td className="p-4 font-primary text-ink">Zalando Sans</td>
                    <td className="p-4 font-mono text-xs">14px / 0.875rem</td>
                    <td className="p-4">500 (Medium)</td>
                    <td className="p-4">1.4</td>
                    <td className="p-4 text-ink-muted">Form field labels, metadata, dates</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-ink">CTA / All-Caps</td>
                    <td className="p-4 font-primary text-ink">Zalando Sans</td>
                    <td className="p-4 font-mono text-xs">14px / 0.875rem</td>
                    <td className="p-4">600 (SemiBold)</td>
                    <td className="p-4">1.2</td>
                    <td className="p-4 text-ink-muted">Buttons, interactive tags, micro-navigation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Live Visual Specimens */}
            <div className="mt-12 space-y-10 divide-y divide-border">
              <div className="pt-6">
                <p className="wv-caption mb-3">H1 (Primary) · Zalando Sans Bold 700 with selective Instrument Serif Italic accent</p>
                <h1 className="wv-h1">
                  Hair restoration &amp; <span className="accent-serif font-normal text-brand-navy">medical excellence</span> in Pokhara.
                </h1>
              </div>

              <div className="pt-6">
                <p className="wv-caption mb-3">Aesthetic Editorial Flourish (10–15%) · Instrument Serif Italic 400</p>
                <p className="wv-editorial text-2xl md:text-3xl text-ink-muted">
                  &ldquo;Care that feels personal, clinical, and lasting.&rdquo;
                </p>
              </div>

              <div className="pt-6">
                <p className="wv-caption mb-3">H2 (Primary) · Zalando Sans SemiBold 600</p>
                <h2 className="wv-h2">Clinical Specialties &amp; Advanced Aesthetics</h2>
              </div>

              <div className="pt-6">
                <p className="wv-caption mb-3">H3 · Zalando Sans SemiBold 600</p>
                <h3 className="wv-h3">Direct Hair Transplantation (DHT-FUE)</h3>
              </div>

              <div className="pt-6">
                <p className="wv-caption mb-3">H4 · Zalando Sans SemiBold 600</p>
                <h4 className="wv-h4">Dr. Biplov Shrestha — Lead Hair Restoration Surgeon</h4>
              </div>

              <div className="pt-6">
                <p className="wv-caption mb-3">Subheading / Lead · Zalando Sans Regular 400</p>
                <p className="wv-lead">
                  West Valley brings together leading specialists across hair restoration, skin aesthetics, and endocrinology in Pokhara.
                </p>
              </div>

              <div className="pt-6">
                <p className="wv-caption mb-3">Body Paragraph · Zalando Sans Regular 400</p>
                <p className="wv-body">
                  Every patient journey begins with a thorough diagnostic assessment. We discuss realistic timelines,
                  donor density evaluation, and personalised treatment planning designed around your clinical profile.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-8 items-center">
                <div>
                  <p className="wv-caption mb-3">UI Labels · Zalando Sans Medium 500</p>
                  <span className="wv-label">Preferred Appointment Date</span>
                </div>
                <div>
                  <p className="wv-caption mb-3">CTA Button · Zalando Sans SemiBold 600 Uppercase</p>
                  <span className="wv-cta bg-brand-navy text-white px-5 py-2.5 rounded-control inline-block">
                    Request a Consultation
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── Buttons ────────────────────────────────────────────────── */}
        <Section id="buttons" bg="sage">
          <Container>
            <SectionHeading eyebrow="Components">Buttons</SectionHeading>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Button variant="primary">Request a Consultation</Button>
              <Button variant="secondary">Meet the Team</Button>
              <Button variant="ghost">Learn more</Button>
              <Button variant="primary" isLoading>Request a Consultation</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
            <p className="wv-caption mt-4">All states: default · hover · active · loading · disabled</p>

            {/* Link variants */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Button variant="primary" href="/contact">Request a Consultation (Link)</Button>
              <Button variant="secondary" href="/" >Hair Restoration</Button>
            </div>
            <p className="wv-caption mt-4">Link variants — render as Next.js Link elements</p>
          </Container>
        </Section>

        {/* ── Form fields ────────────────────────────────────────────── */}
        <Section id="form-fields">
          <Container>
            <SectionHeading eyebrow="Components">Form Fields</SectionHeading>
            <div className="mt-8 max-w-lg space-y-6">
              <FormField id="ds-name" label="Full name" type="text" placeholder="Your name" required />
              <FormField id="ds-phone" label="Contact number" type="tel" placeholder="+977 98…" hint="We will use this to arrange your consultation." />
              <FormField id="ds-error" label="Contact number" type="tel" placeholder="+977 98…" error="Please enter a valid phone number." />
              <FormField id="ds-service" label="Service" as="select">
                <option value="">Select a service</option>
                <option value="hair">Hair Restoration</option>
                <option value="skin">Skin &amp; Aesthetics</option>
                <option value="endocrine">Endocrine &amp; Nutrition</option>
                <option value="notsure">Not sure</option>
              </FormField>
              <FormField id="ds-message" label="Brief message (optional)" as="textarea" placeholder="Anything you would like us to know before we call." />
            </div>
          </Container>
        </Section>

        {/* ── SectionHeading variants ────────────────────────────────── */}
        <Section id="section-headings" bg="sage">
          <Container>
            <SectionHeading eyebrow="Components">SectionHeading Variants</SectionHeading>
            <div className="mt-10 space-y-10 divide-y divide-border">
              <div className="pt-6">
                <p className="wv-caption mb-4">Left-aligned with all slots</p>
                <SectionHeading
                  eyebrow="West Valley Medical Clinic · Pokhara"
                  editorial="Care that feels personal."
                  body="Explore hair restoration options and discuss your concerns with our team."
                >
                  Hair transplant in Pokhara.
                </SectionHeading>
              </div>
              <div className="pt-6">
                <p className="wv-caption mb-4">Center-aligned, H2, no editorial</p>
                <SectionHeading
                  align="center"
                  eyebrow="Patient results"
                  body="A small number of consented cases. Individual results vary."
                >
                  What results look like
                </SectionHeading>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── TextLink ───────────────────────────────────────────────── */}
        <Section id="text-links">
          <Container>
            <SectionHeading eyebrow="Components">Text Links</SectionHeading>
            <div className="mt-6 flex flex-wrap gap-6">
              <TextLink href="/">Internal link</TextLink>
              <TextLink href="https://www.westvalleyclinics.com" external>External link (new tab)</TextLink>
            </div>
          </Container>
        </Section>

        {/* ── Spacing scale ──────────────────────────────────────────── */}
        <Section id="spacing" bg="sage">
          <Container>
            <SectionHeading eyebrow="Tokens">Spacing Scale</SectionHeading>
            <div className="mt-8 flex flex-col gap-3">
              {[4,8,12,16,24,32,48,64,88,104].map((sp) => (
                <div key={sp} className="flex items-center gap-4">
                  <span className="wv-caption w-8 text-right">{sp}px</span>
                  <div className="bg-clay rounded-sm h-4" style={{ width: sp }} />
                </div>
              ))}
            </div>
          </Container>
        </Section>

      </main>
    </>
  );
}
