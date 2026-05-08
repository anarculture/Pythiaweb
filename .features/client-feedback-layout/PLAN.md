# Plan: Client Feedback Layout Updates
**Risk level**: Low

## Summary
Updates the landing page layout, colors, and content according to the client's new design direction. The top half (Hero, About) becomes green, the bottom half (Practice, Experience, Contact) becomes white. Layouts are adjusted to stack horizontally where requested, and the About section is offset to the bottom-right.

## Architecture Decisions
1. **Layout for About**: Use an offset or 2-column CSS grid (`lg:w-1/2 lg:ml-auto`) to push the text content to the right side of the screen, achieving the "abajo a la derecha, en vertical" requirement.
2. **Experience Photo & Prisma**: Deferred. We will keep the existing portrait photo as a placeholder and omit the Prisma graphic until the client provides the final assets.
3. **Experience Section ID**: We will rename `id="bio"` to `id="experience"` to match the new nav.

## Implementation Steps

### Step 1: Update Navbar
**Files**: `src/app/components/Navbar.tsx`
**What to build**: Increase logo height (e.g., `h-6` -> `h-8` or `h-10`). Update navigation links to order: `About`, `Practice`, `Experience` (points to `#experience`), `Contact`.
**Test gate**: `npx tsc --noEmit`

### Step 2: Update HeroSection
**Files**: `src/app/components/HeroSection.tsx`
**What to build**: Change `h1` text to: "Pythia is a collection building practice."
**Test gate**: `npx tsc --noEmit`

### Step 3: Update AboutSection
**Files**: `src/app/components/AboutSection.tsx`
**What to build**: 
- Invert colors: apply `bg-[#0E3931]` and `text-white` to the section.
- Replace content with the new paragraphs.
- Place text in a right-aligned vertical stack using `ml-auto` and setting a max width (`lg:w-1/2`).
**Test gate**: `npx tsc --noEmit`

### Step 4: Update ApproachSection (Practice)
**Files**: `src/app/components/ApproachSection.tsx`
**What to build**: 
- Invert colors: apply `bg-white` and `text-[#0E3931]` to the section.
- Stack the 3 Practice blocks vertically (remove `md:grid-cols-3`, use `flex flex-col`).
- Remove the landscape image container entirely.
**Test gate**: `npx tsc --noEmit`

### Step 5: Update BioSection (Experience)
**Files**: `src/app/components/BioSection.tsx`
**What to build**: Change `id="bio"` to `id="experience"` so the Navbar scroll links to it correctly.
**Test gate**: `npx tsc --noEmit`

## Success Criteria & Out of Scope
- **Success Criteria**: The page matches the client's visual layout description: top green, bottom white, About text right-aligned, Practice stacked vertically, logo larger, Nav updated.
- **Out of Scope**: Injecting a Prisma asset or updating the Experience photo, as these assets have not been provided yet.
