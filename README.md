# Bee Match Tracker

A wiki-inspired, independently developed Bee Swarm Simulator Memory Match tracker.

**Live site:** https://w4lkie.github.io/bee-match-tracker/
**Reference wiki:** https://bee-swarm-simulator.fandom.com/wiki/Bee_Swarm_Simulator_Wiki
**Memory Match reference:** https://bee-swarm-simulator.fandom.com/wiki/Memory_Match

## Website routes

| Route | Mode |
|---|---|
| `/` | Main page: all modes, comparison, instructions |
| `/small/` | Regular Memory Match |
| `/med/` | Mega Memory Match |
| `/night/` | Night Memory Match |
| `/extreme/` | Extreme Memory Match |
| `/winter/` | Winter Memory Match (seasonal) |
| `/spirit/` | Spirit Bear quest Memory Match |

## Features preserved

- An interactive 4x4 or 4x5 tile board appropriate to each mode.
- A searchable item and quantity reward selector, plus custom item entry.
- A matching-pairs list, a button to mark completed pairs, undo, and new-round reset.
- Automatic browser-local saving, using the same storage keys as the earlier tracker.
- Separate static directory pages, built for GitHub Pages without server-side code.

## Wiki-inspired redesign: step by step

1. **Reference research:** Compared the Bee Swarm Simulator Fandom Wiki home page and Memory Match reference page for information layout, page navigation, images, and categories.
2. **Navigation:** Added a dark top bar, wiki-style banner, main page tabs, left topic navigation, and official wiki source links.
3. **Main layout:** Changed from a generic dashboard to a centered white wiki article column, surrounded by a navigation column and reference infobox sidebar.
4. **Mode pages:** Preserved each Memory Match route with its board, cost, cooldown, tile count, and separate progress state.
5. **Reward tools:** Kept manual reward selection and pair-tracking; redesigned the picker as a catalog of item tiles.
6. **Visual system:** Added the honey/field banner treatment, wiki-blue links, light-gray panels, pale-yellow accents, tabbed article headings, borders, and data tables.
7. **Mobile styling:** Added responsive breakpoints for phones and tablets. The reward selector stacks beneath the article on narrow screens.
8. **Assets & publishing:** Uses item image redirects from the Bee Swarm Simulator Fandom Wiki when available, falls back to local illustration SVGs, and publishes as plain HTML/CSS/JS to GitHub Pages.

## Local testing

Run from the repository folder:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000/ and click through the mode routes. Verify that picking a reward changes a tile, two matching rewards appear under Known pairs, Undo restores the previous state, and the saved board survives a refresh.

For JavaScript syntax, run:

```sh
node --check app.js
```

## Deployment

GitHub repository **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root)**. Changes on `main` are deployed by GitHub Pages when configured.

## Attribution and limits

This is an independent fan-made project, **not** an official Fandom, Onett, Bee Swarm Simulator, or Roblox product. The interface is a custom implementation inspired by the community wiki's visual style; it is not a copy of Fandom's source or site branding. Wiki-hosted item images and the background remain the property of their rights holders and may fail to load if a redirect is unavailable or hotlinking is restricted. The local SVG fallback icons keep the tracker usable in those cases. Prices and rewards are reference data and may change in-game. The tracker cannot see hidden Roblox cards.
