# Design Critique — Landing Page "Générations Unies pour Maisonsgoutte"

## Context

A municipal election campaign page for "Générations Unies pour Maisonsgoutte," a small Alsatian village. The audience is local residents across all generations. The emotional context is civic trust, community pride, and practical information for voting. This demands warmth, credibility, and clarity above all.

---

## First Impressions

The page is clean, structured, and immediately readable. The Rubik italic headings give it personality, and the green accent communicates growth/nature, appropriate for a village in the Vosges. But scroll past the hero and the experience becomes a metronome: green bar, italic heading, gray subtitle, content block, repeat. Seven times. The rhythm never breaks, and by the engagements section, the eye is fatigued. The page reads more like a well-organized document than a campaign that wants to connect emotionally. The placeholder images are obviously temporary, but even with real photos, the page will feel long and uniform.

---

## Visual Design

**One-color palette creates monotony** — `#2FA36B` is used in the dividers, overline label, CTA link, drop cap, card top borders, engagement taglines, stat numbers, timeline dots, year labels, and voting dates. That's 10+ distinct uses of the same accent. When everything is "important," nothing is. The green stops functioning as a hierarchy signal and becomes wallpaper. A secondary color (a warm amber, a deeper blue-green, or even just a darker shade of the green for non-interactive elements) would let the CTA and key dates stand out.

**Repetitive section dividers** — There are 7 identical green divider bars (`60px wide, 3px tall, #2FA36B`). This was a strong pattern the first two times. By the fifth, it's visual noise that the eye learns to skip. Consider removing dividers from interior sections and reserving them for major transitions, or varying the section introductions.

**Value card numbers are nearly invisible** — The numbers `01`, `02`, `03` are rendered in `#E8F5EE` (a green tint at ~5% contrast against white). They're decorative ghosts. Either give them purpose by making them readable (a light `#C8E6D4` would work) or remove them entirely. Right now they occupy significant visual space while communicating nothing.

**Typographic scale is flat in the mid-range** — The h1 (up to 52px) is strong. But h2 section titles (28-40px), h3 card titles (16-18px), and h4 team names (15-16px) compress into a narrow band. The h3s across "Valeurs," "Engagements," and "Infos" are all 16-18px, making different content types feel the same weight. The engagement card titles deserve more prominence than info card titles — they're the core of the campaign message.

**Spacing is consistent but undifferentiated** — Every section uses `80px` vertical padding. This is fine structurally, but the Vision section (a personal letter from the mayor) deserves more breathing room than the Infos section (practical details). Uniform spacing flattens the emotional arc of the page.

**The nav logo is text, not the SVG** — The navigation renders "Générations Unies" as styled text, while there is a proper SVG logo at `public/logo.svg`. This is a missed branding opportunity. The SVG communicates more professionalism and identity than a CSS-styled string.

---

## Interface Design

**We're missing an opportunity to create a narrative arc.** The page dumps 9 sections sequentially with identical visual weight. A campaign page should build: hook (hero) -> credibility (vision/bilan) -> substance (engagements) -> team (faces) -> action (vote info). Right now the Bilan (track record) appears *after* the engagements, which is backwards persuasively. Leading with what you've accomplished builds trust before asking people to believe new promises.

**The Team section dominates the page disproportionately.** 11 member cards plus a leader card with photo placeholders creates the tallest section on the page — taller than the Engagements section, which is the actual substance of the campaign. The team grid takes up roughly 30% of the total scroll distance. For a village of likely <1000 inhabitants, most people *know* these people already. A more compact treatment (smaller cards, 2-3 rows max, or an expandable section) would keep the page focused on the message.

**No clear call-to-action hierarchy.** The one CTA ("Découvrir notre projet ->") is a text link with a bottom border. For a campaign page where the goal is civic engagement, this is undersold. A proper button with weight and presence would serve better. And the voting dates — arguably the most actionable information — are buried in the 8th section. A sticky or repeated reminder of the date ("15 mars 2026") would be practical and effective.

**The timeline is linear when it could be a summary.** Eight timeline entries spanning 2021-2025 create a long, scrollable list. The user needs to understand "they got things done" — the specific sequence matters less. A more compact grid or a highlight reel (top 3-4 achievements with one stat each) would communicate the same credibility in half the space.

**Engagement cards lack differentiation.** All six cards are identical in structure and weight. But "Vie quotidienne" (daily services) and "Environnement" (200 trees) are substantially different in scope and emotional register. The flat grid makes them all feel like equal bullet points when some deserve to be featured.

---

## Consistency & Conventions

**Section pattern is mechanically consistent** — divider + h2 + subtitle + content is applied identically across all 7 sections. This is consistent in the wrong way: it treats consistency as repetition rather than as a coherent system with variation. A good design system has a section pattern that can flex — sometimes the subtitle is omitted, sometimes the content leads with a visual, sometimes there's no divider.

**Card treatments vary without clear logic** — Valeur cards have a top green border and no background. Engagement cards have a border and white background with hover effect. Info cards have a border and white background with no hover. These are three similar-but-different card styles that should either be unified or differentiated more clearly.

**The footer uses the campaign name as text while the nav does the same** — both should reference the SVG logo for a cohesive brand identity. The footer's dark background (`#1A1A2E`) is the only place the dark color palette appears, making it feel disconnected from the rest of the page.

**Emoji usage as icons** — The engagement cards use emoji (house, backpack, hugging, leaf, mask, construction) while the info section also uses emoji (calendar, pin, ballot). Emoji render differently across OS and browsers and can't be color-matched to the brand. Custom icons (even simple SVG line icons) would feel more intentional.

---

## User Context

The voter landing on this page likely already knows the village and many of the candidates. They want to quickly answer: *What are they promising? What have they already done? When do I vote?* The current page asks them to scroll through a personal letter, value philosophy, 12 team bios, and 6 engagement categories before reaching voting logistics. That's a lot of scrolling for someone who might just want the dates.

An older demographic — common in a rural Alsatian village — will find the 13px uppercase nav links small and the gray body text (`#888`) low-contrast. WCAG AA requires a 4.5:1 contrast ratio for normal text; `#888` on `#FAFAF8` yields approximately 3.5:1. The subtitle text (`#666`) fares slightly better at ~5.7:1, but the secondary text throughout the page is consistently too light.

The mayor's letter with the drop cap is a warm, human touch. It's one of the few moments where the page feels like it comes from a real person rather than a template. More of that spirit throughout would serve the campaign well.

---

## Top Opportunities

1. **Use the SVG logo** in the nav and footer instead of styled text — it's the single fastest way to make the page feel branded rather than templated.

2. **Reorder sections** to lead with Bilan (credibility) before Engagements (promises), and move Infos Pratiques higher or add a persistent date reminder — the voting date is the one piece of information every visitor needs.

3. **Break the metronome rhythm** — vary section introductions, remove redundant dividers, and give key sections (hero, engagements) more visual weight than supporting sections (team, timeline).

4. **Introduce a second color** or tonal variation so the green accent can do its job as a highlight rather than being applied to everything equally.

5. **Compact the team section** — reduce individual card size or make it expandable so it doesn't dominate the page over the campaign message.

6. **Fix text contrast** — bump `#888` body text to at least `#6B6B6B` to meet WCAG AA, especially given the likely older audience.
