# Vibrant Foundation

This is a design system extracted from a webpage I find inspiring. I want to build my own site/app UI inspired by this design pattern. Do not copy or replicate brand assets, logos, or identity — use these tokens as a foundation to create something original for me. Match the design language, not the brand:



Vibe: vibrant · rounded

Rhythm: 4px grid · pill buttons · very rounded · generous line-height (1.63) · flat (no shadows)



Key colors: Accent: #1D4ED8 · Background: #000000 · Text: #FFFFFF



Full palette: #1D4ED8 primary, #0891B2 accent, #000000 surface, #141414 elevated, #FFFFFF text, #949494 muted



Typography:

• H1 — Outfit 56px 900, 1.1 line-height, -1.68px tracking

• H2 — Outfit 60px 800, 1 line-height, -1.5px tracking

• H3 — Outfit 48px 800, 1.25 line-height, -1.2px tracking

• H4 — Outfit 18px 700, 1.56 line-height, -0.45px tracking

• Body — Inter 12px 400, 1.63 line-height

• Type scale — 60px / 31px / 16px



Tokens:

• Radius — 8px buttons, 24px cards, 12px inputs

• Radius vocabulary — button:pill, card:16px, input:12px, chip:pill

• Spacing scale — 4,8,12,16,20,24,28,32,40,96



Motion:

• Durations — 0.15s, 0.3s, 0.35s, 0.2s

• Easing — cubic-bezier(0.4, 0



Components:

• Button — #0100107 bg, #FFFFFF text, 8px radius, 16px 40px padding, 600 weight

• Card — 0.8px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.1), 24px radius, 24px padding

• Input — #000000 bg, 0.8px solid #0000104, 12px radius, 6px 16px 6px 40px padding

• Link — #0100115



Responsive breakpoints: 480px, 599px, 600px, 640px, 768px, 1024px



Layout grid: max-width 1528px, 8px gutter

Spacing scale: 4px / 8px / 12px / 16px / 20px / 24px / 28px / 32px / 40px / 96px



Interaction states:

• hover — shadow rgba(138, 51, 210, 0.3) 0px 1px 2px 0px



Z-index layers: backdrop: 30 → nav: 50 → element: 2147483647



Attach the screenshot from this page as a visual reference — match its hierarchy, density, and overall feel, not just the raw values. Where this brief leaves something underspecified (hover states, focus rings, dark-mode variants), infer sensible defaults consistent with the vibe and palette above.



This is for my personal project — I'm drawing inspiration from this design pattern to build my own UI. Create something original that follows these design principles without copying the source brand.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/79049deb-59cc-4ef5-9782-81889cd2aaf4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
