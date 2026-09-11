# West Valley — Website Redesign & Antigravity Implementation Guide

## 1. Design objective

Create a calm, credible clinic website that helps patients:

1. Understand which services are available.
2. Identify the professionals providing their care.
3. Understand treatment options and realistic expectations.
4. Request a consultation confidently.

Keep hair restoration as the primary homepage focus. Give Skin & Aesthetics and Endocrine & Nutrition clear routes of their own. Remove Dental throughout the site.

The visual personality should be **precise, welcoming, and quietly refined**.

Avoid making the clinic feel like a beauty product shop or a software landing page.

## 2. What the current website tells us

| Observed on the homepage | Recommended change |
|---|---|
| The title and hero focus on Hair Transplant in Pokhara | Preserve this search intent at `/` during the redesign |
| Bright blue branding, bold headings, and a cutout staff portrait | Introduce a restrained palette, more balanced typography, and environmental clinic photography |
| Hair-loss causes and technology appear before detailed clinician information | Introduce clinician credibility earlier |
| The visible heading structure begins with H2 | Give the page a clear H1 and logical section hierarchy |
| Endocrine & Nutrition appears in the inquiry form and About copy, but not the main navigation | Give it a visible service destination after confirming current availability |
| Dental appears in navigation, forms, footer, About copy, and some testimonials | Remove it systematically, including less-visible metadata and content |
| The form uses “Book your seat now” | Use “Request a consultation” |
| The technology copy includes a 99–100% graft-survival claim | Require clinical substantiation and review; do not automatically reuse promotional claims |
| The homepage advertises free consultation | Confirm that the offer remains valid before retaining it |

This is a homepage review, not a complete technical or ranking audit.

## 3. Brand system

### Colour palette

this is the Brand guidelince color pallates
#000000
#1D2C40
#5C4735
#B48B68
#ABC1D8
#FFFFFF

this is the Brand guidelince gradient color pallates
#ABC1D8
#1D2C40

#5C4735
#B48B68



Use these as proposed (Suggested/optional) brand tokens:

| Token | Colour | Intended use |
|---|---|---|
| Canvas | `#F7F7F2` | Main page background |
| Surface | `#FFFFFF` | Forms and selected content surfaces |
| Primary | `#173F35` | Main buttons, links, selected elements |
| Primary hover | `#102F28` | Hover and pressed states |
| Ink | `#202C28` | Headings and body copy |
| Muted ink | `#5B6861` | Supporting text |
| Sage | `#E8EEE7` | Occasional section backgrounds |
| Border | `#D8DFD7` | Decorative separators |
| Control border | `#7A8980` | Inputs where the outline identifies the control |
| Clay | `#A36B54` | Small decorative accents |
| Error | `#B42318` | Error text and indicators |

Suggested distribution: approximately 75% ivory/white, 20% green/sage, and 5% accent.

Do not use clay for small text without checking contrast. Validate every actual foreground/background combination, including hover, disabled, and focus states.

### Typography

**Primary: Zalando Sans**

Use it for navigation, headings, body text, buttons, labels, and numbers. Prefer regular width with weights 400, 500, and 600.

**Secondary: Instrument Serif Italic**

Use it for a short editorial phrase in the hero or an occasional section introduction. Do not use it for navigation, forms, clinical explanations, or entire paragraphs.

Suggested treatment:

- Main heading: “Hair transplant in Pokhara.”
- Supporting editorial line: “Care that feels personal.”

| Role | Desktop | Mobile | Guidance |
|---|---:|---:|---|
| H1 | 56–64px | 36–40px | 1.08–1.15 line height |
| H2 | 36–44px | 28–32px | 1.15–1.25 line height |
| H3 | 22–26px | 22–24px | 1.3 line height |
| Body | 17–18px | 16–17px | 1.6 line height |
| Labels/buttons | 15–16px | 16px | Medium weight |
| Captions | 14px | 14px | Normal contrast |

Use fluid sizes between breakpoints. Keep body copy around 60–70 characters per line.

Do not force desktop headline line breaks onto mobile screens.

Self-host licensed font files and retain their licence notices. Zalando Sans is available under the SIL Open Font License through its [official repository](https://github.com/zalando/sans). The proposed secondary font is [Instrument Serif](https://fonts.google.com/specimen/Instrument%2BSerif).

### Logo direction

Develop a simple West Valley wordmark with an optional compact WV symbol.

- Use a subtle valley-inspired geometry if a symbol is needed.
- Keep “Medical Clinic” readable in larger lockups.
- Use the simplified symbol for the favicon.
- Avoid combining mountains, leaves, hair follicles, teeth, and medical crosses into one mark.
- Check the logo in monochrome before applying colour.
- Set clear space equal to the symbol’s height divided by two.
- Test the full logo at its actual mobile-header size.

Required assets:

- Horizontal logo.
- Dark and reversed variants.
- Standalone symbol.
- SVG originals.
- Favicon and touch icon.
- Social sharing image.

Until an approved logo exists, use an editable typographic wordmark as a clearly identified design draft.

## 4. Layout and interaction rules

### Grid and spacing

| Property | Specification |
|---|---|
| Maximum content width | 1200px |
| Desktop grid | 12 columns; 24–32px gutters |
| Tablet grid | 8 columns; 24px gutters |
| Mobile grid | 4 columns; 16px gutters |
| Page padding | 20px mobile, 32px tablet, 48px desktop |
| Section spacing | 56–64px mobile, 88–104px desktop |
| Text-to-related-content gap | 24–32px |
| Spacing scale | 4, 8, 12, 16, 24, 32, 48, 64, 88, 104px |
| Button/input height | Approximately 48–52px |
| Corner radius | 8px controls; 12–16px images and panels |

Use a shared container so headings, images, forms, and footer columns align.

Do not put every section inside a rounded card. Use whitespace and simple dividers for most grouping.

### Interaction style

- One dominant action: **Request a consultation**.
- Secondary actions: **Meet the team**, **View patient results**, or **Call the clinic**, depending on context.
- Use a compact sticky header with a subtle bottom border.
- Use short transitions, generally 150–200ms.
- Honour reduced-motion preferences.
- Keep important content visible without animation.
- Avoid autoplay carousels, background video, parallax, animated counters, floating decorative objects, and scroll hijacking.
- Do not add a chatbot merely to make the site feel modern.

On mobile, an optional bottom bar can contain “Call” and “Consultation.” Reserve space for it, respect device safe areas, and ensure it never covers form fields or focused content.

## 5. Site architecture

Preserve existing URLs wherever practical. The following are content destinations, not an instruction to rename every route.

| Destination | URL approach |
|---|---|
| Hair Restoration / homepage | Keep `/` |
| Skin & Aesthetics | Initially preserve `/skin&aesthetics` |
| Endocrine & Nutrition | Reuse an existing route if found; otherwise propose `/endocrine-nutrition` |
| Our Clinicians | Reuse an existing route or propose `/our-team` |
| Patient Results | Start as a homepage section; create a page only when sufficient cases exist |
| Contact / consultation | Preserve `/contact` |
| Privacy information | Reuse or add a dedicated page |
| Dental | Retire `/dentalClinic` after the URL audit |

Suggested desktop navigation:

**Hair Restoration · Skin & Aesthetics · Endocrine & Nutrition · Our Team · Contact**

Place the consultation button separately. If the navigation becomes crowded, group the three service areas under an accessible “Services” menu.

Do not create a second page competing with `/` for the same hair-transplant search intent during this redesign.

### Dental removal

Search for dental references in:

- Desktop/mobile navigation and footers.
- Service data, forms, validation, and email templates.
- Homepage and About copy.
- Metadata, structured data, sitemap, and internal links.
- Images, captions, alt text, and downloadable materials.
- Testimonials and promotional graphics.

Do not rewrite a patient’s quotation to remove dental wording. Select another verified review or omit the complete review from the new site.

If the dental page has no equivalent replacement, return a real HTTP 404 or 410 with a helpful explanation and links to active services. Do not redirect it to an unrelated hair-transplant page.

## 6. Homepage structure

### 1. Header

Readable logo, compact navigation, and consultation action.

### 2. Hero

Use a roughly equal text/image split on desktop and a single-column layout on mobile.

Suggested draft:

**Eyebrow:** West Valley Medical Clinic · Pokhara  
**H1:** Hair transplant in Pokhara.  
**Editorial line:** Care that feels personal.  
**Supporting copy:** Explore hair restoration options and discuss your concerns with our team. Your consultation is the first step towards a treatment plan suited to you.  
**Primary action:** Request a consultation  
**Secondary action:** Meet the team

Use a genuine clinician or consultation photograph with a calm clinic background. Do not imply that a photographed staff member is a physician without verification.

### 3. Clinician credibility

Introduce the actual treating clinician or team early.

Show verified name, role, qualifications, registration details where appropriate, clinical interests, and a link to a fuller profile.

Do not replace this with unsupported numbers such as “10,000 happy patients.”

### 4. Hair restoration options

Use concise rows or a restrained grid for verified services.

The existing homepage mentions FUE-DHT, PRP, GFC, and SMP. Confirm availability and terminology before publication.

For each, explain:

- What it is.
- Why a patient might discuss it.
- That suitability requires assessment.
- Where to learn more.

### 5. Patient results

Show a small number of consented cases with:

- Before/after labels.
- Treatment name.
- Follow-up interval.
- Graft count only when documented.
- Relevant context and “Individual results vary.”

Keep image crops and lighting comparable. Provide a static side-by-side option as well as any slider.

### 6. Consultation and care journey

Use four clear steps:

**Consultation → Assessment and plan → Treatment, where appropriate → Follow-up**

Publish the actual clinic process. Do not imply everyone proceeds to a procedure.

### 7. Other service areas

Introduce Skin & Aesthetics and Endocrine & Nutrition with one brief description each.

Keep the hair-focused homepage hierarchy intact.

### 8. Patient feedback

Use two or three verified testimonials with permission and accurate source information.

Prefer a readable static layout over a continuously moving carousel.

### 9. Practical questions

Cover consultation process, cost factors, preparation, recovery, follow-up, and visiting the clinic.

Clinical answers require clinician review. Do not invent recovery timelines, prices, or suitability criteria.

### 10. Consultation and location

A short request form beside verified address, hours, telephone links, and directions.

Load an interactive map only when useful; a directions link is sufficient initially.

## 7. What will make the site more effective?

| Priority | Addition | Patient/business benefit |
|---|---|---|
| Essential | Verified clinician profiles | Helps patients understand who will treat them |
| Essential | Short consultation form | Reduces effort required to contact the clinic |
| Essential | Clear request confirmation | Sets expectations and avoids implying a booking is confirmed |
| Essential | Detailed, consented results | Gives patients useful context beyond a transformation image |
| Essential | Address, hours, phone, directions | Makes visiting the clinic easier |
| Essential | Clear aftercare information | Explains what happens beyond the procedure |
| High | Published consultation fee or explanation of cost factors | Reduces uncertainty if the clinic can provide accurate information |
| High | Service-specific FAQs | Answers questions before someone contacts the clinic |
| High | Defined inquiry follow-up ownership | Prevents requests being missed |
| Later | Professionally reviewed Nepali content | Improves access where patient demand supports it |
| Later | Clinician-reviewed educational articles | Builds a useful resource library |
| Later | Scheduling integration | Valuable only if connected to real availability |

Do not begin with a diagnostic quiz, treatment recommendation engine, price calculator, or patient portal.

Measure successful consultation requests and actual booked consultations separately. A form submission is not a booked appointment.

## 8. SEO and technical strategy

A redesign can reduce SEO risk; it cannot guarantee unchanged rankings.

Before changing anything, capture the existing URLs, titles, descriptions, headings, canonicals, indexability, structured data, internal links, and available search-performance data.

Preserve useful content and search intent while improving readability. Replace unsupported claims rather than preserving them solely for SEO.

Keep the current canonical hostname unless the audit identifies a problem. The homepage resolved to `www.westvalleyclinics.com` during this review.

For necessary URL changes, use direct permanent redirects to equivalent destinations. Avoid redirect chains. Remove retired pages from internal links and the sitemap. Google recommends URL mapping, appropriate redirects, and real 404/410 responses for removed content. See [Google’s migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

Use structured data that matches visible, verified clinic information. Do not promise rich results or add self-serving review markup to obtain stars. See [Google’s LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business).

Your supplied Next.js 13 version is outside the currently supported versions. Treat a supported-version upgrade as a separate, tested workstream before production release; retain Pages Router unless there is a concrete reason to migrate. See the [Next.js support policy](https://nextjs.org/support-policy).

## 9. How to use these prompts in Antigravity

Open the existing repository and provide the approved brand assets, clinic content, and this guide.

Paste Prompt 1 first. Then run each numbered prompt separately after reviewing the preceding output.

Keep work in version control with a recoverable checkpoint per phase. Do not let the IDE invent missing business or medical facts.

### Prompt 1 — Audit the existing project

Act as a senior product designer, Next.js engineer, and technical SEO specialist.

Audit this existing West Valley clinic repository before editing it. Use the supplied redesign guide as the project brief.

Inspect the actual framework versions, Pages Router structure, styling, shared components, service data, forms, EmailJS configuration, metadata, fonts, images, sitemap, robots directives, and deployment setup. Never print secret values.

Inventory all public routes, including dynamic routes and dental references. Record current title, description, H1, canonical, indexability, structured data, and internal links where accessible.

Run available baseline checks without changing dependencies. Separate existing failures from new work.

Produce:
1. Repository and content audit.
2. URL preservation/removal matrix.
3. Dependency and security upgrade plan based on current official guidance.
4. Missing asset and clinic-fact checklist.
5. Ordered implementation plan with verification criteria.

Do not redesign or rename routes in this step. Do not claim to have Search Console data unless it is actually available.

### Prompt 2 — Establish the design system

Implement the design foundation from this guide using the existing styling setup.

Create semantic colour, typography, spacing, radius, and container tokens. Use Tailwind 3 configuration patterns while the project remains on Tailwind 3.

Use Zalando Sans as the primary font and Instrument Serif Italic as a restrained display accent. Inspect installed font tooling first. Do not assume a newer font exists in the old package’s generated Google-font exports. Use licensed local files and version-compatible font loading where appropriate.

Create reusable Container, Section, Button, TextLink, FormField, and SectionHeading components. Include hover, focus-visible, active, loading, disabled, and error states.

Create an internal, non-indexable design-system preview showing typography, colour combinations, controls, and mobile layouts.

Use the approved logo if available. Otherwise use a clearly identified draft wordmark. Centralize logo usage so it can be replaced once.

Validate contrast and font loading. Do not rewrite all pages yet.

### Prompt 3 — Redesign the shared shell

Build the responsive header, mobile navigation, footer, and optional mobile consultation bar.

Preserve existing active service routes. Remove dental from the visible shell.

Use the navigation hierarchy in the guide. Make all menus keyboard-operable with visible focus, correct expanded states, Escape handling, and sensible focus return.

Use a consultation link to the existing contact route or an accessible form section. Avoid introducing a modal unless there is a clear benefit.

Centralize verified contact details and service labels. Do not invent opening hours, social links, or messaging channels.

Verify mobile overflow, sticky-header behaviour, anchor offsets, and that fixed UI does not cover content.

### Prompt 4 — Implement the homepage

Redesign `/` using the homepage sequence in this guide while preserving its hair-transplant-in-Pokhara intent.

Create one clear H1. Use a calm split hero, real clinic imagery, early clinician credibility, treatment explanations, consented results, the care journey, other services, verified feedback, FAQs, and consultation/location details.

Retain useful existing content, but flag unsupported claims for review. Do not invent clinicians, credentials, reviews, success rates, equipment, prices, or free offers.

Use shared layout tokens. Avoid repeated card containers, decorative gradients, oversized empty sections, and autoplay content.

Missing proof assets should remain clearly identified in the internal content checklist; do not publish fabricated substitutes.

Show the page at mobile and desktop widths, then correct typography, alignment, image crops, and content density.

### Prompt 5 — Build service and clinician pages

Apply the shared design system to Skin & Aesthetics, Endocrine & Nutrition, and clinician profiles.

Reuse existing URLs and components where appropriate.

Service pages should explain:
- Scope of care.
- Verified available services.
- Who provides care.
- Consultation process.
- Relevant expectations and limitations.
- FAQs and consultation action.

Use only reviewed medical content. Differentiate the pages with useful service-specific information rather than repeating the same text.

Create new treatment-detail pages only where sufficient verified content exists. Do not mass-generate keyword pages.

Keep `/` as the primary hair-transplant destination.

### Prompt 6 — Improve the consultation form

Improve the existing React Hook Form and Yup flow.

Use:
- Full name.
- Contact number with an accessible country-code approach.
- Service selection.
- Optional preferred callback time.
- Optional brief message.

Remove Dental. Provide “Not sure” as a service option.

Use persistent labels, appropriate autocomplete, clear inline errors, error focus, submission progress, duplicate-submit protection, and preserved inputs after failure.

Use “Request a consultation” as the button label.

On provider-confirmed success, say:
“Your request has been received. Our team will contact you to arrange your consultation.”

Do not say the appointment is confirmed. Do not invent a response-time promise.

Review the EmailJS setup and current provider-supported anti-abuse controls. Do not treat client-side validation as a security boundary. If server-side validation or rate limiting requires an API route, first verify that the deployment supports it.

Collect only the information needed for a callback. Do not request medical records or patient photographs through this general form. Link accurate privacy information and keep marketing consent separate.

Use mocked delivery for routine tests. Perform a controlled delivery check only with an approved test recipient.

### Prompt 7 — Remove dental and implement SEO preservation

Apply the audited dental-removal and URL plan.

Remove dental from active content, forms, email templates, metadata, structured data, sitemap, and internal links. Do not silently edit patient quotations.

For `/dentalClinic` and any other retired dental URLs, implement a real 404 or 410 when there is no equivalent replacement. Provide a helpful page explaining that the service is unavailable. Do not redirect unrelated content to the homepage.

Preserve surviving routes, useful content, canonical hostname, and search intent.

Implement unique metadata, logical headings, crawlable internal links, appropriate canonical tags, social metadata, and verified structured data. Use Pages Router-compatible APIs; do not paste App Router metadata conventions into this project.

Ensure meaningful service content is present in server-rendered HTML.

Update the sitemap and verify redirects, response codes, robots directives, and indexability. Preserve existing verification tokens and analytics configuration unless a documented change is needed.

### Prompt 8 — Complete the framework maintenance workstream

Use the dependency plan from Prompt 1 to move the project to an appropriate supported Next.js release before production launch.

Keep this work in a separate checkpoint from the visual redesign. Retain Pages Router.

Check the required Node.js, React, TypeScript, linting, font-loading, image, and dependency changes using official migration documentation.

Make upgrades deliberately. Do not simultaneously migrate Tailwind or replace UI libraries without a demonstrated need.

Run the application and verify forms, routes, metadata, server rendering, sliders, and production build behaviour after the upgrade.

Document the final versions, compatibility changes, and unresolved blockers. Never suppress build or type errors to make the release appear successful.

### Prompt 9 — Accessibility, performance, and measurement

Perform a focused quality pass.

Check keyboard navigation, focus visibility, menu behaviour, labelled forms, error announcements, heading order, contrast, reduced motion, image alternatives, and 200% zoom.

Test at 360, 390, 768, 1024, and 1440px, with an additional narrow-width reflow check.

Make before/after content usable without dragging. Provide clear labels and a static comparison alternative.

Optimize image dimensions, responsive image sizes, font payloads, and layout stability. Prioritize only the actual above-the-fold hero image. Defer nonessential maps and heavy below-the-fold interactions.

Target good field Core Web Vitals: LCP at or below 2.5 seconds, INP at or below 200ms, and CLS at or below 0.1, assessed at the 75th percentile. Report lab results separately; do not claim field performance before real-user data exists.

If analytics is configured, record generic consultation-start, successful-request, call-click, and directions-click events. Do not send names, phone numbers, messages, selected medical concerns, or other health information as event parameters. Review automatic page and URL collection too.

### Prompt 10 — Final review and launch handoff

Review the completed site against the audit and redesign guide.

Deliver:
1. Final route and redirect report.
2. Desktop/mobile screenshots of key pages.
3. Build and relevant test results.
4. Accessibility and performance findings.
5. Dental-removal verification.
6. Content and asset approval checklist.
7. Form-delivery verification status.
8. Release and rollback instructions.

Distinguish verified facts, approved content, and remaining placeholders. Do not publish unresolved claims or invented assets.

Protect staging from indexing. Before launch, explicitly verify the production robots and noindex settings, canonical URLs, sitemap, metadata, redirects, and form configuration.

Prepare the production release for review; do not deploy from this prompt alone.

Include post-launch checks for broken links, request delivery, indexing, and organic landing-page performance.

## 10. Definition of done

The redesign is complete when:

- The visual system is consistent across all active pages.
- Hair restoration remains the clear homepage focus.
- Dental is removed and retired URLs behave correctly.
- Every published clinician detail, treatment claim, offer, and testimonial is verified.
- Patients can understand services and request a consultation easily.
- Form success and failure states both work.
- Mobile layouts, keyboard access, and comparison images are usable.
- Production runs on a tested, supported framework version.
- SEO settings and existing search intent have been checked against the baseline.
- No placeholder copy, fabricated results, broken images, or misleading booking confirmations remain.

Check search performance after launch at roughly 1, 2, 4, and 8 weeks, comparing service-level landing pages and relevant queries against the baseline. Investigate changes rather than promising zero fluctuation.

Performance targets above follow [Google’s Core Web Vitals guidance](https://web.dev/articles/vitals).