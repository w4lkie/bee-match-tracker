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
8. **Assets & publishing:** Uses Bee Swarm Simulator's actual in-game item artwork sourced from publicly available asset collections, with local illustration SVGs as fallbacks, and publishes as plain HTML/CSS/JS to GitHub Pages.

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


## In-game item icon sources

The reward picker and matched tiles use the **actual Bee Swarm Simulator item artwork**, rather than generated emoji illustrations. Image filenames were matched against available files in these public GitHub repositories:

- [BSS item PNG archive](https://github.com/FaethyvveIcye/bss/tree/main/images/items) — 37 item types including Royal Jelly, Tickets, Star Jelly, fruits, waxes, extracts, etc.
- [BSS Remake game icon archive](https://github.com/IamDanteDev/Bee-Swarm-Simulator-Remake/tree/main/assets/Icons/bss) — Stinger and Present icons.
- [Bee Swarm Simulator Wiki](https://bee-swarm-simulator.fandom.com/wiki/Sticker) — Sideways Spirit Bear Sticker artwork, using the wiki file redirect (not independently verified to load).

These are **third-party asset collections**, not official licensed redistribution channels. Items are generally protected by copyright even when shared by community projects; art ownership and permissions have not been independently confirmed. Images are linked from the upstream sources rather than copied into this repository. If an image is blocked or unavailable, the site uses its previous local illustration for that item. The site remains an independent, noncommercial fan project.

Rewards with quantities (e.g. “3 Royal Jellies” and “200 Blueberries”) now normalize to the correct item artwork.

## Attribution and limits

This is an independent fan-made project, **not** an official Fandom, Onett, Bee Swarm Simulator, or Roblox product. The interface is a custom implementation inspired by the community wiki's visual style; it is not a copy of Fandom's source or site branding. Wiki-hosted item images and the background remain the property of their rights holders and may fail to load if a redirect is unavailable or hotlinking is restricted. The local SVG fallback icons keep the tracker usable in those cases. Prices and rewards are reference data and may change in-game. The tracker cannot see hidden Roblox cards.
