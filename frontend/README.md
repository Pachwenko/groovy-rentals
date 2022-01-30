# Ember.js frontend for groovy-rentals

A hobby project made to hone emberjs skills. Connects to a django API by default, but miragejs can be enabled to run without a real API (this is used for testing purposes).

## Prerequisites

You will need the following things properly installed on your computer (unless you are using Docker).

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)

## Installation

- `git clone <repository-url>` this repository
- `cd frontend`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).
- If using docker: `docker-compose up frontend`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

This app is built using github actions, see the [frontend-deloy action](../.github/workflows/frontend-deploy.yml). It is then deloyed to [cloudflare pages](https://pages.cloudflare.com/). It uses a custom Github build action because that allows us better control over the build than cloudflare gives (currently...).


## Extra stuff
### [TailwindCSS](https://tailwindcss.com/)

[Tailwind](https://tailwindcss.com/) is used for styling.

### [Mapbox integration](https://tailwindcss.com/)

Uses mapbox to display a mini map of where a rental is location using [Mapbox](https://www.mapbox.com/).

To see the mapbox tiles you will need to set up a mapbox API token and put it in [the .env file](./.env) (or expose the `MAPBOX_ACCESS_TOKEN` environment variable through other means). There is a fake one provided so you do not get an error running the application, but you will see whitespace where the tile is supposed to be since the API request fails. When configuring your Mapbox token the scope required is `STYLES:TILES`, but you should also configure the `url` to the domain you are using for security, for exaple: `patrickmccartney.dev`.

### Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
- Miragejs
  - [The official miragejs website](https://miragejs.com/)
    - This is probably what you want to use if you are defining a new route or such.
  - [Ember addon for miragejs](https://www.ember-cli-mirage.com/)
    - This is what you want to look at if there's an issuing where Mirage isn't running at all or you need something Emberjs specific.
- [Mapbox documentation](https://docs.mapbox.com/)
- [Tailwindcss documentation](https://tailwindcss.com/docs/installation)
  - Setting up tailwind isn't super straightforward with ember and postcss, but this gist was helpful https://gist.github.com/Robert-96/4d85dcafe05d9e5e72d813ae7107cc47
