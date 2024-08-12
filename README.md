# charmCityJS

The CCJS website.

## Development

This site is built with [Eleventy](https://11ty.dev).

- Start a development server with `npm start`.
- Build with `npm run build`.
- GitHub Pages is deployed from the `_site` directory - the output of Eleventy.

Content is organized in two directories: `public` and `src`.

### `src`

- Pages, layouts, and data are here. New pages can be written in Markdown, HTML, or Nunjucks. This site uses Nunjucks for HTML templating.
- Eleventy will build `.md`, `.html`, and `.njk`.
- Pages named `page-name.html` will output as `/page-name/index.html`. Pages in subdirectories will output as `/sub-dir/page-name/index.html`.

#### Layouts

- Use `prose.html` when you have a page that can be generated purely from Markdown, such as the Code of Conduct.
- Use `page.html` when you have custom HTML you want to write but still want the page to follow the standard container sizing, such as the homepage.
- Use `base.html` if you want full freedom to write HTML while keeping the global header and footer in place.
- Don't use any layout if you want a fully blank page to write HTML into.

### `public`

- Style sheets, JavaScript, images, and any other static assets go here and will pass through to the root of the site following the same directory structure.
