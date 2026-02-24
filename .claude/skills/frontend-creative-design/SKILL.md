---
name: frontend-creative-design
description: "Creative, original frontend design guidance. Apply when the user asks for visual/design changes, or uses subjective quality words like cool, sexy, stunning, beautiful, gorgeous, bold, slick, or similar aspirational descriptors."
version: "1.0.0"
---

# Creative Frontend Design Originality Skill

## When to use
Use this skill when:
- The user asks for **visual/design changes** (layout, color, typography, spacing, components).
- The user uses **aspirational or subjective quality words** to describe the desired result — such as: *cool, sexy, stunning, beautiful, gorgeous, bold, slick, premium, sleek, clean, modern, polished, sharp*, or similar.

## First check: do we have a reference?
Before designing, determine whether the user provided any **explicit design reference**:
- Figma link/frame/specs
- Template/theme name
- Screenshot / design image
- Existing brand guidelines (palette, type scale, component rules)

### If a reference exists
**Follow it faithfully.**
- Prioritize accuracy over creativity.
- Only suggest deviations if they are clearly improvements and the user asks for options.

### If no reference exists
**Be intentionally creative and avoid generic AI patterns.**

## Creativity mode (only when no reference)
### Output 3 distinct directions
Propose **3 clearly different design directions**, each with:
- A short name + vibe (e.g., "Quiet Luxury", "Neo-Brutal", "Soft Editorial")
- Color system (bg/surface/text/accent) + a couple Tailwind-friendly examples
- Typography approach (system fonts or common web-safe choices if no build step)
- Key UI motifs (borders vs shadows, radius style, spacing rhythm, icon usage)
- 1–2 "signature" components (e.g., button style, card style, section header pattern)

### Anti-generic rules
Avoid these unless the user asks:
- "Default SaaS gradient hero + blurred blobs"
- Overused pill chips everywhere
- Identical three-column feature grids with the same wording/spacing
- Excessive glassmorphism
- Random big shadows with no system
- Avoid generic fonts like Arial and Inter

Instead:
- Pick a **clear system** (spacing scale + radius + border/shadow rules)
- Use **one strong visual idea** (e.g., editorial headers, framed sections, sharp rules, subtle paper textures via CSS)
- Make the layout feel designed: asymmetric grids, intentional whitespace, typographic hierarchy
- Use distinctive fonts that elevate the frontend's aesthetics; unexpected, characterful font choices.

## Implementation rules
- Keep changes scoped and reviewable.
- Follow the rulesets and previous patters for the current project

## How to respond
1. State whether a reference was provided (yes/no).
2. If yes: implement according to reference.
3. If no: present 3 directions, ask the user to pick one (or combine), then implement.
4. End with: summary + files touched + how to preview.
