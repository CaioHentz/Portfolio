# Caio Hentz — Portfolio

Live website: https://portfolio-caiohentz.vercel.app/

Modern, responsive portfolio built with semantic HTML, external CSS, and vanilla JavaScript.

- Typography: Red Hat Display (Google Fonts)
- Color palette:
  - Primary (fg): `#419D78`
  - Accent: `#153243`
  - Background: `#FFFFF2`
- Favicon: SVG with letter "C" in Red Hat Display, color `#419D78`

## Features

- Clean, maintainable structure with external CSS/JS
- Smooth scrolling to sections
- Accessible project cards (keyboard support: Enter/Space)
- Responsive layout for desktop, tablet, and mobile
- Simple, fast, no build step required

## Getting Started

No dependencies or build tools required.

1. Clone or copy this folder.
2. Open `Portfolio/index.html` in a browser:
   - On Windows: double-click `index.html`, or run:
     - `explorer ".\Portfolio\index.html"`

## Project Structure

```
Portfolio/
├─ index.html      # Main page
├─ styles.css      # Styles (responsive, variables in :root)
├─ script.js       # Behavior (smooth scroll, card actions, accessibility)
└─ favicon.svg     # Favicon (Red Hat Display "C" in #419D78)
```

## Customization

- Colors and typography are defined as CSS variables in `styles.css` under `:root`:
  ```css
  :root {
    --bg: #FFFFF2;
    --fg: #419D78;
    --accent: #153243;
    --muted: #153243;
    --maxw: 1100px;
    --font: 'Red Hat Display', sans-serif;
  }
  ```
  Adjust these to quickly theme the site.

- Hero text and sections can be edited directly in `index.html`.

- Project cards are defined in the Projects section:
  ```html
  <div class="project-card" data-url="https://github.com/YourRepo">
    <h3>Project Name</h3>
    <p>Short description.</p>
  </div>
  ```
  - Set the `data-url` to open external links in a new tab.
  - Keyboard support is added automatically by `script.js`.

## Accessibility

- Project cards are enhanced with `tabindex`, `role="link"`, and keyboard handlers (Enter/Space) for better accessibility.
- Smooth scrolling uses `scrollIntoView({ behavior: 'smooth' })`.

## Favicon

- The favicon is an SVG with a centered letter "C" in Red Hat Display:
  - File: `favicon.svg`
  - Linked in `index.html`:
    ```html
    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    ```

## Development Notes

- External fonts are loaded via Google Fonts in the `<head>` of `index.html`.
- Styles are linked via `<link rel="stylesheet" href="styles.css">`.
- Scripts are loaded with `defer` to avoid blocking rendering:
  ```html
  <script src="script.js" defer></script>
  ```
- No external JS libraries or frameworks are used.

## License

You may adapt this portfolio for personal use. For public reuse, please credit the original author.

## Contact

- Email: [caiohps2006@gmail.com](mailto:caiohps2006@gmail.com)
- LinkedIn: [linkedin.com/in/caio-hentz](https://linkedin.com/in/caio-hentz)
- GitHub: [github.com/CaioHentz](https://github.com/CaioHentz)
