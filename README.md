# MB Ventures

A responsive real-estate consultancy homepage for Bhavin Modhwadiya, built with plain HTML, CSS, and JavaScript. Navy, ivory, editorial typography, and original architectural illustrations create a restrained premium identity.

## Preview locally

Open `index.html` directly, or run `python3 -m http.server 8000` from this directory and visit http://localhost:8000. No dependencies, build step, or package installation is required.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Semantic homepage: hero, property collections, approach, services, contact, and footer. Includes title and description metadata. |
| `styles.css` | Design tokens, desktop layouts, mobile breakpoints, focus states, and reduced-motion support. |
| `script.js` | Accessible mobile navigation, Escape-to-close behavior, and current copyright year. |
| `assets/architecture.svg` | Original decorative architecture illustration; no third-party image requests. |
| `assets/favicon.svg` | Starter MB text favicon. |
| `.gitignore` | Excludes common local and editor files. |

## Extend the starter

- Edit brand colors and spacing through the variables at the beginning of `styles.css`.
- Add verified properties by extending the collection articles in `index.html`. Keep headings, descriptions, and image alternative text meaningful.
- Replace the illustrated property categories with approved project photography and factual listing details. Current cards are categories, not advertised available properties; no prices, locations, returns, or inventory are invented.
- Replace the typographic MB treatment with your approved brand logo when available. This is a starter wordmark, not a reproduction of an existing logo.
- Contact links use **+91 72260 36326**, **bhavin@mbventures.com**, and WhatsApp with prefilled enquiries. Update all occurrences together if they change.
- The supplied consultant wording is included. Add the verified RERA registration number and any required project disclosures before commercial launch.
- Enquiries open WhatsApp, the phone dialler, or the email app. No submissions are stored and no backend or analytics is configured.

## Accessibility and responsiveness

Includes a skip link, semantic landmarks, labelled navigation, keyboard focus styles, responsive grids, descriptive illustration text, and reduced-motion handling. The mobile menu works with keyboard controls; navigation stays visible without JavaScript.

## Hosting

All assets use relative paths, so the site can be served from the repository root or a subdirectory. For GitHub Pages, select **Settings → Pages → Deploy from a branch → main → / (root)**. Hosting has not been enabled as part of this starter.
