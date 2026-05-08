# Research: Client Feedback Layout Updates
**Date**: 2026-05-08
**Requested**: Update sections colors (green top, white bottom), adjust Hero text, format About text vertically to the right, stack Practice blocks vertically, change Navbar links, and remove the church image.
**Status**: PENDING DECISION

## What Exists Today
- **Navbar.tsx**: Logo is `h-6`. Links are `About`, `Bio`, `Practice`, `Contact`.
- **HeroSection.tsx**: Green background. Contains the final sentence of the about text.
- **AboutSection.tsx**: White background. Contains a short intro and a 3-column grid of text.
- **ApproachSection.tsx** (Practice): Green background. Contains a 3-column grid of blocks and a landscape image ("church").
- **BioSection.tsx** (Experience): White background. Contains Bio and a portrait image (`p3.png`).
- **ContactSection.tsx**: White background.

## What Needs to Be Built
1. **Navbar.tsx**:
   - Increase the size of the "Pythia" logo in the top left.
   - Update navigation links to: `About`, `Practice`, `Experience`, `Contact`.
2. **HeroSection.tsx**:
   - Replace the main text with: "Pythia is a collection building practice."
   - Keep background green.
3. **AboutSection.tsx**:
   - Change background to green and text to white.
   - Insert the full provided "About" text.
   - Align the text to the bottom right ("abajo a la derecha, en vertical").
4. **ApproachSection.tsx** (Practice):
   - Change background to white and text to green.
   - Stack the 3 descriptive blocks vertically instead of horizontally.
   - Remove the landscape ("church") photo.
5. **BioSection.tsx** (Experience):
   - Wait for the new photo mentioned ("con la otra foto, ya te la pingeo"). We will use the existing photo as a placeholder until provided.

## Risks & Ambiguities
| Risk | Likelihood | Impact | Notes |
|---|---|---|---|
| **About text layout** | High | Medium | "Abajo a la derecha, en vertical" is slightly open to interpretation. We plan to use a CSS grid that pushes the text column to the right side of the container, stacking the paragraphs vertically. |
| **Prisma Element** | High | Low | You mentioned "me encantaria introducir el prisma en algun lado". Since we don't have a "prisma" image/asset yet, we will skip it for now unless you provide it or want a CSS-based prism. |
| **Experience Photo** | High | Low | You mentioned sending another photo for the Experience (Bio) section. We will keep the current one until you provide the new one. |
| **Experience Title** | Low | Low | Should the section title say "Experience" or keep "Francesca De Filippo"? We will change the Nav link to "Experience" but can keep her name as the section title. |

## Architecture Decision Points
1. **Layout for About**: We will use an offset grid (e.g., left 50% empty, right 50% contains the stacked paragraphs) to achieve the "bottom right, stacked vertically" look.
2. **Color Theme Splitting**: The line "Hasta la parte que diga practice, ahi si lo pondria white con green letters." means `HeroSection` and `AboutSection` will be **Green**, and `ApproachSection (Practice)`, `BioSection (Experience)`, and `ContactSection` will be **White**.

## Effort Estimate
- **Estimate**: ~30 minutes.
- **Confidence**: High. The changes are primarily text swaps, Tailwind CSS class adjustments (colors, flex/grid directions), and removing an image.

## Recommendation
**NEEDS CLARIFICATION** on the minor points (Prisma, Experience title, new photo), but otherwise **GO** for implementing the layout changes.

**Decision**: [ ] GO  [ ] NO-GO  [ ] NEEDS CLARIFICATION
