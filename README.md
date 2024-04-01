# charmCityJS

The CCJS website.

## Development

This site is built with [Eleventy](https://11ty.dev).

- Start a development server with `npm start`.
- Build with `npm run build`.
- GitHub Pages is deployed from the `_site` directory - the output of Eleventy.

Content is organized in two directories: `public` and `src`.

### `src`

Pages, layouts, and data are here. New pages can be written in Markdown, HTML, or Nunjucks. This site uses Nunjucks for HTML templating. Eleventy will build `.md`, `.html`, and `.njk`. Pages named `page-name.html` will output as `/page-name/index.html`.

### `public`

Stylesheets, JavaScript, images, and any other static assets go here and will passthrough to the root of the site following the same directory structure.
